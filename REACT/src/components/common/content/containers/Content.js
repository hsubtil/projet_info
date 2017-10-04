import React, { Component } from 'react';
import VisualonlyContent from '../components/VisualonlyContent';
import Visualfull from '../components/Visualfull';
class Content extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

    }   
  //render function use to update the virtual dom
  render() {
    let finalVisual;
    switch (this.props.onlyContent){
        case "true" : 
            finalVisual = (<VisualonlyContent type = {this.props.type} src = {this.props.src} /> );
        break;

        case "false" : 
           finalVisual =  (<Visualfull id={this.props.id} src={this.props.src} type={this.props.type} title={this.props.title} />);
        break;
    }
    return (
        <div className ="contentPanel">
            {finalVisual}
        </div>
    );
  }
}


export default Content;