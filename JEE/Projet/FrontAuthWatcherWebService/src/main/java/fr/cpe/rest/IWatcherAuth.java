package fr.cpe.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import common.model.UserModel;

@Path ("/WatcherAuth")
public interface IWatcherAuth {
	
	//TODO create object containing login and password and send it directly in getUser
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	@Path("/")
	UserModel getUser (String login, String password);
	

}
