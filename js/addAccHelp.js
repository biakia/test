//***********************************辅助函数******************************************
var Request;
function createRequest() // 创建AJAX引擎
{
	var request;
	try {
		request = new XMLHttpRequest(); // FireFox chrome opera 等
	} catch (trymicrosoft) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP"); // IE5.0
		} catch (othermicrosoft) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");// IE6.0以上
			} catch (failed) {
				request = false;
			}
		}
	}
	if (!request) {
		alert("err Happend!");
		return null;
	}
	return request;
}

function G(id) {
	return document.getElementById(id);
}

function doAJAX(request, url, attr, result) {
	request.open("POST", url, "true");
	request.onreadystatechange = result;
	request.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	request.send(attr);
}
// ************************************************************************************************

// ******************************添加账户***********************************************************
function addAccount() {
	var count_name = G("name").value;
	var count_cash = G("cash").value;
	var count_remark = G("remark").value;
	var userid = parent.document.getElementById("userid").value;
	if (count_name.length == 0) {
		alert("用户名不能为空");
		return false;
	}

	var url = 'accounter.addAcount.action';// URL
	var attr = 'account.count_cash=' + count_cash + '&account.count_remark='
			+ count_remark + '&account.count_name=' + count_name
			+ '&account.userid=' + userid;
	Request = createRequest(); // 创建AJAX引擎
	// Request.open("POST", url, "true"); //
	// 第一个参数表示用POST方式提交，这种方式的好处是会自动编码，没有传输中的乱码问题
	// Request.onreadystatechange = refreshMenu; // 回调函数
	// Request.setRequestHeader("Content-Type",
	// "application/x-www-form-urlencoded"); //用POST发的话这句必须有
	// Request.send(attr);
	doAJAX(Request, url, attr, refreshMenu);
}

function refreshMenu() {
	if (Request.readyState == 4) // ̬
	{
		if (Request.status == 200) // ״
		{
			var ob = Request.responseText;
			if (parseInt(ob) == 0) {
				G("notice").innerHTML = "账户名称已存在";
				G("name").value = "";
			} else {
				var value = eval("(" + ob + ")");
				var accountInfo = parent.document.getElementById("accountInfo");
				var accountType=parent.document.getElementById("accountType").value;
				var str;
				str = '<div id="acc_'
					+ value.id
					+ '" class="acc group_5 group_p_1 j_acc_1 acc_show j_acc_show">';
			str += '<div id="acc_info">';
			str += '<div id="acc_info_out" class="acc_info_out">';
			str += '<div id="acc_info_in" class="acc_info_in">';
			str += '<div class="acc_name">';
			str += '<span class="acc_name_p" onclick="edit("name",'
					+ value.id + ');">';
			str += '<a href="javascript:" id="acc_name_' + value.id
					+ '" class="edit">' + value.name
					+ '</a></span></div>';
			str += '<div id="child_' + value.id + '" class="child">';
			str += '<input type="hidden" name="account.count_id" value="'
					+ value.id + '">';
			str += '<input type="hidden" id="name" value="">';
			str += '<input type="hidden" id="memo" value="">';
			str += '<input type="hidden" id="money" value="">';
			str += '<div id="child-l" class="child-l">';
			str += '<div id="child-l1" class="child-l1">';
			str += '<a href="javascript:" id="acc_memo_' + value.id
					+ '" onclick="edit("memo",' + value.id
					+ '):" class="j-edited">' + value.remark
					+ '</a>';
			str += '</div><div id="child-l2" class="child-l2">';
			str += '<div class="child-l2-1 j-not">类型：' + accountType
					+ '</div></div>';
			str += '<div id="child-l3" class="child-l3">';
			str += '<a class="child-btn child-btn5" href="javascript:;" onclick="delAccount('
					+ value.id + ');">';
			str += '<span class="child-btn-out"><span class="child-btn-in">删除账户</span></span></a>';
			str += '<a class="child-btn child-btn1" href="javascript:;" id="child-btn1-'
					+ value.id
					+ '" onclick="showEidtIcon('
					+ value.id + ');">';
			str += '<span class="child-btn-out"><span class="child-btn-in">编辑账户</span></span></a></div></div>';
			str += '<div id="child-r" class="child-r"><div class="child-r1">';
			str += '<a href="javascript:;" id="acc_money_'
					+ value.id + '" onclick="edit("money", '
					+ value.id + ');" class="j-not edit">';
			str += '<span class="child-r1-money">' + value.money
					+ '</span>';
			str += '<span class="child-r1-currency">CNY</span></a></div>';
			str += '<div class="child-r2"><span class="j-not">流入总计：<span class="red" id="acctotal-in-'
					+ value.id + '">' + value.totalin + '</span>';
			str += '</span><span class="j-not child-r2-right">流出总计：<span class="green" id="acctotal-out-'
					+ value.id
					+ '">'
					+ value.totalout
					+ '</span>';
			str += '</span></div></div></div></div></div></div>';
			str += '<div id="acc_list" class="acc_list">';
			str += '<div class="trans hidden" id="trans-' + value.id
					+ '">';
			str += '<div class="loading">loading...</div></div><div class="acc-openbar">';
			str += '<a class="acc-openbar-btn" id="acc-openbar-btn-'
					+ value.id
					+ '" href="javascript:;" onclick="list.toggle('
					+ value.id + ');">';
			str += '<span class="acc-openbar-txt">展开</span>记录(<span class="acc-openbar-num" id="acc-openbar-num-'
					+ value.id + '">' + value.num + '</span>)';
			str += '</a></div></div></div>';
				accountInfo.innerHTML += str;
				var homeNode = parent.document.getElementById("home-body");
				var upWinbg = parent.document.getElementById("upWinbg");
				var upWin = parent.document.getElementById("upWin");
				homeNode.removeChild(upWinbg);
				homeNode.removeChild(upWin);
			}
		} else {
			alert('Something Wrong has Happend!');
		}
	}
}

// ****************************************************************************************************
