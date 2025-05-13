package com.project.demo.dao;

import java.util.List;

import org.hibernate.Session;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.demo.entities.Hospital;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

@Repository
public class HospitalDAO {
	@Autowired
	SessionFactory sessionfactory;
	
	public String InsertData(Hospital hospital) {
		Session session=null;
		Transaction transaction=null;
		String msg=null;
		try {
		 session=sessionfactory.openSession();
		transaction=session.beginTransaction();
		session.save(hospital);
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
	
	public String DeleteHospitalData(int hospital_id) {
		Session session=null;
		Transaction transaction=null;
		String msg=null;
		try {
			session=sessionfactory.openSession();
			transaction=session.beginTransaction();
			Hospital hospital=session.get(Hospital.class,hospital_id);
			session.remove(hospital);
			transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}return "data deleted successfully";
	}
	
	public String UpdateHospital(Hospital hospital) {
		Session session=null;
		Transaction transaction=null;
		String message=null;
		try {
		 session=sessionfactory.openSession();
	     transaction =session.beginTransaction();
		session.merge(hospital);
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
	
	public Hospital GetSingleHospitalData(int hospital_id ) {
		Session session=null;
		Transaction transaction=null;
		Hospital hospital=null;
		try {
		 session=sessionfactory.openSession();
		transaction=session.beginTransaction();
		hospital=session.get(Hospital.class,hospital_id);
		transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		
		return hospital;
	}
	
	public List<Object> FetchAllHospitalrData() {
		Session session=sessionfactory.openSession();
		Transaction transaction=session.beginTransaction();
		CriteriaBuilder cb=session.getCriteriaBuilder();
		CriteriaQuery<Object> cq=cb.createQuery();
		Root<Hospital> root=cq.from(Hospital.class);
		cq.select(root);
		Query<Object> query=session.createQuery(cq);
		List<Object> list=query.getResultList();
		return list;
		
	}
}

	
