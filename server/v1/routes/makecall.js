var twilio = require('twilio');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
var requestpee = require('request-promise');
var accountSid = 'ACc0eb88b3db3d429fc7aa9c9f8a018d26'; // Your Account SID from www.twilio.com/console
var authToken = '342368f85e36b5174b5cdcb87e98a56e'; // Your Auth Token from www.twilio.com/console


var app = express.Router();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// Send using twilito rest client
var twilioClient = new twilio(accountSid, authToken);

app.get("/outbound", function(req, res) {

  twilioClient.api.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml',
      to: '+14043077465',
      from: '+14702357839',
    })
    .then((call) => console.log(call.sid));

  res.send("call out");

});



module.exports = app;
