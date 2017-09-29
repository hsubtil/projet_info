package fr.cpe.impl;

import javax.ejb.Stateless;

import fr.cpe.IHello;

@Stateless
public class Hello implements IHello{
	@Override
	public String sayHello(String Name){
		if (Name == null || Name.length()<=0){
			return "Hello";
		}
		else{
		return "Hello "+ Name;
		}
	}
}