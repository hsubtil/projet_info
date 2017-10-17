// default.route.js
var CONFIG = JSON.parse(process.env.CONFIG);

var http = require('http');
var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();

var utils = require("../utils/utils.js");

module.exports = router;


// #2
router.get("/", function(request, response) {
	response.send("It works !");
});

// #3
router.get("/loadPres",function(request, response, cb) {
  // TODO : Vérifier la caractère asynch
	console.log("%s",request.url);
		//var listFile = [];
	var data_final = {};	

	fs.readdir(CONFIG.presentationDirectory, function(err, filenames) {
    if (err) {
    	console.error(err.message);
    	response.status(500).end(err.message);
      return cb(err);
    }
	// Liste le fichiers
	var listFile = [];
	filenames.forEach(function(filename){
			if (path.extname(filename) === ".json") {
				listFile.push(filename)
			}
	})

    listFile.forEach(function(filename) {	
	      fs.readFile(CONFIG.presentationDirectory+'/' + filename, 'utf-8', function(err, content) {
	        if (err) {
	        	console.error(err.message);
				response.status(500).end(err.message);
	        }
	        data_final[JSON.parse(content)['id']] = JSON.parse(content);
	        if (Object.keys(data_final).length == listFile.length) {
	        	response.send(data_final);
	        }
	        
	      });
	  	
    });
  });
	

});

router.post('/savePres', function(request, response){
  //Pour test : Postman -> Body -> JSON
  console.log('/savePres '+ request.body['id']);
  fs.writeFile(CONFIG.presentationDirectory+'/'+request.body['id']+'.pres.json',JSON.stringify(request.body));
  console.log(request.body['id']+" created");
  response.send(request.body);    // echo du résultat
});

router.post('/login', function(request, response){
	console.log('/login '+request.body['login']);
	var data = JSON.parse({
	  'login': request.body['login'],
	  'password': request.body['pwd']
	});

	var options = {
	  host: 'localhost',
	  port: '8080',
	  path: 'FrontAuthWatcherWebService/rest/WatcherAuth',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json; charset=utf-8',
	    'Content-Length': data.length
	  }
	};

	var req = http.request(options, function(res) {
	  var msg = '';
	  res.setEncoding('utf8');
	  
	  res.on('data', function(chunk) {
	    msg += chunk;
	  });
	  res.on('end', function() {
	    console.log(JSON.parse(msg));
	  });
	});

	req.write(data);
	req.end();
});


/*
// Routing using
router.get("/", function(request, response) {
	response.send("It works !");
});
router.route(__PATH__)
.get()
.post()
.put()
.delete()
.all()
.[...]
*/