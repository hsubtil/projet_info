import React, { Component } from 'react';
import Content from '../../../common/content/containers/Content';

class VisualShort extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {      
    return (
        <div className ="SlideShort">
            <h5>{this.props.title}</h5>
            <p>{this.props.txt}</p>
            <Content 
                src ={this.props.src} 
                type ={this.props.type} 
                onlyContent = "true"
            /> 
        </div>
        )          
      
}
}

export default VisualShort;