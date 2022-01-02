const siteMetadata = {
  siteUrl: "https://youtube.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "Youtube 热门",
  shortTitle: "Youtube热门",
  description: "用中文浏览 Youtube 上的全球热门视频",
  keywords: ["buzzing", "Youtube", "视频", "国外流行", "热门视频"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://youtube.buzzing.cc/avatar.png",
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
      name: `Youtube`,
      url: `https://www.youtube.com/`,
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
      title: `Buzzing on Youtube`,
      shortTitle: "BuzzYoutube",
      description: `See what's buzzing on Youtube in your native language`,
      keywords: ["buzzing", "Youtube", "Youtube Top", "Youtube Hot"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues",
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Youtube 熱門",
      shortTitle: "Youtube熱門",
      description: "用中文瀏覽 Youtube 上的全球熱門視頻",
      keywords: ["buzzing", "Youtube", "視頻", "國外流行", "熱門視頻"],
      menuLinks: [
        {
          name: "每週精選",
          url: "/zh-Hant/issues",
        },
      ],
    },
    {
      locale: "ja",
      title: "Youtube 人気の動画",
      shortTitle: "Youtube人気の動画",
      description: "人気のYoutube動画を日本語で閲覧",
      keywords: ["buzzing", "Youtube"],
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
    "G-7E5M3DQ6ZG", // Google Analytics / GA
  ],
  issueTypeName: ["YoutubeTopIssuesJson"],
  patterns: [
    "data/*-placeholder/1.json",
    "data/youtube-top/**",
    "data/youtube-top-issues/**",
  ],
};
