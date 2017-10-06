import React, { Component } from 'react';
import VisualShort from '../components/VisualShort';
import EditMetaSlid from '../components/EditMetaSlid';


class Slid extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

    //    this.state ={
    //      id : this.props.id,
    //       title : this.props.title,
    //        txt : this.props.txt,
    //        content : this.props.content,
    //        contentMap : this.props.contentMap,
    //        displayMode : this.props.displayMode,
    //    };

   // this.getContentById = this.getContentById.bind(this);

    }   

   // getContentById (){
  //  }


  //render function use to update the virtual dom
  render() {
    var src;
    var type;
    let finalVisual; 
    for (var i=1 ;i<Object.keys(this.props.contentMapList).length;i++){
               if(this.props.contentMapList[i]["id"] == this.props.content)
               {
                   src = this.props.contentMapList[i]["src"];
                   type = this.props.contentMapList[i]["type"]
               }
    }

    switch (this.props.displayMode){
        case "SHORT" :
            finalVisual = (<VisualShort title = {this.props.title} txt ={this.props.txt} src = {src} type ={type}/>);
        break;

        case "FULL_MNG":
            finalVisual =(<EditMetaSlid title ={this.props.title} txt = {this.props.txt} src = {src} type ={type}/>);
        break;

        default : 
        break;
    }

    return (

    <div>
        {finalVisual}
    </div>
    );
}
}


export default Slid;