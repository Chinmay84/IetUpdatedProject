package com.example.demo.auth;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.pojo.User;

public interface ApplicationUserDao extends JpaRepository<User, Integer>{

	 Optional<ApplicationUser> selectApplicationUserByUsername(String username); 
	
}
