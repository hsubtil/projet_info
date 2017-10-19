package fr.cpe.rest.impl;

import java.util.logging.Logger;

import javax.ejb.EJB;

import common.model.User;
import common.model.UserModel;
import ejb.MessageReceiverSyncLocal;
import ejb.MessageSenderLocal;
import ejb.MessageSenderQueueLocal;
import fr.cpe.rest.IWatcherAuth;

public class WatcherAuth implements IWatcherAuth{
	
	//private static final long serialVersionUID = 1L;
	// private JmsSender sender;
	@EJB
	MessageSenderLocal senderTopic;
	@EJB
	MessageReceiverSyncLocal receiverQueue;
	
	@EJB
	MessageSenderQueueLocal senderQueue;
	
	Logger logger= Logger.getLogger(WatcherAuth.class.getName());
	
	@Override
	public String getUser(User user){ //User user
		System.out.println(user.toJSON());
		
		UserModel fullUser = new UserModel ();
		fullUser.setLogin(user.getLogin());
		fullUser.setPassword(user.getPassword());
		
		//user.setRole("ADMIN");	
		//user.setValidAuth(true);
		
		//TO DO create method which queries user's infos from userModel
		//fullUser.setRole("ADMIN");//TO Do:  delete when method created
		
		
		//senderQueue.sendMessage(fullUser);
		
		//send to topic
		senderTopic.sendMessage(fullUser);
		System.out.println("fulUser " + fullUser.toString());
		
		
		//receive from queue
		UserModel fullUser2 = receiverQueue.receiveMessage();			
		System.out.println("fulUser2 " + fullUser2.toString());
		
		
		//String returnString = "{\"login\" : \"" + fullUser2.getLogin() + "\", \"validAuth\" : \"true\", \"role\" : \"" + fullUser2.getRole() + "\"}";
		//TO Do user.to string => add validAuth and role to user class
		user.setRole(fullUser2.getRole());
		System.out.println("user " + user.toString());
		if(user.getRole().equals("ADMIN") || user.getRole().equals("USER")){
			user.setValidAuth(true);
		}
		else{
			user.setValidAuth(false);
		}
		
		return user.toJSON();
	}
	

}
