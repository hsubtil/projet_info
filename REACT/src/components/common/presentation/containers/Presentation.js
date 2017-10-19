import React, { Component } from 'react';
import SlidList from '../components/SlidList';
import EditMetaPres from '../components/EditMetaPres';
import './presentation.css';
import { connect } from 'react-redux';


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

    }   

  savePresentation() {

    fetch('http://localhost:1337/savePres', {
          method: 'POST',
          body: JSON.stringify(this.props.pres
            )
    });
    return;

  }

  handleChangeTitle (e) {
    this.setState({title:  e.target.value});
    return;
  }

  handleChangeDescription (e) {
    this.setState({description:  e.target.value});
    return;
  }


  //render function use to update the virtual dom
  render() {
    let editionForm; 
    let slidsList;

    editionForm =(<EditMetaPres handleChangeTitle = {this.handleChangeTitle} handleChangedescription = {this.handleChangedescription} title ={this.props.pres.title} description = {this.props.pres.description}/>);

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
