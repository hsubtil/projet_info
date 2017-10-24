import React, { Component } from 'react';
import Content from '../../../common/content/containers/Content';

class VisualShort extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {   
 
    return (
        <div className ="SlideShort" ondrop="this.props.drop(event)" ondragover="this.props.allowDrop(event)">
            <h5>Title : {this.props.slid.title}</h5>
            <p> Text : {this.props.slid.txt}</p>
            <Content 
                contentMap = {this.props.contentMap}
                content_id = {this.props.slid.content_id}
                onlyContent = "true"
            /> 
        </div>
        )          
      
}
}

export default VisualShort;