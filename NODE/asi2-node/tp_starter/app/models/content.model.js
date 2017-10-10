'use strict';
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);
var utils = require("../utils/utils.js");

var fs = require("fs");

module.exports = ContentModel;

function ContentModel (content) {
   this.id = 0;
   this.type = "";
   this.title = "";
   this.src="";
   this.fileName = "";
   var data;

    this.setData = function(data) {
      this.data = data;
  }
  
    this.getData= function() {
      return this.data;
  }
} 

ContentModel.create = function (contentModel, cb){
  console.log("ContentModel.create");
  var testUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(contentModel.id);
  if(typeof contentModel.fileName === "undefined" ||  contentModel.fileName === null){
      cb(">>> Error in ContentModel.create: fileName is undefined or null");
  }
  else if(typeof contentModel.id === "undefined" ||  contentModel.id === null || !testUUID)
  {
     cb(">>> Error in ContentModel.create: id is undefined or null or id not UUID");
  }
  else {
    var filePath = CONFIG.contentDirectory+'/'+contentModel.fileName;
    var metaData = CONFIG.contentDirectory+'/'+contentModel.id+".meta.json";
    fs.writeFileSync(filePath,contentModel.data);
    fs.writeFileSync(metaData,JSON.stringify(contentModel));  // Check for metadata ? 
    console.log("File %s, created/modified",filePath);  
    console.log("File %s, created/modified",metaData);
    cb(null);
  }
}

ContentModel.read = function (contentModel_id, cb){
  //TO DO
  console.log("ContentModel.read");
  var testUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(contentModel_id);
  if(typeof contentModel_id === "undefined" ||  contentModel_id === null || !testUUID)
  {
     cb(">>> Error in ContentModel.read: id is undefined or null or id not UUID");
  }
  else {
  // Creation of ContentModel object
    var contentModel = new ContentModel();
    var filePath = CONFIG.contentDirectory+'/'+contentModel_id+".meta.json";

    utils.fileExists(filePath, function(err) {
      if (err) {
        cb(">>> Error in ContentModel.read: file does not exist");
    }});

    var metaData = JSON.parse(fs.readFileSync(filePath));
    contentModel.id = metaData['id'];
    contentModel.type = metaData['type'];
    contentModel.title = metaData['title'];
    contentModel.fileName = metaData['fileName'];
    contentModel.src = metaData['src'];
    contentModel.setData(metaData['data']);
    cb(null,contentModel); //TODO : Check null in callback
  }
  
}

ContentModel.update = function (contentModel, cb){
  console.log("ContentModel.update");
  if(contentModel.getData() != null && contentModel.getData().length > 0){
    var err =this.create(contentModel, cb);
  }
  cb(err);
}
ContentModel.delete = function (contentModel_id, cb){
  console.log("ContentModel.delete");
  var metaDataPath = CONFIG.contentDirectory+'/'+contentModel_id+".meta.json";
  var metaData = JSON.parse(fs.readFileSync(metaDataPath));
  var filePath = CONFIG.contentDirectory+'/'+metaData['fileName'];
  var test = fs.unlinkSync(filePath);
  console.log(test);
  fs.unlinkSync(metaDataPath);
  console.log("File %s, deleted",filePath);  
  console.log("File %s, deleted",metaDataPath);
  cb();
}