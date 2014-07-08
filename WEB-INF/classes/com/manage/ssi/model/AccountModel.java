package com.manage.ssi.model;

	/**
	 * �˻�model
	 * @author wujixin
	 * @date 2013 11 04
	 */
public class AccountModel {
	private int count_id;  
	private String count_name;  
	private double count_cash;  
	private String count_remark;
	private int userid;
	private Integer totalin;
	private Integer totalout;
	private Integer items;
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getCount_name() {
		return count_name;
	}
	public void setCount_name(String count_name) {
		this.count_name = count_name;
	}
	public double getCount_cash() {
		return count_cash;
	}
	public void setCount_cash(double count_cash) {
		this.count_cash = count_cash;
	}
	public String getCount_remark() {
		return count_remark;
	}
	public void setCount_remark(String count_remark) {
		this.count_remark = count_remark;
	}
	
	public int getCount_id() {
		return count_id;
	}
	public void setCount_id(int count_id) {
		this.count_id = count_id;
	}
	
	
	
	
	
	public Integer getTotalin() {
		return totalin;
	}
	public void setTotalin(Integer totalin) {
		this.totalin = totalin;
	}
	public Integer getTotalout() {
		return totalout;
	}
	public void setTotalout(Integer totalout) {
		this.totalout = totalout;
	}
	public Integer getItems() {
		return items;
	}
	public void setItems(Integer items) {
		this.items = items;
	}
	public AccountModel(int count_id, String count_name, double count_cash,
			String count_remark, int userid, int totalin, int totalout,
			int items) {
		super();
		this.count_id = count_id;
		this.count_name = count_name;
		this.count_cash = count_cash;
		this.count_remark = count_remark;
		this.userid = userid;
		this.totalin = totalin;
		this.totalout = totalout;
		this.items = items;
	}
	public AccountModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "AccountModel [count_id=" + count_id + ", count_name="
				+ count_name + ", count_cash=" + count_cash + ", count_remark="
				+ count_remark + ", userid=" + userid + ", totalin=" + totalin
				+ ", totalout=" + totalout + ", items=" + items + "]";
	}
	
	

}
