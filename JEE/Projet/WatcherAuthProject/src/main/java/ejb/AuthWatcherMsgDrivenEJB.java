package ejb;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ejb.ActivationConfigProperty;
import javax.ejb.EJB;
import javax.ejb.MessageDriven;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;
import javax.jms.TextMessage;

import common.model.Role;
import common.model.UserModel;
import model.DataContainer;

/**
 * Message-Driven Bean implementation class for: AuthWatcherMsgDrivenEJB
 */
@MessageDriven(
		activationConfig = { 
				@ActivationConfigProperty(
						propertyName = "destinationType", 
						propertyValue = "javax.jms.Topic"),
				@ActivationConfigProperty(
						propertyName = "destination",
						propertyValue = "java:/jms/watcherAuthJMS")
						})
		
public class AuthWatcherMsgDrivenEJB implements MessageListener {

	
	@EJB MessageSenderQueueLocal sender;
	
	@EJB DataContainer dataContainer;
	
	@EJB UserDao userDao;
	/**
     * @see MessageListener#onMessage(Message)
     */
    public void onMessage(Message message) {
    	try {
    		if (message instanceof TextMessage) {
	    		System.out.println("Topic: I received a TextMessage at " + new Date());
	    		TextMessage msg = (TextMessage) message;
	    		System.out.println("Message is : " + msg.getText());
    		
    		} else if (message instanceof ObjectMessage) {   				
    			System.out.println("Topic: I received an ObjectMessage at " + new Date());
    			ObjectMessage msg = (ObjectMessage) message;
    			
    			if( msg.getObject() instanceof UserModel){
    				UserModel user=(UserModel)msg.getObject();
    				
    				System.out.println("User Details: ");
    				System.out.println("login:"+user.getLogin());
    				System.out.println("pwd:"+user.getPassword());
    				
    				List <UserModel> listUser = userDao.getAllUser();  				
    				System.out.println("listUser:"+ listUser.toString());
    				
    				Role currentTestRole=dataContainer.checkUser(user);
    				System.out.println("Role:"+ currentTestRole);
    				if( Role.NONE==currentTestRole){
    					System.out.println("Role NONe: "+ currentTestRole);
    					sender.sendMessage(user);
    				}else{  		
    					System.out.println("Role ELSE: "+ currentTestRole);
    					user.setRole(currentTestRole); 
    					System.out.println("user " + user.toString());
    					sender.sendMessage(user);
    				}
    			}
    		} else {
    			System.out.println("Not valid message for this Queue MDB");
    		}
    	} catch (JMSException e) {
    		e.printStackTrace();
    	}
    }   

}
