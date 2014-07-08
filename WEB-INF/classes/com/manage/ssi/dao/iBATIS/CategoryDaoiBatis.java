package com.manage.ssi.dao.iBATIS;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.manage.ssi.dao.CategoryDao;
import com.manage.ssi.model.Category;
@Repository("categoryDao")
public class CategoryDaoiBatis extends GenericDaoiBatis<Category, String> implements CategoryDao{
	
	public CategoryDaoiBatis() {
		super(Category.class);
		// TODO Auto-generated constructor stub
	}

	private static final String SEARCH="getCategory";
	private static final String ALL="getAll";
	@Override
	public String getCategory(int id) {
		Map<String,Integer> map=new HashMap<String,Integer>();
		map.put("id", id);
		return (String) getSqlMapClientTemplate().queryForObject(SEARCH,map);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Category> getAll(){
		
		return getSqlMapClientTemplate().queryForList(ALL);
	}

}
