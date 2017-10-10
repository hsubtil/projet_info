"use strict";
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var fs = require("fs");
var path = require("path");
var ContentModel = require("../models/content.model.js");
var multer = require("multer"); 

var multerMiddleware = multer({ "dest": "/tmp/" }); 

module.exports = this;

this.list = function(req, rep, next) {
//CONFIG.contentDirectory
// JSON.parse
console.log("content.controller.list");
var final_json = {} // empty Object
fs.readdir(CONFIG.contentDirectory, function(err, data){
	if (!!err) {
				console.log(err);
				return err;
	}
		for (var i in data) {
			var fileName = data[i];
			if (path.extname(fileName) === ".json") {
				var content = JSON.parse(fs.readFileSync(CONFIG.contentDirectory+'/'+ fileName));
				var contentModel= new ContentModel();
				contentModel.id = content['id'];
				contentModel.type = content['type'];
				contentModel.title = content['title'];
				contentModel.fileName = content['fileName'];
				contentModel.src = content['src'];
				final_json[content['id']] = contentModel ;
			}
		}
	rep.send(final_json);

	//console.log(final_json);
	})				

};

this.create = function(req, rep, next) {
  console.log("content.controllet.create");

  
}

this.read = function(req, rep, next) {
  console.log("content.controller.read");
  var contentModel = ContentModel.read(req.contentId,function(err, data) {
			if (err) {
				console.error(err);
			} else {
				console.log(data);
				var content = data;
				if (req.query.json=== "true"){
				  console.log("json=true");
				  rep.send(content);
				}
				else if(content['type']=== "img"){				  
				  console.log(content['src']);
				  rep.send(content['src']);
				}
				else {
				  console.log("Redirect");
				  rep.redirect(content['src']);
				}
				
			}
  });
};

/*

16. Créer le controleur (content.controller.js) pour faire le lien entre le routeur et le modèle. Le controleur va donc avoir les
fonctions suivantes:
list: liste les fichiers de contenu du répertoire [CONFIG.contentDirectory] et retourne le résultat sous la forme un
objet JSON au format "clé-valeur". La clé est l'ID du contenu (ContentModel.id) et la valeur est l'objet ContentModel
au format JSON.
{
_ContentModel[1].id_ : _ContentModel[1]_,
_ContentModel[2].id_ : _ContentModel[2]_,
...
}
create: récupère les paramètres de requète pour créer un objet ContentModel et le stocker via la méthode statique
du modèle.
read: Lit le contenu dont l'id est passé en paramètre et:
soit retourne l'url d'accés aux données (ContentModel.src) dans le cas où les données sont hébergés sur le
serveur (c'est-à-dire dans le cas où le type de contenu est 'img')
soit effectue une redirection dans le cas où les données ne sont pas stockées sur le serveur.
soit retiourne les metadatas (le ContentModel au format JSON) si on passe en paramètre json=true dans
l'URL.*/