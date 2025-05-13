package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.dao.DoctorDao;
import com.project.demo.entities.Doctor;
import com.project.demo.entities.Hospital;

@Service
public class DoctorService {
	@Autowired
	DoctorDao dao;
	
	public String DoctorData(Doctor doctor) {
		return dao.InsertData(doctor);
	
	}
	
	public String DeleteDoctorData(int doctor_id) {
		return dao.DeleteDoctorData(doctor_id);
	}
	
	public String UpdateDoctorData(Doctor doctor ) {
		return dao.UpdateDoctor(doctor);
	}
	
	public Doctor SingleDoctorData(int doctor_id) {
		return dao.GetSingleDoctorData(doctor_id);
	}
	
	public List<Object> AllDoctorRecord() {
		return dao. FetchAllDoctorData();
	}
}
