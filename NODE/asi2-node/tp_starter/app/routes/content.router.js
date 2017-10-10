"use strict";

// content.route.js
var multer = require("multer");
var express = require("express");
var multerMiddleware = multer({ dest: "/tmp/uploads/" }); 
var router = express.Router();
module.exports = router;


// Got to implement method in content.controllers 
// Just initialize rout to methods
var contentController = require('../controllers/content.controller.js');

router.param('contentId', function(req, res, next, id) {
	// TO DO 
	//req.userId = id;
      console.log("router.param");
      req.contentId = id;
      next();
});

router.route('/contents')
  .get(contentController.list)
  .post(multerMiddleware.single('file'), contentController.create);

router.route('/contents/:contentId')
  .get(contentController.read);


