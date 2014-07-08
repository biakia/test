//******************************************登入页面的时候自动加载账户信息*********************************
function loadMyAccount() {

	var userid = G('userid').value;
	var url = 'accounter.loadMyAccount.action';
	var data = 'userid=' + userid;
	if (Request == null)
		Request = createRequest();
	doAJAX(Request, url, data, refreshPage);
}

function refreshPage() {
	if (Request.readyState == 4) {
		if (Request.status == 200) {
			var req = Request.responseText;
			if (parseInt(req) == 0) {
				return false;
			} else {
				var value = eval("(" + req + ")");
				var zichan=0;
				var fuzhai=0;
				var str;
				for ( var i = 0; i < value.length; i++) {
					zichan+=parseInt(value[i].totalin);
					fuzhai+=parseInt(value[i].totalout);
					str = '<div id="acc_'
							+ value[i].id
							+ '" class="acc group_5 group_p_1 j_acc_1 acc_show j_acc_show">';
					str += '<div id="acc_info">';
					str += '<div id="acc_info_out" class="acc_info_out">';
					str += '<div id="acc_info_in" class="acc_info_in">';
					str += '<div class="acc_name">';
					str += '<span class="acc_name_p">';
					str += '<a href="javascript:" id="acc_name_' + value[i].id
							+ '" class="edit" onclick="edit(\'name\','
							+ value[i].id + ');">' + value[i].name
							+ '</a></span></div>';
					str += '<div id="child_' + value[i].id + '" class="child">';
					str += '<input type="hidden" name="account.count_id" value="'
							+ value[i].id + '">';
					str += '<input type="hidden" id="name" value="">';
					str += '<input type="hidden" id="memo" value="">';
					str += '<input type="hidden" id="money" value="">';
					str += '<div id="child-l" class="child-l">';
					str += '<div id="child-l1" class="child-l1">';
					str += '<a href="javascript:" id="acc_memo_' + value[i].id
							+ '" onclick="edit(\'memo\',' + value[i].id
							+ ')" class="j-edited">' + value[i].remark + '</a>';
					str += '</div><div id="child-l2" class="child-l2">';
					str += '<div class="child-l2-1 j-not">类型：现金账户</div></div>';
					str += '<div id="child-l3" class="child-l3">';
					str += '<a class="child-btn child-btn5" href="javascript:;" onclick="delAccount('
							+ value[i].id + ');">';
					str += '<span class="child-btn-out"><span class="child-btn-in">删除</span></span></a>';
					str += '<a class="child-btn child-btn1" href="javascript:;" id="child-btn1-'
							+ value[i].id
							+ '" onclick="showEidtIcon('
							+ value[i].id + ');">';
					str += '<span class="child-btn-out"><span class="child-btn-in">编辑</span></span></a></div></div>';
					str += '<div id="child-r" class="child-r"><div class="child-r1">';
					str += '<a href="javascript:;" id="acc_money_'
							+ value[i].id + '" onclick="edit(\'money\', '
							+ value[i].id + ');" class="j-not edit">';
					str += '<span class="child-r1-money">' + value[i].money
							+ '</span>';
					str += '<span class="child-r1-currency">CNY</span></a></div>';
					str += '<div class="child-r2"><span class="j-not">流入总计：<span class="red" id="acctotal-in-'
							+ value[i].id + '">' + value[i].totalin + '</span>';
					str += '</span><span class="j-not child-r2-right">流出总计：<span class="green" id="acctotal-out-'
							+ value[i].id
							+ '">'
							+ value[i].totalout
							+ '</span>';
					str += '</span></div></div></div></div></div></div>';
					str += '<div id="acc_list" class="acc_list">';
					str += '<div class="trans hidden" id="trans-' + value[i].id
							+ '">';
					str += '<div class="loading">loading...</div></div><div class="acc-openbar">';
					str += '<a class="acc-openbar-btn" id="acc-openbar-btn-'
							+ value[i].id
							+ '" href="javascript:;" onclick="toggle('
							+ value[i].id
							+ ');" onmouseover="changeButton(\'over\','
							+ value[i].id
							+ ');" onmouseout="changeButton(\'out\','
							+ value[i].id + ');">';
					str += '<span class="acc-openbar-txt">展开</span>记录(<span class="acc-openbar-num" id="acc-openbar-num-'
							+ value[i].id + '">' + value[i].num + '</span>)';
					str += '</a></div></div></div>';
					G('accountInfo').innerHTML += str;
				}
				G('total-fund').innerHTML=zichan;
				G('total-debt').innerHTML=fuzhai;
				G('common-fund').innerHTML=(zichan-fuzhai);
				G('cash-account-content').innerHTML=value.length;
			}
		} else {
			alert('something wrong happened!');
		}
	}
}
// **************************************************************************************************************

// **************************************删除账户的方法************************************************************
function delAccount(id) {
	var userid = document.getElementById("userid").value;
	if (userid == null || userid.length == 0) {
		alert('非法登入');
		// 在这里将页面转到login页面
		return false;
	}
	var num = G('acc-openbar-num-' + id).innerText;
	if (num != 0) {
		alert('先删除该账户下的账单，才能删除该账户!');
		return false;
	}
	if (confirm("是否真的要删除？")) {
		var url = 'accounter.deleteAccount.action';
		var data = 'account.count_id=' + id + '&userid=' + userid;
		if (Request == null)
			Request = createRequest();
		doAJAX(Request, url, data, reloadPageAfterDel);
	} else {
		return false;
	}
}

function reloadPageAfterDel() {
	if (Request.readyState == 4) {
		if (Request.status == 200) {
			var delid = 'acc_' + Request.responseText;
			var delcount = G(trim(delid)); // 需要删除的账户的DIV
			delcount.innerHTML = "";
		} else {
			alert("something wrong happened");
		}
	}
}

// *****************************************************************************************************

// *************************************修改信息的方法****************************************************
function doEdit(method, id) {
	// 用于提交
	if (method == "name") {
		var nameId = trim("acc_name_" + id);
		if (confirm("是否要提交？")) {
			// 在这里执行提交
			var name = G("acc_name_edit_" + id).value;
			var memo = G(trim("acc_memo_" + id)).innerText;
			var money = G(trim("acc_money_" + id)).getElementsByTagName("span")[0].innerText;
			updateSingle(name, memo, money, id);
			G("editLocked").value = "0";// 解锁
		} else {
			var oldname = G("name").value;
			G(nameId).innerHTML = oldname;
			G("editLocked").value = "0";// 解锁
		}
	} else if (method == "memo") {
		var memoId = trim("acc_memo_" + id);
		if (confirm("是否要提交？")) {
			// 在这里执行提交
			var name = G("acc_name_" + id).innerText;
			var memo = G(trim("acc_memo_edit_" + id)).value;
			var money = G(trim("acc_money_" + id)).getElementsByTagName("span")[0].innerText;
			updateSingle(name, memo, money, id);
			G("editLocked").value = "0";// 解锁
		} else {
			var oldmemo = G("memo").value;
			G(memoId).innerHTML = oldmemo;
			G("editLocked").value = "0";// 解锁
		}

	} else if (method == "money") {
		var moneyId = trim("acc_money_" + id);
		if (confirm("是否要提交？")) {
			// 在这里执行提交
			var name = G("acc_name_" + id).innerText;
			var memo = G(trim("acc_memo_" + id)).innerText;
			var money = G(trim("acc_money_edit_" + id)).value;
			updateSingle(name, memo, money, id);
			G("editLocked").value = "0";// 解锁
		} else {
			var oldmoney = G("money").value;
			G(moneyId).innerHTML = "<span class=\"child-r1-money\">"
					+ oldmoney
					+ "</span><span class=\"child-r1-currency\">CNY</span></a></div>";
			G("editLocked").value = "0";// 解锁
		}

	}
}
// 用于单项修改
function edit(method, id) {
	if (G("child-btn1-" + id).getElementsByTagName("span")[1].innerText == "提交")
		return false; // 全局修改的时候禁止单项修改
	if (method == "name") {
		if (G("editLocked").value == "0") {
			var nameId = trim("acc_name_" + id);
			var oldname = G(nameId).innerText; // 获得旧的账户名字
			G("name").value = oldname; // 保存旧的账户名字
			G(nameId).innerHTML = "<input type='text' value='" + oldname
					+ "' id='acc_name_edit_" + id + "' onblur=\"doEdit('name',"
					+ id + ")\">"; // 加入修改input框
			G("acc_name_edit_" + id).focus();
			G("editLocked").value = "1"; // 加锁，一次只能操作一个对象
		} else {
			return false;
		}
	} else if (method == "memo") {
		if (G("editLocked").value == "0") {
			var memoId = trim("acc_memo_" + id);
			var oldmemo = G(memoId).innerText; // 获得旧的备注
			G("memo").value = oldmemo; // 保存旧的账户名字
			G(memoId).innerHTML = "<input type='text' value='" + oldmemo
					+ "' id='acc_memo_edit_" + id + "' onblur=\"doEdit('memo',"
					+ id + ")\">"; // 加入修改input框
			G("acc_memo_edit_" + id).focus();
			G("editLocked").value = "1"; // 加锁，一次只能操作一个对象
		} else {
			return false;
		}

	} else if (method == "money") {
		if (G("editLocked").value == "0") {
			var moneyId = trim("acc_money_" + id);
			var oldmoney = G(moneyId).getElementsByTagName("span")[0].innerText; // 获得旧的金额
			G("money").value = oldmoney; // 保存旧的账户名字
			G(moneyId).getElementsByTagName("span")[0].innerHTML = "<input type='text' value='"
					+ oldmoney
					+ "' id='acc_money_edit_"
					+ id
					+ "' onblur=\"doEdit('money'," + id + ")\">"; // 加入修改input框
			G("acc_money_edit_" + id).focus();
			G("editLocked").value = "1"; // 加锁，一次只能操作一个对象
		} else {
			return false;
		}
	}

}

function showEidtIcon(id) { // 显示和恢复修改框
	if (G("editLocked").value == 1)
		return false; // 单项修改时禁止全局修改

	var nameId = trim("acc_name_" + id);
	var memoId = trim("acc_memo_" + id);
	var moneyId = trim("acc_money_") + id;
	var buttonId = trim("child-btn1-" + id);
	var oldButton = G(buttonId).getElementsByTagName("span")[1].innerText;
	if (oldButton == "编辑") {
		var oldname = G(nameId).innerText; // 获得旧的账户名字
		var oldmemo = G(memoId).innerText; // 获得旧的备注
		var oldmoney = G(moneyId).getElementsByTagName("span")[0].innerText; // 获得旧的账户金额
		G("name").value = oldname;
		G("memo").value = oldmemo;
		G("money").value = oldmoney;
		G(nameId).innerHTML = "<input type='text' value='" + oldname
				+ "' id='acc_name_edit_" + id + "'>"; // 加入修改input框
		G(memoId).innerHTML = "<input type='text' value='" + oldmemo
				+ "' id='acc_memo_edit_" + id + "'>"; // 加入修改input框
		G(moneyId).getElementsByTagName("span")[0].innerHTML = "<input type='text' value='"
				+ oldmoney + "' id='acc_money_edit_" + id + "'>"; // 加入修改input框
		G(buttonId).getElementsByTagName("span")[1].innerText = "提交";
	} else if (oldButton == "提交") { // 点击取消编辑，恢复原本的样子
		if (confirm("是否真的要提交修改？")) {
			updateAccount(id);
		} else {
			var oldname = G("name").value;
			var oldmemo = G("memo").value;
			var oldmoney = G("money").value;
			G(buttonId).getElementsByTagName("span")[1].innerText = "编辑账户";
			G(nameId).innerHTML = oldname;
			G(memoId).innerHTML = oldmemo;
			G(moneyId).getElementsByTagName("span")[0].innerText = oldmoney;
		}
	}

}

// 全局修改的函数
function updateAccount(id) {
	var nameId = trim("acc_name_edit_" + id);
	var memoId = trim("acc_memo_edit_" + id);
	var moneyId = trim("acc_money_edit_" + id);
	var name = G(nameId).value;
	var memo = G(memoId).value;
	var money = G(moneyId).value;

	var url = 'accounter.updateAccount.action';
	var data = 'account.count_id=' + id + '&account.count_name=' + name
			+ '&account.count_cash=' + money + '&account.count_remark=' + memo;
	if (Request == null)
		Request = createRequest();
	doAJAX(Request, url, data, updateResult);
}

function updateResult() {
	if (Request.readyState == 4) {
		if (Request.status == 200) {
			var obj = eval("(" + Request.responseText + ")"); // json数据
			var nameId = trim("acc_name_" + obj.id);
			var memoId = trim("acc_memo_" + obj.id);
			var moneyId = trim("acc_money_" + obj.id);
			G(trim("child-btn1-" + obj.id)).getElementsByTagName("span")[1].innerText = "编辑";
			G(nameId).innerHTML = obj.name;
			G(memoId).innerHTML = obj.remark;
			G(moneyId).getElementsByTagName("span")[0].innerText = obj.cash;
		} else {
			alert('something happened');
		}
	}
}

// 修改单个项目
function updateSingle(name, memo, money, id) {
	var url = 'accounter.updateAccount.action';
	var data = 'account.count_id=' + id + '&account.count_name=' + name
			+ '&account.count_cash=' + money + '&account.count_remark=' + memo;
	if (Request == null)
		Request = createRequest();
	doAJAX(Request, url, data, updateSingleResult);
}

function updateSingleResult() {
	if (Request.readyState == 4) {
		if (Request.status == 200) {
			var obj = eval("(" + Request.responseText + ")"); // json数据
			var nameId = trim("acc_name_" + obj.id);
			var memoId = trim("acc_memo_" + obj.id);
			var moneyId = trim("acc_money_" + obj.id);
			G(nameId).innerHTML = obj.name;
			G(memoId).innerHTML = obj.remark;
			G(moneyId).getElementsByTagName("span")[0].innerText = obj.cash;
		} else {
			alert('something happened');
		}
	}
}
// ********************************************************************************************************

// **************************************显示下拉菜单*******************************************************
function toggle(id) {
	G('acc-openbar-btn-' + id).onmouseover = null;
	G('acc-openbar-btn-' + id).onmouseout = null;
	var obj = G("trans-" + id);
	if (obj.style.display == "") {
		loadAccountItems(id);
		obj.style.display = "block";
		G('acc-openbar-btn-' + id).style.backgroundPosition = "290px -78px";
		G('acc-openbar-btn-' + id).onmouseover = function onmouseover(event) {
			changeButton2('over', id);
		};
		G('acc-openbar-btn-' + id).onmouseout = function onmouseout(event) {
			changeButton2('out', id);
		};
	} else if (obj.style.display == "block") {
		obj.style.display = "";
		G('acc-openbar-btn-' + id).style.backgroundPosition = "290px 0px";
		G('acc-openbar-btn-' + id).onmouseover = function onmouseover(event) {
			changeButton('over', id);
		};
		G('acc-openbar-btn-' + id).onmouseout = function onmouseout(event) {
			changeButton('out', id);
		};
	}
}

function changeButton(method, id) { // 改变button的背景图的效果
	// var y=G('acc-openbar-btn-'+id).style.backgroundPositionY;
	if (method == "over") {
		G('acc-openbar-btn-' + id).style.backgroundPositionY = "-52px";
	} else if (method == "out") {
		G('acc-openbar-btn-' + id).style.backgroundPositionY = "0px";

	}

}

function changeButton2(method, id) { // 改变button的背景图的效果
	// var y=G('acc-openbar-btn-'+id).style.backgroundPositionY;
	if (method == "over") {
		G('acc-openbar-btn-' + id).style.backgroundPositionY = "-130px";
	} else if (method == "out") {
		G('acc-openbar-btn-' + id).style.backgroundPositionY = "-78px";

	}

}

function loadAccountItems(id) { // 异步加载相应账户下的账单
	var userid = G('userid').value;
	var url = 'accounter.loadAccountItems.action';
	var data = 'accountid=' + id + '&userid=' + userid + '&pageno=0';
	if (Request == null)
		Request = createRequest();
	doAJAX(Request, url, data, refreshAccountItems);
}

function refreshAccountItems() {
	if (Request.readyState == 4) {
		if (Request.status == 200) {
			var req = eval("(" + Request.responseText + ")");
			var id = req[0].accountid; // 账户ID
			var userid = G('userid').value; // 用户ID
			var divobj = G("trans-" + id);
			var length = 5; // 5条记录分页
			if (req.length <= 5)
				length = req.length;
			var str = '<div><ul class="trans-head"><li class="trans-li1">时间</li>';
			str += '<li class="trans-li2">分类</li><li class="trans-li3">金额</li>';
			str += '<li class="trans-li4">备注</li><li class="trans-li5">&nbsp;</li></ul></div>';
			str += '<div class="trans-list">';
			for ( var i = 0; i < length; i++) {
				str += '<ul id="trans-tit-' + req[i].id
						+ '" class="trans-tit  trans-tit-t">';
				str += '<li class="trans-li1"><span class="month">'
						+ req[i].date;
				str += '</span></li><li class="trans-li2"><span title="'
						+ req[i].item + '">' + req[i].item;
				str += '</span>';
				if (req[i].flagid == 1)
					str += '<span class="red">(收)</span></li>';
				else if (req[i].flagid == -1)
					str += '<span></span></li>';
				else
					str += '<span class="green">(支)</span></li>';
				str += '<li class="trans-li3">';
				str += req[i].cash;
				str += '</li>';
				str += '<li class="trans-li4" title="' + req[i].remark;
				str += '">' + req[i].remark + '</li>';
				str += '<li class="trans-li5" onmouseover="showDelete(' + req[i].id
						+ ')" onmouseout="hideDelete(' + req[i].id
						+ ')"><a class="trans-delete" id="trans-delete-'
						+ req[i].id + '"  href="#"onclick="delTrans('
						+ req[i].id + ');">';
				str += '删除</a></li></ul>';
			}
			str += '<div class="trans-page-box">';
			str += '<div class="trans-page">';
			if (req.length == 5) {
				str += '<a href="#" class="normal" onclick="goPre(' + userid
						+ ',' + id + ',' + (parseInt(req[0].pageno) - 1)
						+ ');" >&lt;&lt; 上一页</a>';
				str += '<a href="#" class="normal" onclick="goNext(' + userid
						+ ',' + id + ',' + (parseInt(req[0].pageno) + 1)
						+ ');" > 下一页 &gt;&gt;</a>';
			} else {
				str += '<a href="#" class="normal" onclick="goPre(' + userid
						+ ',' + id + ',' + (parseInt(req[0].pageno) - 1)
						+ ');" >&lt;&lt; 上一页</a>';
				str += '<a href="#" class="normal" onclick="" > 下一页 &gt;&gt;</a>';
			}
			str += '</div></div>';
			str += '</div></div>';
			divobj.innerHTML = str;
		} else {
			alert('something wrong happend');
		}
	}
}
// 上一页
function goPre(userid, id, pageno) {
	var url = 'accounter.loadAccountItems.action';
	var data = 'accountid=' + id + '&userid=' + userid + '&pageno=' + pageno;
	if (Request == null)
		Request = createRequest();
	doAJAX(Request, url, data, refreshAccountItems);
}
// 下一页
function goNext(userid, id, pageno) {
	var url = 'accounter.loadAccountItems.action';
	var data = 'accountid=' + id + '&userid=' + userid + '&pageno=' + pageno;
	if (Request == null)
		Request = createRequest();
	doAJAX(Request, url, data, refreshAccountItems);
}
// 鼠标移动到标签上时，显示删除标记
function showDelete(id) {
	var del = G('trans-delete-' + id);
	del.style.display = "block";
}
// 鼠标移出时，隐藏删除标记
function hideDelete(id) {
	var del = G('trans-delete-' + id);
	del.style.display = "";
}

//删除账户下的某条记录
function delTrans(id){
	if(confirm('真的要删除吗？')){
	var url = 'accounter.deleteAccountItem.action';
	var userid = G('userid').value;
	var data = 'cateid=' + id+'&userid='+userid;
	if (Request == null)
		Request = createRequest();
	doAJAX(Request, url, data, delItems);
	G('trans-tit-'+id).parentNode.removeChild(G('trans-tit-'+id));
	
	}
}
function delItems(){
	if(Request.readyState==4){
		if(Request.status==200){
			var id=Request.responseText;
			var tmp=G(trim('acc-openbar-num-'+id)).innerText;
			var num=parseInt(tmp);
			num=num-1;
			if(num<0)
				G(trim('acc-openbar-num-'+id)).innerText=0;
			else
				G(trim('acc-openbar-num-'+id)).innerText=num;
				alert('删除成功！');
		}else{
			alert('something happened');
		}
	}
}