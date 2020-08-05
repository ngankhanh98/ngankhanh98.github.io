module.exports = {
    siteMetadata: {
      title: `khánh`,
      description: `somethings worth writing down`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/posts`,
          name: `posts`,
        },
      },
    ],
  };