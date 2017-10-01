function ContentModel(id) {
  this.id = id;
  /*
  get id() {
    return this.id();
  }
  static create(content, callback){
    //TODO
  }*/

}

/*
 *   : Prend un objet contentModel en paramètre, stocke le contenu de [content.data]
dans le fichier [content.fileName] (dans le cas d'un contenu de type 'img') et stocke les meta-données dans
un fichier [contentModel.id].meta.json dans le répertoire [CONFIG.contentDirectory].

type: public - ['img', 'img_url', 'video', 'web']
id: public - UUID
title: public
src: public - l'URL qui permet d'acceder au contenu
fileName: public - le nom du fichier stocké dans [CONFIG.contentDirectory] dans le cas d'un contenu de
type 'img'. Il correspond a l'id du contenu + l'extension qui sera récupérée à partir du fichier original (png,
jpeg...).
data: privé - accessible par getData() et setData()
*/


  //var type;
  //this.id;
  //var src;
  //var fileName;
  //var type;
  //var data; //Privé ?