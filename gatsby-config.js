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
    }
  ],
}
