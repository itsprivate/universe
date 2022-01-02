const siteMetadata = {
  siteUrl: "https://ph.buzzing.cc",
  author: "Buzzing.cc",
  locale: "zh",
  title: "Product Hunt 热门",
  shortTitle: "PH热门",
  description: "用中文浏览 Product Hunt 热门App，网站和产品",
  keywords: ["buzzing", "Product Hunt", "热门APP", "发现APP"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://ph.buzzing.cc/avatar.png",
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
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
      name: `Product Hunt`,
      url: `https://www.producthunt.com/`,
      external: true,
    },
    {
      name: "Buzzing",
      url: "https://www.buzzing.cc/",
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Product Hunt`,
      shortTitle: "BuzzPH",
      description: `See what's buzzing on Product Hunt in your native language`,
      keywords: ["Product Hunt", "buzzing", "explore APP"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues",
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Product Hunt 熱門",
      shortTitle: "PH熱門",
      description: "用中文瀏覽 Product Hunt 熱門App，網站和產品",
      keywords: ["buzzing", "Product Hunt", "熱門APP", "發現APP"],
      menuLinks: [
        {
          name: "每週精選",
          url: "/zh-Hant/issues",
        },
      ],
    },
    {
      locale: "ja",
      title: "Product Hunt 人気の作品",
      shortTitle: "PH人気",
      description: "人気のProduct Hunt作品を日本語で閲覧",
      keywords: ["buzzing", "Product Hunt"],
      menuLinks: [
        {
          name: "毎週の選択",
          url: "/ja/issues",
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
  trackingIds: [
    "G-Q1KVDYZJD1", // Google Analytics / GA
  ],
  disqus: {
    shortname: "buzzing-on-ph",
  },
  issueTypeName: ["PhTopIssuesJson"],
  patterns: [
    "data/*-placeholder/1.json",
    "data/ph-top/**",
    "data/ph-top-issues/**",
  ],
};
