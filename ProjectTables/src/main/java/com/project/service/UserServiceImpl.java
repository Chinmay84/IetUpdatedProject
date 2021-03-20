package com.project.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.project.bean.User;
import com.project.repo.UserDao;

public class UserServiceImpl implements UserService,UserDetailsService{

	@Autowired
	UserDao userDao;

	@Override
	public void registerUser(User user) {
		
		userDao.save(user);
	}
	
	public List<User> getAllUser()
	{
		return userDao.findAll();
	}

	@Override
	public Optional<User> getById(int id) {

		return userDao.findById(id);
	}

	@Override
	public void deleteUserAccount(User user) {
		userDao.delete(user);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User user=userDao.findByUserName(username);
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
	}

//	@Override
//	public int editUser(int id) {
//
//		return userDao.;
//	}
	
	
	
	
	
	
}
