package com.manage.ssi.service;

import java.util.List;

import com.manage.ssi.model.AccountModel;

public interface AccountManage extends GenericManager<AccountModel, Integer> {

	    //添加新的账户
		
		public Integer saveModel(AccountModel model);
		
		//删除账户，以账户名称为删除标志
		
		public void remove(Integer id,Integer userid);
		
		//查看账户是否存在，两个账户不能有一样的名字
		
		public boolean existsName(String name,int userid);
		
		//通过ID查出某个账户的信息
		public AccountModel get(int id);
		
		//得到该用户所有的账户信息
		public List<AccountModel> getAll(int userid);

		//修改账户信息
		public void update(AccountModel model);
}
