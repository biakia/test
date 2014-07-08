package com.manage.ssi.test.dao;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.AbstractTransactionalDataSourceSpringContextTests;


import java.util.Enumeration;

import java.util.HashMap;

import java.util.Map;

import java.util.MissingResourceException;

import java.util.ResourceBundle;


public abstract class BaseDaoTestCase extends AbstractTransactionalDataSourceSpringContextTests {

    
protected final Log log = LogFactory.getLog(getClass());

    
protected ResourceBundle rb;

    
public static ApplicationContext ac=new ClassPathXmlApplicationContext(new String[]{"applicationContext.xml","applicationContext-dao.xml","applicationContext-resources.xml"});

    
protected String[] getConfigLocations() {
        
setAutowireMode(AUTOWIRE_BY_NAME);
        
return new String[] { 
                
"classpath:applicationContext.xml",
               
 "classpath:applicationContext*.xml"
          
  };
    
}

    public BaseDaoTestCase() {
       
 String className = this.getClass().getName();
        try {
            rb = ResourceBundle.getBundle(className);
        } catch (MissingResourceException mre) {
        }
    }

    protected Object populate(Object obj) throws Exception {
        Map map = new HashMap();
        for (Enumeration keys = rb.getKeys(); keys.hasMoreElements();) {
            String key =(String) keys.nextElement();
            map.put(key, rb.getString(key));
        }
        BeanUtils.copyProperties(map, obj);
        return obj;
    }

}