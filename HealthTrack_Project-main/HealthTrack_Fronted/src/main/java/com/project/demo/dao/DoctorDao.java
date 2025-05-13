package com.project.demo.dao;

import java.util.List;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.demo.entities.Doctor;


import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;


@Repository
public class DoctorDao {
	@Autowired
	SessionFactory sessionfactory;
	
	public String InsertData(Doctor doctor) {
		Session session=null;
		Transaction transaction=null;
		String msg=null;
		try {
		 session=sessionfactory.openSession();
		transaction=session.beginTransaction();
		session.save(doctor);
		transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
		session.close();
			}
		}
		return "data inserted successfully";
	}
	
	public String DeleteDoctorData(int doctor_id) {
		Session session=null;
		Transaction transaction=null;
		String msg=null;
		try {
			session=sessionfactory.openSession();
			transaction=session.beginTransaction();
			Doctor doctor=session.get(Doctor.class,doctor_id);
			session.remove(doctor);
			transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}return "data deleted successfully";
	}
	public String UpdateDoctor(Doctor doctor) {
		Session session=null;
		Transaction transaction=null;
		String message=null;
		try {
		 session=sessionfactory.openSession();
	     transaction =session.beginTransaction();
		session.merge(doctor);
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
	
	public Doctor GetSingleDoctorData(int doctor_id) {
		Session session=null;
		Transaction transaction=null;
		Doctor doctor=null;
		try {
		 session=sessionfactory.openSession();
		transaction=session.beginTransaction();
		doctor=session.get(Doctor.class,doctor_id);
		transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		
		return doctor;
	}
	
	public List<Object> FetchAllDoctorData() {
		Session session=sessionfactory.openSession();
		Transaction transaction=session.beginTransaction();
		CriteriaBuilder cb=session.getCriteriaBuilder();
		CriteriaQuery<Object> cq=cb.createQuery();
		Root<Doctor> root=cq.from(Doctor.class);
		cq.select(root);
		Query<Object> query=session.createQuery(cq);
		List<Object> list=query.getResultList();
		return list;
		
	}
}

	

