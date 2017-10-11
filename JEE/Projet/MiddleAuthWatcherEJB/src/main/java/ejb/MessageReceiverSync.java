package ejb;

import javax.annotation.Resource;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.ejb.EJB;
import javax.inject.Inject;
import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.ObjectMessage;
import javax.jms.Queue;
import javax.jms.TextMessage;
import javax.jms.Topic;

import common.model.UserModel;

/**
 * Session Bean implementation class MessageReceiverSync
 */
@Stateless
@LocalBean
public class MessageReceiverSync implements MessageReceiverSyncLocal {

    @Inject JMSContext context;
    
	@Resource(mappedName = "java:/jms/queue/watcherqueue") Queue queue;
	
	public UserModel receiveMessage() {
		
		JMSConsumer consumer = context.createConsumer(queue);
		Message message = consumer.receive(3000);
		UserModel userModel = new UserModel ();
		try{
			System.out.println(">>> receiveMessage() - " + message.toString());
			if (TextMessage.class.isInstance(message))
			{
				TextMessage textMessage = (TextMessage)message;
				String jsonMsg = textMessage.getText();
			}
			else if(ObjectMessage.class.isInstance(message))
			{
				ObjectMessage objectMessage = (ObjectMessage) message;
				userModel = (UserModel) objectMessage.getObject();
			}	
		} catch (JMSException e) {
	        e.printStackTrace();
	    }
		
		return userModel;
	}

}
