package fr.cpe;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

@Path("/hello")
public interface IHelloRestService {
	
	@GET
	@Produces("text/plain")
	@Path("/")
	String sayHello(@QueryParam("name") String Name);
}