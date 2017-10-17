package ejb;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import common.model.UserModel;

@Stateless
public class UserDao {

	private List <UserModel> listUser;
	
	@PersistenceContext EntityManager em;
	public UserDao() {
		// TODO Auto-generated constructor stub
	}
	
	@PostConstruct
	public void init(){
		listUser = getAllUser();
	}

	public List<UserModel> getAllUser(){
		System.out.println("getAllUser BEGIN ");
		List <UserModel> userList = em.createQuery("from UserModel").getResultList();
		
		//System.out.println(em.find(UserModel.class, 1));
		
		System.out.println("userList " + userList);
		System.out.println("getAllUser END ");
		return userList;
	}
	
	public String checkUser(UserModel user) {
		
		String role = "NONE";
		
		for(UserModel currentUser : this.listUser ){
			
			if(user.getLogin().equals( currentUser.getLogin() ) 
				&& user.getPassword().equals( currentUser.getPassword() ) ){
				
				role = currentUser.getRole();
			}
		}	
		return role;
	}
}
