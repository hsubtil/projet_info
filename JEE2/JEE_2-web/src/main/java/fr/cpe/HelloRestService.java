package fr.cpe;

import javax.inject.Inject;

import org.jboss.logging.Logger;

import fr.cpe.IHello;
import fr.cpe.IHelloRestService;
import fr.cpe.jms.producer.IHelloJmsProducer;

public class HelloRestService implements IHelloRestService{
	
	Logger logger = Logger.getLogger(HelloRestService.class.getName());
	
	@Inject
	private IHello helloService;
	@Inject
	private IHelloJmsProducer helloJmsProducerService;


	public String sayHello(String name){
		logger.info(">>> hello() " + name);
		helloJmsProducerService.sayHello(name);
		return helloService.sayHello(name);
	}
}