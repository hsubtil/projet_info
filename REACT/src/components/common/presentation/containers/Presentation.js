import React, { Component } from 'react';
import SlidList from '../components/SlidList';
import EditMetaPres from '../components/EditMetaPres';


class Presentation extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

        this.state ={
            id : this.props.pres.id,
            title : this.props.pres.title,
            description : this.props.pres.description,
            slidArray : this.props.pres.slidArray,
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

    editionForm =(<EditMetaPres handleChangeTitle = {this.handleChangeTitle} handleChangedescription = {this.handleChangedescription} title ={this.state.title} description = {this.state.description}/>);

    slidsList = (<SlidList slidArray = {this.state.slidArray} contentMap = {this.state.contentMap}/>);

    return (
    <div>
    	<div>
        	{editionForm}
    	</div>
    	<div>
    		{slidsList}
    	</div>
    </div>
    );
}
}


export default Presentation;