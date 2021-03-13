package com.demo.springmvc.config;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;


import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;


@Configuration
@EnableJpaRepositories(basePackages = {"com.demo.springmvc.dao"})
public class DataBaseConfig {
	
	@Bean(name = "dataSource")
	public DataSource getDataSource() {
		DriverManagerDataSource dataSource=new DriverManagerDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3306/rk");
		dataSource.setUsername("root");
		dataSource.setPassword("root");
		return dataSource;
	}
	
	@Bean(name = "entityManagerFactory")
	public LocalContainerEntityManagerFactoryBean getManagerFactory(DataSource dataSource) {
		LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
		factoryBean.setDataSource(dataSource);
		factoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
		factoryBean.setPackagesToScan("com.demo.springmvc.bean");
		factoryBean.setJpaProperties(getHibernateProperties());
		return factoryBean;
	}
	@Bean(name="transactionManager")
	public JpaTransactionManager forTranstactionManager(EntityManagerFactory entityManagerFactory) {
		return new JpaTransactionManager(entityManagerFactory);
	}
	private Properties getHibernateProperties() {
		Properties property =new Properties();
		property.put("hibernate.dialect","org.hibernate.dialect.MySQL8Dialect");
		property.put("hibernate.show_sql", "true");
		property.put("hibernate.hbm2ddl.auto", "create");
		property.put("hibernate.format_sql", "true");
		
		return property;
	}

	

}
