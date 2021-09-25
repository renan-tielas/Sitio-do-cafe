module.exports = {
    images: {
      domains: [
      'drive.google.com'
      ],
    },
    env: {  PRIVATE_KEY: process.env.PRIVATE_KEY,
      CLIENT_EMAIL: process.env.CLIENT_EMAIL,
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

