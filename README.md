# 🏠 个人主页项目

[![GitHub stars](https://img.shields.io/github/stars/zduu/homepage?style=flat-square&logo=github)](https://github.com/zduu/homepage)
[![GitHub forks](https://img.shields.io/github/forks/zduu/homepage?style=flat-square&logo=github)](https://github.com/zduu/homepage)
[![GitHub license](https://img.shields.io/github/license/zduu/homepage?style=flat-square)](https://github.com/zduu/homepage/blob/main/LICENSE)
[![Website](https://img.shields.io/website?style=flat-square&url=https%3A//zoeoe.de)](https://zoeoe.de)

## 🌐 在线演示
**我的站点：** [https://zoeoe.de](https://zoeoe.de)
**原作者演示：** [http://home.loadke.tech/](http://home.loadke.tech/)

## 👨‍💻 项目信息
**原作者：** [阿布白（IonRh）](https://github.com/IonRh)
**原项目地址：** [https://github.com/IonRh/HomePage](https://github.com/IonRh/HomePage)


> 🚀 使用原生 HTML、CSS、JS 构建，未依赖任何框架或插件，保证轻量高效。

## ✨ 项目功能

- 🎨 **简洁美观** - 提供清爽的主页展示界面
- 📱 **响应式设计** - 完美适配手机、平板、桌面等各种设备
- ⚡ **极速加载** - 优化性能，提升用户浏览体验
- 📊 **GitHub 统计** - 自动获取并显示真实的 GitHub 贡献数据
- 🌍 **访客信息** - 显示访客 IP 地址和地理位置
- ⚙️ **配置驱动** - 所有内容通过配置文件统一管理
- 🎯 **个性化** - 支持自定义标签、项目、技能展示

## 🚀 快速开始

### 本地测试

```bash
# 克隆项目
git clone https://github.com/zduu/homepage.git
cd homepage

# 启动本地服务器
python start.py

# 或者使用 Python 内置服务器
python -m http.server 8000

# 或者使用 Node.js
npx http-server -p 8000
```

访问 `http://localhost:8000` 即可查看效果。

## ⚙️ 配置说明

所有个人信息都在 `config.js` 文件中统一管理，修改后刷新页面即可看到效果。

### 🔧 核心配置

<details>
<summary><strong>📋 个人信息配置</strong></summary>

```javascript
personal: {
    name: "你的名字",                    // 显示在页面标题
    title: "你的职位",                   // 显示在头像下方
    quote: "你的个人格言",               // 个人座右铭
    location: "你的位置",                // 地理位置
    status: "你的状态",                  // 当前状态
    avatar: "./static/1.png",            // 头像图片路径
    favicon: "./static/f2.png"           // 网站图标路径
}
```
</details>

<details>
<summary><strong>🐙 GitHub 配置</strong></summary>

```javascript
github: {
    username: "你的GitHub用户名",         // ⚠️ 重要：影响统计数据获取
    profileUrl: "https://github.com/你的用户名"
}
```
</details>

<details>
<summary><strong>🔗 社交链接配置</strong></summary>

```javascript
social: {
    github: "https://github.com/你的用户名",
    email: "你的邮箱@example.com",
    telegram: "https://t.me/你的用户名"
}
```
</details>

<details>
<summary><strong>🏷️ 标签和展示配置</strong></summary>

```javascript
// 个人标签
tags: ["标签1", "标签2", "标签3"],

// 网站展示
websites: [
    {
        name: "网站名称",
        description: "网站描述",
        url: "https://your-website.com",
        icon: "图标链接"
    }
],

// 项目展示
projects: [
    {
        name: "项目名称",
        description: "项目描述",
        url: "https://github.com/username/project",
        icon: "项目图标链接"
    }
],

// 技能展示
skills: [
    {
        name: "技能名称",
        icon: "技能图标链接"
    }
]
```
</details>

<details>
<summary><strong>📝 页面文本配置</strong></summary>

```javascript
texts: {
    githubStats: {
        totalCommitsLabel: "总计贡献：",
        totalCommitsText: "过去一年共提交了",
        // ... 更多文本配置
    },
    sectionTitles: {
        welcome: "欢迎您",
        websites: "我的站点",
        // ... 更多标题配置
    }
}
```
</details>

### 🖼️ 图片资源

推荐使用在线图标服务，避免本地文件管理：

- **头像图片**：建议使用 [Gravatar](https://gravatar.com/) 或 [GitHub头像](https://github.com/username.png)
- **技能图标**：推荐 [DevIcons](https://devicons.github.io/devicon/) 或 [Simple Icons](https://simpleicons.org/)
- **项目图标**：推荐 [Icons8](https://icons8.com/) 或 [Iconify](https://iconify.design/)

## 🚀 部署指南

### Cloudflare Pages 部署

1. **准备工作**
   ```bash
   # 确保配置正确
   python start.py  # 本地测试

   # 检查所有链接和图标
   # 验证GitHub用户名配置
   ```

2. **部署步骤**
   - Fork 本仓库到你的 GitHub
   - 登录 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 连接 GitHub 仓库
   - 构建设置：
     - 构建命令：留空
     - 构建输出目录：`/`
   - 部署完成后绑定自定义域名

### GitHub Pages 部署

```bash
# 推送到 GitHub
git add .
git commit -m "Update personal homepage"
git push origin main

# 在仓库设置中启用 GitHub Pages
```

### Vercel 部署

```bash
npm i -g vercel
vercel
```

## 🔍 部署前检查清单

- [ ] 个人信息已更新
- [ ] GitHub 用户名配置正确
- [ ] 所有图标链接可访问
- [ ] 社交链接有效
- [ ] 本地测试正常
- [ ] 移动端适配良好

## 📝 注意事项

- ✅ 修改配置后刷新页面即可看到效果
- ✅ GitHub统计数据为真实API数据，非模拟数据
- ✅ 支持完全自定义所有页面内容
- ⚠️ **请保留原作者信息，遵守开源协议**
- 💡 如遇问题，欢迎提交 [Issue](https://github.com/zduu/homepage/issues)

## 📄 开源协议

本项目基于原作者的开源协议，请遵守相关条款。

## 🙏 致谢

感谢原作者 [阿布白（IonRh）](https://github.com/IonRh) 提供的优秀开源项目。

---

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！
