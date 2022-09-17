export interface Item {
  name: string
  path: string
}

export type MenuGroup = {
  title: string
  items: Item[]
}[]

export const menuGroups: Record<string, MenuGroup> = {
  Components: [
    {
      title: '基础',
      items: [
        {
          name: 'Button 按钮',
          path: '/button'
        },
        {
          name: 'Icon 图标',
          path: '/icon'
        },
        {
          name: 'Divider 分割线',
          path: '/divider'
        },
        {
          name: 'Space 间距',
          path: '/space'
        },
        {
          name: 'Layout 布局',
          path: '/layout'
        }
      ]
    },
    {
      title: '数据录入',
      items: [
        {
          name: 'Form 表单',
          path: '/form'
        },
        {
          name: 'Input 输入框',
          path: '/input'
        },
        {
          name: 'Radio 单选框',
          path: '/radio'
        }
      ]
    },
    {
      title: '数据展示',
      items: [
        {
          name: 'Carousel 走马灯',
          path: '/carousel'
        },
        {
          name: 'Table 表格',
          path: '/table'
        }
      ]
    },
    {
      title: '反馈',
      items: [
        {
          name: 'Message 消息提示',
          path: '/message'
        }
      ]
    }
  ],
  Guide: [
    {
      title: '快速上手',
      items: [
        {
          name: '安装',
          path: '/install'
        },
        {
          name: '快速开始',
          path: '/start'
        }
      ]
    }
  ]
}
