package com.manage.ssi.dao.iBATIS;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import com.manage.ssi.dao.AccountHandleDao;
import com.manage.ssi.model.AccountModel;

@Repository("accountHandleDao")  
public class AccountHandleDaoiBatis extends GenericDaoiBatis<AccountModel, Integer> implements
		AccountHandleDao {

	public AccountHandleDaoiBatis() {
		super(AccountModel.class);
		// TODO Auto-generated constructor stub
	}
    
	private static final String SAVE="saveAccountModel";
    private static final String DELETE="deleteAcount";
    private static final String EXIST="existAccount";
    private static final String GETALL="getAllAccount";
    private static final String GETALLACCOUNTS="searchAccounts";
    private static final String UPDATE="updateAcount";
    private static final String GET="getAccount";
	//添加新的账户
	
	public Integer saveModel(AccountModel model) {
		Integer ii=(Integer) getSqlMapClientTemplate().insert(SAVE, model);
		logger.info("ii:"+ii);
		return ii;
	}

	//删除账户，以账户名称为删除标志
	
	public void remove(Integer id,Integer userid) {
		Map<Object,Object> map=new HashMap<Object, Object>();
		map.put("count_id", id);
		map.put("userid", userid);
		getSqlMapClientTemplate().delete(DELETE,map);

	}

	//查看账户是否存在，两个账户不能有一样的名字
	@Override
	public boolean existsName(String name,int userid) {
		Map<Object, Object> map=new HashMap<Object, Object>();
		map.put("count_name", name);
		map.put("userid", userid);
		Integer nameCount=(Integer) getSqlMapClientTemplate().queryForObject(EXIST, map);
		if(nameCount>0)
			return true;
		else
			return false;
	}


	//得到所有的账户信息
	@SuppressWarnings("unchecked")
	public List<AccountModel> getAll(int id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("userid", id);
		return getSqlMapClientTemplate().queryForList(GETALL,map);
	}

	//修改账户信息
	@Override
	public void update(AccountModel model) {
	  getSqlMapClientTemplate().update(UPDATE, model);
	}

    //通过ID查出某个账户的信息
	@Override
	public AccountModel get(int id) {
		Map<String, Integer> map=new HashMap<String, Integer>();
		map.put("count_id", id);
		return (AccountModel) getSqlMapClientTemplate().queryForObject(GET, map);
		}

	@SuppressWarnings("unchecked")
	@Override
	public List<AccountModel> getAllAccounts(int id) {
		// TODO Auto-generated method stub
		Map<String,Object> map=new HashMap<String, Object>();
		map.put("userid", new Integer(id));
		return getSqlMapClientTemplate().queryForList(GETALLACCOUNTS, map);
	}
	
}
