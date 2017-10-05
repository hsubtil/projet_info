package fr.cpe.impl;

import javax.ejb.Stateless;

import fr.cpe.ICalcul;

@Stateless
public class Calcul implements ICalcul{
	public String calcul(int [] numbers){
		int  sum = 0;
		if(numbers.length > 0)
		{
		  for( int i=0; i < numbers.length; i++)
		  {
			   sum += numbers[i];
		  }
		}
		return "Resultat = " + sum;
				
	}
}