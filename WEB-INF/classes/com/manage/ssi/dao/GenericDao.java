package com.manage.ssi.dao;


import java.io.Serializable;

import java.util.List;

import java.util.Map;

import com.manage.ssi.utils.PageController;




/**
 * Generic DAO (Data Access Object) with common methods to CRUD POJOs.
 
    * <p>Extend this interface if you want typesafe (no casting necessary) DAO's for your
 
    * domain objects.
 * @author <a href="mailto:bwnoll@gmail.com">Bryan Noll</a>
 
    * @param <T> a type variable
 
    * @param <PK> the primary key for that type

    */




   public interface GenericDao <T, PK extends Serializable> {

    
   /**
     
     * Generic method used to get all objects of a particular type. This
    
     * is the same as lookup up all rows in a table.
    
     * @return List of populated objects
     
     */
   
     List<T> getAll();

    
    
    

    /**
     
      * Generic method to get an object based on class and identifier. An
     
      * ObjectRetrievalFailureException Runtime Exception is thrown if
     
      * nothing is found.
     
      * @param id the identifier (primary key) of the object to get
     
      * @return a populated object
     
      * @see org.springframework.orm.ObjectRetrievalFailureException
     
     */
    
      T get(PK id);

    
     
     


     /**
     
       * Checks for existence of an object of type T using the id arg.
     
       * @param id the id of the entity
     
       * @return - true if it exists, false if it doesn't
     
       */
    
       boolean  exists(PK id);

    




     /**
     
       * Generic method to save an object - handles both update and insert.
     
       * @param object the object to save
         * @return the persisted object
     
       */
    
       T save(T object);

    


     /**
     
       * Generic method to delete an object based on class and id
           * @param id the identifier (primary key) of the object to remove
     
       */
    
       void remove(PK id);  
    
    


     /**
    
       * Generic method to get all objects by condition
     
       * When use it, you must put the sqlid sqlCountName in Map condition
     
       * @param queryParam
     
       * @param pageno
     
       * @param pagesize
     
       * @return
     
       */
    
       PageController getAll(Map queryParam,int pageno,int pagesize);
    
    



      /**
     
        * Generic method to get all objects by condition 
     
        * When use it, you must point sqlid+"Count" in configSQLxml to get the object numbers
     
        * @param queryParam
     
        * @param pageno
     
        * @param pagesize
     
        * @return
     
        */    
    
        PageController getAll(String sqlid,Map queryParam,int pageno,int pagesize);
    
    



      /**
     
        * Generic method used to get some objects by sqlName and searchConditions
     
        * @param sqlName
     
        * @param arg
     
        * @return
     
        */
    
        public List findForList(String sqlName, Serializable arg);
    
    



      /**
     
        * Generic method used to add object by sqlName and itself
     
        * @param insertSqlName
     
        * @param obj
     
        * @return
     
        */
    
        public Object insert(String insertSqlName, Serializable obj); 
    
    


       /**
     
         * Generic method used to look up single object by sqlName and searchCondtions
    
         * @param sqlName
     
         * @param object
     
         * @return
              */
    
        public Object load(String sqlName, Serializable object);
    
    



       /**
     
         * Generic method update object through sqlName
     
         * @param updateSqlName
     
         * @param obj
     
         * @return
     
         */
    
        public int update(String updateSqlName, Serializable obj);
    
    


       /**
             * Generic method used to delete object through sqlName 
     
         * @param removeSqlName 
     
         * @param obj
     
         * @return
     
         */
    
         public int remove(String removeSqlName, Serializable obj);
    
    


       /**
     
         * Generic method used to count the number of qualify object
     
         * @param sqlName
     
         * @param obj
     
         * @return
     
         */
    
        public int countNum(String sqlName, Serializable obj); 

}