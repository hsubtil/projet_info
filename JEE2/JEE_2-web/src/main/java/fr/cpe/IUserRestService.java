package fr.cpe;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import fr.cpe.model.User;

@Path("/users")
public interface IUserRestService {
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	@Path("/")
	void saveUser(User user);
}
