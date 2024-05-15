module.exports = {
  siteMetadata: {
    title: `Wildlife Photography Portfolio`,
    description: `Your description here`,
    author: `Jayraj Patel`,
    siteUrl: `https://jayraj.github.io`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wildlife Photography Portfolio`,
        short_name: `Wildlife Photography`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
