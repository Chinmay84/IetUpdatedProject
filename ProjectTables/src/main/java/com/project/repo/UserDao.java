package com.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.bean.User;


public interface UserDao extends JpaRepository<User, Integer>{
	
	@Query("select u from User u WHERE u.email =:e")
	User findByUserName(@Param("e") String email);
	
}
