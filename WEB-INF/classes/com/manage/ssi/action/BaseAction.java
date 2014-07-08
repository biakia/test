package com.manage.ssi.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Map;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletResponse;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import org.apache.catalina.connector.Request;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

public abstract class BaseAction extends ActionSupport  implements  ServletRequestAware ,ServletResponseAware {
	/**
	 * 基本的控制器
	 */
	private static final long serialVersionUID = 1L;
    
	protected final Logger logger = Logger.getLogger(BaseAction.class);
	
	
	protected Integer pageno = 1;

	protected boolean resume;//控制返回时用到的

	protected boolean isUpdate = false;

	protected boolean searched = false;
	
	protected String username;
	
	protected  HttpServletRequest  request;
	
	protected  HttpSession   session;
	
	protected  HttpServletResponse response;
	
	protected  Integer ids[];
	
	protected String param;
	
	
	
	
	@SuppressWarnings("unused")
	private String basePath;
	
	protected String target;//target UI file
	
	/**
	 * 在session中设置字段
	**/
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void setSession(Object name, Object value) {
		ActionContext ctx = ActionContext.getContext();
		Map session = ctx.getSession();
		session.put(name, value);
	}

	/**
	 * 从session中获取字段
	 **/
	@SuppressWarnings("rawtypes")
	public Object getSession(String name) {
		ActionContext ctx = ActionContext.getContext();
		Map session = ctx.getSession();
		return session.get(name);
	}
	
	//可以不通过struts的返回机制，直接对返回页面做写操作
	public void printScript(String script){
		response.setContentType("text/html");
		response.setCharacterEncoding("utf-8");
		PrintWriter	pw = null;
		try {
			pw = response.getWriter();
			pw.println(script);
			pw.flush();
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			if(pw != null) pw.close();
		}		
	}
	
	public void setBasePath(String basePath) {
		this.basePath = basePath;
	}
	
	/**
	 * @return the basePath
	 */
	public String getBasePath() {
		HttpServletRequest request = ServletActionContext.getRequest();
		String serverPort = String.valueOf(request.getServerPort());
		// 如果是80端口，则不显示
		if ("80".equals(serverPort)) {
			serverPort = "";
		} else {
			serverPort = ":" + serverPort;
		}
		return request.getScheme() + "://" + request.getServerName()
				+ serverPort + request.getContextPath() + "/";
	}
	
	
	
	
	
	/**
	 * 根据cookie的名称取得其值
	 * @param key
	 * @return
	 */
    public String getValuefromCookie(String key) {
		Cookie[] cookies = request.getCookies();
		for (int i = 0; cookies != null && i < cookies.length; i++) {
			if (key.equals(cookies[i].getName())) {
				try {
					return URLDecoder.decode(cookies[i].getValue(), "UTF-8");
				} catch (UnsupportedEncodingException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}
	
	public String getTarget() {
		return target;
	}
	
	/**
	 * 目标视图
	 * **/
	public String render(String target){
		this.target=target;
		return "jsp" ;
	}
	
	public String render2(String target){
		this.target=target;
		return "pdf" ;
	}
	
	public boolean isUpdate() {
		return isUpdate;
	}

	public void setUpdate(boolean isUpdate) {
		this.isUpdate = isUpdate;
	}

	

	public Integer getPageno() {
		return pageno;
	}

	public boolean isResume() {
		return resume;
	}

	public void setResume(boolean resume) {
		this.resume = resume;
	}

	public boolean isSearched() {
		return searched;
	}

	public void setSearched(boolean searched) {
		this.searched = searched;
	}
	
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
		this.session=request.getSession();
	}

	public void setServletResponse(HttpServletResponse response) {
        this.response =response;
	}
	

	public void setPageno(Integer pageno) {
		this.pageno = pageno;
	}
	
	public Integer[] getIds() {
		return ids;
	}

	public void setIds(Integer[] ids) {
		this.ids = ids;
	}

	
	public String getParam() {
		return param;
	}

	public void setParam(String param) {
		this.param = param;
	}

	

}
