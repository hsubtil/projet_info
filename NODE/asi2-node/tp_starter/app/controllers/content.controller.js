"use strict";
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

module.exports = this;

this.list = function() {

};

this.read = function() {

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