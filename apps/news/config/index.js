const siteMetadata = {
  siteUrl: "https://news.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "国外新闻头条 - 全球新闻头条 - 美国新闻头条",
  shortTitle: "全球头条",
  description: "用中文浏览国外新闻头条，美国新闻头条，全球新闻(西方媒体)头条",
  keywords: [
    "buzzing",
    "西方媒体",
    "美国新闻",
    "国外新闻",
    "世界新闻",
    "突发新闻",
  ],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  iconUrl: "https://news.buzzing.cc/avatar.png",
  menuLinks: [
    {
      name: "关注推特@国外新闻 Bot",
      external: true,
      url: "https://twitter.com/NewsBotZh",
    },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },

    {
      name: "Twitter @国外新闻 Bot",
      url: "https://twitter.com/NewsBotZh",
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
      name: `Google News`,
      url: `https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB`,
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
      title: `Buzzing on World News`,
      shortTitle: "BuzzNews",
      description: `See what's buzzing on Google World News Headline in your native language`,
      keywords: ["buzzing", "Breaking News"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
      ],
    },
    {
      locale: "zh-Hant",
      title: "谷歌全球新聞頭條",
      shortTitle: "全球頭條",
      description: "用中文瀏覽谷歌全球新聞(西方媒體)頭條",
      keywords: ["buzzing", "西方媒體", "國外新聞", "世界新聞", "突發新聞"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
      ],
    },
    {
      locale: "ja",
      title: "Googleグローバルニュースのヘッドライン",
      shortTitle: "ホットニュース",
      description:
        "人気のGoogleグローバルニュースのヘッドライン記事を日本語で閲覧",
      keywords: ["buzzing", "ホットニュース"],
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
    "G-7V6PVVBG0J", // Google Analytics / GA
  ],
  patterns: ["data/*-placeholder/1.json", "data/redirect-newstop/**"],
};
