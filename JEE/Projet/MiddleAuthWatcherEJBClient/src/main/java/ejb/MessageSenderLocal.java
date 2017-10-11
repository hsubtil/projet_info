package ejb;

import javax.ejb.Local;

import common.model.UserModel;

@Local
public interface MessageSenderLocal {

	public void sendMessage(String message);
	
	public void sendMessage(UserModel user);
}
