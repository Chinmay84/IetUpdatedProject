package com.example.demo.security;

public enum ApplicationUserPermission {

	USER_READ("read"),
	USER_WRITE("write");
	
	private final String permission;

	 ApplicationUserPermission(String permission) {
		this.permission = permission;
	}

	public String getPermission() {
		return permission;
	}
	
		
}
