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
