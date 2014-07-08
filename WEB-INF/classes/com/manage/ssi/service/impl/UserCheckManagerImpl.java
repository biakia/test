package com.manage.ssi.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manage.ssi.model.UserCheckInfo;
import com.manage.ssi.service.UserCheckManager;
import com.manage.ssi.dao.GenericDao;
import com.manage.ssi.dao.UserCheckDao;


//import com.manage.ssi.service.impl.UserCheckManager;
import com.manage.ssi.service.impl.GenericManagerImpl;

@Service("usercheckService")
public class UserCheckManagerImpl extends GenericManagerImpl<UserCheckInfo, String> implements UserCheckManager{

	@Resource(name="usercheckDao")
	private UserCheckDao usercheckDao;
	
	
    @Autowired
	public UserCheckManagerImpl(UserCheckDao usercheckDao )
			  {
           super((GenericDao<UserCheckInfo, String>) usercheckDao);
		  this.usercheckDao = usercheckDao;
	}

	

	@Override
	public Object saveUserCheckInfo(UserCheckInfo info) {
		// TODO Auto-generated method stub
		return usercheckDao.saveUserCheckInfo(info);
	}


	@Override
	public List<UserCheckInfo> login(Map<String,String> info) {
		// TODO Auto-generated method stub
		 return usercheckDao.login(info);
	}
	
	
	@Override
	public List<UserCheckInfo> getUserCheckInfo(Map<String,String> info) {
		// TODO Auto-generated method stub
		 return usercheckDao.getUserCheckInfo(info);
	}



	@Override
	public Object upload(Map<String, String> info) {
		// TODO Auto-generated method stub
		return usercheckDao.upload(info);
	}


}