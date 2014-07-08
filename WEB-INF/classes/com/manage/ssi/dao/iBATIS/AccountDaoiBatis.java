package com.manage.ssi.dao.iBATIS;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.manage.ssi.dao.AccountDao;

import com.manage.ssi.model.Money;

@Repository("accountDao")
public class AccountDaoiBatis extends GenericDaoiBatis<Money, String> implements
		AccountDao {

	public AccountDaoiBatis() {
		super(Money.class);
	}

	private static final String KEEPACCOUNT = "keepAccount";
	private static final String ACCOUNT = "getAccounts";
	private static final String SEARCH = "getAccountCash";
    private static final String CATE="getCategoryCash";
    private static final String ACCOUNT1 = "getAccounts1";
    private static final String ACCOUNT2 = "getAccounts2";
    private static final String DELET = "deleteAccount";
	private static final String UPDATE = "saveAccount";
	@Override
	public Integer keepAccount(Money acc) {
		// TODO Auto-generated method stub
		return (Integer) getSqlMapClientTemplate().insert(KEEPACCOUNT, acc);
	}

	/**
	 * 获取精确到每天的数据
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Money> getAccounts(String date,Integer userid) {
		Map<String,Object> map=new HashMap<String, Object>();
		map.put("date", date);
		map.put("userid", userid);
		return getSqlMapClientTemplate().queryForList(ACCOUNT, map);
	}

	/**
	 * @author wujixin 
	 * 获得账户的金额
	 * return Double
	 */
	@Override
	public List<Money> getAccountCash(int userid,int flagid) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("userid", userid);
		map.put("flagid", flagid);
		return getSqlMapClientTemplate().queryForList(SEARCH, map);
	}

	/**
	 * @author wujixin
	 * 获得相应一级分类的金额 
	 * return Double
	 */
	@Override
	public List<Money> getCategoryCash(int userid,int flagid) {
		// TODO Auto-generated method stub
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("userid", userid);
		map.put("flagid", flagid);
		return getSqlMapClientTemplate().queryForList(CATE, map);
	}
	
	/**
	 * 查询所有账户的所有账单，用于汇总
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Money> getAccounts1(Map<String,Integer> info) {
		// TODO Auto-generated method stub
		return getSqlMapClientTemplate().queryForList(ACCOUNT1, info);
	}
	
	/**
	 * 查询某个账户下的账单，用于分页
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Money> getAccounts2(Map<String,Integer> info) {
		// TODO Auto-generated method stub
		return getSqlMapClientTemplate().queryForList(ACCOUNT2, info);
	}
	
	/**
	 * 删除一条记录
	 */
	@Override
	public Integer deleteAccount(Integer id)  {
		// TODO Auto-generated method stub
		return getSqlMapClientTemplate().delete(DELET,id);
	}

	/**
	 * 保存一条记录
	 */
	@Override
	public Integer saveAccount(Money acc) {
		// TODO Auto-generated method stub
		return (Integer)getSqlMapClientTemplate().update(UPDATE,acc);
	}

	@Override
	public Integer getAccountByItem(int itemid, int userid) {
		// TODO Auto-generated method stub
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("userid", userid);
		map.put("itemid", itemid);
		return (Integer) getSqlMapClientTemplate().queryForObject("accountId", map);
	}
}
