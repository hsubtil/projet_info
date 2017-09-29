package fr.cpe.impl;

import javax.ejb.Stateless;

import org.jboss.logging.Logger;

import fr.cpe.IAdd;

@Stateless
public class Add implements IAdd{
	Logger logger = Logger.getLogger(Add.class.getName());
	@Override
	public int calculateSum(int Numbers[]){
		int total = 0;
		// TODO : add protection 
		if (Numbers.length <= 0){
			return 0;
		}
		else{
			for (int number : Numbers) {
				logger.info(">>> add - "+ number); 
				total += number;
			}
		logger.info(">>> Total - "+ total); 
		return total;
		}
	}
}