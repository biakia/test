package com.manage.ssi.service;

import java.util.List;
import java.util.Map;

import com.manage.ssi.model.AccountModel;
import com.manage.ssi.model.Money;

public interface AccountManager extends GenericManager<Money, String>{

	Integer keepAccount(Money acc);
	
	List<Money> getAccounts(String date,Integer userid);
	
	List<Money> getAccounts1(Map<String,Integer> info);
	
	List<Money> getAccounts2(Map<String,Integer> info);
	
	List<Money> getAccountCash(int userid,int flagid);
	
	List<Money> getCategoryCash(int userid,int flagid);
	
	List<List<Money>> getTrendCash(int userid,int year,int month);
	
	Integer deleteAccount(Integer id);
	
	Integer savaAccount(Money acc);
	
	public List<AccountModel> getAllAccounts(int id);
	
	int getAccountByItem(int itemid,int userid);
 
	
}
