package com.manage.ssi.dao.iBATIS;


import org.apache.commons.lang.StringUtils;

import org.apache.commons.logging.Log;

import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;

import com.manage.ssi.dao.GenericDao;

import com.manage.ssi.utils.PageController;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.orm.ObjectRetrievalFailureException;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import org.springframework.util.ClassUtils;


import java.io.Serializable;

import java.util.List;

import java.util.Map;



/**
 
  * This class serves as the Base class for all other DAOs - namely to hold
 
  * common CRUD methods that they might all use. You should only need to extend
 
  * this class when your require custom CRUD logic.
 
  * @author Bobby Diaz, Bryan Noll
 
  * @param <T> a type variable
 
  * @param <PK> the primary key for that type
 
  */


   public class GenericDaoiBatis<T, PK extends Serializable> extends SqlMapClientDaoSupport implements GenericDao<T, PK> {

	


    /**
	 
      * Autowired annotation is auto wire the bean by matching data type
	 
      * Set sqlMapClient for GenericDaoiBatis by spring
	 
      * @param sqlMapClient
	 
      */
	
      @Autowired
	
      public void setSqlMapClientForAutowire(SqlMapClient sqlMapClient) {  
       
          super.setSqlMapClient(sqlMapClient); 
	
       } 
	
    


    /**
     
      * Log variable for all child classes. Uses LogFactory.getLog(getClass()) from Commons Logging
     
      */
    
      protected final Log log = LogFactory.getLog(getClass());
    
      private Class<T> persistentClass;

    



    /**
     
      * Constructor that takes in a class to see which type of entity to persist
     
      * @param persistentClass the class type you'd like to persist
     
      */
    
      public GenericDaoiBatis(final Class<T> persistentClass) {
        
           this.persistentClass = persistentClass;
    
       }

    


       @SuppressWarnings("unchecked")
    
       public List<T> getAll() {
        
           return getSqlMapClientTemplate().queryForList(
iBatisDaoUtils.getSelectQuery(ClassUtils.getShortName(this.persistentClass)), null);
    }

   

       @SuppressWarnings("unchecked")
    
        public T get(PK id) {
        
          T object = (T) getSqlMapClientTemplate().queryForObject(
iBatisDaoUtils.getFindQuery(ClassUtils.getShortName(this.persistentClass)), id);
        
          if (object == null) {            
               log.warn("Uh oh, '" + this.persistentClass + "' object with id '" + id + "' not found...");
            
               throw new ObjectRetrievalFailureException(ClassUtils.getShortName(this.persistentClass), id);
       
                }        
       return object;
    
         }

    



 
       @SuppressWarnings("unchecked")
    
         public boolean exists(PK id) {
        
                 T object = (T) getSqlMapClientTemplate().queryForObject(
 iBatisDaoUtils.getFindQuery(ClassUtils.getShortName(this.persistentClass)), id);        
                 return object != null;
   
           }

    



         public T save(final T object) {
        
            String className = ClassUtils.getShortName(object.getClass());
       
            Object primaryKey = iBatisDaoUtils.getPrimaryKeyValue(object);
        
            Class primaryKeyClass = iBatisDaoUtils.getPrimaryKeyFieldType(object);
        
            String keyId = null;
        
            if (primaryKey != null) {
            
                             keyId = primaryKey.toString();
       
                       }
        
            if (StringUtils.isBlank(keyId)) {
            
                  iBatisDaoUtils.prepareObjectForSaveOrUpdate(object);
           
                  primaryKey = getSqlMapClientTemplate().insert(iBatisDaoUtils.getInsertQuery(className), object);
                              iBatisDaoUtils.setPrimaryKey(object, primaryKeyClass, primaryKey);
        
              } else {
            
                  iBatisDaoUtils.prepareObjectForSaveOrUpdate(object);
            
                  getSqlMapClientTemplate().update(iBatisDaoUtils.getUpdateQuery(className), object);
       
               }
        
            if (iBatisDaoUtils.getPrimaryKeyValue(object) == null) {
            
                    throw new ObjectRetrievalFailureException(className, object);
       
              } else {
            
                     return object;
        
                     }
    
          }

    



           public void remove(PK id) {
        
                  getSqlMapClientTemplate().update(
iBatisDaoUtils.getDeleteQuery(ClassUtils.getShortName(this.persistentClass)), id);
                 }

    


           public PageController getAll(Map conditions,int pageno,int pagesize){
		

            int total=((Integer)getSqlMapClientTemplate().queryForObject((String)conditions.get("sqlid"),conditions)).intValue();
		    int iPage = (int) Math.min(pageno, total / pagesize * 1.0 + (total % pagesize == 0 ? 0 : 1));
		
            int beginsize=(iPage - 1) * pagesize;
		
            List items=getSqlMapClientTemplate().queryForList(iBatisDaoUtils.getSelectQuery(ClassUtils.getShortName(this.persistentClass)),conditions,beginsize,pagesize);
		
            return new PageController(items, total, pagesize, iPage);
	
             }
    
    




           public PageController getAll(String sqlid,Map conditions,int pageno,int pagesize){
		
            int total=((Integer)getSqlMapClientTemplate().queryForObject(sqlid.concat("Count"),conditions)).intValue();
		
            int iPage = (int) Math.min(pageno, total / pagesize * 1.0 + (total % pagesize == 0 ? 0 : 1));
		
            int beginsize=(iPage - 1) * pagesize;
		
            List items=getSqlMapClientTemplate().queryForList(sqlid,conditions,beginsize,pagesize);
		
            return new PageController(items, total, pagesize, iPage);
	
             }
    
    



           public List findForList(String sqlName, Serializable arg) {
		
             return arg == null ? getSqlMapClientTemplate().queryForList(sqlName):getSqlMapClientTemplate().queryForList(sqlName,arg);
	           }
    
    



           public Object insert(String insertSqlName, Serializable obj) {
    	
             return getSqlMapClientTemplate().insert(insertSqlName, obj);		 
	
             }
    
    

           public Object load(String sqlName, Serializable pk) {
    	
              return getSqlMapClientTemplate().queryForObject(sqlName, pk);
	
               }
    
    

           public int update(String updateSqlName, Serializable obj) {		 	
		
              return getSqlMapClientTemplate().update(updateSqlName, obj);
	
               }
    
    

           public int remove(String removeSqlName, Serializable obj) {
		
               return getSqlMapClientTemplate().delete(removeSqlName, obj);
	
               }
    
    

           public int countNum(String sqlName, Serializable obj) {
		
               return ((Integer)getSqlMapClientTemplate().queryForObject(sqlName, obj)).intValue();		
	
               }

}