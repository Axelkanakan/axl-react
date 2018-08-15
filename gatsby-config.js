module.exports = {
  siteMetadata: {
    title: 'React-One',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'u3cjhid2xiaj',
        accessToken:'d31bf81c0cf00eeb88c98f2eac5e3c062e0c0e94f822a565a6cf830a855af59b'
      }
    }
  
  ],
}
