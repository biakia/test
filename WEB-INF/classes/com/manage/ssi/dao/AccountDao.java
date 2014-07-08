package com.manage.ssi.dao;

import java.util.List;
import java.util.Map;

import com.manage.ssi.dao.GenericDao;
import com.manage.ssi.model.Money;


public interface AccountDao extends GenericDao<Money, String> {
      
	Integer keepAccount(Money acc);
	List<Money> getAccounts(String date,Integer userid);
	
	List<Money> getAccounts1(Map<String,Integer> info);  //查出用户的所有账单
	
	List<Money> getAccounts2(Map<String,Integer> info);  //查出用户某个账户下的所有账单
	
	List<Money> getAccountCash(int userid,int flagid);
	
	List<Money> getCategoryCash(int userid,int flagid);
	
	Integer deleteAccount(Integer id);
	
	Integer saveAccount(Money acc);
	
	Integer getAccountByItem(int itemid,int userid);
}
