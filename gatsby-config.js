/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Best Automation Software for Prep Centers | 3PL Terminal`,
    description: `3PL Terminal is the top software for prep centers to streamline your FBA and FBM operations. Optimize inventory for Amazon sellers and enhance efficiency.`,
    twitterUsername: `@3plterminal`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://sellerterminal.com`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "static",
      "path": "static/"
    },
    __key: "images"
  }, {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://3plterminal.com`,
      },
    }, {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-Z9KZ145MYN", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to the gtag library
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    }, {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project id
        // Project id is found in your clarity dashboard url
        // https://clarity.microsoft.com/projects/view/{clarity_project_id}/
        clarity_project_id: "nf5oh8fjb0",
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        enable_on_dev_env: true,
      }
    }, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './static/favicon_logo.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        // Enable it only in production builds
        production: true,

        // Choose an analyzer mode:
        // - 'server' (default): starts a local server to view bundle report
        // - 'static': generates a static HTML file
        // - 'disabled': disables the analyzer (useful for toggling)
        analyzerMode: 'static',

        // Path to save the report file (used in 'static' mode)
        reportFilename: `./report.html`,

        // Automatically open the report in your browser
        openAnalyzer: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};