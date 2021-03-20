package com.project.bean;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.GeneratorType;

import com.project.beans.Role;

import lombok.Data;

@Data
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer id;
	@NotNull
	String name;
	@Column(unique = true,nullable = false)
	String email;
	@Column(nullable = false)
	String state;
	@Column(nullable = false)
	String city;
	@NotNull
	long pincode;
	@Column(unique = true,nullable = false)
	long phoneNumber;
	long alternatephoneNumber;
	@NotNull
	String gender;
	@Column(unique = true,nullable = false)
	String password;
	String confirmPassword;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_roles",
	joinColumns = @JoinColumn(name = "user_id"),
	inverseJoinColumns = @JoinColumn(name = "role_id"))
	private List<Role> roles = new ArrayList<>();
	
	
	
	@ManyToMany
	@JoinTable(name = "user_doctor",joinColumns = {@JoinColumn(name="fk_userid")},inverseJoinColumns = {@JoinColumn(name="fk_docid")})
	List<Docter> dlist;
	
	@OneToOne(cascade = CascadeType.ALL)
	SecurityQuestion securityQuestion; 
	
	@OneToOne(mappedBy = "user")
	FosterHome fosterHome;
	
	@OneToMany(mappedBy = "user")
	List<PostsAndBlogs> postsAndBlogs; 
	
/*	Not null	Email
	Unique+not
	null	Address
	Not null	Pincode
	Not null	Phone
	Not null+unique	Alter native phone number	Gender
	Not null	Password
	Not null	Docore	Froster	user	Registration
	Date/FS
	Not null
*/

	
}
