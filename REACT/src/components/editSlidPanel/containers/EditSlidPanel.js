import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid';
import {connect } from 'react-redux';

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
         return (
            <Slid slid ={this.props.selected_slid} displayMode="FULL_MNG" contentMapList ={this.state.contentMap} content = {this.props.selected_slid.content_id}/>
          );
         
      }
}   
const mapStateToProps = (state, ownProps) => {
          return {
          selected_slid: state.selectedReducer.slid,
        } };

export default connect (mapStateToProps) (EditSlidPanel);




