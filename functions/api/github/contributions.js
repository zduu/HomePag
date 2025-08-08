// Cloudflare Pages Functions
// GET /api/github/contributions?login=<user>&from=<ISO>&to=<ISO>
// Requires an environment variable: GITHUB_TOKEN (fine-grained or classic PAT)

const QUERY = `query($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
        colors
        weeks { contributionDays { date contributionCount color weekday } }
      }
    }
  }
  rateLimit { remaining resetAt cost }
}`;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

function normalize(calendar) {
  const days = [];
  for (const w of calendar.weeks || []) {
    for (const d of w.contributionDays || []) {
      days.push({ date: d.date, count: d.contributionCount, color: d.color, weekday: d.weekday });
    }
  }
  return {
    days,
    total: calendar.totalContributions || 0,
    colors: calendar.colors || [],
  };
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: cors });
  }

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'method_not_allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...cors },
    });
  }

  const login = url.searchParams.get('login');
  const from = url.searchParams.get('from');
  const to = url.searchParams.get('to');

  if (!login || !from || !to) {
    return new Response(JSON.stringify({ error: 'missing params' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...cors },
    });
  }

  const token = env.GITHUB_TOKEN;
  if (!token) {
    return new Response(JSON.stringify({ error: 'missing GITHUB_TOKEN env' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...cors },
    });
  }

  try {
    const r = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'contrib-proxy-pages-fn',
      },
      body: JSON.stringify({ query: QUERY, variables: { login, from, to } }),
    });

    const data = await r.json();
    if (data.errors) {
      return new Response(JSON.stringify({ error: data.errors }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...cors },
      });
    }

    const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      return new Response(JSON.stringify({ error: 'bad_response' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...cors },
      });
    }

    const normalized = normalize(calendar);
    return new Response(JSON.stringify(normalized), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
        ...cors,
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'proxy_error', detail: String(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...cors },
    });
  }
}

