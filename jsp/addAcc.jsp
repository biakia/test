<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>增加账户</title>
<script type="text/javascript" src="../js/jquery-1.9.1.min.js" ></script>
<script type="text/javascript" src="../js/iframeAutoSize.js"></script>
<script type="text/javascript" src="../js/addAccHelp.js" charset="UTF-8"></script>
</head>
<body>
<div>
<form>
<table id="add-account">
<tr>
	<td style="color: red">账户名称：<span id="notice"></span></td>
</tr>
<tr>
<td><input type="text" name="account.count_name" id="name"></input></td>
</tr>
<tr>
	<td style="color: red">账户金额：</td>
</tr>
<tr>
<td><input type="text" name="account.count_cash" id="cash"></input></td>
</tr>
<tr>
	<td style="color: red">备注：</td>
</tr>
<tr>
<td><input type="text" name="account.count_remark" id="remark"></input></td>
</tr>
<tr>
	<td><input type="button" onclick="addAccount();" value="添加"></input></td>
</tr>
</table>
</form>
</div>
</body>
</html>