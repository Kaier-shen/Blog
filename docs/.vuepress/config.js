module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/Blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    lastUpdated: '上次更新', // string | boolean
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
    sidebar: [
      {
        title: '首页',
        path: '/',
        collapsable: false, // 不折叠
      },
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