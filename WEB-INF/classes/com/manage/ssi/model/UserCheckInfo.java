package com.manage.ssi.model;

import java.io.Serializable;

public class UserCheckInfo implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer users_id;
    private String users_name;
    private String users_password;
    private String users_mail;
	private String imagename;
	
	
    
	public String getImagename() {
		return imagename;
	}
	public void setImagename(String imagename) {
		this.imagename = imagename;
	}
	public Integer getUsers_id() {
		return users_id;
	}
	public void setUsers_id(Integer users_id) {
		this.users_id = users_id;
	}
	public String getUsers_name() {
		return users_name;
	}
	public void setUsers_name(String users_name) {
		this.users_name = users_name;
	}
	public String getUsers_password() {
		return users_password;
	}
	public void setUsers_password(String users_password) {
		this.users_password = users_password;
	}
	public String getUsers_mail() {
		return users_mail;
	}
	public void setUsers_mail(String users_mail) {
		this.users_mail = users_mail;
	}
	
	
	public UserCheckInfo(Integer users_id, String users_name,
			String users_password, String users_mail, String imagename) {
		super();
		this.users_id = users_id;
		this.users_name = users_name;
		this.users_password = users_password;
		this.users_mail = users_mail;
		this.imagename = imagename;
	}
	public UserCheckInfo(){};
  
}




