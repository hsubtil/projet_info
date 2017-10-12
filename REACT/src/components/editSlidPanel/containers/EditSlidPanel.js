import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid';
import {connect } from 'react-redux';
import {updateSlid} from '../../../actions'

class EditSlidPanel extends React.Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

        this.state = {
          selected_slid : this.props.selected_slid,
          contentMap : this.props.contentMap,
        };
        this.updateSlid = this.updateSlid.bind(this);
      }

      updateSlid(id,title,txt,content_id){
         const tmpSlid={
              id: id,
              title: title,
              txt: txt,
              content_id:content_id
            };
        this.props.dispatch(updateSlid(tmpSlid));
      }
      render () {
         return (
          <div className ='Slid' >
            <Slid slid ={this.props.selected_slid} displayMode="FULL_MNG" contentMap ={this.state.contentMap} />
          </div>  
          );
         
      }
}   
const mapStateToProps = (state, ownProps) => {
          return {
          selected_slid: state.selectedReducer.slid,

        } };

export default connect (mapStateToProps) (EditSlidPanel);




