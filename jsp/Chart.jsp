<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script src="../js/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="../js/jquery.mousewheel.js" type="text/javascript"></script>
<script src="../js/jquery.jqChart.min.js" type="text/javascript"></script>
<script src="../js/jquery.jqRangeSlider.min.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/excanvas.js"></script>
<script type="text/javascript" src="../js/AJAXInit.js"></script>
<script type="text/javascript" src="../js/chartHelp.js"></script>
<link rel="stylesheet" type="text/css" href="../css/tu_biao.css" />
<link rel="stylesheet" type="text/css" href="../css/shou_zhi.css" />
<link rel="stylesheet" type="text/css" href="../css/qu_shi.css" />
<link rel="stylesheet" href="../css/Chart.css" type="text/css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="content-type"
	content="application/xhtml+xml; charset=utf—8" />
<meta name="author" content="Mike Yarmish" />
<meta name="description" content="Your website description goes here" />
<meta name="keywords" content="your,keywords,goes,here" />
<title>报表</title>
</head>

<body onload="drawBar();">
	<div id="jqChart"></div>

	<div id="container">
	<img src="../res/image/logo.png" style="float: left" height="56px" />
		<div id="info">欢迎您:${users_name}
		<input type="hidden" id="userid" value="${users_id}">
		<input type="hidden" id="username" value="${users_name}">
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
			<div class="content_1">
				<div id="tab_zzjs_3">
					<div onclick="drawBar();">
						<h3>日常收支表</h3>
					</div>
					<div class="tab">
						<div id="shou_zhi">
							<div id="rTit">日常收支表</div>
							<div id="zhi_chu">
								<div id="top">支出</div>
								<div id="charOut"></div>
								<table class="tableList" cellpadding="0" cellspacing="0"
									border="0" style="width: 100%;">
									<tbody>
										<tr>
											<th class="first" width="390"><span>
													<div>一级分类</div>
											</span></th>
											<th class="first" width="390"><span>
													<div>金额</div>
											</span></th>
										</tr>
									</tbody>
								</table>
								<div id="listDiv1" class="listDiv"></div>
								<div id="bottom">
									总计：<span id="outAmount" class="money"></span>
								</div>
							</div>
							<div id="shou_ru">
								<div id="top">收入</div>
								<div id="charIn"></div>
								<table class="tableList" cellpadding="0" cellspacing="0"
									border="0" style="width: 100%;">
									<tbody>
										<tr>
											<th class="first" width="400"><span><div>
														一级分类</div></span></th>
											<th class="end" width="400"><span>金额</span></th>
										</tr>
									</tbody>
								</table>
								<div id="listDiv2" class="listDiv"></div>
								<div id="bottom">
									总计：<span id="inAmount" class="money"></span>
								</div>
							</div>
						</div>
					</div>
					<div onclick="drawLine();">
						<h3>收支趋势表</h3>
					</div>
					<div class="tab wushi">
						<div id="qu_shi">
							<div id="filter_bar"></div>
							<div id="trend">
								<div id="rTit">收支趋势图</div>
								<div id="charBox"></div>
								<div id="tile"></div>
								<div id="listDiv">
									
								</div>
							</div>
						</div>
					</div>
					<div onclick="drawPie();">
						<h3>资产负债表</h3>
					</div>
					<div class="tab wushi1">
						<div id="zichan_fuzhai">
							<div id="zi_chan">
								<div id="zichan_display">
									<div id="zichan_diagram"></div>
									<div id="tit"></div>
								</div>
								<div id="zichan_table">
									<table class="tableList" cellpadding="0" cellspacing="0"
										border="0">
										<tbody>
											<tr>
												<th width="180" class="first"><span>资产</span></th>
												<th class="end"><span>金额</span></th>
											</tr>
										</tbody>
										<tbody id="tbIn">
										</tbody>
									</table>

								</div>
							</div>
							<div id="fu_zhai">
								<div id="fuzhai_display">
									<div id="fuzhai_diagram"></div>
								</div>
								<div id="fuzhai_table">
									<table class="tableList" cellpadding="0" cellspacing="0"
										border="0">
										<tbody>
											<tr>
												<th width="180" class="first"><span>负债</span></th>
												<th class="end"><span>金额</span></th>
											</tr>
										</tbody>
										<tbody id="tbOut">


										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>

				</div>

				<script type="text/javascript">
					function Pid(id, tag) {
						if (!tag) {
							return document.getElementById(id);
						} else {
							return document.getElementById(id)
									.getElementsByTagName(tag);
						}
					}//欢迎来到站长特效网，我们的网址是www.zzjs.net，很好记，zz站长，js就是js特效，本站收集大量高质量js代码，还有许多广告代码下载。
					function tab_zzjs(id, hx, box, iClass, s, pr) {
						var hxs = Pid(id, hx);
						var boxs = Pid(id, box);
						if (!iClass) { // 如果不指定class，则：
							boxsClass = boxs; // 直接使用box作为容器
						} else { // 如果指定class，则：
							var boxsClass = [];
							for (i = 0; i < boxs.length; i++) {
								if (boxs[i].className.match(/\btab\b/)) {// 判断容器的class匹配
									boxsClass.push(boxs[i]);
								}
							}
						}
						if (!pr) { // 如果不指定预展开容器，则：
							go_to(0); // 默认展开序列
							yy();
						} else {
							go_to(pr);
							yy();
						}
						function yy() {
							for ( var i = 0; i < hxs.length; i++) {
								hxs[i].temp = i;
								if (!s) {// 如果不指定事件，则：
									s = "onclick"; // 使用默认事件
									hxs[i][s] = function() {
										go_to(this.temp);
									}
								} else {
									hxs[i][s] = function() {
										go_to(this.temp);
									}
								}
							}
						}
						function go_to(pr) {
							for ( var i = 0; i < hxs.length; i++) {
								if (!hxs[i].tmpClass) {
									hxs[i].tmpClass = hxs[i].className += " ";
									boxsClass[i].tmpClass = boxsClass[i].className += " ";
								}
								if (pr == i) {
									hxs[i].className += " up"; // 展开状态：标题
									boxsClass[i].className += " up"; // 展开状态：容器
								} else {
									hxs[i].className = hxs[i].tmpClass;
									boxsClass[i].className = boxsClass[i].tmpClass;
								}
							}
						}
					}
					tab_zzjs("tab_zzjs_3", "h3", "div", "tab");
				</script>
			</div>



		</div>
		<div id="footer">
			<p>&copy; 2013 | Design by 西安交通大学 软件11班若干人</p>
		</div>
	</div>

</body>
</html>