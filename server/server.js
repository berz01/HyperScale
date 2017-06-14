// External frameworks and dependencies
const request = require('request');
const express = require('express'); 
const Promise = require('bluebird');
const https = require('https');

// Server settings
const port = process.env.PORT || 8080;
const app = express();

// TODO: how to structure an oauth client
// const oauth2 = require('simple-oauth2')({
//     clientID: AUTOMATIC_CLIENT_ID,
//     clientSecret: AUTOMATIC_CLIENT_SECRET,
//     site: 'https://accounts.automatic.com',
//     tokenPath: '/oauth/access_token'
// });

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/api/v1/*', function(req, res, next) {
    console.log("Hit Auth Filter For Access");
    next();
});

app.use('/api/v1/call', require('./server/v1/routes/makecall.js'));
app.use('/api/v1/text', require('./server/v1/routes/maketext.js'));
app.use('/api/v1/email', require('./server/v1/routes/makeemail.js'));
app.use('/api/v1/retention', require('./server/v1/routes/retention.js'));
app.use('/api/v1/leads', require('./server/v1/routes/leads.js'));
app.use('/api/v1/feed', require('./server/v1/routes/feed.js'));


// Start server
var salesIntelServer = app.listen(port, function() {
    console.log("\n", salesIntelServer.address().port);
});
