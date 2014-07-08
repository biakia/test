package com.manage.ssi.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.manage.ssi.model.AccountModel;
import com.manage.ssi.model.Money;
import com.manage.ssi.service.AccountManage;
import com.manage.ssi.service.AccountManager;

public class AccounterAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8605398535625687242L;

	private AccountModel account;
	private String users_name;
	private Integer userid;   //用户ID
	private Integer accountid;  //账户ID
	private Integer cateid;   //记录ID
	private Integer pageno=0;
	private static final Integer NUM=5;
	@Resource(name = "accountService")
	private AccountManage accountManage;
	@Resource(name = "accounterService")
	private AccountManager accounterService;

	/**
	 * 增加一个新的账户，如果账户名称已经存在则告知用户
	 * 
	 * @author wujixin
	 * @date 2013-11-14
	 * @return
	 */
	public String addAcount() {
		boolean isValid = accountManage.existsName(account.getCount_name(),
				account.getUserid());
		String str;
		logger.info(isValid);
		if (!isValid) {
			int flag = accountManage.saveModel(account);
			if (flag == 0) {
				printScript("1");// 表示保存失败
			} else {
				str = "{'id':'" + account.getCount_id() + "','name':'"
						+ account.getCount_name() + "','cash':'"
						+ account.getCount_cash() + "','num':'" + 0 + "'";
				str += ",'totalin':'" + 0 + "','totalout':'" + 0
						+ "','money':'" + account.getCount_cash() + "'";
				if (account.getCount_remark() != null)
					str += ",'remark':'" + account.getCount_remark() + "'}";
				else
					str += ",'remark':''}";
				printScript(str);
			}
		} else {
			printScript("0");// 表示用户名已经存在
		}
		return null;
	}

	/**
	 * 加载页面的时候自动加载已经存在的账户信息
	 * 
	 * @auther wujixin
	 * @date 2013 11-15
	 * @return
	 */
	public String loadMyAccount() {
		List<AccountModel> list = accountManage.getAll(userid); //获得所有账户
		if (list.isEmpty()) {
			// 如果为空，返回空标志
			printScript("0");

		} else {
			// 否则，返回JSON数据格式的数据
			
			String str = "[";
			for (int i = 0; i < list.size() - 1; i++) {
				AccountModel temp = list.get(i);
				
				str = str + "{'id':'" + temp.getCount_id() + "','name':'"
						+ temp.getCount_name() + "','cash':'"
						+ temp.getCount_cash() + "','num':'" + ((temp.getItems()==null)?0:temp.getItems()) + "'";
				str += ",'totalin':'" + ((temp.getTotalin()==null)?0:temp.getTotalin()) + "','totalout':'" + ((temp.getTotalout()==null)?0:temp.getTotalout())
						+ "','money':'" +  temp.getCount_cash() + "'";
				if (temp.getCount_remark() != null)
					str += ",'remark':'" + temp.getCount_remark() + "'},";
				else
					str += ",'remark':''},";
			}
			AccountModel temp = list.get((list.size() - 1));
			str = str + "{'id':'" + temp.getCount_id() + "','name':'"
					+ temp.getCount_name() + "','cash':'"
					+ temp.getCount_cash() + "','num':'" + ((temp.getItems()==null)?0:temp.getItems()) + "'";
			str += ",'totalin':'" + ((temp.getTotalin()==null)?0:temp.getTotalin()) + "','totalout':'" + ((temp.getTotalout()==null)?0:temp.getTotalout())
					+ "','money':'" + temp.getCount_cash() + "'";
			if (temp.getCount_remark() != null)
				str += ",'remark':'" + temp.getCount_remark() + "'}";
			else
				str += ",'remark':''}";
			str += "]";
			printScript(str);

		}
		return null;
	}

	/**
	 * 删除账户
	 * 
	 * @author wujixin
	 * @date 2013-11-17
	 * @return JSON格式数据
	 */
	public String deleteAccount() {
		Integer id = account.getCount_id();
		if (userid == 0) {
			return render("login");
		}
		logger.info(id + "," + userid);
		accountManage.remove(id, userid);
		printScript(id + "");
		return null;
	}

	/**
	 * 更新账户信息
	 * @author wujixin
	 * @date 2013-12-03
	 * @return JSON格式数据
	 */
	public String updateAccount() {
		accountManage.update(account);
		String str = "{'id':'" + account.getCount_id() + "','name':'"
				+ account.getCount_name() + "','cash':'"
				+ account.getCount_cash() + "','remark':'"
				+ account.getCount_remark() + "'}";
		printScript(str);
		return null;
	}
	
	/**
	 * 加载某个账户下的账单
	 * @author wujixin
	 * @date 2013-12-03
	 * @return JSON格式数据
	 */
	public String loadAccountItems(){
		Map<String,Integer> map =new HashMap<String, Integer>();
		Money temp=null;
		String str="[";
		if(pageno<0)
			pageno=0;
		map.put("userid", userid);
		map.put("accountid", accountid);
		map.put("pageno", pageno*NUM);  //用于分页
		map.put("num", NUM);
		List<Money> list=accounterService.getAccounts2(map);
		if(list.size()==0){
			String str1="[{'date':' ','cash':' ','item':' ','remark':' ','accountid':'"+accountid+"','id':' ','flagid':'-1','pageno':'"+pageno+"'}]";
			printScript(str1);
		}else{
			for(int i=0;i<list.size()-1;i++){
				temp=list.get(i);
				str+="{'date':'";
				str+=temp.getDate();
				str+="','cash':'";
				str+=temp.getCash();
				str+="','item':'";
				str+=temp.getCategory_item();
				str+="','remark':'";
				if(temp.getRemark()!=null)
					str+=temp.getRemark();
				else
					str+=" ";
				str+="','accountid':'";
				str+=temp.getCount_id();
				str+="','id':'";
				str+=temp.getId();
				str+="','flagid':'";
				str+=temp.getFlag_id();
				str+="','pageno':'";
				str+=pageno;
				str+="'},";
			}
			temp=list.get(list.size()-1);
			str+="{'date':'";
			str+=temp.getDate();
			str+="','cash':'";
			str+=temp.getCash();
			str+="','item':'";
			str+=temp.getCategory_item();
			str+="','remark':'";
			if(temp.getRemark()!=null)
				str+=temp.getRemark();
			else
				str+=" ";
			str+="','accountid':'";
			str+=temp.getCount_id();
			str+="','id':'";
			str+=temp.getId();
			str+="'}]";
			printScript(str);
		}
		return null;
	}
	
	public String deleteAccountItem(){
		int accountid=accounterService.getAccountByItem(cateid, userid);
		accounterService.deleteAccount(cateid);
        printScript(Integer.toString(accountid));
		return null;
	}
// ***************************************************getter and setter****************************************
	public AccountModel getAccount() {
		return account;
	}

	public void setAccount(AccountModel account) {
		this.account = account;
	}

	public Integer getAccountid() {
		return accountid;
	}

	public void setAccountid(Integer accountid) {
		this.accountid = accountid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public String getUsers_name() {
		return users_name;
	}

	public void setUsers_name(String users_name) {
		this.users_name = users_name;
	}

	public String goMain(){
		return render("mainPage");
	}

	public Integer getPageno() {
		return pageno;
	}

	public void setPageno(Integer pageno) {
		this.pageno = pageno;
	}

	public Integer getUserid() {
		return userid;
	}

	public Integer getCateid() {
		return cateid;
	}

	public void setCateid(Integer cateid) {
		this.cateid = cateid;
	}
    
	
}
