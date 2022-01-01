const siteMetadata = {
  siteUrl: "https://sideproject.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "业余项目分享交流",
  shortTitle: "业余项目",
  description: "用中文浏览reddit业余项目讨论",
  keywords: ["buzzing", "业余项目", "程序员"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://sideproject.buzzing.cc/avatar.png",
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    // {
    //   name: "RSS",
    //   url: "/rss.xml",
    //   prefetch: false,
    // },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @buzzingcc",
      url: "https://t.me/buzzingcc",
      external: true,
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `SideProject`,
      url: `https://www.reddit.com/r/SideProject/`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Side Project`,
      shortTitle: "BuzzNews",
      description: `See what's buzzing on Side Project in your native language`,
      keywords: ["buzzing", "Side Project"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
        // {
        //   name: "RSS",
        //   url: "/en/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "業餘項目分享交流",
      shortTitle: "業餘項目",
      description: "用中文瀏覽reddit業餘項目討論",
      keywords: ["buzzing", "業餘項目", "程序員"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
        // {
        //   name: "RSS",
        //   url: "/zh-Hant/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
    {
      locale: "ja",
      title: "サイドプロジェクト",
      shortTitle: "サイドプロジェクト",
      description: "人気のサイドプロジェクトを日本語で閲覧",
      keywords: ["buzzing", "サイドプロジェクト"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
        // {
        //   name: "RSS",
        //   url: "/zh-Hant/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
