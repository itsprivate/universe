const siteMetadata = {
  siteUrl: "https://reddit.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "Reddit 热门",
  shortTitle: "Reddit热门",
  description: "用中文浏览Reddit热门内容",
  keywords: ["buzzing", "reddit", "reddit中文", "reddit热门"],
  telegram: "@reddit_zh",
  telegram_chat_id: "-1001445816026",
  iconUrl: "https://reddit.buzzing.cc/avatar.png",
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
    },
  ],
  subscriptions: [
    {
      name: "Telegram @Reddit热门",
      url: "https://t.me/reddit_zh",
      external: true,
    },
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
      name: `Reddit`,
      url: `https://www.reddit.com`,
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
      title: `Buzzing on Reddit`,
      shortTitle: "BuzzReddit",
      description: `See what's buzzing on Reddit in your native language`,
      keywords: ["buzzing", "reddit", "reddit top"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues",
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Reddit 熱門",
      shortTitle: "Reddit熱門",
      description: "用中文瀏覽Reddit熱門內容",
      keywords: ["buzzing", "reddit", "reddit中文", "reddit熱門"],
      menuLinks: [
        {
          name: "每週精選",
          url: "/zh-Hant/issues",
        },
      ],
    },
    {
      locale: "ja",
      title: "Reddit 人気の記事",
      shortTitle: "Dev人気",
      description: "人気のReddit記事を日本語で閲覧",
      keywords: ["buzzing", "Reddit"],
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
    "G-GQVR44BC8T", // Google Analytics / GA
  ],
  disqus: {
    shortname: "reddit-top",
  },
  issueTypeName: ["RedditTopIssuesJson"],
  patterns: [
    "data/*-placeholder/1.json",
    "data/reddit-top/**",
    "data/reddit-top-issues/**",
  ],
};
