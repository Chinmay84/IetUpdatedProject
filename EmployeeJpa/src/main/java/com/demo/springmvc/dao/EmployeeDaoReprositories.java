package com.demo.springmvc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.springmvc.bean.Employee;
@Repository
public interface EmployeeDaoReprositories extends JpaRepository<Employee, Integer>{

	Employee findByFirstName(String fName);
}
