package com.manage.ssi.action;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.manage.ssi.model.Money;
import com.manage.ssi.service.AccountManage;
import com.manage.ssi.service.AccountManager;

public class ChartAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 622771121275624584L;

	private int userid;
	private int flagid=0;   //0表示支出，1表示收入
	private int year;
	private int month;
	@Resource(name = "accounterService")
	private AccountManager accountManager;
	
	/**
	 * 资产负债表的图：饼图
	 * @author wujixin
	 * @return JSON数据，包括账户名称和账户金额
	 * @date 2013-11-28
	 */
	public String pieChart(){
		List<Money> list=accountManager.getAccountCash(userid,flagid);
		if(list.size()==0){
			printScript("0");
		}else{
			String str = "[";
			for (int i = 0; i < list.size() - 1; i++) {
				str += "{'name':'";
				str += list.get(i).getCount_name();
				str += "','cash':'";
				str += list.get(i).getCash();
				str += "'},";
			}
			str += "{'name':'";
			str += list.get(list.size()-1).getCount_name();
			str += "','cash':'";
			str += list.get(list.size()-1).getCash();
			str += "'}]";
			
			printScript(str);
		}
		return null;
	} 
	
	/**
	 * 日常收支图：条形图
	 * @author wujixin
	 * @return 返回JSON数据：包括一级分类名称和相应的金额
	 * @date 2013-11-28
	 */
	public String barChart(){
		List<Money> list=accountManager.getCategoryCash(userid, flagid);
		if(list.size()==0){
			printScript("0");
		}else{
			String str = "[";
			for (int i = 0; i < list.size() - 1; i++) {
				str += "{'name':'";
				str += list.get(i).getCategory_item();
				str += "','cash':'";
				str += list.get(i).getCash();
				str += "'},";
			}
			str += "{'name':'";
			str += list.get(list.size()-1).getCategory_item();
			str += "','cash':'";
			str += list.get(list.size()-1).getCash();
			str += "'}]";
			
			printScript(str);
		}
		return null;
	}
	
	/**
	 * 收支趋势图
	 * @author wujixin
	 * @date 2013-11-28
	 * @return 返回JSON数据：包括每个月的收入和支出
	 */
	public String lineChart(){
		List<List<Money>> list=accountManager.getTrendCash(userid, year, month);
		logger.info(list.get(1));
		int outcome=0;
		int income=0;
		String str="[";
		if(list.size()==0){
			printScript("0");
		}else{
			for(int i=0;i<month-1;i++){
				for(int j=0;j<list.get(i).size();j++){ //每个月的数据,到当前月的前一个月
					Money temp=list.get(i).get(j);
					if(temp.getFlag_id()==0){//支出
						outcome+=temp.getCash();
					}else{ //收入
						income+=temp.getCash();
					}
				}
				str+="{'month':'"+(year+"."+(i+1))+"','income':'"+income+"','outcome':'"+outcome+"'},";
				income=0;
				outcome=0;
			}
			for(int j=0;j<list.get(month-1).size();j++){ //当前月的数据
				Money temp=list.get(month-1).get(j);
				if(temp.getFlag_id()==0){//支出
					outcome+=temp.getCash();
				}else{ //收入
					income+=temp.getCash();
				}
			}
			str+="{'month':'"+(year+"."+month)+"','income':'"+income+"','outcome':'"+outcome+"'}]";
			printScript(str);
		}
		
		return null;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public int getFlagid() {
		return flagid;
	}
	public void setFlagid(int flagid) {
		this.flagid = flagid;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}
	
	
	
}
