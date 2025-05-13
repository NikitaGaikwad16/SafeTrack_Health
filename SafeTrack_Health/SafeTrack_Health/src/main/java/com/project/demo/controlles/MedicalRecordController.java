package com.project.demo.controlles;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.project.demo.entities.MedicalRecord;
import com.project.demo.service.MedicalRecordService;

@RestController
@RequestMapping("/medicalrecord")
@CrossOrigin("*")
public class MedicalRecordController {

	@Autowired
	MedicalRecordService service;
	
	@PostMapping("/insertdata-medicalrecord")
	public String MedicalRecordData(@RequestBody MedicalRecord medical) {
		return service.MedicalRecordData(medical);
	}
	
	@DeleteMapping("/deletedata-medical/{record_id}")
	public String DeleteMedicalRecord(@PathVariable int record_id) {
		return service.DeleteMedicalRecord(record_id);
	}
	
	@PutMapping("/updatedata-medical")
	public String UpdateMedicalRecord(@RequestBody MedicalRecord medical) {
		return service.UpdateMedicalRecord(medical);
	}
	
	@GetMapping("/singledata-medical/{record_id}")
	public MedicalRecord SingleData(@PathVariable int record_id) {
		return service.SingleMedicalRecord(record_id);
	}
	
	@GetMapping("/alldata-medical")
	public List<Object> AllData() {
		return service.AllMedicalRecord();
	}
}

