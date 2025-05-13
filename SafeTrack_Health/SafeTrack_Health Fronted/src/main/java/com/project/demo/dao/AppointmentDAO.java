package com.project.demo.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.demo.entities.Appointment;


import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;


@Repository
public class AppointmentDAO {
	@Autowired
	SessionFactory sessionfactory;
	
	public String insertData(Appointment appointment) {
		Session session=null;
		Transaction transaction=null;
		String msg=null;
		try {
			session=sessionfactory.openSession();
			transaction=session.beginTransaction();
			session.save(appointment);
			transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}return "data inserted successfully";
		
	}
	
	public String DeleteAppointmentData(int appointment_id) {
		Session session=null;
		Transaction transaction=null;
		String msg=null;
		try {
			session=sessionfactory.openSession();
			transaction=session.beginTransaction();
			Appointment appointment=session.get(Appointment.class,appointment_id);
			session.remove(appointment);
			transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}return "data deleted successfully";
	}
	
	public String UpdateAppointment(Appointment appointment) {
		Session session=null;
		Transaction transaction=null;
		String message=null;
		try {
		 session=sessionfactory.openSession();
	     transaction =session.beginTransaction();
		session.merge(appointment);
		transaction.commit();
		}
		catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		
		return "data updated successfully";
	}
	
	public Appointment GetSingleAppointmentData(int appointment_id) {
		Session session=null;
		Transaction transaction=null;
		Appointment appointment=null;
		try {
		 session=sessionfactory.openSession();
		transaction=session.beginTransaction();
		appointment=session.get(Appointment.class,appointment_id);
		transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		
		return appointment;
	}
	
	public List<Object> FetchAllAppointmentData() {
		Session session=sessionfactory.openSession();
		Transaction transaction=session.beginTransaction();
		CriteriaBuilder cb=session.getCriteriaBuilder();
		CriteriaQuery<Object> cq=cb.createQuery();
		Root<Appointment> root=cq.from(Appointment.class);
		cq.select(root);
		Query<Object> query=session.createQuery(cq);
		List<Object> list=query.getResultList();
		return list;
		
	}
}

