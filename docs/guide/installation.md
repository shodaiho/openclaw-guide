# 安装与配置

5 分钟完成 OpenClaw 安装和基础配置。

## 📦 安装步骤

### 1. 环境要求
- Node.js 18+ 
- Git

### 2. 安装 OpenClaw
```bash
npm install -g openclaw
```

### 3. 初始化工作区
```bash
openclaw init my-workspace
cd my-workspace
```

## ⚙️ 基础配置

### 配置 AI 模型
编辑 `openclaw.json`：
```json
{
  "model": "gpt-4",
  "apiKey": "your-api-key"
}
```

### 配置消息渠道（钉钉示例）
```json
{
  "channels": {
    "dingtalk": {
      "enabled": true,
      "clientId": "your-client-id",
      "clientSecret": "your-client-secret"
    }
  }
}
```

## 🚀 启动服务
```bash
openclaw start
```

现在你可以通过钉钉 @你的机器人开始对话了！
