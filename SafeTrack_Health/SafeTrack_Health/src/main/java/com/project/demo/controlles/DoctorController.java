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

import com.project.demo.entities.Doctor;
import com.project.demo.entities.Hospital;
import com.project.demo.service.DoctorService;

@RestController
@RequestMapping("/doctor")
@CrossOrigin("*")
public class DoctorController {
	@Autowired
	DoctorService service;
	
	@PostMapping("/insertdata-doctor")
	public String HospitalData(@RequestBody Doctor doctor) {
		return service.DoctorData(doctor);
	}
	
	@DeleteMapping("/deletedata-doctor/{doctor_id}")
	public String DeleteDoctorData(@PathVariable int doctor_id) {
		return service.DeleteDoctorData(doctor_id);
	}
	
	@PutMapping("/updatedata-doctor")
	public String UpdateDoctorData(@RequestBody Doctor doctor) {
		return service.UpdateDoctorData(doctor);
	}
	
	@GetMapping("/singledata-doctor/{doctor_id}")
	public Doctor SingleData(@PathVariable int doctor_id) {
		return service.SingleDoctorData(doctor_id);
	}
	
	@GetMapping("/alldata-doctor")
	public List<Object> AllData() {
		return service.AllDoctorRecord();
	}
}
