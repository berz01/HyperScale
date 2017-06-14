var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
var rp = require('request-promise');
var nodemailer = require('nodemailer');
var config = require('../../config/config');

//require('request-debug')(request);

var api = express.Router();

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
  extended: true
}));

api.post("/sendEmail", function(req, res) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.name,
      pass: config.email.password
    }
  });

  var mailOptions = {
    from: 'barrettdavis01@gmail.com',
    to: 'barrettdavis01@gmail.com',
    subject: req.body.subject,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.end();
    }
  });
});

module.exports = api;
