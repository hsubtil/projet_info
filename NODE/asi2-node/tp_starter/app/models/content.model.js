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
  console.log("ContentModel.create");
  var filePath = CONFIG.contentDirectory+'/'+contentModel.fileName;
  var metaData = CONFIG.contentDirectory+'/'+contentModel.id+".meta.json";
  fs.writeFileSync(filePath,contentModel.data);
  fs.writeFileSync(metaData,JSON.stringify(contentModel));  // Check for metadata ? 
  console.log("File %s, created",filePath);  
  console.log("File %s, created",metaData);
  cb();
}

ContentModel.read = function (contentModel_id, cb){
  //TO DO
  console.log("ContentModel.read");
  // Creation of ContentModel object
  var contentModel = new ContentModel();
  var filePath = CONFIG.contentDirectory+'/'+contentModel_id+".meta.json";
  var metaData = JSON.parse(fs.readFileSync(filePath));
  contentModel.id = metaData['id'];
  contentModel.type = metaData['type'];
  contentModel.title = metaData['title'];
  contentModel.fileName = metaData['fileName'];
  contentModel.src = metaData['src'];
  contentModel.setData(metaData['data']);

  cb(null,contentModel); //TODO : Check null in callback
}

ContentModel.update = function (contentModel, cb){
  //TO DO
  cb();
}
ContentModel.delete = function (contentModel, cb){
  //TO DO
  cb();
}