/**
 * 个人主页配置文件
 * 在这里修改你的个人信息，然后在 index.html 中引用
 */

const CONFIG = {
    // ==================== 基本信息 ====================
    personal: {
        name: "zoe.x",                    // 显示在页面标题的名字
        title: "一个即将毕业的sjter",    // 职位/身份
        quote: "三年五载，不知悔改",       // 个人格言/座右铭
        location: "China-AnyWhere",       // 地理位置
        status: "烤盐",                   // 当前状态
        avatar: "./static/1.png",         // 头像图片路径
        favicon: "./static/f2.png"        // 网站图标路径
    },

    // ==================== GitHub 配置 ====================
    github: {
        username: "zduu",                 // 你的 GitHub 用户名（重要：影响统计数据获取）
        profileUrl: "https://github.com/zduu"  // GitHub 个人主页链接
    },

    // ==================== 社交链接 ====================
    social: {
        github: "https://github.com/zduu",
        email: "zojeelle@gmail.com",
        
    },

    // ==================== 个人标签 ====================
    tags: [
        "学生",
        "能动&&机械",
        "即将毕业",
        "3D打印",
        "考研"
    ],

    // ==================== 时间线 ====================
    timeline: [
        {
            title: "未来何解？",
            date: "2025"
        },
        {
            title: "平平无奇的大学生活开始了",
            date: "2022.9"
        }
    ],

    // ==================== 站点展示 ====================
    websites: [
        {
            name: "个人博客",
            description: "记录学习和生活",
            url: "https://zoeoe.de",
            icon: "https://img.icons8.com/fluency/48/blog.png"
        },
        {
            name: "icon工具",
            description: "一个小小的icron搜索工具",
            url: "https://icontool.pages.dev",
            icon: "https://api.iconify.design/mdi:svg.svg"
        },
        {
            name: "我的日记",
            description: "一个人孤独的日记",
            url: "https://diary.edxx.de",
            icon: "https://api.iconify.design/mingcute:diary-fill.svg"
        }
        // 可以添加更多网站
    ],

    // ==================== 项目展示 ====================
    projects: [
        {
            name: "网络日记",
            description: "一个简单的网络日记",
            url: "https://github.com/zduu/diary-app",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
        }
        // 可以添加更多项目
    ],

    // ==================== 技能展示 ====================
    skills: [
        {
            name: "3D打印",
            icon: "https://api.iconify.design/cbi:3dprinter-printing.svg"
        },
        {
            name: "机械设计",
            icon: "https://img.icons8.com/color/48/solidworks.png"
        }
        // 可以添加更多技能
    ],

    // ==================== 页面文本配置 ====================
    texts: {
        // GitHub统计区域
        githubStats: {
            totalCommitsLabel: "总计贡献：",
            totalCommitsText: "过去一年共提交了",
            totalCommitsUnit: "次代码",
            longestStreakLabel: "最长连续：",
            longestStreakText: "连续编程",
            longestStreakUnit: "天",
            mainLanguageLabel: "主要语言："
        },

        // 各区域标题
        sectionTitles: {
            welcome: "欢迎您",
            visitorIP: "访客IP: ",
            websites: "我的站点",
            projects: "项目集",
            skills: "技能栈"
        },

        // 页脚信息
        footer: {
            year: "2025",
            text: "WebSite by",
            author: "zoe.X(zduu)",
            authorUrl: "https://zoeoe.de"
        }
    }

};
