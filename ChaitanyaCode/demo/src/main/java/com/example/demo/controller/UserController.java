package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.UserDao;
import com.example.demo.pojo.User;

@RestController
@RequestMapping("api/v1/users")
public class UserController {

	@Autowired
	UserDao userDao;
	private static final List<User> Users=


	@GetMapping(path = "/{userId}")
	public User  getstudent(@PathVariable("userId") Integer userId) {
		return Users.stream()
				.filter(user -> userId.equals(user.getId()))
				.findFirst()
				.orElseThrow(() -> new IllegalStateException("User "+ userId + "doesnot exists"));

		
	}


}
