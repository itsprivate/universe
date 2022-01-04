const siteMetadata = {
  siteUrl: "https://wsj.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "华尔街日报热门",
  shortTitle: "华尔街日报",
  description: "用中文浏览华尔街日报热门报道",
  keywords: ["buzzing", "华尔街日报", "wsj", "华尔街日报中文网"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://wsj.buzzing.cc/avatar.png",
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
      name: `The Wall Street Journal`,
      url: `https://www.wsj.com`,
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
      title: `Buzzing on The Wall Street Journal`,
      shortTitle: "WSJ",
      description: `See what's buzzing on The Wall Street Journal in your native language`,
      keywords: ["buzzing", "The Wall Street Journal"],
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
      title: "華爾街日報熱門",
      shortTitle: "華爾街日報",
      description: "用中文瀏覽華爾街日報熱門報導",
      keywords: ["buzzing", "華爾街日報", "wsj", "華爾街日報中文網"],
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
      title: "ウォール・ストリート・ジャーナル",
      shortTitle: "ウォール・ストリート・ジャーナル",
      description: "人気のウォール・ストリート・ジャーナルを日本語で閲覧",
      keywords: ["buzzing", "ウォール・ストリート・ジャーナル"],
      menuLinks: [],
    },
  ],
};

module.exports = {
  siteMetadata,
  trackingIds: [
    "G-3JYP0G2273", // Google Analytics / GA
  ],
  patterns: ["data/*-placeholder/1.json", "data/tweet-wsj/**"],
};
