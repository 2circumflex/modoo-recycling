// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'modoo-recycling',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'modoo-recycling',
        short_name: 'modoo-recycling',
        description: 'This site tells you how to recycle.',
        start_url: '/',
        icon: 'src/images/recycling-icon.png',
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans KR`,
            variants: [`100`, `300`, `400`, `500`, `700`, `900`]
          },
        ],
      },
    },
    `gatsby-alias-imports`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`ko`],
        defaultLanguage: `ko`,
        redirect: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
