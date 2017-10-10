// default.route.js
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();
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
		var final_json = {} // empty Object
		fs.readdir(CONFIG.presentationDirectory, function(err, data){
		if (!!err) {
			 if (cb) {
				return cb(err);
			  }
		  }

		for (var i in data) {
			var fileName = data[i];
			if (path.extname(fileName) === ".json") {
				var content = JSON.parse(fs.readFileSync(CONFIG.presentationDirectory+'/'+ fileName));
				final_json[content['id']] = content;
			}
		}
		response.send(final_json);			
	})
});

router.post('/savePres', function(request, response){
  //Pour test : Postman -> Body -> JSON
  console.log("Innnnn");
  console.log(request.body)
  console.log('/savePres '+ request.body['id']);
  fs.writeFile(CONFIG.presentationDirectory+'/'+request.body['id']+'.pres.json',JSON.stringify(request.body));
  console.log(request.body['id']+" created");
  response.send(request.body);    // echo du résultat
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