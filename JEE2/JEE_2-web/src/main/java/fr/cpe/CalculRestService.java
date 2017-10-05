package fr.cpe;

import javax.inject.Inject;

import org.jboss.logging.Logger;

import fr.cpe.ICalcul;
import fr.cpe.ICalculRestService;

public class CalculRestService implements ICalculRestService{
	
	Logger logger = Logger.getLogger(CalculRestService.class.getName());
	
	@Inject
	private ICalcul calculService;

	public String calcul(int [] numbers){
		if(numbers.length > 0)
		{
		  for( int i=0; i < numbers.length; i++)
		  {
			   logger.info(">>> calcul() " + numbers[i]);
		  }
		}
		else {
			logger.info(">>> calcu() no numbers");
		}
		
		return calculService.calcul(numbers);
	}
}