var xmlHttp;

    function showUser()
    { 
    xmlHttp=GetXmlHttpObject();
    if (xmlHttp==null)
     {
     alert ("Browser does not support HTTP Request");
     return
     }
    var url="userlogin.show.action";
      
    var users_id="users_id="+document.getElementById("userid").value;
    xmlHttp.onreadystatechange=stateChanged ;
    xmlHttp.open("POST",url,true);

    xmlHttp.setRequestHeader("Content-Type",
    "application/x-www-form-urlencoded");
    xmlHttp.send(users_id);

    }

    function stateChanged() 
    { 
    if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
     {
     var str=xmlHttp.responseText ;
   
     var info = eval("("+str+")");
     
    
     document.getElementById("table1").rows[1].cells[2].innerText ="￥   "+info[0].yearin; 
     document.getElementById("table1").rows[2].cells[2].innerText ="￥  "+info[0].yearout; 
     document.getElementById("table1").rows[1].cells[1].innerText ="￥  "+info[0].monthin; 
     document.getElementById("table1").rows[2].cells[1].innerText ="￥  "+info[0].monthout; 
    
       $(".tablediv").fadeIn(500);
     } 
    }

    function GetXmlHttpObject()
    {
    var xmlHttp=null;
    try
     {
     // Firefox, Opera 8.0+, Safari
     xmlHttp=new XMLHttpRequest();
     }
    catch (e)
     {
     //Internet Explorer
     try
      {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }
     catch (e)
      {
      xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
     }
    return xmlHttp;
    }
function G(id){return document.getElementById(id);} 
 function showUpload(){
	 var url='../jsp/uploadPhoto.jsp';
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
 
 function closeWin(){
	 $("#upWinbg").remove();
		$("#home-body").css('overflow-y', 'scroll');
		$("#upWin").remove();
		return false;
 }