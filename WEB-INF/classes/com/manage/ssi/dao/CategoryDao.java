package com.manage.ssi.dao;

import java.util.List;

import com.manage.ssi.model.Category;

public interface CategoryDao extends GenericDao<Category, String>{
	String getCategory(int id);
	
	List<Category> getAll();

}
