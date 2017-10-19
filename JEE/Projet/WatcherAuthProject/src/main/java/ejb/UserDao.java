package ejb;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;

import common.model.UserModel;

@Stateless
public class UserDao {

	private List <UserModel> listUser;
	
	@PersistenceContext EntityManager em;
	public UserDao() {
		// TODO Auto-generated constructor stub
	}
	

	/*public List<UserModel> getAllUser(){
		System.out.println("getAllUser BEGIN ");
		List <UserModel> userList = em.createQuery("from UserModel").getResultList();
		
		//System.out.println(em.find(UserModel.class, 1));
		
		System.out.println("userList " + userList);
		System.out.println("getAllUser END ");
		return userList;
	}*/
	
	public String checkUser(UserModel user) {
		
		String role = "NONE";
		UserModel userQuery;
		
	try{userQuery = (UserModel) em.createQuery("from UserModel u where u.login = :login "
				+ " AND u.password = :password")
				.setParameter("login",  user.getLogin())
				.setParameter("password", user.getPassword())
				.getSingleResult();
				
	}catch(NoResultException e){
		System.out.println("NoResultException: User does not exist: ");
		System.out.println("login:"+user.getLogin());
		System.out.println("pwd:"+user.getPassword());
		return role;
	}
	role = userQuery.getRole();
			
		return role;
	}
}
