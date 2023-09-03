package com.demo.TheFitClub.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int login_id;
	private String userName;
	private String password;
	private String role;
	public login() {
		super();
	}
	public login(int login_id, String userName, String password, String role) {
		super();
		this.login_id = login_id;
		this.userName = userName;
		this.password = password;
		this.role = role;
	}
	public int getLogin_id() {
		return login_id;
	}
	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "login [login_id=" + login_id + ", userName=" + userName + ", password=" + password + ", role=" + role
				+ "]";
	}
	
	
}
