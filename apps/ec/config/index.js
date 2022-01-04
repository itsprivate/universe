const siteMetadata = {
  siteUrl: "https://economist.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "经济学人",
  shortTitle: "经济学人",
  description: "用中文浏览经济学人",
  keywords: ["buzzing", "经济学人"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://economist.buzzing.cc/avatar.jpg",
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
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
      name: `The Economist`,
      url: `https://www.economist.com/`,
      external: true,
    },
    {
      name: `Twitter @TheEconomist`,
      url: `https://twitter.com/TheEconomist`,
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
      title: `Buzzing on The Economist`,
      shortTitle: "BuzzEconomist",
      description: `See what's buzzing on The Economist in your native language`,
      keywords: ["buzzing", "The Economist"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "經濟學人",
      shortTitle: "經濟學人",
      description: "用中文瀏覽經濟學人",
      keywords: ["buzzing", "經濟學人"],
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
      title: "エコノミスト人気の記事",
      shortTitle: "エコノミスト",
      description: "人気のエコノミスト記事を日本語で閲覧",
      keywords: ["buzzing", "エコノミスト"],
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
    "G-YQT6F0B0JD", // Google Analytics / GA
  ],
  patterns: ["data/*-placeholder/1.json", "data/tweet-economist/**"],
};
