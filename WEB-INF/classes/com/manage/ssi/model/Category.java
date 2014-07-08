package com.manage.ssi.model;

public class Category {
	
	private String category_item;
    private int category_id;
    
    
	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getCategory_item() {
		return category_item;
	}

	public void setCategory_item(String category_item) {
		this.category_item = category_item;
	}

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(String category_item) {
		super();
		this.category_item = category_item;
	}
	
	

}
