const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mime = require('mime-types');
const nodemailer = require("nodemailer");
const unirest = require('unirest');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

const PORT = process.env.PORT || 80

//const url_1 = 'https://skyauto.me/cllbck/181604360/751207/YjZXd05WdDlkY1F5ZTQzNk03dHpkUT0?avtp=1&player[param][path]=';

var request = require('request');
var numbers = "";
var telos = "";
var answer = '';
const qrcode = require('qrcode');
const { Client, message, MessageMedia, } = require('whatsapp-web.js');

const citata_1 = "Жопа";

const fs = require('fs');
const app = express();


app.use(cors());
app.use(bodyParser.json());

  

app.listen(PORT, () => {

  console.log("Сервер запущен на "  +PORT+  " порту");
  });
  






  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });
  












app.post("/5000", function (req, res) {
  res.send("200");
  let hosts = req.body.host;
  let ports = req.body.port;
  let secures =  req.body.secure;
  let users = req.body.user;
  let passs = req.body.pass;
  let tos = req.body.to_mails;
  let subjects = req.body.subject;
  let htmls = req.body.mess_html;



  let transporter = nodemailer.createTransport(
    {
      host: hosts,
      port: ports,
      secure: secures, // true for 465, false for other ports
      auth: {
        user: users,
        pass: passs
      }
    });
    
  let mailOptions = {
    from: users,
    to: tos,
    subject: subjects,
    html: htmls
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    });
 




 
  });








  var rep1;
  var rep2;
  var rep3;
  var rep4;
  var rep5;
  var rep6;
  var fruits;
  var toko; 
  var jsonik;
  
  
  var repp1;
  var repp2;
  var repp3;
  var repp4;
  var repp5;
  var repp6;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  app.get('/pod', function(req, res) {
    var token = req.query.tokes;
    var weben = req.query.webens;
    var webid = "https://online.bizon365.ru/api/v1/webinars/reports/get?webinarId=" + weben;
    
    fruits = [];
    console.log(token);
    console.log(weben);
  unirest
    .get(webid)
    .headers({"X-Token": token})
  
    
   
    .then((response) => {
  
      rep1 = response.body;
      rep2 = rep1.report;
      rep3 = rep2.report;
      rep4 = JSON.parse(rep3);
  
  
     
    
     // console.log(rep4);
      
  
          $.each(rep4,function(key,data1) {
           
           
            
            rep5 = data1;
           
          });
  
          $.each(rep5,function(key,data2) {
           
            
  
            fruits.push(data2);
            rep6 = data2;
            
          });
          res.send(fruits);
          //console.log(fruits);
    })
  
   
  
    
  
  });
  
  
  app.get('/rez', function(req, res) {
  
    res.send(fruits);
    //console.log(fruits);
  
  });  
  
  
  
  
  app.get('/test', function(req, res) {
  
  
  
  
  
    var token = req.query.tokes;
    console.log(token);
  
    unirest
      .get('https://online.bizon365.ru/api/v1/webinars/reports/getlist')
      .headers({'X-Token':token})
      .send({ "parameter": 3, "foo": "bar" })
      .then((response) => {
    
    
        let json = JSON.stringify(response.body);
        repp1 = response.body;
        repp2 = repp1.list;
        res.send(repp2);
    
        //console.log(response.body);
        //console.log(repp2);
      })
    
     
    });  
    
  
  
  
  
  
  
  
    app.post("/fghj332", function (req, res) {
      res.send("200");
      let hosts = req.body.host;
      let ports = req.body.port;
      let secures =  req.body.secure;
      let users = req.body.user;
      let passs = req.body.pass;
      let tos = req.body.to_mails;
      let subjects = req.body.subject;
      let htmls = req.body.mess_html;
  
    
  
      let transporter = nodemailer.createTransport(
        {
          host: hosts,
          port: ports,
          secure: secures, // true for 465, false for other ports
          auth: {
            user: users,
            pass: passs
          }
        });
        
      let mailOptions = {
        from: users,
        to: tos,
        subject: subjects,
        html: htmls
        };
        
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        });
     
  
  
  
  
     
      });





