// External frameworks and dependencies
const request = require('request');
const express = require('express');
const session = require('express-session');
const Promise = require('bluebird');
const https = require('https');

// Server settings
const port = process.env.PORT || 8080;
const app = express();


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/api/v1/*', function(req, res, next) {
    console.log("Hit Auth Filter For Access");
    next();
});

app.use('/api/v1/call', require('./v1/routes/makecall.js'));
app.use('/api/v1/text', require('./v1/routes/maketext.js'));
app.use('/api/v1/email', require('./v1/routes/makeemail.js'));
app.use('/api/v1/retention', require('./v1/routes/retention.js'));
app.use('/api/v1/leads', require('./v1/routes/leads.js'));
app.use('/api/v1/feed', require('./v1/routes/feed.js'));
app.use('/api/v1/transcribe', require('./v1/routes/transcribe.js'));


// Start server
var salesIntelServer = app.listen(port, function() {
    console.log("\nhyper server is now hosted on port: ", salesIntelServer.address().port);
});
