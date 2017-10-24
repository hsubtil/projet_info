import React, { Component } from 'react';
import VisualonlyContent from '../components/VisualonlyContent';
import Visualfull from '../components/Visualfull';
import { updateDraggedElt} from '../../../../actions';

class Content extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

    this.getContentById = this.getContentById.bind(this);
    this.drag = this.drag.bind(this);
    this.updateDraggedElt = this.updateDraggedElt.bind(this);
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
    
    drag(ev) {
	//ev.dataTransfer.setData("text", ev.target.id);
      console.log(ev.target.id);
	this.updateDraggedElt(ev.target.id);
    }
    
    updateDraggedElt (content_id) {
      this.props.dispatch (updateDraggedElt(content_id));
    }
  //render function use to update the virtual dom
  render() {
    let finalVisual;
    var cont = this.getContentById();

    switch (this.props.onlyContent){
        case "true" : 
            finalVisual = (<VisualonlyContent cont = {cont}/> );
        break;

        case "false" : 
           finalVisual =  (<Visualfull cont={cont}  drag = {this.drag} />);
        break;
    }
    return (
        <div className ="contentPanel" >
            {finalVisual}
        </div>
    );
  }
}


export default Content;