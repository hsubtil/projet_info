import React, { Component } from 'react';
import Content from '../../common/content/containers/Content'
import './browseContentPanel.css';
import { connect } from 'react-redux';

class BrowseContentPanel extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.getAllContent=this.getAllContent.bind(this);

    }   

    getAllContent(){
    	let array_render_content=[];

    	for (var i=0 ;i<Object.keys(this.props.contentMap).length;i++){
    		var key = Object.keys(this.props.contentMap)[i];
    		array_render_content.push(
    			<Content 
             contentMap = {this.props.contentMap}
             content_id = {this.props.contentMap[key]['id']}
    			   onlyContent = "false"
           />
    		);

  		}
  		return array_render_content;

    }
  //render function use to update the virtual dom
  render() {

  		const contentMap = this.getAllContent();
  		return (
  			<div className='verticalScroll contentlist'>
  				{contentMap}
  			</div>	
  			);
  	}
    }   

const mapStateToProps = (state, ownProps) => {
        return {
           contentMap : state.updateModelReducer.content_map,
            
        } 
 };

export default connect(mapStateToProps) (BrowseContentPanel);


