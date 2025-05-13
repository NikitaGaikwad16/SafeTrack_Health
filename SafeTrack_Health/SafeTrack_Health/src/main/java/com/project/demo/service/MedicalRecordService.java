package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.dao.MedicalRecordDAO;

import com.project.demo.entities.MedicalRecord;

@Service
public class MedicalRecordService {
	
	@Autowired
	MedicalRecordDAO dao;
	
	public String MedicalRecordData(MedicalRecord medical) {
		return dao.InsertData(medical);
	}
	
	public String DeleteMedicalRecord(int record_id) {
		return dao.DeleteMedicalRecord(record_id);
	}
	
	public String UpdateMedicalRecord(MedicalRecord medical) {
		return dao.UpdateMedicalRecord(medical);
	}
	
	public MedicalRecord SingleMedicalRecord(int record_id) {
		return dao.GetSingleMedicalRecord(record_id);
	}
	
	public List<Object> AllMedicalRecord() {
		return dao.FetchAllMedicalRecordData();
	}
}
