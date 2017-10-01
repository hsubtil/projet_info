'use strict';

var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var http = require("http");
var express = require("express");
var path = require("path");
var fs = require("fs");
var bodyParser = require('body-parser'); //test

var defaultRoute = require("./app/routes/default.route.js");

// init server
var app = express();
var server = http.createServer(app);
server.listen(CONFIG.port, function (){
	var host = this.address().address;
	var port = this.address().port;

	console.log('App listening at http://%s:%s', host, port)
});

app.use(defaultRoute);
app.use(bodyParser.json()); // support pour les ficher json 
app.use("/admin", express.static(path.join(__dirname, "public/admin"))); // Ajoute une redirection vers le dossier admin

// #2
app.get("/", function(request, response) {
	response.send("It works !");
});

// #3
app.get("/loadPres",function(request, response, cb) {
  // TODO : Vérifier la caractère asynch
	console.log("%s",request.url);
		//var listFile = [];
		var final_json = {} // empty Object
		fs.readdir(CONFIG.contentDirectory, function(err, data){
		if (!!err) {
			 if (cb) {
				return cb(err);
			  }
		  }

		for (var i in data) {
			var fileName = data[i];
			if (path.extname(fileName) === ".json") {
				var content = fs.readFileSync(CONFIG.contentDirectory+'/'+ fileName)	
				var key = content.toString().split(',')[0].split(':')[1];
				key = key.substring(1,key.length-1);
				final_json[key] = content.toString();
			}
		}
		response.send(final_json);			
	})
});

app.post('/savePres', function(request, response){
  //Pour test : Postman -> Body -> JSON
  console.log('/savePres '+ JSON.stringify(request.body));
  //Parsage du titre du fichier
  var new_json = JSON.stringify(request.body).split(',')[0].split(':')[1];
  new_json = new_json.toString().substring(1,new_json.length-1)+".pres.json";
  fs.writeFile(CONFIG.contentDirectory+'/'+new_json,JSON.stringify(request.body));
  console.log(new_json+" created");
  response.send(request.body);    // echo du résultat
});


