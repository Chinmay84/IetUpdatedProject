package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.project.bean.User;
import com.project.repo.UserDao;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserDao userDao;
	
	
	
	public int addUser(User user)
	{
		
		return userDao.save(user).getId();
	}



	@Override
	public User validate(String email, String password) {
		// TODO Auto-generated method stub
		return userDao.validate(email, password);
	}






	
	
}
