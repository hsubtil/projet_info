package fr.cpe.impl;

import javax.ejb.Stateless;

import fr.cpe.IHello;

@Stateless
public class Hello implements IHello{
	public String sayHello(String name){
		return "Hello " + name;
	}
	
} 