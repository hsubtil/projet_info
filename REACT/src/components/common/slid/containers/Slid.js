import React, { Component } from 'react';
import VisualShort from '../components/VisualShort';
import EditMetaSlid from '../components/EditMetaSlid';
import { connect } from 'react-redux';
import {setSelectedSlid } from '../../../../actions'


class Slid extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

        this.state ={
            id : this.props.id,
            title : this.props.title,
            txt : this.props.txt,
            content : this.props.content,
            contentMap : this.props.contentMap,
            displayMode : this.props.displayMode,
        };

    this.getContentById = this.getContentById.bind(this);
    this.handleChangeTitle= this.handleChangeTitle.bind(this); 
    this.handleChangeTxt = this.handleChangeTxt.bind(this);  
    this.updateSelectedSlid=this.updateSelectedSlid.bind(this);

    }   
    
  updateSelectedSlid(){
      const tmpSlid={
              id:this.props.id,
              title:this.props.title,
              txt:this.props.txt,
              content_id:this.props.content
            };
      this.props.dispatch(setSelectedSlid(tmpSlid));
  }

  handleChangeTitle (e) {
    this.setState({title:  e.target.value});
    this.props.handleSlidChange({title:this.state.title,txt:this.state.txt,content:this.state.content});
    return;
  }

  handleChangeTxt (e) {
    this.setState({txt:  e.target.value});
    this.props.handleSlidChange({title:this.state.title,txt:this.state.txt,content:this.state.content});
    return;
  }
  getContentById (){

    var src;
    var type;

    var cont = {
      src : null,
      type : null,
    };
      for (var i=1 ;i<Object.keys(this.props.contentMapList).length;i++){
               if(this.props.contentMapList[i]["id"] == this.props.content)
               {
                   src = this.props.contentMapList[i]["src"];
                   type = this.props.contentMapList[i]["type"];
               }
      }
      cont = {src : src, type :type};

      return cont;

    }


  //render function use to update the virtual dom
  render() {
    let finalVisual; 
    
    var cont = this.getContentById();

    switch (this.state.displayMode){
        case "SHORT" :
            finalVisual = (<VisualShort title = {this.props.slid.title} txt ={this.props.slid.txt} src = {cont.src} type ={cont.type}/>);
        break;

        case "FULL_MNG":
            finalVisual =(<EditMetaSlid handleChangeTitle = {this.handleChangeTitle} handleChangeTxt = {this.handleChangeTxt} title ={this.state.title} txt = {this.state.txt} src = {cont.src} type ={cont.type}/>);
        break;

        default : 
        break;
    }


    return (

    <div className ="Slid" onClick={()=>this.updateSelectedSlid()} >
        {finalVisual}
    </div>
    );
}
}


export default connect() (Slid);