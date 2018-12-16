module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/markdown/`,
      },
    },
    'gatsby-transformer-remark'
  ]
}
