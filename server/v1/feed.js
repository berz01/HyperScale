var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
var requestpee = require('request-promise');

//require('request-debug')(request);

var api = express.Router();

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
  extended: true
}));

var subKey = "0ea5ebb2c0e149e383f3f128574476ce";

api.post("/computerVision", function(req, res) {
  var myJSONObject = {
      url: req.body.url,
  };

  // REQUEST PROMISE EXAMPLE AKA REQUEST PEE PEE
  var options = {
      uri: 'https://api.github.com/user/repos',
      qs: {
          access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
      },
      headers: {
          'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
  };

  requestpee(options)
      .then(function (repos) {
          console.log('User has %d repos', repos.length);
      })
      .catch(function (err) {
          // API call failed...
      });


  // REGULAR REQUEST EXAMPLE
  request({
      url: "https://eastus2.api.cognitive.microsoft.com/vision/v1.0/describe?maxCandidates=1",
      method: "POST",
      headers: {
      "Ocp-Apim-Subscription-Key" : subKey
      },
      json: true,
      body: myJSONObject
  }, function(error, response, body) {
    // console.log('REQUEST RESULTS:', error, res.statusCode, body);
    //   console.log("response BODY***" + response.body);
    //   console.log("***BODY**" + body.requestId);
      res.send(body);
  });
});

module.exports = api;
