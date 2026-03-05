# 第一个技能

创建一个简单的"天气查询"技能。

## 🎯 目标

让 OpenClaw 能够查询天气并回复。

## 📝 创建技能文件

在 `skills/weather/` 目录下创建：

### 1. SKILL.md
```markdown
# 天气查询

查询指定城市的天气。

## 使用方式
- "查一下北京天气"
- "上海明天天气怎么样"
```

### 2. index.ts
```typescript
export default {
  id: 'weather',
  
  async run({ city }) {
    // 调用天气 API
    const weather = await fetch(`https://api.weather.com/v1/current?city=${city}`)
    return weather
  }
}
```

## 🧪 测试技能

在钉钉中发送：
```
查一下杭州天气
```

如果配置正确，OpenClaw 会返回杭州的天气信息！
