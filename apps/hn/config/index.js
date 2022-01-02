const siteMetadata = {
  locale: "zh",
  author: `Hacker News`,
  siteUrl: "https://hn.buzzing.cc",
  title: "Hacker News 热门",
  shortTitle: "HN热门",
  description: "用中文浏览 Hacker News 热门内容 - 中国 Hacker News",
  keywords: [
    "Hacker News",
    "中国 Hacker News",
    "Hacker News 热门",
    "互联网热门",
    "科技",
  ],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://hn.buzzing.cc/avatar.png",
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues/",
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
      name: `Hacker News`,
      url: `https://news.ycombinator.com/`,
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
      title: `Buzzing on Hacker News`,
      shortTitle: "BuzzHN",
      description: `See what's buzzing on Hacker News in your native language`,
      keywords: ["Hacker News", "HN", "buzzing"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues/",
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Hacker News 熱門",
      shortTitle: "HN熱門",
      description: "用中文瀏覽 Hacker News 熱門內容",
      keywords: ["Hacker News", "HN", "Hacker News 熱門", "互聯網熱門", "科技"],
      menuLinks: [
        {
          name: "每週精選",
          url: "/zh-Hant/issues/",
        },
      ],
    },
    {
      locale: "ja",
      title: "Hacker News  人気の記事",
      shortTitle: "HN人気",
      description: "人気のHacker News記事を日本語で閲覧",
      keywords: ["buzzing", "Hacker News "],
      menuLinks: [
        {
          name: "毎週の選択",
          url: "/ja/issues/",
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
  patterns: [
    "data/*-placeholder/1.json",
    "data/hn-top/**",
    "data/hn-top-issues/**",
  ],
  issueTypeName: ["HnTopIssuesJson"],
  disqus: {
    shortname: "buzzing-on-hn",
  },
  trackingIds: [
    "G-D82YESX6CD", // Google Analytics / GA
  ],
};
