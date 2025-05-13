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


import com.project.demo.entities.Patient;
import com.project.demo.service.PatientService;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {
	@Autowired
	PatientService service;
	
	@PostMapping("/insertdata-patient")
	public String PatientData(@RequestBody Patient patient) {
		return service.PatientData(patient);
	}
	
	@DeleteMapping("/deletedata-patient/{patient_id}")
	public String DeletePatientData(@PathVariable int patient_id) {
		return service.DeletePatientData(patient_id);
	}
	
	@PutMapping("/updatedata-patient")
	public String UpdateUpdateData(@RequestBody Patient patient) {
		return service.UpdatePatientData(patient);
	}
	@GetMapping("/singledata-patient/{patient_id}")
	public Patient SingleData(@PathVariable int patient_id) {
		return service.SinglePatientData(patient_id);
	}
	
	@GetMapping("/alldata-patient")
	public List<Object> AllData() {
		return service.AllPatientRecord();
	}
	
	
}

