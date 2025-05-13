package com.project.demo.controlles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.entities.Hospital;
import com.project.demo.service.HospitalService;

@RestController
@RequestMapping("/hospital")
public class HospitalController {
	@Autowired
	HospitalService service;
	
	@PostMapping("/insertdata-hospital")
	public String HospitalData(@RequestBody Hospital hospital) {
		return service.HospitalData(hospital);
	}
	
	@DeleteMapping("/deletedata-hospital/{hospital_id}")
	public String DeleteHospitalData(@PathVariable int hospital_id) {
		return service.DeleteHospitalData(hospital_id);
	}
	
	@PutMapping("/updatedata-hospital")
	public String UpdateHospitalData(@RequestBody Hospital hospital) {
		return service.UpdateHospitalData(hospital);
	}
	@GetMapping("/singledata-hospital/{hospital_id}")
	public Hospital SingleData(@PathVariable int hospital_id) {
		return service.SingleHospitalData(hospital_id);
	}
	
	@GetMapping("/alldata-hospital")
	public List<Object> AllData() {
		return service.AllHospitalRecord();
	}
}
