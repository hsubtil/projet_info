package fr.cpe.rest.impl;

import java.util.logging.Logger;

import common.model.User;
import common.model.UserModel;
import fr.cpe.rest.IWatcherAuth;

public class WatcherAuth implements IWatcherAuth{
	
	Logger logger= Logger.getLogger(WatcherAuth.class.getName());
	
	@Override
	public String getUser (User user){
		
		UserModel fullUser = new UserModel ();
		fullUser.setLogin(user.getLogin());
		fullUser.setPassword(user.getPassword());
		
		//TO DO create method which queries user's infos from userModel
		fullUser.setRole("ADMIN");//TO Do:  delete when method created
		System.out.println(fullUser.toString());
		
		String returnString = "{\"login\" : \"" + fullUser.getLogin() + "\", \"validAuth\" : \"true\", \"role\" : \"" + fullUser.getRole() + "\"}";
		return returnString;
	}
	

}
