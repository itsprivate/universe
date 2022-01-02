const siteMetadata = {
  siteUrl: "https://depth.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "深度思考",
  shortTitle: "深度思考",
  description: "用中文浏览国外深度报道，思考和讨论",
  keywords: [
    "buzzing",
    "深度报道",
    "深度思考",
    "国外深度报道",
    "深度好文",
    "有深度的文章",
  ],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://depth.buzzing.cc/avatar.jpg",
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
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
      name: `Food For Thought`,
      url: `https://www.reddit.com/r/Foodforthought/`,
      external: true,
    },
    {
      name: `True Reddit`,
      url: `https://www.reddit.com/r/TrueReddit/`,
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
      title: `Buzzing on In-depth thinking`,
      shortTitle: "BuzzDepth",
      description: `See what's buzzing on In-depth thinking in your native language`,
      keywords: ["buzzing", "In-depth thinking"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "深度思考",
      shortTitle: "深度思考",
      description: "用中文瀏覽國外深度報導，思考和討論",
      keywords: [
        "buzzing",
        "深度報導",
        "深度思考",
        "國外深度報導",
        "深度好文",
        "有深度的文章",
      ],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
      ],
    },
    {
      locale: "ja",
      title: "深い思考人気の話し合います",
      shortTitle: "深い思考",
      description: "人気の深い思考記事を日本語で閲覧",
      keywords: ["buzzing", "深い思考"],
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
    "G-4HNV7X9ZSV", // Google Analytics / GA
  ],
  patterns: ["data/*-placeholder/1.json", "data/reddit-depth/**"],
  issueTypeName: ["DepthIssuesJson"],
};
