package com.manage.ssi.action;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.manage.ssi.model.Money;
import com.manage.ssi.model.UserCheckInfo;
import com.manage.ssi.service.AccountManager;
import com.manage.ssi.service.UserCheckManager;

public class UserCheckInfoAction extends BaseAction {
	/**
	 * 首页相关的action
	 * 实现了页面间的跳转，用户注册登录的功能
	 * 实现了首页获取特定数据的功能
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Resource(name = "usercheckService")
	private UserCheckManager usercheckService;
	@Resource(name = "accounterService")
	private AccountManager accounterService;
	
	
	private String users_mail;
	private Integer users_id;
	private Double cash;
	private String users_name;
	private String users_password;
	private String errorinfo = "";
	private String imagename;
	
	private UserCheckInfo usercheckinfo;
	private Money account;
	private List<Money> list;
	private List<UserCheckInfo> list1;

//************全局跳转函数***************************
	public String goChart(){ //去报表页
		if(users_name==null)
			return render("login");
		return render("Chart");
	}

	public String goAccount(){//去账户页
		if(users_name==null)
			return render("login");
		return render("Account");
	}
	
	public String goMain(){//去首页
		if(users_name==null)
			return render("login");
		return render("mainPage");
	}
	
	public String goRecord(){//去记账页
		if(users_name==null)
			return render("login");
		return render("record");
	}
	

//******************具体业务************************************
	/**
	 * 实现用户登录功能
	 * @author daihangtao
	 * @return
	 */
	public String logincheck() {
		Map<String, String> map2 = new HashMap<String, String>();
		map2.put("users_name", users_name);
		map2.put("users_password", users_password);
		list1 = usercheckService.login(map2);
		request.setAttribute("list1", list1);
		if (list1.size() == 0) {
			errorinfo = "用户名或密码不正确";
			return render("login");
		} else {
			usercheckinfo = list1.get(0);
			users_name=usercheckinfo.getUsers_name();
			users_id=usercheckinfo.getUsers_id();
			imagename=usercheckinfo.getImagename();
			if(imagename==null)
				imagename="default.gif";
			return render("mainPage");
		}
	}

	
   /**
    * 实现用户注册功能
    * @author daihangtao
    * @return
    */
	public String register() {
		Map<String, String> map2 = new HashMap<String, String>();
		map2.put("users_name", usercheckinfo.getUsers_name());
		if (usercheckService.getUserCheckInfo(map2).size() > 0) {
			errorinfo = "此用户已存在!!";
			return render("login");
		}else {
			usercheckService.saveUserCheckInfo(usercheckinfo);
			return render("login");
		}
	}

	public String registerlink() {
		return render("userRegister");
	}

	public String loadMyAccount() {
		StringBuffer bf = new StringBuffer();
		bf.append("<table border='3px'><tr><td>aaaaaaaaa</td><td>bbbb</td></tr></table>");
		printScript(bf.toString());
		logger.info(bf);
		return null;
	}

	
    /**
     * 显示周，月，年的收入和支出
     * @author daihangtao
     * @return JSON格式数据
     */
	public String show() {
		Calendar calendar = Calendar.getInstance();
		int year = calendar.get(Calendar.YEAR);
		int month = calendar.get(Calendar.MONTH) + 1;
		int week = calendar.get(Calendar.WEEK_OF_YEAR);

		double yearin = 0;
		double yearout = 0;
		double monthin = 0;
		double monthout = 0;

		Map<String, Integer> map2 = new HashMap<String, Integer>();

		map2.put("users_id", users_id);

		list = accounterService.getAccounts1(map2);
		if (list.isEmpty()) {
			printScript("0");
		} else {
			logger.info(list);
			String str = "[";
			for (int i = 0; i < list.size(); i++) {
				logger.info("now" + week);

				logger.info("subAAAAAAAAAAA"
						+ list.get(i).getDate().substring(5, 7));

				if ((String.valueOf(year).equals(list.get(i).getDate()
						.substring(0, 4)))
						&& list.get(i).getFlag_id() == 1)
					yearin += list.get(i).getCash();
				if ((String.valueOf(year).equals(list.get(i).getDate()
						.substring(0, 4)))
						&& list.get(i).getFlag_id() == 0)
					yearout += list.get(i).getCash();
				if ((String.valueOf(month).equals(list.get(i).getDate()
						.substring(5, 7)))
						&& list.get(i).getFlag_id() == 1)
					monthin += list.get(i).getCash();
				if ((String.valueOf(month).equals(list.get(i).getDate()
						.substring(5, 7)))
						&& list.get(i).getFlag_id() == 0)
					monthout += list.get(i).getCash();

			}
			str = str + "{'yearin':'" + yearin + "','yearout':'" + yearout
					+ "','monthin':'" + monthin + "','monthout':'" + monthout
					+ "' }";

			str += "]";
			printScript(str);
			logger.info(str);
		}
		return null;
	}

	
//******************getter and setter methods***************************	
	
	public String getUsers_mail() {
		return users_mail;
	}

	public void setUsers_mail(String users_mail) {
		this.users_mail = users_mail;
	}

	public void setErrorinfo(String errorinfo) {
		this.errorinfo = errorinfo;
	}
	public UserCheckInfo getUsercheckinfo() {
		return usercheckinfo;
	}

	public void setUsercheckinfo(UserCheckInfo usercheckinfo) {
		this.usercheckinfo = usercheckinfo;
	}

	public UserCheckManager getUsercheckService() {
		return usercheckService;
	}

	public void setUsercheckService(UserCheckManager usercheckService) {
		this.usercheckService = usercheckService;
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

	public Integer getUsers_id() {
		return users_id;
	}

	public void setUsers_id(Integer users_id) {
		this.users_id = users_id;
	}

	public Double getCash() {
		return cash;
	}

	public void setCash(Double cash) {
		this.cash = cash;
	}
	
	public String getUsers_name() {
		return users_name;
	}

	public void setUsers_name(String users_name) {
		this.users_name = users_name;
	}

	public String getErrorinfo() {
		return errorinfo;
	}

	public void setErrorifo(String errorinfo) {
		this.errorinfo = errorinfo;
	}

	public String getUsers_password() {
		return users_password;
	}

	public void setUsers_password(String users_password) {
		this.users_password = users_password;
	}
	
	public List<UserCheckInfo> getList1() {
		return list1;
	}

	public void setList1(List<UserCheckInfo> list1) {
		this.list1 = list1;
	}

	public AccountManager getAccounterService() {
		return accounterService;
	}

	public void setAccounterService(AccountManager accounterService) {
		this.accounterService = accounterService;
	}

	public String getImagename() {
		return imagename;
	}

	public void setImagename(String imagename) {
		this.imagename = imagename;
	}

	
}
