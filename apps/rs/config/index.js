const siteMetadata = {
  siteUrl: "https://stocks.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "国外股市热门",
  shortTitle: "股市热门",
  description: "用中文浏览国外股票社区里的热门讨论",
  keywords: ["buzzing", "美股", "股票", "股市"],
  telegram: "@stocks_top",
  telegram_chat_id: " -1001246603580",
  iconUrl: "https://stocks.buzzing.cc/avatar.png",
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
    },
  ],
  subscriptions: [
    {
      name: "Telegram @国外股市热门讨论",
      url: "https://t.me/stocks_top",
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
      name: `Reddit Stocks`,
      url: `https://www.reddit.com/r/stocks`,
      external: true,
    },
    {
      name: `Reddit Investing`,
      url: `https://www.reddit.com/r/investing`,
      external: true,
    },
    {
      name: `Charlie Bilello's twitter`,
      url: `https://twitter.com/charliebilello`,
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
      title: `Buzzing on Stocks`,
      description: `See popular discussions in foreign stock communities in your native language`,
      keywords: ["buzzing", "stocks", "U.S. stocks"],
      siteUrl: "https://stocks.buzzing.cc",
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues",
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "國外股市熱門",
      shortTitle: "股市熱門",
      description: "用中文瀏覽國外股票社區裡的熱門討論",
      keywords: ["buzzing", "美股", "股票", "股市"],
      menuLinks: [
        {
          name: "每週精選",
          url: "/zh-Hant/issues",
        },
      ],
    },
    {
      locale: "ja",
      title: "米国株式市場人気の話し合います",
      shortTitle: "米国株",
      description: "人気の米国株式市場の話し合いまを日本語で閲覧",
      keywords: ["buzzing", "米国株式市場"],
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
  patterns: [
    "data/reddit-stocks/**",
    "data/tweet-stocks/**",
    "data/stocks-issues/**",
    "data/*-placeholder/1.json",
  ],
  trackingIds: [
    "G-9J4458T3RK", // Google Analytics / GA
  ],
  issueTypeName: ["StocksIssuesJson"],
  disqus: {
    shortname: "stock-market",
  },
};
