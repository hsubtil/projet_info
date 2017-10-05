package fr.cpe.jms.producer;

import javax.ejb.Local;

@Local
public interface IHelloJmsProducer {
	void sayHello(String name);
}