'use strict';

var http = require('http');
var CONFIG = require('./config.json')
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req,res){

	var filePath = url.parse(req.url).pathname;

	filePath = path.join(CONFIG.publicDir, filePath);

	fs.access(filePath, fs.constants.R_OK, function(err){
		if(!!err){
			res.writeHead(404);
			return res.end('Not Found !')
		}

		fs.readFile(filePath, function(err, data){
			if(!!err){
				console.log(filePath + ': 500')
				res.writeHead(500);
				return res.end('ERROR 500')
			}

			res.writeHead(500);
			res.end(data);
		});
	});

});

server.listen(CONFIG.port, function(err){
	if(!!err){
		return console.error(err);
	}
	console.log('server started');
})