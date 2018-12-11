module.exports = {
  title: 'cokoUI',
  base: '/gulu-demo/',
  description: '一个自制UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: 'http://google.com' },
      { text: '交流', link: 'http://google.com' },
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
        children: ['/components/button']
      },
    ]
  },
}
