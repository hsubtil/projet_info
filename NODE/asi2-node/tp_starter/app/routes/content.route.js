// content.route.js
var express = require("express");
var router = express.Router();
module.exports = router;


// Got to implement method in content.controllers 
// Just initialize rout to methods
var contentController = require('./../controllers/content.controllers');

router.route('/contents')
.get(contentController.list)
.post(contentController.token, contentController.create);
