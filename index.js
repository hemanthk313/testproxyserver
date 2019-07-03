var redbird = require('redbird')({
    port: 80,
    letsencrypt: {
      path: __dirname + '/certs',
      port: 9999
    },
    ssl: {
      port: 443, // <----- this needs to be here
    }
  });
redbird.register('engagejet.ml', 'http://127.0.0.1:3000', {
    ssl: {
        letsencrypt: {
            email: '123@gmail.com', // Domain owner/admin email
            production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        }
    }
});