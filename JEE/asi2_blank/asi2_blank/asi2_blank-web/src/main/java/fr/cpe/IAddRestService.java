package fr.cpe;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

@Path("/add")
public interface IAddRestService {	
	@GET
	@Produces("text/plain")
	@Path("/")
	int add(@QueryParam("a") int Numbers[]);
}
