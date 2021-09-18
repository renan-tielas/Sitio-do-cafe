module.exports = {
    images: {
      domains: [
      'drive.google.com'
      ],
    },

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

