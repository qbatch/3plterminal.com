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
  },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://3plterminal.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "YOUR_GOOGLE_ANALYTICS_TRACKING_ID", // Google Analytics / GA
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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './static/favicon_logo.png',
      },
    },
  ],

};