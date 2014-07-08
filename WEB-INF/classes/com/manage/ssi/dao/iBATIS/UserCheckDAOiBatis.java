package com.manage.ssi.dao.iBATIS;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.manage.ssi.dao.UserCheckDao;
import com.manage.ssi.model.UserCheckInfo;
//import com.web.struts.dao.AnnualCheckDao;
import com.manage.ssi.dao.iBATIS.GenericDaoiBatis;

@Repository("usercheckDao")
public class UserCheckDAOiBatis  extends GenericDaoiBatis<UserCheckInfo, String> implements
			UserCheckDao {



		public UserCheckDAOiBatis() {
			super(UserCheckInfo.class);
			// TODO Auto-generated constructor stub
		}

		private static final String SAVE="saveUserCheckInfo";
		private static final String UPINFO="updateUserCheckInfo";
	    private static final String LOGIN="login";
	    private static final String GETINFO="getUserCheckInfo";
		private static final String UPLOAD="uploadPhoto";
		@Override
		public Object saveUserCheckInfo(UserCheckInfo info) {
			// TODO Auto-generated method stub
			return getSqlMapClientTemplate().insert(SAVE, info);
			
		}
		
		@Override
		public List<UserCheckInfo> login(Map<String,String> info) {
			// TODO Auto-generated method stub
			return (List<UserCheckInfo>)getSqlMapClientTemplate().queryForList(LOGIN,info);
		}

		@Override
		public List<UserCheckInfo> getUserCheckInfo(Map<String,String> info) {
			// TODO Auto-generated method stub
			return (List<UserCheckInfo>)getSqlMapClientTemplate().queryForList(GETINFO,info);
		}
	      

		@Override
		public int updateUserCheckInfo(UserCheckInfo info) {
			// TODO Auto-generated method stub
			return  getSqlMapClientTemplate().update(UPINFO,info );
		}

		@Override
		public Object upload(Map<String, String> info) {
			// TODO Auto-generated method stub
			return getSqlMapClientTemplate().update(UPLOAD, info);
		}
		
		 
	}

