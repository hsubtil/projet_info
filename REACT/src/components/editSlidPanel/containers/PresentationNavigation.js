import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid';
import Tools from '../../../services/Tools.js';

import { connect } from 'react-redux';
import { updateSlid, sendPresCmd } from '../../../actions';


class PresentationNavigation extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
	this.buttonAction = this.buttonAction.bind(this);
    }   
    
    buttonAction(cmd){
      	this.props.dispatch(sendPresCmd(cmd));
    }

  //render function use to update the virtual dom
  render() {

          return (
	    <div>
	      <button className="btn btn-default" onClick={()=>this.buttonAction("BEGIN")}>Begin</button>
	      <button className="btn btn-default" onClick={()=>this.buttonAction("BACKWARD")}>Backward</button>
	      <button className="btn btn-default" onClick={()=>this.buttonAction("PLAY")}>Play</button>
	      <button className="btn btn-default" onClick={()=>this.buttonAction("PAUSE")}>Pause</button>
	      <button className="btn btn-default" onClick={()=>this.buttonAction("FORWARD")}>Forward</button>
	      <button className="btn btn-default" onClick={()=>this.buttonAction("END")}>End</button>
	    </div>
    );
  	}
    }   


export default connect()(PresentationNavigation);