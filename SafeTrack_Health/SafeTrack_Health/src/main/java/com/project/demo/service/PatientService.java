package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.dao.PatientDao;
import com.project.demo.entities.Hospital;
import com.project.demo.entities.Patient;

@Service
public class PatientService {
	@Autowired
	PatientDao dao;
	
	public String PatientData(Patient patient) {
		return dao.InsertData(patient);
	}
	
	public String DeletePatientData(int patient_id) {
		return dao.DeletePatientData(patient_id);
	}
	
	public String UpdatePatientData(Patient patient) {
		return dao.UpdatPatient(patient);
	}
	
	public Patient SinglePatientData(int patient_id) {
		return dao.GetSinglePatientData(patient_id);
	}
	
	public List<Object> AllPatientRecord() {
		return dao.FetchAllPatientData();
	}
}

