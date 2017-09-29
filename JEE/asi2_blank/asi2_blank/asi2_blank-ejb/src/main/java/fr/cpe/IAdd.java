package fr.cpe;

import javax.ejb.Local;

@Local
public interface IAdd {
	int calculateSum(int Numbers[]);
}