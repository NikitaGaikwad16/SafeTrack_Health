package com.project.demo.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.demo.entities.User;
import com.project.demo.model.Login;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

@Repository
public class UserDao {
	@Autowired
	SessionFactory sessionfactory;

	public User loginUser(Login login) {
		Session session = null;
		User user = null;
		try {
			session = sessionfactory.openSession();
			user = session.get(User.class, login.getUsername());
			if (user != null) {
				if (login.getPassword().equals(user.getPassword())) {
					return user;
				}
			}
			return null;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public String RegisterUser(User user) {
		Session session = null;
		Transaction transaction = null;
		String msg = null;
		try {
			session = sessionfactory.openSession();
			transaction = session.beginTransaction();
			session.save(user);
			transaction.commit();
			msg = "Registered Successfully";
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
			msg = "Registration Failed!";
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return msg;
	}

	public String DeleteUser(String username) {
		Session session = null;
		Transaction transaction = null;
		String msg = null;
		try {
			session = sessionfactory.openSession();
			transaction = session.beginTransaction();
			User user = session.get(User.class, username);
			if (user != null) {
				session.remove(user);
				transaction.commit();
				msg = "Deleted Successfully";
			} else {
				msg = "User Not Found!";
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return msg;
	}

	public User SingleUser(String username) {
		Session session = null;

		User user = null;
		try {
			session = sessionfactory.openSession();

			user = session.get(User.class, username);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return user;
	}

	public String UpdateUser(User user) {
		Session session = null;
		Transaction transaction = null;
		String msg = null;
		try {
			session = sessionfactory.openSession();
			transaction = session.beginTransaction();
			session.update(user);
			transaction.commit();
			msg = "Updated Successfully";
		} catch (Exception e) {
			if(transaction!=null) {
				transaction.rollback();
			}
			e.printStackTrace();
			msg = "Failed to Update!";
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return msg;
	}

	public List<User> getAllUser() {
		Session session = null;
		List<User> userList = null;
		try {
			session = sessionfactory.openSession();

			CriteriaBuilder cb = session.getCriteriaBuilder();
			CriteriaQuery<User> cq = cb.createQuery(User.class);
			Root<User> root = cq.from(User.class);
			cq.select(root);

			Query<User> query = session.createQuery(cq);
			userList = query.getResultList();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return userList;
	}

}
