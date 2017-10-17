import React, { Component } from 'react';
import VisualShort from '../components/VisualShort';
import EditMetaSlid from '../components/EditMetaSlid';
import { connect } from 'react-redux';
import {setSelectedSlid } from '../../../../actions'
import './slid.css'


class Slid extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

        this.state ={
            id : this.props.slid.id,
            title : this.props.slid.title,
            txt : this.props.slid.txt,
            content_id : this.props.slid.content_id,
            contentMap : this.props.contentMap,
            displayMode : this.props.displayMode,
        };

    this.handleChangeTitle= this.handleChangeTitle.bind(this); 
    this.handleChangeTxt = this.handleChangeTxt.bind(this);  
    this.updateSelectedSlid=this.updateSelectedSlid.bind(this);

    }   
    
  updateSelectedSlid(){
      const tmpSlid={
              id:this.state.id,
              title:this.state.title,
              txt:this.state.txt,
              content_id:this.state.content_id
            };
      this.props.dispatch(setSelectedSlid(tmpSlid));
  }

  handleChangeTitle (e) {
    this.setState({title:  e.target.value});
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