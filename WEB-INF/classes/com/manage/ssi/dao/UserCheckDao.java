package com.manage.ssi.dao;
import java.util.*;
import com.manage.ssi.model.UserCheckInfo;
	
public interface UserCheckDao extends GenericDao<UserCheckInfo, String>{
		List<UserCheckInfo> login(Map<String,String> info);   //登录
		List<UserCheckInfo> getUserCheckInfo(Map<String,String> info); //用于判断用户名是否存在
		int updateUserCheckInfo(UserCheckInfo info);      //修改
		Object saveUserCheckInfo(UserCheckInfo info);     //注册
		Object upload(Map<String,String> info);   //上传头像
	}

