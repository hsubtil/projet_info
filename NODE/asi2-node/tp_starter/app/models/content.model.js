'use strict';
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

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
      return data;
  }
} 

ContentModel.create = function (contentModel, cb){
  var filePath = CONFIG.contentDirectory+'/'+contentModel.fileName;
  var metaData = CONFIG.contentDirectory+'/'+contentModel.id+".meta.json";
  fs.writeFile(filePath,contentModel.data);
  fs.writeFile(metaData,JSON.stringify(contentModel));  // Check for metadata ? 
  console.log("File %s, created",filePath);
  cb();
}

ContentModel.read = function (contentModel, cb){
  //TO DO
  cb();
}

ContentModel.update = function (contentModel, cb){
  //TO DO
  cb();
}
ContentModel.delete = function (contentModel, cb){
  //TO DO
  cb();
}