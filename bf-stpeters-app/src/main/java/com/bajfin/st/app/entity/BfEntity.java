package com.bajfin.st.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BfEntity {
  
	@Id
	String email;
	String password;
	String name;
	String number;
	public BfEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BfEntity(String email, String password, String name, String number) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.number = number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	@Override
	public String toString() {
		return "BfEntity [email=" + email + ", password=" + password + ", name=" + name + ", number=" + number + "]";
	}
	  
	
	
}
