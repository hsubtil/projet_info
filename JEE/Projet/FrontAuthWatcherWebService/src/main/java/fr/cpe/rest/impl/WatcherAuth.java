package fr.cpe.rest.impl;

import java.util.logging.Logger;

import common.model.UserModel;
import fr.cpe.rest.IWatcherAuth;

public class WatcherAuth implements IWatcherAuth{
	
	Logger logger= Logger.getLogger(WatcherAuth.class.getName());
	
	@Override
	public UserModel getUser (String login, String password){
		
		UserModel user = new UserModel ();
		user.setLogin(login);
		user.setPassword(password);
		System.out.println(user.toString());
		//return "it works !!!";
		return user;
	}
	

}
