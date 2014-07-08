package com.manage.ssi.model;

import java.io.Serializable;


public class Money implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	private Integer id;
	private Integer categoey_id;
	private Double cash;
	private Integer count_id;
	private String date;
	private String remark;
	private Integer flag_id;
	private Integer userid;
    private String category_item;
    private String count_name;
    
	
	public String getCount_name() {
		return count_name;
	}
	public void setCount_name(String count_name) {
		this.count_name = count_name;
	}
	public String getCategory_item() {
		return category_item;
	}
	public void setCategory_item(String category_item) {
		this.category_item = category_item;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getCategoey_id() {
		return categoey_id;
	}
	public void setCategoey_id(Integer categoey_id) {
		this.categoey_id = categoey_id;
	}
	public Double getCash() {
		return cash;
	}
	public void setCash(Double cash) {
		this.cash = cash;
	}
	public Integer getCount_id() {
		return count_id;
	}
	public void setCount_id(Integer count_id) {
		this.count_id = count_id;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Integer getFlag_id() {
		return flag_id;
	}
	public void setFlag_id(Integer flag_id) {
		this.flag_id = flag_id;
	}
	@Override
	public String toString() {
		return "Money [id=" + id + ", categoey_id=" + categoey_id + ", cash="
				+ cash + ", count_id=" + count_id + ", date=" + date
				+ ", remark=" + remark + ", flag_id=" + flag_id + ", userid="
				+ userid + ", category_item=" + category_item + ", count_name="
				+ count_name + "]";
	}
	public Money(Integer id, Integer categoey_id, Double cash,
			Integer count_id, String date, String remark, Integer flag_id,
			Integer userid, String category_item, String count_name) {
		super();
		this.id = id;
		this.categoey_id = categoey_id;
		this.cash = cash;
		this.count_id = count_id;
		this.date = date;
		this.remark = remark;
		this.flag_id = flag_id;
		this.userid = userid;
		this.category_item = category_item;
		this.count_name = count_name;
	}
	public Money() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
