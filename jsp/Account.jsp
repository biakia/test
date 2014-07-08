<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html id="home-html">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>账户</title>
<meta http-equiv="content-type"
	content="application/xhtml+xml; charset=utf—8" />
<meta name="author" content="wujixin" />
<meta name="description" content="账户操作" />
<meta name="keywords" content="账户" />
<meta http-equiv="Cache-Control" content="no-cache" />
<link rel="stylesheet" href="../css/account.css" type="text/css" />
<script type="text/javascript" src="../js/AJAXInit.js"></script>
<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="../js/AccountHelp.js"></script>
<script type="text/javascript" src="../js/AccountInit.js"></script>
</head>
<body id="home-body" onload="loadMyAccount()">
	<div id="container">
		<div id="info">
			欢迎您:<span id="info-username">${users_name}</span><input type="hidden"
				id="accountType" value="现金账户"> <input type="hidden"
				id="editLocked" value="0">
				<input type="hidden"
				id="userid" value="${users_id}">
				<input type="hidden" id="imagename" value="${imagename}">
		</div>
		<div id="headerWrap">
        <div id="topPan">
           <img alt="" src=".././res/image/lo.png" style="float: left;"> 
			

				<ul id="navigation">
				<li><a class="h01" href="userlogin.goMain.action?users_id=${users_id}&users_name=${users_name}&imagename=${imagename}"></a></li>
				<li><a class="h02" href="userlogin.goChart.action?users_id=${users_id}&users_name=${users_name}&imagename=${imagename}"></a></li>
				<li><a class="h03" href="userlogin.goAccount.action?users_id=${users_id}&users_name=${users_name}&imagename=${imagename}"></a></li>
				<li><a class="h04" href="userlogin.goRecord.action?users_id=${users_id}&users_name=${users_name}&imagename=${imagename}"></a></li>	
				</ul>
			
		</div>
		</div>
		<div id="content">
			<div class="graph" id="graph">

				<div class="graph-account-info" id="graph-account-info">
					<div class="add-account2" id="add-account">
						<a href="#" id="a-addAccount">添加账户</a>
					</div>
					<div class="graph-account" id="finance-account">金融账户数量</div>
					<div class="graph-account" id="cash-account">现金账户数量</div>

					<div class="graph-account" id="finance-account-content">0</div>
					<div class="graph-account" id="cash-account-content"></div>
				</div>
				<div class="graph-cash-info">客户中心</div>
				<div class="graph-cash-info" id="graph-cash-info">
					<div class="graph-cash-name">总资产</div>
					<div class="graph-cash-content" id="total-fund"></div>
				</div>
				<div class="graph-cash-info">
					<div class="graph-cash-name">总负债</div>
					<div class="graph-cash-content" id="total-debt"></div>
				</div>
				<div class="graph-cash-info" id="2.7">
					<div class="graph-cash-name">净资产</div>
					<div class="graph-cash-content" id="common-fund"></div>
				</div>
			</div>


			<p>&nbsp;</p>

			<div class="account_content" align="center" id="accountInfo">
				<div id="acc-id-test"
					class="acc group-5 group-p-1 j-acc-1 acc-show j-acc-show"
					style="position: static; left: 0px; top: 0px; z-index: 10000; opcity: 1;">
					<div id="acc_info">
						<div id="acc_info_out" class="acc_info_out">
							<div id="acc_info_in" class="acc_info_in">
								<div class="acc_name">
									<span class="acc_name_p" onclick="edit('name',id);"> <a
										href="javascript:" id="acc_name_a" class="edit">现金</a>
									</span>
								</div>
								<div id="child_id" class="child">
									<input type="hidden"> <input type="hidden"> <input
										type="hidden"> <input type="hidden">
									<div id="child-l" class="child-l">
										<div id="child-l1" class="child-l1">
											<a href="javascript:" id="acc_memo_id" onclick="editmemo():"
												class="j-edited">测试</a>
										</div>
										<div id="child-l2" class="child-l2">
											<div class="child-l2-1 j-not">类型： 现金账户 -&gt; 现金口袋</div>
										</div>
										<div id="child-l3" class="child-l3">
											<a class="child-btn child-btn5" href="javascript:;"
												onclick="delAccount(15760981197);"> <span
												class="child-btn-out"> <span class="child-btn-in">删除账户
												</span>
											</span>
											</a> <a class="child-btn child-btn1" href="javascript:;"
												id="child-btn1-15760981197"
												onclick="showEidtIcon(15760981197);"> <span
												class="child-btn-out"> <span class="child-btn-in">编辑</span>
											</span>
											</a>
										</div>
									</div>
									<div id="child-r" class="child-r">
										<div class="child-r1">
											<a href="javascript:;" id="acc-money-15760981197"
												onclick="acc.edit.click('amount', 15760981197);"
												class="j-not edit"> <span class="child-r1-money">-7,714.00</span>
												<span class="child-r1-currency">CNY</span>
											</a>
										</div>
										<div class="child-r2">
											<span class="j-not">流入总计： <span class="red"
												id="acctotal-in-15760981197">800.00</span>
											</span> <span class="j-not child-r2-right">流出总计： <span
												class="green" id="acctotal-out-15760981197">8,514.00</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="acc_list" class="acc-list">
						<div class="trans hidden" id="trans-15760981197">
							<div class="trans-spacing"></div>
							<div>
								<ul class="trans-head">
									<li class="trans-li1">时间</li>
									<li class="trans-li2">分类</li>
									<li class="trans-li3">金额</li>
									<li class="trans-li4">备注</li>
									<li>&nbsp;</li>
								</ul>
							</div>
							<div class="trans-list">
								<ul id="trans-tit-1392591941896"
									class="trans-tit trans-tit-1392591941896 trans-tit-t">
									<li class="trans-li1"><span class="month">2013/11/</span><span
										class="day">24</span></li>
									<li class="trans-li2"><span title="工资收入">工资收入</span><span
										class="red"> (收)</span></li>
									<li class="trans-li3">50,000.00</li>
									<li class="trans-li4" title=""></li>
									<li><a class="trans-delete" href="javascript:;"
										onclick="list.delTrans('1392591941896', '15760981197', '1');">删除</a></li>
								</ul>
								<ul id="trans-tit-139179685121"
									class="trans-tit trans-tit-139179685121 trans-tit-t trans-tit-b">
									<li class="trans-li1"><span class="month">2013/11/</span><span
										class="day">09</span></li>
									<li class="trans-li2"><span title="工资收入">工资收入</span><span
										class="red"> (收)</span></li>
									<li class="trans-li3">800.00</li>
									<li class="trans-li4" title=""></li>
									<li><a class="trans-delete" href="javascript:;"
										onclick="list.delTrans('139179685121', '15760981197', '1');">删除</a></li>
								</ul>
								<ul id="trans-tit-129249119104"
									class="trans-tit trans-tit-129249119104 trans-tit-t trans-tit-b">
									<li class="trans-li1"><span class="month">2013/11/</span><span
										class="day">06</span></li>
									<li class="trans-li2"><span title="衣服裤子">衣服裤子</span><span
										class="green"> (支)</span></li>
									<li class="trans-li3">8,000.00</li>
									<li class="trans-li4" title=""></li>
									<li><a class="trans-delete" href="javascript:;"
										onclick="list.delTrans('129249119104', '15760981197', '1');">删除</a></li>
								</ul>
							</div>
							<div class="trans-page-box">
								<div class="trans-page">
									<a href="javascript:;" class="disable">&lt;&lt; 上一页</a><a
										href="javascript:;" class="current">1</a><a
										href="javascript:;" class="normal"
										onclick="list.loadList(15760981197,2,-1);">2</a><a
										href="javascript:;" class="normal"
										onclick="list.loadList(15760981197,2,-1);">下一页 &gt;&gt;</a>
								</div>
							</div>
						</div>
						<div class="acc-openbar">
							<a class="acc-openbar-btn" id="acc-openbar-btn-15760981197"
								href="javascript:;" onclick="toggle(15760981197);"
								onmouseover="changeButton('over',15760981197);"
								onmouseout="changeButton('out',15760981197);"> <span
								class="acc-openbar-txt">展开</span>记录( <span
								class="acc-openbar-num" id="acc-openbar-num-15760981197">6</span>)
							</a>
						</div>
					</div>
				</div>

			</div>


		</div>


		<div id="footer">
			<p>&copy; 2013 Courtesy | Design by 西安交通大学 软件11班若干人</p>
		</div>
	</div>

</body>
</html>