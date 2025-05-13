package com.project.demo.entities;




import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class MedicalRecord {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int record_id;
    private String diagnosis;
    private String prescription;
    private String treatment;
    private String date_of_record;
	
    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

	public int getRecord_id() {
		return record_id;
	}

	public void setRecord_id(int record_id) {
		this.record_id = record_id;
	}

	public String getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getTreatment() {
		return treatment;
	}

	public void setTreatment(String treatment) {
		this.treatment = treatment;
	}

	public String getDate_of_record() {
		return date_of_record;
	}

	public void setDate_of_record(String date_of_record) {
		this.date_of_record = date_of_record;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public MedicalRecord() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MedicalRecord(int record_id, String diagnosis, String prescription, String treatment,
			String date_of_record, Patient patient) {
		super();
		this.record_id = record_id;
		this.diagnosis = diagnosis;
		this.prescription = prescription;
		this.treatment = treatment;
		this.date_of_record = date_of_record;
		this.patient = patient;
	} 
    
    
}
