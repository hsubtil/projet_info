package ejb;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import common.model.UserModel;

@Stateless
public class UserDao {

	@PersistenceContext EntityManager primary;
	public UserDao() {
		// TODO Auto-generated constructor stub
	}

	public List<UserModel> getAllUser(){
		System.out.println("getAllUser BEGIN ");
//		List <UserModel> userList = primary.createQuery("from UserModel").getResultList();
		
		System.out.println(primary.find(UserModel.class, 1));
		
		System.out.println("getAllUser END ");
		return null;
	}
}
