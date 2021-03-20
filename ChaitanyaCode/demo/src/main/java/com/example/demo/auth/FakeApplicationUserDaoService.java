package com.example.demo.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.example.demo.dao.UserDao;
import com.example.demo.security.ApplicationUserRole;
import com.google.common.collect.Lists;


@Repository("fake")
public class FakeApplicationUserDaoService implements ApplicationUserDao {

	@Autowired
	UserDao userDao;

	
	
	private final PasswordEncoder passwordEncoder;
	
	
	public FakeApplicationUserDaoService(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {
		// TODO Auto-generated method stub
		return getApplicationUsers()
				.stream()
				.filter(applicationUser-> username.equals(applicationUser.getUsername()))
				.findFirst();
	}

	private List<ApplicationUser> getApplicationUsers(){
		List<ApplicationUser> applicationUsers=Lists.newArrayList(
				new ApplicationUser(
						"rooo",
						passwordEncoder.encode("password"),
						ApplicationUserRole.USER.getGrantedAuthorities(),
						true,
						true,true,true));
		
		return applicationUsers;
	}
	
	
	
}
