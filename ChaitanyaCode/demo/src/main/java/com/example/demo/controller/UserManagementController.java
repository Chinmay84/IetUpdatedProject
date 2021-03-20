package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.UserDao;
import com.example.demo.pojo.User;

@RestController
@RequestMapping("management/api/v1/users")
public class UserManagementController {

	@Autowired
	UserDao userDao;
	
	private static final List<User> Users=

	
	  @GetMapping public List<User> getAllStudents(){ //sysout for users.......
	  return Users; }
	  
	  @PostMapping public void registerNewUser(@RequestBody User user) {
	  System.out.println(user); }
	  
	  @DeleteMapping(path= "{userId}") public void
	  deleteStudent(@PathVariable("userId") Integer userId) {
	  System.out.println(userId); }
	  
	  @PutMapping public void updateUser(@PathVariable("userId")Integer
	  userId,@RequestBody User user) { System.out.println(String.format("%s %s",
	  userId,user)); }
	 
}
