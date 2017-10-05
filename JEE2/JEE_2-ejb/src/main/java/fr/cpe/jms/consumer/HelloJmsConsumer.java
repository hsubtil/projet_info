package fr.cpe.jms.consumer;

import java.util.logging.Logger;

import javax.ejb.MessageDriven;
import javax.ejb.ActivationConfigProperty;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;

@MessageDriven(name="HelloJmsMDB", activationConfig = {
	@ActivationConfigProperty(propertyName= "destinationType", propertyValue= "javax.jms.Queue"),
	@ActivationConfigProperty(propertyName= "destination", propertyValue= "JEE_2-HelloWorld"),	
	@ActivationConfigProperty(propertyName= "acknowledgeMode", propertyValue= "Auto-acknowledge")
})
public class HelloJmsConsumer implements MessageListener{
	private static Logger logger = Logger.getLogger(HelloJmsConsumer.class.getName());
	
	@Override
	public void onMessage(Message message){
		logger.info(">>> onMessage();  - " + message);
		
		try {
			Thread.sleep(3000);
		}catch (InterruptedException e){			
			e.printStackTrace();
		}
		
		if(message instanceof TextMessage){
			TextMessage textMessage = (TextMessage) message;
			
			try{
				logger.info("Hello " + textMessage.getText());
			}catch (JMSException e){
				e.printStackTrace();
			}
		}
	}


}