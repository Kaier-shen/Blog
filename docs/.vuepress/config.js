module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '法外张三的博客', 
        items: [
            { text: 'Github', link: 'https://github.com/Kaier-shen' },
            { text: '掘金', link: 'https://juejin.cn/user/1697301686392206' }
        ]
      }
    ],
    subSidebar: 'auto',
    sidebar: [
      {
        title: "基础学习",
        path: '/book/Study1',
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/book/Study1" },
          { title: "泛型", path: "/book/Study2" }
        ],
      }
    ]
  }
}