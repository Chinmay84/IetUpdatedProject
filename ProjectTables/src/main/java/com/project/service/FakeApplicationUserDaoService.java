package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.example.demo.security.ApplicationUserRole;
import com.google.common.collect.Lists;
import com.project.repo.UserDao;


@Repository("fake")
public class FakeApplicationUserDaoService {

	@Autowired
	UserDao userDao;
	
	private final PasswordEncoder passwordEncoder;
	
	
	public FakeApplicationUserDaoService(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public Optional<ApplicationUser> findByUserName(String username) {
		// TODO Auto-generated method stub
		return getApplicationUsers()
				.stream()
				.filter(applicationUser-> username.equals(applicationUser.getUsername()))
				.findFirst();
	}

	private List<ApplicationUser> getApplicationUsers(){
		List<ApplicationUser> applicationUsers=Lists.newArrayList(
				new ApplicationUser(
						"",
						passwordEncoder.encode(""),
						ApplicationUserRole.USER.getGrantedAuthorities(),
						true,
						true,true,true));
		
		return applicationUsers;
	}
	
	
	
}
