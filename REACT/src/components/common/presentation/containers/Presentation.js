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
    var newPres = JSON.stringify(this.props.pres);
   

    editionForm =(<EditMetaPres handleChangeTitle = {this.handleChangeTitle} handleChangedescription = {this.handleChangedescription} title ={this.props.pres.title} description = {this.props.pres.description}/>);

    slidsList = (<SlidList slidArray = {this.props.pres.slidArray} contentMap = {this.props.contentMap}/>);

    fetch('https://localhost:1337/savePres', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: {newPres}
    });

    return (
    <div>
           {editionForm}
           <div>
    	       {slidsList}
           </div>
    </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {

          console.log("Update Presentation");
          console.log(state.updateModelReducer.presentation);
          //TODO modifier en plus les fichiers JSON lors de la modification des slides et du contentMap
        return {
           contentMap : state.updateModelReducer.content_map,
           pres : state.updateModelReducer.presentation,
            
        } 
 };
export default connect(mapStateToProps) (Presentation);
