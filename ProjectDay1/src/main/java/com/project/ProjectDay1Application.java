package com.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.project.bean.User;
import com.project.service.UserService;


@SpringBootApplication
public class ProjectDay1Application {

	@Autowired
	UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectDay1Application.class, args);
		
	}

}
