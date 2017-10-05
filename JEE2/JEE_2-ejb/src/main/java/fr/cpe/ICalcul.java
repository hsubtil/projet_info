package fr.cpe;

import javax.ejb.Local;

@Local
public interface ICalcul {
	String calcul(int [] numbers);
}