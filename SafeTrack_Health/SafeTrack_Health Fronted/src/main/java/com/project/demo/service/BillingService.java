package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.dao.BiilingDao;
import com.project.demo.entities.Billing;

@Service
public class BillingService {
	@Autowired
	BiilingDao dao;

	public String InsertData(Billing billing) {
		return dao.InsertBilling(billing);
	}

	public String RemoveData(int id) {
		return dao.RemoveBill(id);
	}

	public String UpdateBill(Billing billing) {
		return dao.UpdateBill(billing);
	}

	public Billing GetSingleData(int bill_id) {
		return dao.GetSingleData(bill_id);
	}
	
	public List<Object> AllBillData() {
		return dao.AllData();
	}
}
