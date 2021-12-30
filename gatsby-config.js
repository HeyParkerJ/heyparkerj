module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'www.heyparkerj.com'
      },
    },
    'gatsby-plugin-resolve-src',
  ],
  pathPrefix: "/heyparkerj",
}
