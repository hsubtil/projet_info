import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import '../../lib/bootstrap-3.3.7/dist/css/bootstrap.min.css';
import Main from '../mainPanel/Main';
import Watch from '../watchPanel/Watch';

var Comm = require('../../services/Comm.js');

export default class Login extends React.Component{
 constructor(props) {
 super(props);

	this.comm=new Comm(); 
 	this.state = {
 		login : this.props.login,
 		password : this.props.password,
        };

    // Bind local function to the current object
	this.handleChangeLogin=this.handleChangeLogin.bind(this);
	this.handleChangePassword=this.handleChangePassword.bind(this);
	this.checkLogin=this.checkLogin.bind(this);
	this.callbackErr=this.callbackErr.bind(this);

	}


	handleChangeLogin(e){
		console.log("IN CHANGE LOGIN");
		this.state.login = e.target.value;
		return;
	}

	handleChangePassword(e){
		this.state.password = e.target.value;
		return;
	}
  	checkLogin(){
  		console.log("IN CHECK LOGIN");
  		var json_to_send = {'login':this.state.login,'password':this.state.password};
  		console.log(json_to_send);
  		this.comm.emitLogin(json_to_send,function(reply){
  			if(reply === "")
		    {
		    	console.log("Empty reply from JEE webservice");	  
		    	//response.redirect("/");  // TODO Page erreur de connection: erreur du webservice
		    }
		    else{
		  		if(reply['validAuth'] === false){
		  			console.log("validAuth is false");
		  			alert('Login or password invalid, please try again ;)');
			    	//response.redirect("/");  // TODO Page erreur de connection avec login pwd incorrecte
			    	
			    }
			    else{
			 
			  		if(reply['role'] === 'ADMIN'){
				    	//response.redirect("/admin");
				    	ReactDOM.render(<Main />, document.getElementById('root'));
				    }
				    else{
				    	//response.redirect("/watch");	
				    	ReactDOM.render(<Watch />, document.getElementById('root'));
    
				    }
				}
		    } 			
  		});
 	}

 	callbackErr(msg){
		console.error('Network Failure ?');
		console.error(msg);
	}

 render() {
 		
	 return (
		 <div className='container-fluid height-100'>
		 	<h1>Login Page</h1>
		 	<form>
		 		<label> Login :</label>
		 		<input type="text" id="login" onChange={this.handleChangeLogin}/><br/>
		 		<label> Password :</label>
		 		<input  type="password" id="password" onChange={this.handleChangePassword}/><br/>
		 		<input type="button" value="Connexion" onClick={this.checkLogin}/>
		 	</form>
		 </div>
	 	);
	 }
}
