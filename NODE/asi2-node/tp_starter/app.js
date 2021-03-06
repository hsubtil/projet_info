'use strict';

var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var http = require("http");
var express = require("express");
var path = require("path");

//var multer = require("multer");


var defaultRoute = require("./app/routes/default.route.js");
var contentRoute = require("./app/routes/content.router.js");
var IOController = require("./app/controllers/io.controller.js")

// init server
var app = express();
var bodyParser = require('body-parser'); //test

app.use(bodyParser.json()); // support pour les ficher json 
app.use(bodyParser.urlencoded({ extended: true }));  

app.use(function(req,res,next){
  res.set("Access-Control-Allow-Origin","http://localhost:3000");
  res.set("Access-Control-Allow-Credentials",true);
  res.set("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  

var server = http.createServer(app);
server.listen(CONFIG.port, function (){
	var host = this.address().address;
	var port = this.address().port;

	console.log('App listening at http://%s:%s', host, port)
});
IOController.listen(server);
app.use("/admin", express.static(path.join(__dirname, "public/admin"))); // Ajoute une redirection vers le dossier admin
app.use("/watch", express.static(path.join(__dirname, "public/watch"))); // Ajoute une redirection vers le dossier admin


app.use(defaultRoute);
app.use(contentRoute);

//app.use(multer);







