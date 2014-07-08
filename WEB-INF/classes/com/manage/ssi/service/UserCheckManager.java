package com.manage.ssi.service;

import java.util.List;
import java.util.Map;

import com.manage.ssi.model.UserCheckInfo;


import com.manage.ssi.service.GenericManager;


public interface UserCheckManager extends GenericManager<UserCheckInfo, String> {
	Object saveUserCheckInfo(UserCheckInfo info);                             //注册
	List<UserCheckInfo> login(Map<String,String> info);                       //登录
	List<UserCheckInfo> getUserCheckInfo(Map<String,String> info);            //用于判断用户名是否存在
	Object upload(Map<String,String> info);   //上传头像
	
}

