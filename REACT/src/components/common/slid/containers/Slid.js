import React, { Component } from 'react';
import VisualShort from '../components/VisualShort';
import EditMetaSlid from '../components/EditMetaSlid';
import { connect } from 'react-redux';
import {setSelectedSlid, updateSlid } from '../../../../actions';

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
    this.updateSlid=this.updateSlid.bind(this);

    }   
    
  updateSelectedSlid(){
      const tmpSlid={
              id:this.state.slid.id,
              title:this.state.slid.title,
              txt:this.state.slid.txt,
              content_id:this.state.slid.content_id
            };
      this.props.dispatch(setSelectedSlid(tmpSlid));
  }
  updateSlid(id,title,txt,content_id){
        // @Pia : Param non utilisé. Normal ???
        this.props.dispatch(updateSlid(this.props.slid));
      }

  handleChangeTitle (e) {
    this.setState({title:  e.target.value});
    this.updateSlid(this.props.slid.id,this.state.title,this.props.slid.txt,this.props.slid.content_id);
    return;
  }

  handleChangeTxt (e) {
    this.setState({txt:  e.target.value});
    return;
  }


  //render function use to update the virtual dom
  render() {
    let finalVisual; 

    switch (this.state.displayMode){
        case "SHORT" :
            finalVisual = (<VisualShort slid = {this.props.slid} contentMap = {this.props.contentMap} content_id = {this.props.slid.content_id}/>);
        break;

        case "FULL_MNG":
            finalVisual =(<EditMetaSlid handleChangeTitle = {this.handleChangeTitle} handleChangeTxt = {this.handleChangeTxt} slid = {this.props.slid} contentMap = {this.props.contentMap} content_id = {this.props.slid.content_id}/>);
        break;

        default : 
        break;
    }


    return (

    <div className ="Slid vertical-scroll" onClick={()=>this.updateSelectedSlid()} >
        {finalVisual}
    </div>
    );
}
}


export default connect() (Slid);