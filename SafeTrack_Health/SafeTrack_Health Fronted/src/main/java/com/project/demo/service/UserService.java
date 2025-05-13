package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.dao.UserDao;
import com.project.demo.entities.User;
import com.project.demo.model.Login;

@Service
public class UserService {
	@Autowired
	UserDao dao;

	public User loginUser(Login user) {
		return dao.loginUser(user);
	}

	public String RegisterUser(User user) {
		return dao.RegisterUser(user);
	}

	public String DeleteUser(String username) {
		return dao.DeleteUser(username);
	}

	public User SingleUser(String username) {
		return dao.SingleUser(username);
	}

	public String UpdateUser(User user) {
		return dao.UpdateUser(user);
	}

	public List<User> AllUser() {
		return dao.getAllUser();
	}
}
