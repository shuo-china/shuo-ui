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
          name: 'Button',
          path: '/button'
        },
        {
          name: 'Icon',
          path: '/icon'
        },
        {
          name: 'Divider',
          path: '/divider'
        },
        {
          name: 'Space',
          path: '/space'
        }
      ]
    },
    {
      title: '数据录入',
      items: [
        {
          name: 'Form',
          path: '/form'
        },
        {
          name: 'Input',
          path: '/input'
        }
      ]
    },
    {
      title: '数据展示',
      items: [
        {
          name: 'Table',
          path: '/table'
        }
      ]
    },
    {
      title: '反馈',
      items: [
        {
          name: 'Message',
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
