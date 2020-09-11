module.exports = {
  siteMetadata: {
    title: "Gatsby + Node.js (TypeScript) API",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "modoo-recycling",
        short_name: "modoo-recycling",
        description: "This site tells you how to recycle.",
        start_url: "/",
        icon: "src/images/recycling-icon.png",
      },
    },
  ],
};
