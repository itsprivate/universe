const siteMetadata = {
  siteUrl: "https://ask.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "Reddit 热门提问",
  shortTitle: "Reddit提问",
  description: "用中文浏览 Reddit 上的热门提问",
  keywords: ["buzzing", "问题", "提问", "回答", "答案"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://ask.buzzing.cc/avatar.png",
  menuLinks: [
    {
      name: "关注推特@问Reddit",
      url: "https://twitter.com/AskRedditZh",
      external: true,
    },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Twitter @问Reddit",
      url: "https://twitter.com/AskRedditZh",
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
      name: `Ask Reddit`,
      url: `https://www.reddit.com/r/AskReddit/`,
      external: true,
    },
    {
      name: `Ask Politics`,
      url: `https://www.reddit.com/r/Ask_Politics/`,
      external: true,
    },
    {
      name: `Ask Historians`,
      url: `https://www.reddit.com/r/AskHistorians/`,
      external: true,
    },
    {
      name: `Ask Men`,
      url: `https://www.reddit.com/r/AskMen/`,
      external: true,
    },
    {
      name: `Ask Women`,
      url: `https://www.reddit.com/r/AskWomen/`,
      external: true,
    },
    {
      name: `Too Afraid To Ask`,
      url: `https://www.reddit.com/r/TooAfraidToAsk/`,
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
      title: `Buzzing on Ask`,
      shortTitle: "BuzzAsk",
      description: `See what's buzzing on Ask Headline in your native language`,
      keywords: ["buzzing", "ask"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Reddit 熱門提問",
      shortTitle: "Reddit提問",
      description: "用中文瀏覽 Reddit 上的熱門提問",
      keywords: ["buzzing", "問題", "提問", "回答", "答案"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
      ],
    },
    {
      locale: "ja",
      title: "Redditよくある質問",
      shortTitle: "よくある質問",
      description: "人気のRedditよくある質問を日本語で閲覧",
      keywords: ["buzzing", "よくある質問"],
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
    "G-H5507HLMBR", // Google Analytics / GA
  ],
  patterns: ["data/*-placeholder/1.json", "data/reddit-ask/**"],
};
