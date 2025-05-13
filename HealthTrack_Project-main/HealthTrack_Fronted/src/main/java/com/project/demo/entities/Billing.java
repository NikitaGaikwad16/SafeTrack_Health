package com.project.demo.entities;

import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Billing {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	

//	 @OneToOne
//	 @JoinColumn(name = "patient_id", referencedColumnName = "id") 
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "patient_id")
	private Patient patient;
	
	private int totalAmount;
	private String paymentStatus;
	private String billingDate;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;

	}

	public int getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getBillingDate() {
		return billingDate;
	}

	public void setBillingDate(String billingDate) {
		this.billingDate = billingDate;
	}

	public Billing() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Billing(int id, Patient patient, int totalAmount, String paymentStatus, String billingDate) {
		super();
		this.id = id;
		this.patient = patient;
		this.totalAmount = totalAmount;
		this.paymentStatus = paymentStatus;
		this.billingDate = billingDate;
	}

}
