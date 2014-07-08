package com.manage.ssi.test.dao;
import java.util.List;

import com.manage.ssi.dao.AccountDao;
import com.manage.ssi.dao.AccountHandleDao;
import com.manage.ssi.dao.CategoryDao;
import com.manage.ssi.model.AccountModel;


public class ReceiptDaoTest extends BaseDaoTestCase {
	private AccountHandleDao accountHandleDao;
    private CategoryDao categoryDao;
    private AccountDao accountDao;
	public void testSaveReceipt(){
//		AccountModel model=new AccountModel();
//		model.setCount_cash(100.24f);
//		model.setCount_name("�ֽ�");
//		model.setCount_remark("����");
//		Object ob=accountHandleDao.save(model);
//		if(ob!=null)
//		logger.info(ob);
//		logger.info("����ɾ��:");
//		accountHandleDao.remove(2);
//		logger.info("ɾ��ɹ�:");
	
		
//		List<AccountModel> list=accountHandleDao.getAll(1);
//		if(list!=null)
//		logger.info(list.toString());
//		else
//			logger.info("success");
		//Double cash=accountDao.getAccountCash(1, 20);
		//if(cash==null)
		
		
		logger.info(accountDao.getAccountByItem(94, 2));
		
	}
	
	public static void main(String[] args) {
		ReceiptDaoTest test=new ReceiptDaoTest();
		test.testSaveReceipt();
	}

	public AccountHandleDao getAccountHandleDao() {
		return accountHandleDao;
	}

	public void setAccountHandleDao(AccountHandleDao accountHandleDao) {
		this.accountHandleDao = accountHandleDao;
	}

	public CategoryDao getCategoryDao() {
		return categoryDao;
	}

	public void setCategoryDao(CategoryDao categoryDao) {
		this.categoryDao = categoryDao;
	}

	public AccountDao getAccountDao() {
		return accountDao;
	}

	public void setAccountDao(AccountDao accountDao) {
		this.accountDao = accountDao;
	}

	

	
	
	
}
