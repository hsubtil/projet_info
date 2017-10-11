package ejb;

import javax.ejb.Local;

import common.model.UserModel;

@Local
public interface MessageReceiverSyncLocal {
	
	public UserModel receiveMessage();

}
