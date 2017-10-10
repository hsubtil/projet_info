"use strict";
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var fs = require("fs");
var path = require("path");
module.exports = this;
var io;

this.listen = function (server){
  console.log("io.controller listen");
  var io = require('socket.io').listen(server);
  
  
  io.sockets.on('connection', function (socket) {
    socket.emit('message','You are connected');
    console.log('Un client est connecté !');    
  });
  
  
  
}

