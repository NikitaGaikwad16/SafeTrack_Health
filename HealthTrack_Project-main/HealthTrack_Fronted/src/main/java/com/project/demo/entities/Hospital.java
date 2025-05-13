package com.project.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Hospital {
	
	@Id
	private int hospital_id;
	private String hospital_name;
	private String hospital_location;
	public int getHospital_id() {
		return hospital_id;
	}
	public void setHospital_id(int hospital_id) {
		this.hospital_id = hospital_id;
	}
	public String getHospital_name() {
		return hospital_name;
	}
	public void setHospital_name(String hospital_name) {
		this.hospital_name = hospital_name;
	}
	public String getHospital_location() {
		return hospital_location;
	}
	public void setHospital_location(String hospital_location) {
		this.hospital_location = hospital_location;
	}
	public Hospital() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Hospital(int hospital_id, String hospital_name, String hospital_location) {
		super();
		this.hospital_id = hospital_id;
		this.hospital_name = hospital_name;
		this.hospital_location = hospital_location;
	}
	
	
}
