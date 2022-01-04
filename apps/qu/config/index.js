const siteMetadata = {
  siteUrl: "https://quora.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "Quora 热门回答",
  shortTitle: "Quora热门",
  description: "用中文浏览Quora上的热门回答",
  keywords: ["buzzing", "Quora", "提问", "回答"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://quora.buzzing.cc/avatar.png",
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
      name: `Quora`,
      url: `https://www.quora.com`,
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
      title: `Buzzing on Quora`,
      shortTitle: "BuzzQuora",
      description: `See what's buzzing on Quora in your native language`,
      keywords: ["buzzing", "Quora"],
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
      title: "Quora 熱門回答",
      shortTitle: "Quora熱門",
      description: "用中文瀏覽Quora上的熱門回答",
      keywords: ["buzzing", "Quora", "提問", "回答"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],
    },
    {
      locale: "ja",
      title: "Quora 人気の応答",
      shortTitle: "Quora人気",
      description: "人気のQuora応答を日本語で閲覧",
      keywords: ["buzzing", "Quora"],
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
  trackingIds: [
    "G-2CRBFRCQ4G", // Google Analytics / GA
  ],
  patterns: ["data/*-placeholder/1.json", "data/tweet-quora/**"],
};
