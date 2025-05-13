package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.dao.HospitalDAO;
import com.project.demo.entities.Hospital;

@Service
public class HospitalService {
	@Autowired
	HospitalDAO dao;
	
	public String HospitalData(Hospital hospital) {
		return dao.InsertData(hospital);
	}
	
	public String DeleteHospitalData(int hospital_id) {
		return dao.DeleteHospitalData(hospital_id);
	}
	
	public String UpdateHospitalData(Hospital hospital) {
		return dao.UpdateHospital(hospital);
	}
	
	public Hospital SingleHospitalData(int hospital_id) {
		return dao.GetSingleHospitalData(hospital_id);
	}
	
	public List<Object> AllHospitalRecord() {
		return dao.FetchAllHospitalrData();
	}
}
