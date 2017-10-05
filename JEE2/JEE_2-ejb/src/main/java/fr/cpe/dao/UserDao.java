package fr.cpe.dao;

import java.io.Serializable;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import fr.cpe.model.User;

@Stateless
public class UserDao implements Serializable{
	
	@PersistenceContext
	private EntityManager em;
	
	public void save(User user){
		em.persist(user);
	}

}
