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

    	for (var i=0 ;i<Object.keys(this.props.contentMapList).length;i++){
    		var key = Object.keys(this.props.contentMapList)[i];
    		array_render_content.push(
    			<Content id = {this.props.contentMapList[key]['id'] }
    			src ={this.props.contentMapList[key]['src']} 
    			type ={this.props.contentMapList[key]['type']} 
    			title ={this.props.contentMapList[key]['title'] }
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


