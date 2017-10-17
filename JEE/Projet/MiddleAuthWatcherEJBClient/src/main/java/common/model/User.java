package common.model;


import javax.validation.constraints.NotNull;



public class User {
		
	@NotNull
	private String login;
	
	@NotNull
	private String password;
	
	
	private boolean validAuth;
	
	private String role;

	public String getLogin() {
		return this.login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return this.password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	

	public void setValidAuth(boolean validAuth) {
		this.validAuth = validAuth;
	}
	
	public String getRole() {
		return this.role;
	}
	
	public void setRole(String role2) {
		this.role = role2;
	}

	@Override
	public String toString() {
		return "User [login=" + login + ", password=" + password + ", role=" + role +  "]";
	}
	
	public String toJSON() {
		return "{\"login\":\"" + login + "\", \"validAuth\":\"" + validAuth + "\", \"role\":\"" + role + "\"}";
	}

}