"use strict";
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var fs = require("fs");
var path = require("path");

var ContentModel = require("../models/content.model.js");

module.exports = this;
var io;
var socket_map = {};
var pres_id;

this.listen = function (server){
  console.log("io.controller.listen");
  var io = require('socket.io').listen(server);
  
  
 io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !'); 
  
 	socket.on('data_comm',function(id){
	  	console.log('io.controller.data_comm');
	  	socket_map[socket.id]=socket;
	  	console.log("New watcher : " + socket.id);
	  });

 	socket.on('slidEvent',function(json_object){
	  	console.log('io.controller.slidEvent');
		console.log(json_object);
	  	//console.log(json_object);
	  	if(json_object['CMD']==="START"){
	  		console.log("CMD is START");
			pres_id = json_object['PRES_ID'];
			ContentModel.read(pres_id,function(err,content){
	  			if(!!err){
	  				console.log(err);
                	return err;
	  			}
	  			console.log(socket_map);
	  			for (var element in socket_map){
	  				socket_map[element].emit('currentSlidEvent',content);
	  			}
	  			
	  		});
	  	}
	  	else{
		      console.log(json_object['CMD']);
	  		//TO DO
	  	}
	  });

 	socket.on('disconnect', function() {
	  console.log('Got disconnect!');
	  console.log(socket.id);
	  delete socket_map[socket.id];
      
   	});
 	socket.emit('connection');   
  });

}

