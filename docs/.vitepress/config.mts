import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenClaw 小白指南',
  description: '从新手到精通，采集网络世界各种好玩的 OpenClaw 技巧',
  base: '/openclaw-guide/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新手指南', link: '/guide/' },
      { text: '进阶技巧', link: '/tips/' },
      { text: '实战案例', link: '/examples/' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '入门基础',
          items: [
            { text: '什么是 OpenClaw', link: '/guide/what-is-openclaw' },
            { text: '安装与配置', link: '/guide/installation' },
            { text: '第一个技能', link: '/guide/first-skill' }
          ]
        },
        {
          text: '核心概念',
          items: [
            { text: 'SOUL.md - 灵魂文件', link: '/guide/soul-md' },
            { text: 'AGENTS.md - 工作区配置', link: '/guide/agents-md' },
            { text: 'MEMORY.md - 记忆系统', link: '/guide/memory-md' }
          ]
        }
      ],
      '/tips/': [
        {
          text: '实用技巧',
          items: [
            { text: '搜索技巧大全', link: '/tips/search-skills' },
            { text: '文件操作妙招', link: '/tips/file-operations' },
            { text: '浏览器自动化', link: '/tips/browser-auto' }
          ]
        },
        {
          text: '高阶玩法',
          items: [
            { text: '自定义技能开发', link: '/tips/custom-skills' },
            { text: '多 Agent 协作', link: '/tips/multi-agent' },
            { text: '定时任务配置', link: '/tips/cron-jobs' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/openclaw/openclaw' }
    ],
    
    footer: {
      message: 'OpenClaw 小白指南 - 让每个人都能用好 AI',
      copyright: 'Copyright © 2026'
    },
    
    search: {
      provider: 'local'
    }
  }
})
