import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid';
import Tools from '../../../services/Tools.js'
import { updateSlid } from '../../../actions';

class CommandButton extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

    }   
    // Add slid by using updateModelReducer 
    /* @Pia : "Créer des handler pour Add et Remove déclenchant l’action updateSlid utilisant le
      reducer updateModelReducer pour ajouter ou supprimer un slid". updateModelReducer appel selectedReducer, normal ???? */
    add(){
      this.props.dispatch(updateSlid(Tools.generateUUID,"","",""));
    }

    remove(){
      this.props.dispatch(updateSlid(Tools.generateUUID,"","",""));
    }

    save(){
      //TODO
    }
  //render function use to update the virtual dom
  render() {

          return (
      <button className="btn btn-default" style={buttonStyle} onClick={()=>this.add()}>Add</button>
      <button className="btn btn-default" style={buttonStyle} onClick={()=>this.remove()}>Remove</button>
      <button className="btn btn-default" style={buttonStyle} onClick={()=>this.save()}>Save</button>
    );
  	}
    }   


export default CommandButton;


