package com.xadmin.SpringSecurityJWT.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xadmin.SpringSecurityJWT.entity.AuthRequest;
import com.xadmin.SpringSecurityJWT.entity.User;
import com.xadmin.SpringSecurityJWT.repository.UserRepository;
import com.xadmin.SpringSecurityJWT.util.JwtUtil;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/app")
public class WelcomeController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private AuthenticationManager authenticationManager;

	@GetMapping("/")
	public String welcome() {
		return "Welcome to xadmin channel";
	}
	
	@PostMapping(value="/token",consumes = "application/json",produces = "application/json")
	public String fortokenTest(@RequestBody User user)
	{
		
		userRepository.save(user);
		return "sucessfull";
	}
	
	@GetMapping("/authenticate")
	public String forLogin()
	{
		return "welcome to login";
	}

	
	@GetMapping("/logout")
	public String forLogout()
	{
		return "logout successful";
	}
	
	@PostMapping("/authenticate")
	public String generateToken(@RequestBody AuthRequest authrequest) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authrequest.getEmail(), authrequest.getPassword()));
		}
		catch (Exception e) {
			throw new Exception("Invalid username and password");
		}
		
		return jwtUtil.generateToken(authrequest.getEmail());
	}
}
