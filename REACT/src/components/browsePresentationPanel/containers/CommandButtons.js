import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid';
import Tools from '../../../services/Tools.js';

import { connect } from 'react-redux';
import { updateSlid, sendNavCmd } from '../../../actions';


class CommandButton extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
	
	this.add = this.add.bind(this);
	this.remove = this.remove.bind(this);
	this.save = this.save.bind(this);

    }   
    // Add slid by using updateModelReducer 
    /* @Pia : "Créer des handler pour Add et Remove déclenchant l’action updateSlid utilisant le
      reducer updateModelReducer pour ajouter ou supprimer un slid". updateModelReducer appel selectedReducer, normal ???? */
    add(){
      this.props.dispatch(updateSlid(Tools.generateUUID,"","",""));
    }

    remove(){
      //TODO 
      //this.props.dispatch(updateSlid(Tools.generateUUID,"","",""));
    }

    save(){
      this.props.dispatch(sendNavCmd("SAVE_CMD"));
    }

  //render function use to update the virtual dom
  render() {

          return (
	    <div>
	      <button className="btn btn-default" onClick={()=>this.add()}>Add</button>
	      <button className="btn btn-default" onClick={()=>this.remove()}>Remove</button>
	      <button className="btn btn-default" onClick={()=>this.save()}>Save</button>
	    </div>
    );
  	}
    }   


export default connect()(CommandButton);


