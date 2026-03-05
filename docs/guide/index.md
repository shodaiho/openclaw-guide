# 新手指南

欢迎来到 OpenClaw 的世界！这里是你从入门到精通的最佳起点。

## 🎯 OpenClaw 是什么？

OpenClaw 是一款**开源的本地 AI 助手框架**，它为 AI 大模型配备了"手脚"，使其能够：

- ✅ **读写本地文件** - 处理文档、代码、数据
- ✅ **搜索网络信息** - 获取最新资讯、资料
- ✅ **执行系统命令** - 自动化操作、任务调度
- ✅ **控制浏览器** - 数据采集、自动化测试
- ✅ **接入通讯工具** - 钉钉、飞书、微信等
- ✅ **定时执行任务** - 7×24 小时不间断服务

### 与传统 AI 的区别

| 功能 | 传统 AI 聊天 | OpenClaw |
|------|-------------|----------|
| 回答问题 | ✅ | ✅ |
| 读写文件 | ❌ | ✅ |
| 执行命令 | ❌ | ✅ |
| 定时任务 | ❌ | ✅ |
| 工具集成 | ❌ | ✅ |
| 本地运行 | ❌ | ✅ |

---

## 🚀 五分钟快速开始

### 第一步：环境准备

**系统要求**：
- Linux / macOS / Windows (WSL)
- Node.js 18+
- Git

**安装依赖**：
```bash
# macOS
brew install node git

# Ubuntu/Debian
sudo apt-get install nodejs npm git
```

### 第二步：安装 OpenClaw

```bash
# 全局安装
npm install -g openclaw

# 验证安装
openclaw --version
```

### 第三步：初始化项目

```bash
# 创建工作目录
mkdir my-openclaw && cd my-openclaw

# 初始化
openclaw init

# 启动服务
openclaw start
```

### 第四步：配置 AI 模型

编辑 `openclaw.json`：
```json
{
  "model": {
    "provider": "openai",
    "model": "gpt-4",
    "apiKey": "your-api-key"
  }
}
```

**支持的模型**：
- OpenAI (GPT-4/GPT-3.5)
- 阿里云百炼 (通义千问)
- Claude
- 本地模型 (Ollama)

---

## 📚 核心概念

### 1. SOUL.md - 定义 AI 人格

这是 OpenClaw 的"灵魂文件"，定义了 AI 的行为准则：

```markdown
---
name: 小助手
vibe: 专业、友好、高效
---

你是用户的得力助手，擅长：
- 文件处理与数据分析
- 信息搜索与整理
- 代码审查与开发辅助
- 日常办公自动化

原则：
1. 先理解需求，再执行任务
2. 重要操作先确认，避免误操作
3. 主动提供优化建议
```

### 2. AGENTS.md - 工作区配置

配置你的工作环境：

```markdown
## 工具配置
- 代码编辑器: VS Code
- 终端: iTerm2
- 浏览器: Chrome

## 常用路径
- 项目目录: /workspace/projects
- 文档目录: /workspace/docs
- 下载目录: ~/Downloads
```

### 3. MEMORY.md - 长期记忆

OpenClaw 会自动记录重要信息：
- 用户的偏好设置
- 常用操作习惯
- 项目相关信息
- 历史对话要点

### 4. Skills - 技能系统

Skills 是 OpenClaw 的功能扩展模块：

```
skills/
├── weather/          # 天气查询
│   ├── SKILL.md      # 技能说明
│   └── index.ts      # 实现代码
├── file-tools/       # 文件工具
└── web-search/       # 网络搜索
```

---

## 💡 第一个实战：天气助手

### 创建技能

```bash
mkdir -p skills/weather
cat > skills/weather/SKILL.md << 'EOF'
# 天气查询

查询指定城市的天气信息。

## 使用示例
- "查询北京天气"
- "上海明天会下雨吗"
EOF
```

### 实现功能

```typescript
// skills/weather/index.ts
export default {
  id: 'weather',
  
  async run({ city }) {
    // 调用天气 API
    const res = await fetch(`https://api.weather.com/v1/current?city=${city}`);
    const data = await res.json();
    
    return {
      city: data.city,
      temp: data.temperature,
      condition: data.condition,
      humidity: data.humidity
    };
  }
};
```

### 使用技能

在对话中：
```
用户：查询北京天气

AI：北京当前天气：
- 温度：25°C
- 天气：晴
- 湿度：45%
```

---

## 📖 学习路径

### 第 1 周：基础入门
- [ ] 完成安装配置
- [ ] 了解 SOUL.md / AGENTS.md
- [ ] 使用内置 Skills
- [ ] 文件操作实践

### 第 2 周：核心功能
- [ ] 浏览器自动化
- [ ] 网络搜索技巧
- [ ] 数据处理能力
- [ ] 接入钉钉/飞书

### 第 3 周：进阶开发
- [ ] 开发自定义 Skill
- [ ] 配置定时任务
- [ ] 多 Agent 协作
- [ ] 自动化工作流

### 第 4 周：实战应用
- [ ] 搭建个人助手
- [ ] 团队效率工具
- [ ] 数据监控系统
- [ ] 分享你的技巧

---

## 🔗 相关资源

- [安装与配置](/guide/installation)
- [核心概念详解](/guide/concepts)
- [技巧大全](/tips/)
- [实战案例](/examples/)
- [技能开发指南](/tips/custom-skills)

---

## ❓ 常见问题

**Q: OpenClaw 收费吗？**
A: OpenClaw 本身开源免费。但调用 AI 模型（如 GPT-4）需要 API 费用。

**Q: 需要会编程吗？**
A: 基础使用不需要。高级功能（如开发 Skills）需要一点编程基础。

**Q: 数据安全吗？**
A: OpenClaw 本地运行，数据不上云。敏感文件只在本地处理。

**Q: 支持哪些平台？**
A: 目前支持钉钉、飞书、Telegram，也可以集成到 VS Code。

---

**准备好开始了吗？点击右上角的技巧大全，开始你的 OpenClaw 之旅！** 🚀
