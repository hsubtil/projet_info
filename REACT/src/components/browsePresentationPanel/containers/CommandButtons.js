import React, { Component } from 'react';
import Slid from '../../slid/containers/Slid';

class CommandButton extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);

    }   

    Add(){
      //TODO
    }

    Remove(){
      //TODO
    }

    Save(){
      //TODO
    }
  //render function use to update the virtual dom
  render() {

  		return (
  			<div className={style.verticalScroll}>
  				{contentMap}
  			</div>	
  			);
  	}
    }   


export default CommandButton;


