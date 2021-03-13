package com.demo.springmvc.bean;



import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Employee {
	@Id
	private int id;
	private String firstName;
	private String lastName;

}
