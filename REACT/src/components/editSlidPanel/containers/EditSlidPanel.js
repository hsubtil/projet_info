import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid';
import {connect } from 'react-redux';
import PresentationNavigation from './PresentationNavigation';

class EditSlidPanel extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

        this.state = {
          selected_slid : this.props.selected_slid,
          contentMap : this.props.contentMap,
        };
      }

      render () {
	let navBar;
	navBar = (<PresentationNavigation/>);
         return (
	   <div>
	    {navBar}	   
	    <div className ='Slid' >
	      <Slid slid ={this.props.selected_slid} displayMode="FULL_MNG" contentMap ={this.state.contentMap} editionIsPossible = "false"/>
            </div>
          </div>  
          );
         
      }
}   
const mapStateToProps = (state, ownProps) => {
          return {
          selected_slid: state.selectedReducer.slid,

        } };

export default connect (mapStateToProps) (EditSlidPanel);




