package com.manage.ssi.action;

import java.util.List;

import javax.annotation.Resource;

import com.manage.ssi.action.BaseAction;
import com.manage.ssi.model.AccountModel;
import com.manage.ssi.model.Money;
import com.manage.ssi.service.AccountManager;

public class AccountAction extends  BaseAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	@Resource(name="accounterService")
	private AccountManager accounterService;
	
	private Money account;
	private List<Money> list;
	private String date;
	private String id; 
	private int users_id;
	private String users_name;
	
//gets sets方法
	
	
	public String getDate() {
		return date;
	}


	public int getUsers_id() {
		return users_id;
	}


	public void setUsers_id(int users_id) {
		this.users_id = users_id;
	}


	public String getUsers_name() {
		return users_name;
	}


	public void setUsers_name(String users_name) {
		this.users_name = users_name;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public List<Money> getList() {
		return list;
	}

	public void setList(List<Money> list) {
		this.list = list;
	}

	public Money getAccount() {
		return account;
	}

	public void setAccount(Money account) {
		this.account = account;
	}
	
//添加信息
	public String keepAccount(){
		account.setUserid(users_id);
		accounterService.keepAccount(account);
		String date = account.getDate().substring(0,7);
		list=accounterService.getAccounts(date,users_id);
		if(list.isEmpty())
		{
           printScript("0");			
		}
		else
		{
			String str = "[";
			double outMoney =0;
			double inMoney =0;
			for(int i=0; i<list.size();i++)
			{
			   account = list.get(i);
			   if(account.getFlag_id()==0)
		    	   outMoney +=account.getCash();		       
		       else
		    	   inMoney +=account.getCash();		    		   
		    
			   str = str + "{'id':'"+account.getId()+"','category_item':'"+account.getCategory_item()+"' , 'cash':'"+account.getCash()+"' , 'count_name':'"+account.getCount_name()+"'" +
			   		" , 'date':'"+account.getDate()+"' , 'remark':'"+account.getRemark()+"', 'flag_id': '"+account.getFlag_id()+"','in_money':'"+inMoney+"','out_money':'"+outMoney+"' " +
			   		", 'categoey_id':'"+account.getCategoey_id()+"','count_id':'"+account.getCount_id()+"'},"; 			  
			}
			str += "]";

			printScript(str);
		}
			
			
		
		return null;
		
		
	} 


	//查找信息	
	public String list(){
		list=accounterService.getAccounts(date,users_id);
		
		if(list.isEmpty())
		{
           printScript("0");			
		}
		else
		{
			String str = "[";
			double outMoney =0;
			double inMoney =0;
			for(int i=0; i<list.size();i++)
			{
			   account = list.get(i);
			   if(account.getFlag_id()==0)
		    	   outMoney +=account.getCash();		       
		       else
		    	   inMoney +=account.getCash();		    		   
		       
			   str = str + "{'id':'"+account.getId()+"','category_item':'"+account.getCategory_item()+"' , 'cash':'"+account.getCash()+"' , 'count_name':'"+account.getCount_name()+"'" +
			   		" , 'date':'"+account.getDate()+"' , 'remark':'"+account.getRemark()+"', 'flag_id': '"+account.getFlag_id()+"','in_money':'"+inMoney+"','out_money':'"+outMoney+"' " +
			   		",'categoey_id':'"+account.getCategoey_id()+"','count_id':'"+account.getCount_id()+"'},"; 			  
			}
			str += "]";

			printScript(str);
		}
	
		return null;
		
	}
	//删除信息
	public String deleteAccount(){
		
		Integer id = account.getId();
		String date = account.getDate();
		accounterService.deleteAccount(id);
		list=accounterService.getAccounts(date,users_id);
		if(list.isEmpty())
		{
           printScript("0");			
		}
		else
		{
			String str = "[";
			double outMoney =0;
			double inMoney =0;
			for(int i=0; i<list.size();i++)
			{
			   account = list.get(i);
			   if(account.getFlag_id()==0)
		    	   outMoney +=account.getCash();		       
		       else
		    	   inMoney +=account.getCash();		    		   
		    
			   str = str + "{'id':'"+account.getId()+"','category_item':'"+account.getCategory_item()+"' , 'cash':'"+account.getCash()+"' , 'count_name':'"+account.getCount_name()+"'" +
			   		" , 'date':'"+account.getDate()+"' , 'remark':'"+account.getRemark()+"', 'flag_id': '"+account.getFlag_id()+"','in_money':'"+inMoney+"','out_money':'"+outMoney+"' " +
			   		",'categoey_id':'"+account.getCategoey_id()+"','count_id':'"+account.getCount_id()+"'},"; 			  
			}
			str += "]";

			printScript(str);
		}
		return null;
		
	}
	
	//修改信息
	public String savedata(){
		
	   accounterService.savaAccount(account);
	  
	   String date = account.getDate().substring(0,7);
	   list=accounterService.getAccounts(date,users_id);
		if(list.isEmpty())
		{
          printScript("0");			
		}
		else
		{
			String str = "[";
			double outMoney =0;
			double inMoney =0;
			for(int i=0; i<list.size();i++)
			{
			   account = list.get(i);
			   if(account.getFlag_id()==0)
		    	   outMoney +=account.getCash();		       
		       else
		    	   inMoney +=account.getCash();		    		   
		    
			   str = str + "{'id':'"+account.getId()+"','category_item':'"+account.getCategory_item()+"' , 'cash':'"+account.getCash()+"' , 'count_name':'"+account.getCount_name()+"'" +
			   		" , 'date':'"+account.getDate()+"' , 'remark':'"+account.getRemark()+"', 'flag_id': '"+account.getFlag_id()+"','in_money':'"+inMoney+"','out_money':'"+outMoney+"' " +
			   		",'categoey_id':'"+account.getCategoey_id()+"','count_id':'"+account.getCount_id()+"'},"; 			  
			}
			str += "]";

			printScript(str);
		}
		return null;
	}
	
	public String searchAccounts(){
		List<AccountModel> list=accounterService.getAllAccounts(users_id); 
		if(list.size()==0){
			printScript("0");
		}else{
			String str="[";
			AccountModel temp=null;
			for(int i=0;i<list.size()-1;i++){
				temp=list.get(i);
				str+="{'id':'";
				str+=temp.getCount_id();
				str+="','name':'";
				str+=temp.getCount_name();
				str+="'},";		
			}
			temp=list.get(list.size()-1);
			str+="{'id':'";
			str+=temp.getCount_id();
			str+="','name':'";
			str+=temp.getCount_name();
			str+="'}]";	
			printScript(str);
		}
		return null;
	}
	
	
	
}
