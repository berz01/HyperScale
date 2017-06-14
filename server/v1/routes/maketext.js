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

// Dummy Data, should come from another service, including twilioClient
var serverSMS = {
    serverNumber: '+14702357839',
};

app.post("/send", function(req, res) {

  setupSMS(req.body.number, req.body.message);

  res.send()
});


var setupSMS = function(number, message) {
    var contents = {
        body: message,
        to: number, // Text this number
        from: serverSMS.serverNumber // outgoing number - set in twilio dashboard TODO: see if we can pull from the twilio.RestClient
    };

    twilioClient.messages.create(contents, function(err, message) {
      if(err != null && err.message != null){
        console.error(err.message);
      } else {
        console.log("Message Sent");
      }
    });

};

module.exports = app;
