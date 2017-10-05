package fr.cpe;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

@Path("/calcul")
public interface ICalculRestService {
	
	@GET
	@Produces("text/plain")
	@Path("/")
	String calcul(@QueryParam("a") int [] numbers);
}