var twilio = require('twilio');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
var requestpee = require('request-promise');
var accountSid = 'ACc0eb88b3db3d429fc7aa9c9f8a018d26'; // Your Account SID from www.twilio.com/console
var authToken = '342368f85e36b5174b5cdcb87e98a56e'; // Your Auth Token from www.twilio.com/console
// var accountSid = 'AC0f262334132d26327a3b7aecd9864d41'; // Your Account SID from www.twilio.com/console
// var authToken = '011b191b1e1e5b37f69194c88e105a2f'; // Your Auth Token from www.twilio.com/console



var app = express.Router();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// Send using twilito rest client
var twilioClient = new twilio(accountSid, authToken);

app.get("/outbound", function(req, response) {

  twilioClient.api.calls.create({
      url: 'https://handler.twilio.com/twiml/EH29406c2b7c57fe97ae8b788c0152f404',
      to: '+14043077465',
      from: '+14702357839',
      record: 'true'
    })
    .then((call) => console.log(call.sid));

  res.send("sup this worked");

});



module.exports = app;
