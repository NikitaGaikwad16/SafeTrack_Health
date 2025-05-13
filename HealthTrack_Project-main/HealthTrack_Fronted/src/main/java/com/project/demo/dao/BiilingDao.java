package com.project.demo.dao;

import java.util.List;

import org.hibernate.Session;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.demo.entities.Billing;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

@Repository
public class BiilingDao {
	@Autowired
	SessionFactory sessionfactory;

	public String InsertBilling(Billing billing) {
		Session session = null;
		Transaction transaction = null;
		String msg = null;
		try {
			session = sessionfactory.openSession();
			transaction = session.beginTransaction();
			session.save(billing);
			transaction.commit();

		} catch (Exception e) {
			transaction.rollback();
		} finally {
			if (session != null) {
				session.close();
			}

		}
		return "data inserted successfully..";
	}

	public String RemoveBill(int id) {
		Session session = null;
		Transaction transaction = null;
		String msg = null;
		try {
			session = sessionfactory.openSession();
			transaction = session.beginTransaction();
			Billing billing = session.get(Billing.class, id);
			System.out.println(billing);
			if (billing != null) {
				session.delete(billing);
				transaction.commit();
				msg = "deleted";
			} else {
				msg = "record not found";
			}
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return "Data deleted successfully";
	}

	public String UpdateBill(Billing billing) {
		Session session = null;
		Transaction transaction = null;
		String message = null;
		try {
			session = sessionfactory.openSession();
			transaction = session.beginTransaction();
			session.merge(billing);
			transaction.commit();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return "data updated successfully";
	}

	public Billing GetSingleData(int bill_id) {
		Session session = null;
		Transaction transaction = null;
		String message = null;
		Billing bill=null;
		try {
			session = sessionfactory.openSession();
			transaction = session.beginTransaction();
			 bill = session.get(Billing.class, bill_id);
			transaction.commit();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return bill;
	}
	
	public List<Object> AllData() {
		Session session=sessionfactory.openSession();
		Transaction transaction=session.beginTransaction();
		CriteriaBuilder cb=session.getCriteriaBuilder();
		CriteriaQuery<Object> cq=cb.createQuery();
		Root<Billing> root=cq.from(Billing.class);
		cq.select(root);
		Query<Object> query=session.createQuery(cq);
		List<Object> list=query.getResultList();
		return list;
		
	}
}
