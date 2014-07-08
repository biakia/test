<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="../css/login.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
<title>登录界面</title>
<script type="text/javascript" src="../js/checkForm.js">
	
</script>
</head>
<body>
	<div class="maincontainer">
		<div class="choose">
			<div class="tablogin"></div>
			<div class="tabreg"></div>
		</div>
		<div class="logo"></div>

		<div class="register">
			<form action="userlogin.register.action" name="form1" method="post"
				onsubmit="return all(this);">
				<div class="username">

					<input id="username" class="text"
						style="margin-top: 10px; margin-left: 160px; float: left; width: 160px;"
						placeholder="eg: happy小明" type="text"
						name="usercheckinfo.users_name" onblur=" return CheckForm();" />
					<div class="warning1"></div>

				</div>

				<div class="psw">
					<input id="input1" class="text"
						style="margin-top: 20px; margin-left: 135px; width: 160px;"
						type="password" placeholder="不能为空"
						name="usercheckinfo.users_password" />
				</div>
				<div class="pswconfirm">
					<input id="input2" class="text"
						style="margin-top: 10px; margin-left: 160px; width: 160px; float: left"
						type="password" placeholder="确认您的密码"
						onblur="return CheckPsw();" />
					<div class="warning2"></div>
				</div>
				<div class="email">
					<input id="email" class="text"
						style="margin-top: 20px; margin-left: 130px; width: 160px; float: left"
						placeholder="eg: 2345@qq.com" type="text"
						name="usercheckinfo.users_mail" onblur="return test();" />
					<div class="warning3"></div>
				</div>

				<button
					style="background-image: url(../res/image/button.png); width: 280px; height: 40px; margin-left: 80px; margin-top: 30px;"
					type="submit" name="button1"></button>

			</form>
		</div>
		<div class="content">
			<div class="logoword"></div>
			<form action="userlogin.logincheck.action" name="form2" method="post">
				<div class="username">

					<input class="text"
						style="margin-top: 10px; margin-left: 160px; width: 160px;"
						type="text" name="users_name" />


				</div>
				<div class="psw">
					<input class="text"
						style="margin-top: 20px; margin-left: 135px; width: 160px;"
						type="password" name="users_password" />
				</div>

				<button class="text" onclick="CheckForm();"
					style="background-image: url(../res/image/button.png); width: 280px; height: 40px; margin-left: 80px; margin-top: 30px;"
					type="submit" name="button1"></button>

			</form>
		</div>
		<div class="error">
			<font color="red" align="center">${errorinfo}</font>
		</div>

	</div>
</body>
</html>