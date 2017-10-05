package fr.cpe;

import javax.ejb.Local;

@Local
public interface IHello {
	String sayHello(String name);
}