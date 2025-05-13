package com.project.demo.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.project.demo.entities.MedicalRecord;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

@Repository
public class MedicalRecordDAO {

	@Autowired
	SessionFactory sessionfactory;
	
	public String InsertData(MedicalRecord medical) {
		Session session=null;
		Transaction transaction=null;
		String msg=null;
		try {
		 session=sessionfactory.openSession();
		transaction=session.beginTransaction();
		session.save(medical);
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
	
	public String DeleteMedicalRecord(int record_id) {
		Session session=null;
		Transaction transaction=null;
		String msg=null;
		try {
			session=sessionfactory.openSession();
			transaction=session.beginTransaction();
			MedicalRecord medical=session.get(MedicalRecord.class,record_id);
			session.remove(medical);
			transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}return "data deleted successfully";
	}
	public String UpdateMedicalRecord(MedicalRecord medical) {
		Session session=null;
		Transaction transaction=null;
		String message=null;
		try {
		 session=sessionfactory.openSession();
	     transaction =session.beginTransaction();
		session.merge(medical);
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
	
	public MedicalRecord GetSingleMedicalRecord(int record_id) {
		Session session=null;
		Transaction transaction=null;
		MedicalRecord medical=null;
		try {
		 session=sessionfactory.openSession();
		transaction=session.beginTransaction();
		medical=session.get(MedicalRecord.class,record_id);
		transaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		
		return medical;
	}
	
	public List<Object> FetchAllMedicalRecordData(){
		Session session=sessionfactory.openSession();
		Transaction transaction=session.beginTransaction();
		CriteriaBuilder cb=session.getCriteriaBuilder();
		CriteriaQuery<Object> cq=cb.createQuery();
		Root<MedicalRecord> root=cq.from(MedicalRecord.class);
		cq.select(root);
		Query<Object> query=session.createQuery(cq);
		List<Object> list=query.getResultList();
		return list;
		
	}
}

