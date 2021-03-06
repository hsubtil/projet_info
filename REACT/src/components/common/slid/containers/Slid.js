import React, { Component } from 'react';
import VisualShort from '../components/VisualShort';
import EditMetaSlid from '../components/EditMetaSlid';
import { connect } from 'react-redux';
import {setSelectedSlid, updateSlid,updateSlidList } from '../../../../actions';

import './slid.css'


class Slid extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

        this.state ={
            slid : this.props.slid,
            contentMap : this.props.contentMap,
            displayMode : this.props.displayMode,
        };

    this.handleChangeTitle= this.handleChangeTitle.bind(this); 
    this.handleChangeTxt = this.handleChangeTxt.bind(this);  
    this.updateSelectedSlid=this.updateSelectedSlid.bind(this);
    this.updateSlidValue=this.updateSlidValue.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.drop = this.drop.bind(this);


    }   
    
  updateSelectedSlid(){
      if(this.props.editionIsPossible == "true")
    {
     // console.log(this.props.slid);
      //console.log(this.state.slid);
      const tmpSlid={
              id:this.props.slid.id,
              title:this.props.slid.title,
              txt:this.props.slid.txt,
              content_id:this.props.slid.content_id,
            };
      this.props.dispatch(setSelectedSlid(tmpSlid));
    }  
  }
  updateSlidValue(id,title,txt,content_id){
    console.log("updateSlidValue in slid.js");
    const tmpSlid={
              id:id,
              title:title,
              txt:txt,
              content_id:content_id,
            };
        this.props.dispatch(updateSlid(tmpSlid));
        this.props.dispatch(updateSlidList(tmpSlid));

      }

      
  allowDrop(ev) {
    ev.preventDefault();
  }
   drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  handleChangeTitle (e) {
    this.updateSlidValue(this.props.slid.id,e.target.value,this.props.slid.txt,this.props.slid.content_id);
    return;
  }

  handleChangeTxt (e) {
    this.updateSlidValue(this.props.slid.id,this.props.slid.title,e.target.value,this.props.slid.content_id);
    return;
  }

  handleChangeContent (e) {
    this.updateSlidValue(this.props.slid.id,this.props.slid.title,this.props.slid.txt,e.target.value);
    return;
  }

  //render function use to update the virtual dom
  render() {
    let finalVisual; 

    switch (this.state.displayMode){
        case "SHORT" :
            finalVisual = (<VisualShort slid = {this.props.slid} contentMap = {this.props.contentMap} content_id = {this.props.slid.content_id} />);
        break;

        case "FULL_MNG":
            finalVisual =(<EditMetaSlid handleChangeTitle = {this.handleChangeTitle} handleChangeTxt = {this.handleChangeTxt} slid = {this.props.slid} contentMap = {this.props.contentMap} content_id = {this.props.slid.content_id} allowDrop = {this.allowDrop} drop = {this.drop}/>);
        break;

        default : 
        break;
    }


    return (

    <div className ="Slid vertical-scroll thumbnail" onClick={()=>this.updateSelectedSlid()} >
        {finalVisual}
    </div>
    );
}
}


export default connect() (Slid);