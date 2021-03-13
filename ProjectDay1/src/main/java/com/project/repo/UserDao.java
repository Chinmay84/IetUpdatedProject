package com.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.bean.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer>{

	@Query("select u FROM User u WHERE u.email =:e and u.password =:p")
	User validate(@Param("e") String email,@Param("p") String password);
}
