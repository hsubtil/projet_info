package common.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="users")
public class UserModel implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	@Column(name="id")
	private int id;
	
	@NotNull
	@Column(name="login", nullable = false)
	private String login;
	
	@NotNull
	@Column(name="password", nullable = false)
	private String password;
	
	@Column (name="first_name")
	private String firstName;
	
	@Column (name="last_name")
	private String lastName;
	
	@Column (name="role")
	private String role;

	
	public UserModel(){
		super();
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setSurName(String firstName) {
		this.firstName = firstName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role.toString();
	}
	
	public Role role() {
		return Role.valueOf(role);
	}

	public void setRole(Role role) {
		this.role = role.name();
	}
	
	@Override
	public String toString() {
		return "UserModel [id=" + id + ", login=" + login + ", password=" + password + ", lastName=" + lastName
				+ ", surName=" + firstName + ", role=" + role + "]";
	}


}
