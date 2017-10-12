package common.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



public class User {
		
	@NotNull
	private String login;
	
	@NotNull
	private String password;
	
	
	private boolean validAuth;
	
	private Role role;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	

	public void setValidAuth(boolean validAuth) {
		this.validAuth = validAuth;
	}
	

	public void setRole(Role role2) {
		this.role = role2;
	}

	@Override
	public String toString() {
		return "User [login=" + login + ", password=" + password + "]";
	}
	
	public String toJSON() {
		return "{\"login\":\"" + login + "\", \"validAuth\":\"" + validAuth + "\", \"role\":\"" + role + "\"}";
	}

}