$(document).ready(function() {
	$("html").css('overflow', 'hidden');
	$("#a-addAccount").click(function() {
		openWin('../jsp/addAcc.jsp');
	});

});

function openWin(url) {
	if (!document.getElementById("upWin")) {
		var upWin = document.createElement('iframe');
		upWin.setAttribute('id', 'upWin');

		var upWinbg = document.createElement('div');
		upWinbg.setAttribute('id', 'upWinbg');

		$("#home-body").append(upWin);
		$("#home-body").append(upWinbg);
		$("#upWin").click(function() {
			closeWin();
		});
		$("#upWinbg").click(function() {
			closeWin();
		});

	}
	$("#upWin").attr('src', url);
	$("#home-body").css('overflow', 'hidden');
	$("#upWin").css('display', 'inline-block');
	$("#upWinbg").css({
		'display' : 'block',
		'opacity' : '0'
	});
	$("#upWinbg").animate({
		opacity : '0.8'
	});

	return false;
}

function closeWin() {
	$("#upWinbg").remove();
	$("#home-html").css('overflow-y', 'scroll');
	$("#upWin").remove();
	return false;
}