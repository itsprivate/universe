exports.getConfig = (project, config) => {
  const { siteMetadata, patterns, trackingIds, issueTypeName, disqus } = config;
  if (!siteMetadata || !patterns || !trackingIds) {
    throw new Error("Missing siteMetadata or patterns in config");
  }
  const isDev =
    (process.env.NODE_ENV === "development" || process.env.LOCAL === "true") &&
    process.env.LOCAL !== "false";

  let localesPath =
    ".cache/gatsby-source-git/itsprivate/ts/RedditTop/i18n/i18next";
  if (isDev) {
    localesPath =
      ".cache/gatsby-source-git/itsprivate/ts-test/RedditTop/i18n/i18next";
  }
  const iconUrl = new URL(siteMetadata.iconUrl);
  const iconPath = `static${iconUrl.pathname}`;
  let plugins = [];
  if (isDev) {
    // development not include the whole data
    plugins.push({
      resolve: `@theowenyoung/gatsby-source-git`,
      options: {
        name: `RedditTop`,
        remote: `git@github.com:itsprivate/ts-test.git`,
        branch: `main`,
        fetchOptions: ["--depth", 1],
        // Only import the docs folder from a codebase.
        patterns: ["data/*-placeholder/1.json", "data/hn-top/**"],
      },
    });
  } else {
    plugins.push({
      resolve: `@theowenyoung/gatsby-source-git`,
      options: {
        name: `RedditTop`,
        remote: `https://github.com/itsprivate/ts.git`,
        branch: `main`,
        fetchOptions: ["--depth", 1],
        // Only import the docs folder from a codebase.
        patterns: patterns,
      },
    });
  }
  plugins = plugins.concat([
    {
      resolve: `gatsby-theme-buzzing`,
      options: {
        siteMetadata,
        tweetTypeName: ["TweetJson", "twitterStatusesUserTimelineMyTweet"],
        redditTypeName: ["RedditJson"],
        issueTypeName: issueTypeName || ["RedditTopIssuesJson"],
        localesPath: localesPath,
        disqus: disqus || {
          shortname: "buzzingcc",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortTitle,
        start_url: `/`,
        lang: siteMetadata.locale,
        description: siteMetadata.description,
        background_color: `#f7f0eb`,
        theme_color: `#FF4500`,
        display: `standalone`,
        icon: iconPath,
        telegram: siteMetadata.telegram,
        telegram_chat_id: siteMetadata.telegram_chat_id,
        localize: siteMetadata.localize.map((item) => {
          return {
            start_url: `/${item.locale}/`,
            lang: item.locale,
            name: item.title,
            short_name: item.shortTitle,
            description: item.description,
          };
        }),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: trackingIds,
      },
    },
  ]);
  return {
    flags: { QUERY_ON_DEMAND: true },
    plugins: plugins,
    siteMetadata,
  };
};
