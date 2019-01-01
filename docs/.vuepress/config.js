module.exports = {
  title: 'cokoUI',
  base: '/coko-UI/',
  description: '一个自制UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'github', link: 'https://github.com/a379351939/coko-UI' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ],
      },
      {
        title: '组件',
        children: ['/components/button', '/components/input', '/components/grid', '/components/layout', '/components/popover', '/components/tabs', '/components/toast']
      },
    ]
  },
}
