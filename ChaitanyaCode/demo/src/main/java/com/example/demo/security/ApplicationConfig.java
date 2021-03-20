package com.example.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

//import com.example.demo.auth.ApplicationUserService;

@Configuration
@EnableWebSecurity
public class ApplicationConfig extends WebSecurityConfigurerAdapter {

	private final PasswordEncoder passwordencoder;
	//private final ApplicationUserService applicationUserService;

	@Autowired
	public ApplicationConfig(PasswordEncoder passwordencoder){//,ApplicationUserService applicationUserService) {
		this.passwordencoder=passwordencoder;	
		//this.applicationUserService=applicationUserService;
	}


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable() //todo
		.authorizeRequests()
		.antMatchers("/","index","/css/*","/js/*").permitAll()
		.antMatchers("/api/**").hasRole(ApplicationUserRole.USER.name())

		.antMatchers(HttpMethod.DELETE,"/management/api/**").hasAuthority(
				ApplicationUserPermission.USER_WRITE.name())//.getPermission())
		.antMatchers(HttpMethod.POST,"/management/api/**").hasAuthority(
				ApplicationUserPermission.USER_WRITE.name())//.getPermission())
		.antMatchers(HttpMethod.PUT,"/management/api/**").hasAuthority(
				ApplicationUserPermission.USER_WRITE.name())//.getPermission())
		.antMatchers(HttpMethod.GET,"/management/api/**").hasAuthority(
				ApplicationUserRole.ADMIN.name())

		.anyRequest()
		.authenticated()
		.and()
		.formLogin()
		//.loginPage("/login").permitAll()  //banana hai
		//.defaultSuccessUrl("/users",true)//for default
		.and()
		.rememberMe()     //2 hfte tak rhta login me checkbox bnaooo
		.key("sssvveeerrrsseeccurred");
		//.and()
		//.logout()
		//.logoutUrl("/logout")
		//.logoutRequestMatcher(new AntPathRequestMatcher("/logout","GET"))
		//.clearAuthentication(true)
		//.invalidateHttpSession(true)
		//.deleteCookies("JSESSIONID","remember-me")
		//.logoutSuccessUrl("/login");   
	}

	/*
	 * @Override protected void configure(AuthenticationManagerBuilder auth) throws
	 * Exception { auth.authenticationProvider(daoAuthenticationProvider()); }
	 * 
	 * 
	 * @Bean public DaoAuthenticationProvider daoAuthenticationProvider() {
	 * DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
	 * provider.setPasswordEncoder(passwordencoder);
	 * provider.setUserDetailsService(applicationUserService); return provider; }
	 */

	@Override
	@Bean
	protected UserDetailsService userDetailsService() { 
		UserDetails user=User.builder()
				.username("rooo") .password(passwordencoder.encode("pas123"))
				.roles(ApplicationUserRole.USER.name())
				.build();
		//.authorities(ApplicationUserRole.USER.getGrantedAuthorities()) .build();

		UserDetails admin=User.builder() .username("chi")
				.password(passwordencoder.encode("password123"))
				.roles(ApplicationUserRole.ADMIN.name()).build();
		//.authorities(ApplicationUserRole.ADMIN.getGrantedAuthorities()) .build();

		return new InMemoryUserDetailsManager(user,admin);


	}




}
