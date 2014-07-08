package com.manage.ssi.service.impl;


import java.io.Serializable;

import java.util.List;

import java.util.Map;

import org.apache.commons.logging.Log;

import org.apache.commons.logging.LogFactory;




import com.manage.ssi.dao.GenericDao;
import com.manage.ssi.service.GenericManager;
import com.manage.ssi.utils.PageController;





public class GenericManagerImpl<T, PK extends Serializable> implements GenericManager<T, PK> {

    


      /**
     
        * Log variable for all child classes. Uses LogFactory.getLog(getClass()) from Commons Logging
    
        */
    
        protected final Log log = LogFactory.getLog(getClass());

    




      /**
     
        * GenericDao instance, set by constructor of this class
     
        */
   
        protected GenericDao<T, PK> genericDao;

    



      /**
    
        * Public constructor for creating a new GenericManagerImpl.
     
        * @param genericDao the GenericDao to use for persistence
     
        */
    
       public GenericManagerImpl(final GenericDao<T, PK> genericDao) {
        
             this.genericDao = genericDao;
   
          }

    


        public List<T> getAll() {
        
               return genericDao.getAll();
   
              }

    

        public T get(PK id) {
        
              return genericDao.get(id);
    
            }

    

        public boolean exists(PK id) {
       
               return genericDao.exists(id);
    
            }

    

        public T save(T object) {
        
             return genericDao.save(object);
    
            }
    
    


        public void remove(PK id) {
        
              genericDao.remove(id);
    
             }

	

        public PageController getAll(Map queryParam, int pageno, int pagesize) {
		
              return genericDao.getAll(queryParam, pageno, pagesize);
	
             }

	

        public PageController getAll(String sqlid, Map queryParam, int pageno,int pagesize) {
		
                  return genericDao.getAll(sqlid, queryParam, pageno, pagesize);
	
             }


}