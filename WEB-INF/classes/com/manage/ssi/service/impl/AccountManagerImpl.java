package com.manage.ssi.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.manage.ssi.dao.AccountDao;
import com.manage.ssi.dao.AccountHandleDao;
import com.manage.ssi.dao.CategoryDao;
import com.manage.ssi.model.AccountModel;
import com.manage.ssi.model.Category;
import com.manage.ssi.model.Money;
import com.manage.ssi.service.AccountManager;


@Service("accounterService")
public class AccountManagerImpl extends GenericManagerImpl<Money, String> implements AccountManager{

	 @Resource(name="accountDao")
	 private AccountDao accountDao;
	 @Resource(name="accountHandleDao")
	 private AccountHandleDao accountHandleDao;
	 @Resource(name="categoryDao")
	 private CategoryDao categoryDao;
	 @Autowired
	 public AccountManagerImpl(AccountDao dao) {
		super(dao);
		this.accountDao=dao;
		// TODO Auto-generated constructor stub
	}

	@Override
	public Integer keepAccount(Money acc) {
		// TODO Auto-generated method stub
		return (Integer)accountDao.keepAccount(acc);
	}

	@Override
	public List<Money> getAccounts(String date,Integer userid) {
		// TODO Auto-generated method stub
		return accountDao.getAccounts(date,userid);
	}
	
	@Override
	public List<Money> getAccounts1(Map<String,Integer> info) {
		// TODO Auto-generated method stub
		return accountDao.getAccounts1(info);
	}
	
	@Override
	public List<Money> getAccounts2(Map<String,Integer> info) {
		// TODO Auto-generated method stub
		return accountDao.getAccounts2(info);
	}
	
	@Override
	public Integer deleteAccount(Integer id) {
		// TODO Auto-generated method stub
		return accountDao.deleteAccount(id);
	}

	@Override
	public Integer savaAccount(Money acc) {
		// TODO Auto-generated method stub
		return (Integer)accountDao.saveAccount(acc);
	}

	/**
	 * 描述：通过用户id和收入支出标示符，获得用户账户名和相应的账户总金额
	 * @author wujixin
	 * @date 2013-11-27
	 * return 一个封装了每个账户的list
	 */
	@Override
	public List<Money> getAccountCash(int userid,int flagid){
		
		return accountDao.getAccountCash(userid, flagid);
	}
	
	
	
	/**
	 * 描述：通过用户id和收入支出标示符，获得用户账单中的信息，包括一级分类名称和相应的金额
	 * @author wujixin
	 * @date 2013-11-28
	 * return 一个封装了账单信息的list
	 */
	@Override
	public List<Money> getCategoryCash(int userid,int flagid) {
		// TODO Auto-generated method stub
		return accountDao.getCategoryCash(userid, flagid);
	}

	/**
	 * 通过用户id和年份月份查出相关数据
	 * @author wujixin
	 * @date 2013-11-29
	 * return 封装好的全年数据
	 */
	@Override
	public List<List<Money>> getTrendCash(int userid, int year,
			int month) {
		List<List<Money>> list=new ArrayList<List<Money>>();
		for(int i=1;i<=month;i++){
			String date=null;
			if(i<10)
				date=year+"-0"+i+"-";
			else
				date=year+"-"+i+"-";
			List<Money> temp  = accountDao.getAccounts(date,userid);
			list.add(temp);
		}
		
		return list;
	}

	@Override
	public List<AccountModel> getAllAccounts(int id) {
		// TODO Auto-generated method stub
		return accountHandleDao.getAllAccounts(id);
	}

	@Override
	public int getAccountByItem(int itemid, int userid) {
		// TODO Auto-generated method stub
		return accountDao.getAccountByItem(itemid, userid);
	}
	
	
	

}
