"use strict";

// content.route.js
//var multer = require("multer"); // ERROR : Import problem when npm start
var express = require("express");
var router = express.Router();
module.exports = router;

// var multerMiddleware = multer({ "dest": "/tmp/" });  // ERROR : Import problem when npm start

// Got to implement method in content.controllers 
// Just initialize rout to methods
var contentController = require('../controllers/content.controller.js');

router.route('/contents')
.get(contentController.list);
/*.post("/contents", multerMiddleware.single("file"), function(request, response) {
	contentController.create; // TODO
	console.log(request.file.path); // The full path to the uploaded file
	console.log(request.file.originalname); // Name of the file on the user's computer
	console.log(request.file.mimetype); // Mime type of the file
});*/

router.route('/contents/:contentId')
.get(contentController.read);
