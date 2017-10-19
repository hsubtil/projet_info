import React, { Component } from 'react';
import SlidList from '../components/SlidList';
import EditMetaPres from '../components/EditMetaPres';
import './presentation.css';
import { connect } from 'react-redux';
import {updatePresentation} from '../../../../actions';



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
    this.savePresentation = this.savePresentation.bind(this);
    this.updatePresentation = this.updatePresentation.bind(this);

    }   

  savePresentation() {

    fetch('http://localhost:1337/savePres', {
          method: 'POST',
          body: JSON.stringify(this.props.pres)
    });
    return;

  }

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

    editionForm =(<EditMetaPres handleChangeTitle = {this.handleChangeTitle} handleChangeDescription = {this.handleChangeDescription} title ={this.props.pres.title} description={this.props.pres.description}/>);

    slidsList = (<SlidList slidArray = {this.props.pres.slidArray} contentMap = {this.props.contentMap}/>);

    return (
        <div>
            <div>
                  <button onClick={()=>this.savePresentation()}>Save</button>
            </div>
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
