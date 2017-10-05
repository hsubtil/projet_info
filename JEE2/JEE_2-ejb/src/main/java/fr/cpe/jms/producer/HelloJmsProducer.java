package fr.cpe.jms.producer;


import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSConnectionFactory;
import javax.jms.JMSContext;
import javax.jms.Queue;

@Stateless
public class HelloJmsProducer implements IHelloJmsProducer{
	
	@Resource(name="java:/JEE_2-hello")
	private Queue queue;
	
	@Inject
	//@JMSConnectionFactory(value = "java:comp/DefaultJMSConnectionFactory")
	private JMSContext context;
	
	
	public void sayHello(String name){
		context.createProducer().send(queue, name);
	}
}