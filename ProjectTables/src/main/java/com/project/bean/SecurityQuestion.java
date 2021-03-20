package com.project.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
public class SecurityQuestion {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	@Column(nullable = false)
	String question;
	@Column(nullable = false,unique = true)
	String answer;
	@OneToOne
	@PrimaryKeyJoinColumn
	User user;
}
