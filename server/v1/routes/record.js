var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
var requestpee = require('request-promise');
var accountSid = 'ACc0eb88b3db3d429fc7aa9c9f8a018d26'; // Your Account SID from www.twilio.com/console
var authToken = '342368f85e36b5174b5cdcb87e98a56e'; // Your Auth Token from www.twilio.com/console
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

// Returns TwiML which prompts the caller to record a message
app.post('/record', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.say('Hello. Please leave a message after the beep.');

  // Use <Record> to record and transcribe the caller's message
  twiml.record({transcribe: true, maxLength: 30});

  // End the call with <Hangup>
  twiml.hangup();

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

module.exports = app;
