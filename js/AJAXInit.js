var Request;
function createRequest() {
	var request;
	try {
		request = new XMLHttpRequest();
	} catch (trymicrosoft) {
		try {
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (othermicrosoft) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
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

function trim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
function ltrim(str){ //删除左边的空格
    return str.replace(/(^\s*)/g,"");
}
function rtrim(str){ //删除右边的空格
    return str.replace(/(\s*$)/g,"");
}