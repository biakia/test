$(document).ready(function() {
	$("#bt").click(function() {
		addAccountJQ();
	});

});

function addAccountJQ() {
	var count_name = document.getElementById("name").value;
	var count_cash = document.getElementById("cash").value;
	var count_remark = document.getElementById("remark").value;
	if (count_name.length == 0) {
		alert("用户名不能为空");
		return false;
	}
	var attr = 'account.count_cash=' + count_cash + '&account.count_remark='
			+ count_remark + '&account.count_name=' + count_name;
	$.post("accounter.addAcount.action", attr,
			function(data, textStatus){
		var name=data.name;
		alert(name);
		closeWin();
	},"json");
}

function closeWin() {
	$("#upWinbg").remove();
	$("#home-html").css('overflow-y', 'scroll');
	$("#upWin").remove();
	return false;
}