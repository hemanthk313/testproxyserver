const Queue = require('bull');

const redbird = require('redbird')({
    port: 80,
    letsencrypt: {
        path: __dirname + '/certs',
        port: 9999
    },
    ssl: {
        port: 443, // <----- this needs to be here
    }
});

const Proxy = new Queue('proxy', 'redis://127.0.0.1:6379');

Proxy.process(function (job, done) {
    console.log(job.data);
    // job.data contains the custom data passed when the job was created
    // job.id contains id of this job.
    // pass it a result
    const { domain, host, email } = job.data;
    redbird.register(domain, host, {
        ssl: {
            letsencrypt: {
                email: email, // Domain owner/admin email
                production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
            }
        }
    });
    done(null, {});

});


redbird.register('engagejet.ml', 'http://127.0.0.1:3000', {
    ssl: {
        letsencrypt: {
            email: '123@gmail.com', // Domain owner/admin email
            production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        }
    }
});


redbird.register('myjan.ga', 'http://127.0.0.1:3000', {
    ssl: {
        letsencrypt: {
            email: 'hemanthk313@gmail.com', // Domain owner/admin email
            production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        }
    }
});