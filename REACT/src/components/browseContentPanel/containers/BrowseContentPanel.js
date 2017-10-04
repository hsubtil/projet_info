import React, { Component } from 'react';
import Content from '../../common/content/containers/Content'
class BrowseContentPanel extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.getAllContent=this.getAllContent.bind(this);

    }   

    getAllContent(){
    	let array_render_content=[];
    	console.log(Object.keys(this.props.contentMapList));
    	for (var i=1 ;i<Object.keys(this.props.contentMapList).length;i++){
    		
    		array_render_content.push(
    			<Content id = {this.props.contentMapList[i]['id'] }
    			src ={this.props.contentMapList[i]['src']} 
    			type ={this.props.contentMapList[i]['type']} 
    			title ={this.props.contentMapList[i]['title'] }
    			onlyContent = "false"/>
    		);

  		}
  		return array_render_content;

    }
  //render function use to update the virtual dom
  render() {

  		const contentMapList = this.getAllContent();
  		return (
  			<div>
  				{contentMapList}
  			</div>	
  			);
  	}
    }   


export default BrowseContentPanel;