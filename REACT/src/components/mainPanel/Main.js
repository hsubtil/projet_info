import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7/dist/css/bootstrap.min.css';
import Content from '../common/content/containers/Content';
import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel';
import Slid from '../common/slid/containers/Slid';
import Presentation from '../common/presentation/containers/Presentation';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';


import * as contentMapTmp from '../../source/contentMap.json';
import * as presTmp from '../../source/pres.json';

import {updateContentMap,updatePresentation} from '../../actions';

var Comm = require('../../services/Comm.js');
const store = createStore(globalReducer);

//<Content id = "premiere slide" src="https://www.youtube.com/embed/gfe4emhwQkE" type ="video" title ="Slide lalalala" onlyContent = "true"/>
//				 	<Content id = "deuxieme slide" src ="https://www.w3schools.com/css/trolltunga.jpg" type ="img" title ="Slide lalalala" onlyContent = "false"/>
//					<Content id = "premiere slide" src ="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal" type ="web" title ="Slide lalalala" onlyContent = "false"/>

export default class Main extends React.Component{
 constructor(props) {
 super(props);

	this.comm=new Comm(); 
 	this.state = {
 	    contentMap:contentMapTmp,
            id : this.props.id,
            src : this.props.src,
            type : this.props.type,
            title : this.props.title,
            onlyContent : this.props.onlyContent,
            slidObject: {},
            pres : presTmp,
        };


		store.dispatch(updateContentMap(contentMapTmp)); 
		store.dispatch(updatePresentation(presTmp));  
		
		// Bind local function to the current object
		this.loadContentUpdate=this.loadContentUpdate.bind(this);
		this.loadPresUpdate=this.loadPresUpdate.bind(this);
		this.callbackErr =this.callbackErr.bind(this);
		//FIRST ACTIONS
		// try to load the contentMap from the server
		this.comm.loadContent(this.loadContentUpdate,this.callbackErr);
		// try to load the presentation from the server
		this.comm.loadPres(0,this.loadPresUpdate,this.callbackErr); 
		// create the sokect connection between the server and the web browser
		this.comm.socketConnection("adsdq18qqdqd");  //Problem ! this.state.uuid is null. I've put some rand value
		store.subscribe(() => {
		  // TODO Ajouter declanchement des evenements sur la pres (start, ... );
		    console.log('IN MAIN SUBSCRIBE');
		    console.log(store.getState().commandReducer);
		    // If SAVE_CMD : Save Pres
		      if(store.getState().commandReducer.cmdPres == 'SAVE_CMD'){
			  this.comm.savPres(
			    store.getState().updateModelReducer.presentation,
			    this.callbackErr
			    );
		      }
		      switch(store.getState().commandReducer.cmdPres){
			case 'PLAY':
			  this.comm.play("0"); // TODO : Check id
			  break;
			case 'BEGIN':
			  this.comm.begin();
			  break;
			case 'FORWARD':
			  this.comm.forward();
			  break;
			case 'BACKWARD':
			  this.comm.backward();
			  break;
			case 'END':
			  this.comm.end();
			  break;
			case 'PAUSE':
			  this.comm.pause();
			  break;
			default:
			  return;
		      }

		      });

	}
	
loadContentUpdate(data){
	//send action to the store for update the current contentMap
	store.dispatch(updateContentMap(data));
}
loadPresUpdate(data){
	//send action to the store for update the current presentation
	store.dispatch(updatePresentation(data));
}
callbackErr(msg){
	console.error('Network Failure ?');
	console.error(msg);
}


 render() {
 		
	const initSlid = {
            id: "1",
            title: "A",
            txt: "some txt here",
            content_id:"1",
        };  // TODO Pia : Remove that ? c'est shalg !

	 return (
	 	<Provider store={store} >
		 <div className='container-fluid height-100'>
			 <div className="row height-100">
				 <div className='col-md-3 col-lg-3 height-100'>
				 	<Presentation pres = {this.state.pres} contentMap = {this.state.contentMap}/>	
				  </div>
				<div className='col-md-6 col-lg-6 height-100'>
					<EditSlidPanel selected_slid = {initSlid} contentMap = {this.state.contentMap}/>
				</div>
				<div className='col-md-3 col-lg-3 height-100'>
					<BrowseContentPanel contentMap = {this.state.contentMap} />
				</div>
			 </div>
		 </div>
		</Provider>
	 	);
	 }
}
