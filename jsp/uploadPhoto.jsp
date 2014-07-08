<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="/struts-tags" prefix="s" %>
 <%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>上传头像</title>
<script type="text/javascript">
function sub(){
  document.getElementById("username").value=parent.document.getElementById("username").innerText;
  document.uploadphoto.submit();
}
</script>
</head>
<body>
<form name="uploadphoto" action="uploadface.upload.action" method="POST" enctype="multipart/form-data">
<input type="hidden" id="username" name="username">
<table>
<tr><td>
<input type="file" name="file" ></td></tr>
<tr><td>
<button type="button" onclick="sub();">提交</button></td></tr>
</table>
</form>  
</body>
</html>