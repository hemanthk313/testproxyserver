

var redbird = require('redbird')({port: 80});


// LetsEncrypt support
// With Redbird you can get zero conf and automatic SSL certificates for your domains
redbird.register('myjan.ga', 'http://127.0.0.1:3000', {
  ssl: {
    letsencrypt: {
      email: 'hemanthk313@gmail.com', // Domain owner/admin email
      production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});