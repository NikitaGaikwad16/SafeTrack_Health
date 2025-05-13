package com.project.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HealthTrackApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthTrackApplication.class, args);
		System.out.println("Application started..");
	}

}
