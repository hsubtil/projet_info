import React, { Component } from 'react';
import SlidList from '../components/SlidList';
import EditMetaPres from '../components/EditMetaPres';
import CommandButton from '../../../browsePresentationPanel/containers/CommandButtons';
// /home/hugo/Documents/projet_info/REACT/src/components/browsePresentationPanel/containers
import './presentation.css';
import { connect } from 'react-redux';
import {updatePresentation} from '../../../../actions';

var Comm = require('../../../../services/Comm.js');

class Presentation extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

        this.state ={
            pres : this.props.pres,
            contentMap : this.props.contentMap,
        };

    this.handleChangeTitle= this.handleChangeTitle.bind(this); 
    this.handleChangeDescription = this.handleChangeDescription.bind(this); 
   // this.savePresentation = this.savePresentation.bind(this);
    this.updatePresentation = this.updatePresentation.bind(this);

    }   

    /*fetch('http://localhost:1337/savePres', {      
	  credentials:'include',
	  headers: {
	    'Accept':'application/json',
	    'Content-Type':'application/json'
	  },
          method: 'POST',
          body: JSON.stringify(this.props.pres)
    }).catch(err => err);*/


  updatePresentation(id,title,description,slidArray){
    const tmpPres={
              id:id,
              title:title,
              description:description,
              slidArray:slidArray,
            };
        this.props.dispatch(updatePresentation(tmpPres));

  }

  handleChangeTitle (e) {
    this.updatePresentation(this.props.pres.id,e.target.value,this.props.pres.description,this.props.pres.slidArray);
    return;
  }

  handleChangeDescription (e) {
    this.updatePresentation(this.props.pres.id,this.props.pres.title,e.target.value,this.props.pres.slidArray);
    return;
  }


  //render function use to update the virtual dom
  render() {
    let editionForm; 
    let slidsList;
    let navBar;
    
    //     <button onClick={()=>this.savePresentation()}>Save</button>
    navBar = (<CommandButton/>);
    editionForm =(<EditMetaPres handleChangeTitle = {this.handleChangeTitle} handleChangeDescription = {this.handleChangeDescription} title ={this.props.pres.title} description={this.props.pres.description}/>);

    slidsList = (<SlidList slidArray = {this.props.pres.slidArray} contentMap = {this.props.contentMap}/>);

    return (
        <div>
	      {navBar}
            <div>
                   {editionForm}
                   <div>
            	       {slidsList}
                   </div>
            </div>
        </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
        return {
           contentMap : state.updateModelReducer.content_map,
           pres : state.updateModelReducer.presentation,
            
        } 
 };
export default connect(mapStateToProps) (Presentation);
