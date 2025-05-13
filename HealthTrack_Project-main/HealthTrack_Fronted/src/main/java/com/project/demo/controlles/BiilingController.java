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

import com.project.demo.entities.Billing;
import com.project.demo.service.BillingService;

@RestController
@RequestMapping("/bill")
@CrossOrigin("*")
public class BiilingController {
	@Autowired
	BillingService service;

	@PostMapping("/add-billing")
	public String BillData(@RequestBody Billing billing) {
		return service.InsertData(billing);
	}

	@DeleteMapping("/delete-bill/{id}")
	public String BillData(@PathVariable("id") int id) {
		System.out.println(id);
		return service.RemoveData(id);
	}

	@PutMapping("/update-bill")
	public String UpdateBill(@RequestBody Billing billing) {
		return service.UpdateBill(billing);
	}

	@GetMapping("/Single-Bill/{bill_id}")
	public Billing GetSingleBill(@PathVariable int bill_id) {
		return service.GetSingleData(bill_id);
	}
	
	@GetMapping("/alldata-bill")
	public List<Object> AllBillData() {
		return service.AllBillData();
	}
}
