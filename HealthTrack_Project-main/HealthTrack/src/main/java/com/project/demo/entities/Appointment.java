package com.project.demo.entities;

import java.time.LocalDateTime;



import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity

public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int appointment_id;
	private String appointment_date;
	private String status;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="patient_id")
	private Patient patient;

	public int getAppointment_id() {
		return appointment_id;
	}

	public void setAppointment_id(int appointment_id) {
		this.appointment_id = appointment_id;
	}

	public String getAppointment_date() {
		return appointment_date;
	}

	public void setAppointment_date(String appointment_date) {
		this.appointment_date = appointment_date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Appointment(int appointment_id, String appointment_date, String status, Patient patient) {
		super();
		this.appointment_id = appointment_id;
		this.appointment_date = appointment_date;
		this.status = status;
		this.patient = patient;
	}
	
	
	
}
