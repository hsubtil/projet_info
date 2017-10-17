import React, { Component } from 'react';
import VisualonlyContent from '../components/VisualonlyContent';
import Visualfull from '../components/Visualfull';
class Content extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

    this.getContentById = this.getContentById.bind(this);
    }   

     getContentById (){

    var cont = {};
      for (var i=0 ;i<Object.keys(this.props.contentMap).length;i++){
          var key = Object.keys(this.props.contentMap)[i];
               if(this.props.contentMap[key]["id"] == this.props.content_id)
               {
                    cont = {
                        id : this.props.contentMap[key]["id"],
                        src : this.props.contentMap[key]["src"],
                        type : this.props.contentMap[key]["type"],
                        title : this.props.contentMap[key]["title"],
                    };
                   
               }
      }

      return cont;

    }
  //render function use to update the virtual dom
  render() {
    let finalVisual;
    var cont = this.getContentById();

    switch (this.props.onlyContent){
        case "true" : 
            finalVisual = (<VisualonlyContent type = {cont.type} src = {cont.src} /> );
        break;

        case "false" : 
           finalVisual =  (<Visualfull id={cont.id} src={cont.src} type={cont.type} title={cont.title} />);
        break;
    }
    return (
        <div className ="contentPanel">
            {finalVisual}
        </div>
    );
  }
}


export default Content;