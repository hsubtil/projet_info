import React, { Component } from 'react';
import Slid from '../../slid/containers/Slid'
import {connect } from 'react-redux';

class SlidList extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.getAllSlid=this.getAllSlid.bind(this);

    }   

    getAllSlid(){
    	let array_render_slid=[];
      var slid = {}

    	for (var i=0 ;i<Object.keys(this.props.slidArray).length;i++){
    		slid = {
                id : this.props.slidArray[i]['id'], 
                title :this.props.slidArray[i]['title'], 
                txt :this.props.slidArray[i]['txt'],
                content_id :this.props.slidArray[i]['content_id'],
                
          }
        array_render_slid.push(
        			<Slid
                key={slid.id}
                slid = {slid}
                displayMode = "SHORT"
                contentMap = {this.props.contentMap}
              />
    		);

  		}
  		return array_render_slid;

    }

  //render function use to update the virtual dom
  render() {

  		const slidArray = this.getAllSlid();

  		return (
  			<div>
  				{slidArray}
  			</div>	
  			);
  	}
}   

const mapStateToProps = (state, ownProps) => {
          return {
          selected_slid: state.selectedReducer.slid,

        } };

export default connect (mapStateToProps) (SlidList);


