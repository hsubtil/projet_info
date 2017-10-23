"use strict";
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var fs = require("fs");
var path = require("path");

var ContentModel = require("../models/content.model.js");
var Utils = require("../utils/utils.js");

module.exports = this;
var io;
var socket_map = {};

var pres_id;
var current_slid;
var max_slid;

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
			current_slid = 0;
			max_slid
			// Read All pres with /loadPres web service
			Utils.loadPres(function(res){
			  // Load First Slid of the pres
			  max_slid = res[pres_id]["slidArray"].length;
			  ContentModel.read(res[pres_id]["slidArray"][current_slid]["id"],function(err,content){
				  if(!!err){
					  console.log(err);
					  return err;
				  }
				  for (var element in socket_map){				    
				    var title = res[pres_id]["slidArray"][current_slid]["title"];				    
				    var description = res[pres_id]["slidArray"][current_slid]["txt"];
				    //var src = Utils.getDataFilePath(content['fileName']);
					  socket_map[element].emit('currentSlidEvent',{'content_src':content['src'],'content_type':content['type'],'content_title':content['title'],'title':title,'description':description});
				  }
				  
			  });
			})
	  	}
	  	else{
		      console.log(json_object['CMD']);
		      switch(json_object['CMD']){
			case "BEGIN":
			  console.log("in next '");
			  current_slid=0;
			  break;
			case "NEXT":			  
			  console.log("in next !");
			  if (current_slid<max_slid){			    
			    current_slid++;
			  }
			  break;
			case "PREV":
			  if (current_slid>0){			    
			    current_slid--;
			  }
			  break;
			case "END":
			  current_slid=max_slid;
			  break;
			default :
			  return;
		      }
		      // Factoriser
		      Utils.loadPres(function(res){
			ContentModel.read(res[pres_id]["slidArray"][current_slid]["id"],function(err,content){
				    if(!!err){
					    console.log(err);
					    return err;
				    }
				    var title = res[pres_id]["slidArray"][current_slid]["title"];
				    var description = res[pres_id]["slidArray"][current_slid]["txt"];
				    for (var element in socket_map){
					    socket_map[element].emit('currentSlidEvent',{'content_src':content['src'],'content_type':content['type'],'content_title':content['title'],'title':title,'description':description});
				    }
				    
			    });
		      });
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
