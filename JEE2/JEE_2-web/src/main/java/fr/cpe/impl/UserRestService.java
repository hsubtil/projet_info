package fr.cpe.impl;

import java.util.logging.Logger;

import javax.inject.Inject;

import fr.cpe.IUserRestService;
import fr.cpe.dao.UserDao;
import fr.cpe.model.User;

public class UserRestService implements IUserRestService{
	Logger logger = Logger.getLogger(UserRestService.class.getName());
	@Inject
	UserDao userDao;
	
	@Override
	public void saveUser (User user){
		userDao.save(user);
	}
}
