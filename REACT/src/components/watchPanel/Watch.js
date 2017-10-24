import React from 'react';
import ReactDOM from 'react-dom';
import './watch.css';
import '../../lib/bootstrap-3.3.7/dist/css/bootstrap.min.css';
import Slid from '../common/slid/containers/Slid'

import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';

import * as contentMapTmp from '../../source/contentMap.json';

var Comm = require('../../services/Comm.js');


const store = createStore(globalReducer);
const socket = io.connect('http://localhost:1337');
socket.on('connection', function(message) {
	    socket.emit('data_comm', socket.id)
	  })

socket.on('currentSlidEvent', function(data) {
		    alert('Slide Changed');		    
		    console.log(data.content_src);
		    var watcher = new Watch();
		    watcher.getSlid(data);
		})

export default class Watch extends React.Component{
 constructor(props) {
 super(props);

	this.comm=new Comm(); 
 	this.state = {
 		contentMap:contentMapTmp,
        };

    // Bind local function to the current object
	this.getSlid=this.getSlid.bind(this);
	this.callbackErr=this.callbackErr.bind(this);
	this.socketCom=this.socketCom.bind(this);

	}


	handleChangeLogin(e){
		console.log("IN CHANGE LOGIN");
		this.state.login = e.target.value;
		return;
	}

  	
 	callbackErr(msg){
		console.error('Network Failure ?');
		console.error(msg);
	}

	socketCom(){

	}

	getSlid(slid){
		console.log("GET SLID ? ")
		console.log(slid);
        var slid_final =  (<Slid
			                key={slid.id}
			                slid = {slid}
			                displayMode = "SHORT"
			                contentMap = {this.state.contentMap}
			                editionIsPossible = "true"
			              />);
        return slid_final;

    }

 render() {
 		const slidDisplay = this.getSlid({
                id : "", 
                title :"Nabil", 
                txt :"Nabilon",
                content_id :"1",                
          });
	 return (
	 	<Provider store={store} >
		 <div className='container-fluid height-100'>	
			 <h1>WATCHER</h1>
			 {slidDisplay}
		 </div>
		</Provider>
	 	);
	 }
}

