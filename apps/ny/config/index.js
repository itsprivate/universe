const siteMetadata = {
  siteUrl: "https://nytimes.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "纽约时报热门",
  shortTitle: "纽约时报",
  description: "用中文浏览纽约时报热门报道",
  keywords: ["buzzing", "纽约时报"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://nytimes.buzzing.cc/avatar.png",
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
      name: `The New York Times`,
      url: `https://www.nytimes.com`,
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
      title: `The New York Times Trends`,
      shortTitle: "NYTimes",
      description: `See what's buzzing on The New York Times in your native language`,
      keywords: ["buzzing", "The New York Times"],
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
      title: "紐約時報熱門",
      shortTitle: "紐約時報",
      description: "用中文瀏覽紐約時報熱門報導",
      keywords: ["buzzing", "紐約時報"],
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
      title: "ニューヨーク・タイムズ",
      shortTitle: "ニューヨーク・タイムズ",
      description: "人気のニューヨーク・タイムズを日本語で閲覧",
      keywords: ["buzzing", "ニューヨーク・タイムズ"],
      menuLinks: [],
    },
  ],
};

module.exports = {
  siteMetadata,
  trackingIds: [
    "G-5Q2S274Y5T", // Google Analytics / GA
  ],
  patterns: ["data/*-placeholder/1.json", "data/tweet-nytimes/**"],
};
