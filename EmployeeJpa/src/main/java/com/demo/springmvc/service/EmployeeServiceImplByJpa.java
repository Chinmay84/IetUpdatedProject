package com.demo.springmvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.springmvc.bean.Employee;

import com.demo.springmvc.dao.EmployeeDaoReprositories;
@Service
public class EmployeeServiceImplByJpa implements EmployeeService {
	
	@Autowired
	EmployeeDaoReprositories employeeDaoReprositories;

	public List<Employee> findAllEmployee() {

		return employeeDaoReprositories.findAll();
	}

	public Employee getEmployeeById(int id) {
		
		return employeeDaoReprositories.findById(id).get();
	}

	public int save(Employee employee) {
		
		return employeeDaoReprositories.save(employee).getId();	
		}

	public int update(Employee employee) {
		
		return employeeDaoReprositories.save(employee).getId();
	}

	public int deleteById(int id) {

		employeeDaoReprositories.deleteById(id);
		return 1;
	}

	public Employee getEmployeeByName(String fName) {
		
		return employeeDaoReprositories.findByFirstName(fName);
	}

}
