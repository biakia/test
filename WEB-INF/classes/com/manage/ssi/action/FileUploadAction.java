package com.manage.ssi.action;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;

import com.manage.ssi.service.UserCheckManager;

public class FileUploadAction extends BaseAction {
	/**
	 * 用于上传头像
	 */
	@Resource(name = "usercheckService")
	private UserCheckManager usercheckService;
	private static final long serialVersionUID = 1L;
	// 代表上传文件的file对象
	private File file;
	// 上传文件名
	private String fileFileName;

	// 上传文件的MIME类型
	private String fileContentType;

	// 上传文件的描述信息
	private String description;

	// 保存上传文件的目录，相对于web应用程序的根路径，在struts.xml文件中配置
	private String uploadDir = "/photo";
	private String username;
	private String newFileName = null;
	private String info;

	public String upload() {

		logger.info(file.getName());
		// 得到当前时间自1970年1月1日0时0秒开始流失的毫秒数，将这个毫秒数作为上传文件的文件名
		long now = new Date().getTime();
		// 得到保存上传文件的目录的真实路径
		String path = ServletActionContext.getServletContext().getRealPath(
				uploadDir);
		File dir = new File(path);
		// 如果这个目录不存在，则创建它
		if (!dir.exists()) {
			dir.mkdir();
		}
		int index = fileFileName.lastIndexOf('.');

		// 判断上传的文件是否有扩展名，一时间戳作为新的文件名
		if (index != -1) {
			newFileName = username + now + fileFileName.substring(index);
		} else {
			newFileName = username + Long.toString(now);
		}
		BufferedOutputStream bos = null;
		BufferedInputStream bis = null;
		// 读取保存在临时目录下的上传文件，写入到新的文件中
		try {
			FileInputStream fis = new FileInputStream(file);
			bis = new BufferedInputStream(fis);

			FileOutputStream fos = new FileOutputStream(new File(dir,
					newFileName));
			bos = new BufferedOutputStream(fos);

			byte[] buf = new byte[1024];
			int len = -1;
			while ((len = bis.read(buf)) != -1) {

				bos.write(buf, 0, len);
			}
			Map<String, String> map = new HashMap<String, String>();
			map.put("users_name", username);
			map.put("imagename", newFileName);
			usercheckService.upload(map);
			printScript("<script>parent.document.getElementById('a-photo').innerHTML='<image src=\"../photo/"
					+ newFileName
					+ "\" height=\"94px\" width=\"130px\"></image>';parent.document.getElementById('imagename').value="+newFileName+" </script>");
			info = "上传成功，请点击空白处退出";
		} catch (Exception e) {
			info = "上传失败，请重试";
			e.printStackTrace();
		} finally {

			try {
				if (null != bis)
					bis.close();
			} catch (IOException e) {
				e.printStackTrace();

			}
			try {
				if (null != bos)
					bos.close();
			} catch (IOException e2) {
				e2.printStackTrace();

			}

		}
		return render("uploadPhoto");
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	public String getFileFileName() {
		return fileFileName;
	}

	public void setFileFileName(String fileFileName) {
		this.fileFileName = fileFileName;
	}

	public String getFileContentType() {
		return fileContentType;
	}

	public void setFileContentType(String fileContentType) {
		this.fileContentType = fileContentType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUploadDir() {
		return uploadDir;
	}

	public void setUploadDir(String uploadDir) {
		this.uploadDir = uploadDir;
	}

	public String getNewFileName() {
		return newFileName;
	}

	public void setNewFileName(String newFileName) {
		this.newFileName = newFileName;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

}
