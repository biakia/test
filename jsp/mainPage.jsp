<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ page import="java.util.List"%>
<%@ page import="com.manage.ssi.model.UserCheckInfo"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<link rel="stylesheet" type="text/css" href="../css/shou_ye.css" />
<script src="../js/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src=".././js/jquery.mousewheel.js" type="text/javascript"></script>
<script src=".././js/jquery.jqChart.min.js" type="text/javascript"></script>
<script src="../js/jquery.jqRangeSlider.min.js" type="text/javascript"></script>
<script src="../js/slideshow.js" type="text/javascript"></script>
<script  type="text/javascript"
	src="../js/excanvas.js"></script>
<script src="../js/main.js" type="text/javascript"></script>
<script type="text/javascript">
	//         
	$(function() {
		Slideshow.initialize('#slideshow', [ {
			image : "../res/image/10.jpg",
			
			title : "如果我们不能在自己有信心的范围内找到需要的，那么我们不会扩大范围。我们只会等待 ",
			

			id : "473947"
		}, {
			image : "../res/image/11.jpg",
			
			title : "you must not give up the courage to dream! ",
		

			id : "431948"
		}, {
			image : "../res/image/12.jpg",
			
			title : "投资必须是理性的，如果你不理解              它，就不要做！ ",
			

			id : "494593"
		}, {
			image : "../res/image/13.jpg",
			
			title : "Trying to please other people is largely a futile activity!",
		

			id : "43194"
		}, {
			image : "../res/image/12.jpg",
			
			title : " ",
			

			id : "473946"
		} ]);

	});
	//
</script>
<style type="text/css">
<!--
* {
	margin: 0;
	padding: 0;
	font-size: 12px;
	font-weight: normal;
}

.jj {
	font-weight: bolder !important;
}

.box {
	border-top-color: #c00 !important;
}

.pr {
	color: #060 !important;
}

ol {
	list-style: none
}

div.content_1 {
	position: relative;
	width: 600px;
	margin-top: 10px;
	margin-left: 1px;
}

#tab_zzjs_3 {
	position: relative;
	width: 200px;
	margin: 20px;
	height: 160px;
}

#tab_zzjs_3 h3 {
	position: relative;
	z-index: 1;
	height: 36px;
	padding-top: 4px;
	margin-bottom: -1px;
	border: solid #ccc;
	border-width: 1px 0 1px 1px;
	text-align: center;
	font-family: 宋体;
	background: #eee;
	cursor: pointer;
}

#tab_zzjs_3 h3.up {
	z-index: 3;
	color: #c00;
	background: #fff;
	height: 42px;
}

#tab_zzjs_3 div.tab {
	display: none;
	position: absolute;
	left: 199px;
	top: 0;
	z-index: 2;
	width: 700px;
	height: 600px;
	padding: 5px;
	border: solid 1px #ccc;
	color: #666;
}

#tab_zzjs_3 div.tab.up {
	display: block;
}
-->
</style>
<link href=".././css/login.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="content-type"
	content="application/xhtml+xml; charset=utf—8" />
<meta name="author" content="Mike Yarmish" />
<meta name="description" content="Your website description goes here" />
<meta name="keywords" content="your,keywords,goes,here" />
<title>首页</title>
</head>
<body id="home-body">
	<div id="container">
		<div id="info">
			欢迎您:<span id="username">${users_name}</span> 
			<input type="hidden" id="userid" value="${users_id}">
			<input type="hidden" id="imagename" value="${imagename}">
		</div>

		<div id="headerWrap">
        <div id="topPan">
           <img alt="" src=".././res/image/lo.png">
			
			<div id="header">
				<ul id="navigation">
				<li><a class="h01" href="userlogin.goMain.action?users_id=${users_id}&users_name=${users_name}&imagename=${imagename}"></a></li>
				<li><a class="h02" href="userlogin.goChart.action?users_id=${users_id}&users_name=${users_name}&imagename=${imagename}"></a></li>
				<li><a class="h03" href="userlogin.goAccount.action?users_id=${users_id}&users_name=${users_name}&imagename=${imagename}"></a></li>
				<li><a class="h04" href="userlogin.goRecord.action?users_id=${users_id}&users_name=${users_name}&imagename=${imagename}"></a></li>	
				</ul>
			</div>
			</div>
		</div>
		<div id="content">
			<div id="shou_ye">
				<div id="left">
					<div class="riBox" onclick="showUser();">
						<h3>
							<span class="bg"> </span> <span class="ri_l ri_corner"> </span> <span
								class="ri_r ri_corner"> </span>
						</h3>
						<div class="tab"
							style="height: 119px; background: url(../res/image/tab_bg_1.gif) repeat-x;">
							<div class="tab_l"
								style="background: url(../res/image/tab_lr_1.gif);"></div>
							<div class="tablediv">
								<table id="table1" cellpadding="0" cellspacing="0" border="0">
									<tbody>
										<tr>
											<th class="f">&nbsp;</th>
											
											<th>本月</th>
											<th class="e">本年</th>
										</tr>
										<tr>
											<td class="type f">
												<div>收&nbsp;入</div>
											</td>
											
											<td><a class="type_a money"
												href="tally/index.do?time=month&amp;type=1">￥0.00</a></td>
											<td class="e"><a class="type_a money"
												href="tally/index.do?time=year&amp;type=1">￥8,676.80</a></td>
										</tr>
										<tr class="bottom">
											<td class="type f"><div
													style="background-position: 14px -16px;">支&nbsp;出</div></td>
											
											<td><a class="type_a money"
												href="tally/index.do?time=month&amp;type=0">￥0.00</a></td>
											<td class="e"><a class="type_a money"
												href="tally/index.do?time=year&amp;type=0">￥5,756.80</a></td>
										</tr>
									</tbody>
								</table>
								<div class="tab_r" style="background-image: url(tab_lr_1.gif);"></div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
					
					<div id="display" style="margin-top:100px;">
						<div id="slideshow">
							<div class="container">
								<div class="slide" id="slide-0">
									<img src="../res/image/10.jpg" width=690 height=500>
								</div>
								<div class="slide" id="slide-1">
									<img src="../res/image/11.jpg" width=690 height=500>
								</div>
								<div class="slide" id="slide-2">
									<img src="../res/image/12.jpg" width=690 height=500>
								</div>
								<div class="slide" id="slide-3">
									<img src="../res/image/13.jpg" width=690 height=500>
								</div>
								<div class="slide" id="slide-4">
									<img src="../res/image/12.jpg" width=690 height=500>
								</div>
							</div>

							<div class="paging">
								<a href="javascript:;" id="paging-0"
									onclick="Slideshow.jump(0, this);"
									onmouseover="Slideshow.preview(0);" class="current"></a> <a
									href="javascript:;" id="paging-1"
									onclick="Slideshow.jump(1, this);"
									onmouseover="Slideshow.preview(1);" class=""> </a> <a
									href="javascript:;" id="paging-2"
									onclick="Slideshow.jump(2, this);"
									onmouseover="Slideshow.preview(2);" class=""></a> <a
									href="javascript:;" id="paging-2"
									onclick="Slideshow.jump(3, this);"
									onmouseover="Slideshow.preview(3);" class=""></a> <a
									href="javascript:;" id="paging-3"
									onclick="Slideshow.jump(4, this);"
									onmouseover="Slideshow.preview(4);" class="last-slide"></a>
							</div>
							<div class="caption">
								<h3></h3>
							</div>
							<div class="preview"></div>
							<div class="mask"></div>
						</div>
					</div>
				</div>
				<div id="right">
					<div id="tou_xiang_kuang">
      					<div id="zhao_pian"><a id="a-photo" href="#" onclick="showUpload();"><image src="../photo/${imagename}" height="194px" width="230px"></image></a></div>
    				</div>
					<div id="riHead"
						style="background: url(../res/image/head_bg.jpg) repeat-x; height: 230px; text-align: center;">
						
					</div>
					 <div class="d2"><img  width="233px;"alt="d2" src="../res/image/d2.jpg" style="box-shadow:-2px 0px 8px #262625,0px -2px 8px #262625,0px 2px 8px #262625,2px 0px 8px #aeb1ab;margin-left:4px;"></div>
                      <div class="d3"><img alt="d3" width="233px;" src="../res/image/d3.jpg"style="box-shadow:-2px 0px 8px #262625,0px -2px 8px #262625,0px 2px 8px #262625,2px 0px 8px #aeb1ab; margin-top:40px;margin-left:4px;"></div>
				</div>
				<blockquote>&nbsp;</blockquote>
			</div>


		</div>


		<div id="footer">
			<p>&copy; 2013 | Design by 西安交通大学 软件11班若干人</p>
		</div>
	</div>


	<input type="hidden" name="users_name" maxlength="40"
		value="${users_name}" class="text">
	<input type="hidden" name="usercheckinfo.users_id" maxlength="40"
		value="${usercheckinfo.users_id}" class="text">

</body>
</html>