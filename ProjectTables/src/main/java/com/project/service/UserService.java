package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.bean.User;

public interface UserService {
	
	
	void registerUser(User user);
	List<User> getAllUser();
	Optional<User> getById(int id);
	void deleteUserAccount(User user);
	//int editUser(int id);
}
