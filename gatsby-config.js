module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Root:p`,
    author: {
      name: `Park Award`,
      summary: `관심사 IoT, Js, react, 업무 자동화(RPA, CICD), MQTTprotocol`,
    },
    description: `지식의 깊이를 점점 키우고있는 ParkAward의 기술블로그 입니다.`,
    siteUrl: `https://parkaward.github.io/`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-image`,
    `gatsby-remark-gifs`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCss: true,
        isUsingColorMode : false,
        portalZIndex: 40,
      }
    }
  ],
}
