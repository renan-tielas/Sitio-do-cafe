module.exports = {
    images: {
      domains: [
      'drive.google.com'
      ],
    }
    ,plugins: [
      new Dotenv({
            systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      
      })
    ],

    async redirects() {
      return [
        {
          source: '/site1',
          destination: 'https://facebook.com/quickgaletos',
          permanent: false
        },
        {
          source: '/contact',
          destination: 'https://twitter.com',
          permanent: true
        }
      ];
    }
    
  }

