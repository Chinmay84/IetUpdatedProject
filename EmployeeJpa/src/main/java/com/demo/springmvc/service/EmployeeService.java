package com.demo.springmvc.service;

import java.util.List;

import com.demo.springmvc.bean.Employee;

public interface EmployeeService {
	
	List<Employee> findAllEmployee();
	
	Employee getEmployeeById(int id);
	
	int save(Employee employee);
	
	int update(Employee employee);
	
	int deleteById(int id);
	
	Employee getEmployeeByName(String fName);
	

}
