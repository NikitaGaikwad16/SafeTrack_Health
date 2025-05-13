package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.dao.AppointmentDAO;
import com.project.demo.entities.Appointment;


@Service
public class AppointmentService {
	@Autowired
	AppointmentDAO dao;
	
	public String AppointmentData(Appointment appointment) {
		return dao.insertData(appointment);
	}
	
	public String DeleteAppointmentData(int appointment_id) {
		return dao.DeleteAppointmentData(appointment_id);
	}
	
	public String UpdateAppointmentData(Appointment appointment) {
		return dao.UpdateAppointment(appointment);
	}
	
	public Appointment SingleAppointmentData(int appointment_id) {
		return dao.GetSingleAppointmentData(appointment_id);
	}
	
	public List<Object> AllRecordAppointment() {
		return dao.FetchAllAppointmentData();
	}
}
