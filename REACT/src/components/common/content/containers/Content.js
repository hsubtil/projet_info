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
      for (var i=1 ;i<Object.keys(this.props.contentMap).length;i++){
               if(this.props.contentMap[i]["id"] == this.props.content_id)
               {
                    cont = {
                        id : this.props.contentMap[i]["id"],
                        src : this.props.contentMap[i]["src"],
                        type : this.props.contentMap[i]["type"],
                        title : this.props.contentMap[i]["title"],
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