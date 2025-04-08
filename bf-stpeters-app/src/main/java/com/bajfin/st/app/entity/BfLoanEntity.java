package com.bajfin.st.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BfLoanEntity {
    @Id
	String pan;
	String name;
	String aadhaar;
	String loan;
	String mobile;
	String address;
	public BfLoanEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BfLoanEntity(String pan, String name, String aadhaar, String loan, String mobile, String address) {
		super();
		this.pan = pan;
		this.name = name;
		this.aadhaar = aadhaar;
		this.loan = loan;
		this.mobile = mobile;
		this.address = address;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAadhaar() {
		return aadhaar;
	}
	public void setAadhaar(String aadhaar) {
		this.aadhaar = aadhaar;
	}
	public String getLoan() {
		return loan;
	}
	public void setLoan(String loan) {
		this.loan = loan;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "BfLoanEntity [pan=" + pan + ", name=" + name + ", aadhaar=" + aadhaar + ", loan=" + loan + ", mobile="
				+ mobile + ", address=" + address + "]";
	}
	
	
	
	
	
	
	
	
}
