package com.project.demo.controlles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.entities.User;
import com.project.demo.model.Login;
import com.project.demo.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	@Autowired
	UserService service;
	
	@PostMapping("/login-user")
	public ResponseEntity<?> loginUser(@RequestBody Login login) {
	    User user = service.loginUser(login);
	    if (user != null) {
	        return new ResponseEntity<>(user, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
	    }
	}

	
	
	@PostMapping("/register-user")
	public String RegisterUser(@RequestBody User user) {
		String registerUser = service.RegisterUser(user);
		if (registerUser != null) {
			return "Register Successfully";
		} else {
			return "Not Successfully";
		}
	}
	
	@DeleteMapping("/delete-user/{username}")
	public String DeleteUser(@PathVariable String username) {
		String result=service.DeleteUser(username);
		if(result!=null) {
			return result;
		}else {
			return "User Not Found!";
		}
	}
	
	@GetMapping("/single-user/{username}")
	public User SingleUser(@PathVariable String username) {
		return service.SingleUser(username);
	}
	
	@PutMapping("/update-user")
	public String UpdateUser(@RequestBody User user) {
		String result= service.UpdateUser(user);
		if(result!=null) {
			return result;
		}else {
			return "Failed to Update!";
		}
	}
	
	@GetMapping("/all-user")
	public List<User> AllUser() {
		return service.AllUser();
	}
}
