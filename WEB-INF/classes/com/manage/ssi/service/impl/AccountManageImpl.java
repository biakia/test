package com.manage.ssi.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manage.ssi.dao.AccountHandleDao;
import com.manage.ssi.model.AccountModel;
import com.manage.ssi.service.AccountManage;
@Service("accountService")
public class AccountManageImpl extends GenericManagerImpl<AccountModel, Integer> implements
		AccountManage {

	@Resource(name="accountHandleDao")
	private AccountHandleDao accountHandleDao;
	@Autowired
	public AccountManageImpl(AccountHandleDao accountHandleDao){
		super(accountHandleDao);
		this.accountHandleDao=accountHandleDao;
	}
	@Override
	public AccountModel get(Integer id) {
		// TODO Auto-generated method stub
		return accountHandleDao.get(id);
	}

	@Override
	public boolean exists(Integer id) {
		// TODO Auto-generated method stub
		return accountHandleDao.exists(id);
	}

	
	public Integer saveModel(AccountModel model) {
		// TODO Auto-generated method stub
		return accountHandleDao.saveModel(model);
	}


	public void remove(Integer id,Integer userid) {
		// TODO Auto-generated method stub
      accountHandleDao.remove(id,userid);
	}

	@Override
	public boolean existsName(String name,int id) {
		// TODO Auto-generated method stub
		return accountHandleDao.existsName(name,id);
	}


	@Override
	public List<AccountModel> getAll(int userid) {
		// TODO Auto-generated method stub
		return accountHandleDao.getAll(userid);
	}

	@Override
	public void update(AccountModel model) {
		// TODO Auto-generated method stub
        accountHandleDao.update(model);
	}
	@Override
	public AccountModel get(int id) {
		// TODO Auto-generated method stub
		return accountHandleDao.get(id);
	}

}
