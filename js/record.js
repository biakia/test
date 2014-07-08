
/*
 *
 *   ***********鼠标滚轮实现滚动*************
 *
 * @author yuxiao	
 * @date 2013-11-14
 */
  var scrollMoveObj = null, scrollPageY = 0, scrollY = 0;  
  var scrollDivList = new Array();  
  // obj需要添加滚动条的对象 w滚动条宽度 className滚动条样式名称  
  // obj元素 必须指定高度，并设置overflow:hidden;  
  // 如要兼容IE6 必须给obj元素 指定 overflow:hidden;  
  //  jsScroll(对象名称, 滚动条宽度, 滑块高度, 滚动条样式名称)  
  function jsScroll(obj, w, h, className)  
  {  
      if(typeof(obj) == 'string') {  
          obj = document.getElementById(obj);  
      }  
      //当内容未超出现在高度时，不添加滚动条      
      if(!obj || obj.scrollHeight <= obj.clientHeight || obj.clientHeight == 0) {  
          return;  
      }  
      obj.scrollBarWidth = w||6;  
      obj.style.overflow = 'hidden';  
      obj.scrollBar = document.createElement('div');  
      document.body.appendChild(obj.scrollBar);  
      obj.scrollBarIndex = document.createElement('div');  
      obj.scrollBar.appendChild(obj.scrollBarIndex);  
      obj.scrollBar.style.position = 'absolute';  
      obj.scrollBarIndex.style.position = 'absolute';  
      obj.scrollBar.className = className || '';  
      if(!className) {  
          obj.scrollBar.style.backgroundColor = '#ddd';  
          obj.scrollBarIndex.style.backgroundColor = '#aaa';  
      }  
        
      scrollDivList.push(obj);  
      scrollResetSize(obj,h);  
        
      //使用鼠标滚轮滚动  
      obj.scrollBar.scrollDiv = obj;  
      obj.scrollBarIndex.scrollDiv = obj;  
      obj.onmousewheel = scrollMove;  
      obj.scrollBar.onmousewheel = scrollMove;  
      obj.scrollBarIndex.onmousewheel = scrollMove;  
        
        
      //拖动滚动条滚动  
      obj.scrollBarIndex.onmousedown = function(evt){  
          evt = evt || event;  
          scrollPageY = evt.clientY;  
          scrollY = this.scrollDiv.scrollTop;  
          isScrollMove = true;  
          document.body.onselectstart = function(){return false};  
          scrollMoveObj = this.scrollDiv;  
          if(this.scrollDiv.scrollBar.className == '') {  
              this.scrollDiv.scrollBarIndex.style.backgroundColor = '#888';  
          }  
          return false;  
      }  
  }  
    
  //当页面大小发生变化时，重新计算滚动条位置  
  window.onresize = function(){  
      for(var i=0; i<scrollDivList.length; i++) {  
          scrollResetSize(scrollDivList[i]);  
      }  
  }  
    
  //计算滚动条位置  
  function scrollResetSize(o,h) {  
      if(o.scrollHeight <= o.clientHeight) {  
          o.scrollTop = 0;  
          o.scrollBar.style.display = 'none';//当为none时，内容未超过高度则隐藏滚动条，当为block时，始终显示滚动条  
      } else {  
          o.scrollBar.style.display = 'block';  
      }  
      var x=0, y=0;  
      var p = o;  
      while(p) {  
          x += p.offsetLeft;  
          y += p.offsetTop;  
          p = p.offsetParent;  
      }  
      var borderTop = parseInt(o.style.borderTopWidth||0);  
      var borderBottom = parseInt(o.style.borderBottomWidth||0);  
      o.scrollBar.style.width = o.scrollBarWidth + 'px';  
      o.scrollBar.style.height = o.clientHeight + 'px';  
      o.scrollBar.style.top = y + borderTop + 'px';  
      o.scrollBar.style.left = x + o.offsetWidth - o.scrollBarWidth + 'px';  
      o.scrollBarIndex.style.width = o.scrollBarWidth + 'px';  
      //var h = 18; // 固定滑块的大小  
        
      //var h = o.clientHeight - (o.scrollHeight - o.clientHeight); //滚动条大小根据内容多少而变化  
      //当滚动条滑块最小20个像素  
      //if(h < 20) {  
      //  h = 20;  
      //}  
        
      o.scrollBarHeight = h;  
      o.scrollBarIndex.style.height = h + 'px';  
      o.scrollBarIndex.style.left = '0px';  
      setScrollPosition(o);  
  }  
    
  function setScrollPosition(o) {  
      o.scrollBarIndex.style.top = (o.clientHeight - o.scrollBarHeight) * o.scrollTop / (o.scrollHeight - o.clientHeight) + 'px';  
  }  
    
  document.documentElement.onmousemove = function(evt){  
      if(!scrollMoveObj)return;  
      evt = evt || event;  
      var per = (scrollMoveObj.scrollHeight - scrollMoveObj.clientHeight) / (scrollMoveObj.clientHeight - scrollMoveObj.scrollBarHeight)  
      scrollMoveObj.scrollTop = scrollY - (scrollPageY - evt.clientY) * per;  
      setScrollPosition(scrollMoveObj);  
  }  
  document.documentElement.onmouseup = function(evt){  
      if(!scrollMoveObj)return;  
      if(scrollMoveObj.scrollBar.className == '') {  
          scrollMoveObj.scrollBarIndex.style.backgroundColor = '#aaa';  
      }  
      scrollMoveObj = null;  
      document.body.onselectstart = function(){return true};  
  }  
    
  // 鼠标滚轮滚动  
  function scrollMove(evt){  
      var div = this.scrollDiv || this;  
      if(div.scrollHeight <= div.clientHeight) return true;  
      evt = evt || event;  
      var step = 20;  
      if(evt.wheelDelta < 0) {  
          if(div.scrollTop >= (div.scrollHeight - div.clientHeight)) return true;  
          div.scrollTop += step;  
      }  
      else {  
          if(div.scrollTop == 0) return true;  
          div.scrollTop -= step;  
      } 
      checkYear();
      setScrollPosition(div);  
        
      return false;  
  } 
  
  /************************导航切换
   * 
   * 
   * 
   *   @author daihangtao
   *   @time 2013-11-24
   * 
   * 
   */
  
  function Pid(id,tag){
	  if(!tag){
	   return document.getElementById(id);
	   }
	 }//欢迎来到站长特效网，我们的网址是www.zzjs.net，很好记，zz站长，js就是js特效，本站收集大量高质量js代码，还有许多广告代码下载。
	 function tab_zzjs(id,hx,box,iClass,s,pr){
	  var hxs=Pid(id,hx);
	  var boxs=Pid(id,box);
	  if(!iClass){ // 如果不指定class，则：
	   boxsClass=boxs; // 直接使用box作为容器
	  }
	  else{ // 如果指定class，则：
	   var boxsClass = [];
	   for(i=0;i<boxs.length;i++){
	    if(boxs[i].className.match(/\btab\b/)){// 判断容器的class匹配
	     boxsClass.push(boxs[i]);
	    }
	   }
	  }
	  if(!pr){ // 如果不指定预展开容器，则：
	   go_to(0); // 默认展开序列
	   yy();
	  }
	  else {
	   go_to(pr);
	   yy();
	  }
	  function yy(){
	   for(var i=0;i<hxs.length;i++){
	    hxs[i].temp=i;
	    if(!s){// 如果不指定事件，则：
	     s="onmouseover"; // 使用默认事件
	     hxs[i][s]=function(){
	      go_to(this.temp);
	     }
	    }
	    else{
	     hxs[i][s]=function(){
	      go_to(this.temp);
	     }
	    }
	   }
	  }
	  function go_to(pr){
	   for(var i=0;i<hxs.length;i++){
	    if(!hxs[i].tmpClass){
	     hxs[i].tmpClass=hxs[i].className+=" ";
	     boxsClass[i].tmpClass=boxsClass[i].className+=" ";
	    }
	    if(pr==i){
	     hxs[i].className+=" up"; // 展开状态：标题
	     boxsClass[i].className+=" up"; // 展开状态：容器
	    }
	    else {
	     hxs[i].className=hxs[i].tmpClass;
	     boxsClass[i].className=boxsClass[i].tmpClass;
	    }
	   }
	  }
	 }

 /* **************************AJAX************************ */
 /*
 *
 * @author yuxiao	
 * @date 2013-11-20
 *
 */
 var Request;
 var Request2;
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

//
function doAJAX(request, url, attr, result) {
	request.open("POST", url, "true");
	request.onreadystatechange = result;
	request.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	request.send(attr);
}

function addData(){
	var account_categoey = G("categoey").value;
	var account_count = G("count").value;
	var account_cash = G("cash").value;
	var account_date = G("datepick").value;
	var account_remark = G("remark").value;
	var account_flagid = 0;
	var userid=G("userid").value;
	var url = 'account.keepAccount.action';// URL
	var attr = 'account.categoey_id=' + account_categoey + '&account.count_id=' + account_count + '&account.cash=' + account_cash
	           + '&account.remark=' + account_remark +'&account.date=' + account_date +'&account.flag_id=' +account_flagid+'&users_id='+userid;
	
	Request = createRequest(); // 创建AJAX引擎
	// Request.open("POST", url, "true"); //
	// 第一个参数表示用POST方式提交，这种方式的好处是会自动编码，没有传输中的乱码问题
	// Request.onreadystatechange = refreshMenu; // 回调函数
	// Request.setRequestHeader("Content-Type",
	// "application/x-www-form-urlencoded"); //用POST发的话这句必须有
	// Request.send(attr);
	doAJAX(Request, url, attr, refreshinit);
}

function addData_in(){
	var account_categoey = G("categoey_in").value;
	var account_count = G("count_in").value;
	var account_cash = G("cash_in").value;
	var account_date = G("datepick_in").value;
	var account_remark = G("remark_in").value;
	var account_flagid = 1;
	var userid=G("userid").value;
	var url = 'account.keepAccount.action';// URL
	var attr = 'account.categoey_id=' + account_categoey + '&account.count_id=' + account_count + '&account.cash=' + account_cash
    + '&account.remark=' + account_remark +'&account.date=' + account_date +'&account.flag_id=' +account_flagid+'&users_id='+userid;
    
	Request = createRequest(); // 创建AJAX引擎
	doAJAX(Request, url, attr, refreshinit);
}

//点击 
//Ajax: 实现从数据库提取数据，并实现异步刷新。 
function mouseUp(obj){
	  var ID = obj.id;
	  $(".month").removeClass("choose");
	  $(".month").removeClass("current-choose");
	  if(ID==monthId)
	  $("#"+ID).addClass("current-choose");
	  else
	  $("#"+ID).addClass("choose");
	  
	  var currentYear = ID.substring(6,10);
	  var currentMonth = ID.substring(11,13);
	  var days;
	  if( currentMonth== 2){
		  days=(currentYear % 4 == 0 ? 29 : 28);
		  }
	  else if(currentMonth == 1 || currentMonth == 3 || currentMonth == 5 || currentMonth == 7 || currentMonth == 8 || currentMonth == 10 || currentMonth == 12){
		  days= 31;
		  }
	  else{
		  days= 30;
		  }
	  
	  var value = currentYear+"."+currentMonth+"."+"01"+"-"+currentYear+"."+currentMonth+"."+days;
	  G("acc_time").innerHTML= value;
	  var userid=G("userid").value;
	    var url='account.list.action';
	    var date = "date="+ID.substring(6,13)+'&users_id='+userid;		   
	    Request = createRequest(); // 创建AJAX引擎
		// Request.open("POST", url, "true"); //
		// 第一个参数表示用POST方式提交，这种方式的好处是会自动编码，没有传输中的乱码问题
		// Request.onreadystatechange = refreshMenu; // 回调函数
		// Request.setRequestHeader("Content-Type",
		// "application/x-www-form-urlencoded"); //用POST发的话这句必须有
		// Request.send(attr);
	   doAJAX(Request, url, date, refreshinit);
} 

//删除数据  @date 2013-11-29
   function deletedata(id){
	   
	 
	   var date = document.getElementById("datepicker-"+id).value.substring(0,7);
	   var userid=G("userid").value;
	   var attr = "account.id="+id +'&account.date='+date+'&users_id='+userid;
	   var url='account.deleteAccount.action';
	   Request = createRequest();
	   doAJAX(Request, url, attr, refreshinit);
   }
   
//修改数据 @data 2013-11-29
   function savedata(id){
	   
	   
	   var date = document.getElementById("datepicker-"+id).value;
	   var cash = G("cash-"+id).value;	   
	   var remark = G("remark-"+id).value;	   
	   var count = G("count-"+id).value;
	   var categoey = G("categoey-"+id).value;
	   var userid=G("userid").value;   
	  var attr = "account.id="+id +'&account.date='+date +'&account.cash='+cash 
	  +'&account.remark='+remark +'&account.count_id='+count+'&account.categoey_id='+categoey+'&users_id='+userid;
	  
	   var url ='account.savedata.action';
	   Request = createRequest();
	  doAJAX(Request,url,attr,refreshinit);
   } 

///////////点击实现上下滚动
/*  
 * 
 * 
 * @author yuxiao	
 * @date 2013-11-18
 * 
 * 
 */
var isScroll = false;
var modiTop;
var targetx = 100;//一次滚动距离
var dx;
var a = null;
var maxHeight; 


	function G(obj) {
		return document.getElementById(obj);
	}
	
///往上移动
	function moveTop() {  
		var le = parseInt(G("month-box").scrollTop);
		if (le > 200) {
			targetx = parseInt(G("month-box").scrollTop) - 100;
		} else {
			targetx = parseInt(G("month-box").scrollTop) - le - 1;
		}
		scTop();
	}
	function scTop() {
		dx = parseInt(G("month-box").scrollTop) - targetx;
		
		G("month-box").scrollTop -= dx * .3;
		checkYear();
		clearScroll = setTimeout(scTop, 50);
		
			clearTimeout(clearScroll);
		
	}

//往下移动	
	function moveDown() {
		var length=G("month-box").getElementsByTagName("ul").length/2;
		var maxHeight=G("month-box").getElementsByTagName("ul")[0]
		.getElementsByTagName("li").length*29*length;
		var le = parseInt(G("month-box").scrollTop);
		var maxL = maxHeight - 649;
	     
		if (le < maxL) {
			targetx = parseInt(G("month-box").scrollTop) + 100;
		
		} else {
			targetx = maxL;
			
		}
		scDown();
	}
	function scDown() {
		dx = targetx - (parseInt(G("month-box").scrollTop));
		
		G("month-box").scrollTop += dx * .3;
		checkYear();
		var a = setTimeout(scDown, 50);
		
			clearTimeout(a);
		
	}
	
//点击出现隐藏数据框
	function showBox(obj){
		var id = obj.id;
		if($("#"+id).hasClass("list-show"))
			$("#"+id).removeClass("list-show");
		else
		    $("#"+id).addClass("list-show");
		var data = id.substring(9,12);
		
		if($("#list-box-"+data).hasClass("list-box-show"))
			$("#list-box-"+data).removeClass("list-box-show");
		else 
			$("#list-box-"+data).addClass("list-box-show");
	}
	
//判断列表的年份	
  function checkYear(){
	
	  if(G("month-box").scrollTop<650 && G("month-box").scrollTop>0){
	  G("year_value").innerText="2014";
  } else if(G("month-box").scrollTop==0){
	  G("year_value").innerText="2014"; 
  }
	  else if(G("month-box").scrollTop<1300){
	  G("year_value").innerText="2013";
  }else if(1300<G("month-box").scrollTop){
	  G("year_value").innerText="2012";
  }

  }
  
  //鼠标移动到图片上方
  function mouseOver(obj){
	 	 var ID= obj.id;
	 	 if (ID==monthId)
	      $("#"+ID).addClass("current-over");
	 	 else
	 	 $("#"+ID).addClass("mouseover");
	  }
  
  function overCalender(){
	  $("Calender").addClass("hover");
  }
  
  function listmouseOver(obj){
	  var ID = obj.id;
		$("#"+ID).addClass("list-hover");
  }
 //鼠标移开	 		
function mouseOut(obj){
	 	 var ID = obj.id;
	 	 if(ID==monthId)
	 		$("#"+ID).removeClass("current-over");	
	 	 else
	 	 $("#"+ID).removeClass("mouseover");
	  }

function listmouseOut(obj){
	var ID = obj.id;
	$("#"+ID).removeClass("list-hover");
}


  //判断是否为当前月份，显示另一种格式
  var date = new Date();
  var now = "";
  now = date.getFullYear()+"-";
  now += date.getMonth()+1;
  var nowmonthtime = now + "-" +date.getDate();
 var monthId = "month" + "-" +now;
  function current(){
	  $("#"+monthId).removeClass("newmonth");
	  $("#"+monthId).addClass("current");
	  
  }
  
 //初始化页面
  function init(){
	  G("month-box").scrollTop=500;
	  $("#"+monthId).addClass("current-choose");
	  G("datepick").value = nowmonthtime;
	  G("datepick_in").value = nowmonthtime;
	  var userid=G("userid").value;
	  var url='account.list.action';
	    var date ="date="+monthId.substring(6,13)+'&users_id='+userid;	
	    Request = createRequest();
	   
	    doAJAX(Request, url, date, refreshinit);    
	    
  }
  
 //AJAX刷新函数
  /*
   * 
   * 
   * @author yuxiao
   * @date 2013-11-20——2013-11-30
   * 
   * 
   * 
   */
  function refreshinit(){
	  if(Request.readyState==4){
		  
		  if(Request.status==200)
		     {
			    var ob = Request.responseText;
			
			    if(ob==0)
			    	{
			    	var str ="";
					var fcright = parent.document.getElementById("list");
					str += '<div id="list-nodata" class="hidden">';
					str += '<div class="list-nodata">';
					str += '<ul><li></li>';
					str += '<li class="double"></li>';
					str += '<li></li>';
					str += '<li class="double"></li>';
					str += '<li></li>';
					str += '<li class="double"></li>';
					str += '<li></li>';
					str += '</ul></div>';
					str += '<div class="list-nodata-msg png"></div>';
					str += '</div>';
					fcright.innerHTML =str;
			    	}
			    else
				{
					var str="";
					var obj = eval("("+ob+")");
					var fcright =parent.document.getElementById("list");	
					var date = "";
					var sum_in=new Array();
					var sum_out=new Array();
					var sum_count=new Array();
					//month[0] = obj[obj.length-1].cash;
					for(var i=obj.length-1; i>=0; i--)
					{
						if(obj[i].remark=="点击填写备注")
							obj[i].remark="";
						var newtime = obj[0].date.substring(0,7);
						var newmonth = obj[i].date.substring(5,7);
						var newdays = obj[i].date.substring(8,10);
						var choose="";
							if(date==obj[i].date){
							//	if(obj[i].flag_id==0)
							//		G("out-"+newdays).innerHTML +=parseInt(obj[i].cash);
							//	else G("in-"+newdays).innerHTML +=parseInt(obj[i].cash);
								
								if(obj[i].flag_id==0)
								{
								sum_out[sum_count.length-1]+=parseInt(obj[i].cash);
								sum_in[sum_count.length-1]+=0;
								}
							else
								{
								sum_in[sum_count.length-1]+=parseInt(obj[i].cash);
								sum_out[sum_count.length-1]+=0;
								}
						    }
							else{
							str +='<div class="list-date list-date-nobg">';
							str +='<ul class="ul1">';
							str +='<li><span class="day">'+newdays+'</span>';
							str +='/<span>'+newmonth+'</span></li></ul>';
							str +='<ul class="ul2">';
							str +='<li class="lt-l"></li>';
							str +='<li class="lt-income">收入：<span class="orange">+<span id="in-'+newdays+'">0</span></span></li>';
							str +='<li class="lt-payout">支出：<span class="green">-<span id="out-'+newdays+'">0</span></span></li>';
						    str +='</ul></div>';
						    str +='<div class="list-line"></div>';
							date = obj[i].date;
							sum_count[sum_count.length]=newdays;
							sum_in[sum_count.length-1]=0;
							sum_out[sum_count.length-1]=0;
							if(obj[i].flag_id==0)
								{
								sum_out[sum_count.length-1]+=parseInt(obj[i].cash);
								sum_in[sum_count.length-1]+=0;
								}
							else
								{
								sum_in[sum_count.length-1]+=parseInt(obj[i].cash);
								sum_out[sum_count.length-1]+=0;
							 	}								
							}
							
							str +='<div id="list-tit-'+obj[i].id+'" class="list-tit " onclick="showBox(this);" onmouseover="listmouseOver(this);" onmouseout="listmouseOut(this);">';
							str +='<ul class="ul1"><li></li></ul>';
							str +='<ul class="ul2"><li class="bt-1">';
							str +='<span class="icon icon-5" style="background-position:-384px 0px;"></span>';
							str +='<span class="catename">'+obj[i].category_item+'</span>';
							if(obj[i].flag_id==0){
								choose="（支）";
								str +='<span class="typename">'+choose+'<span></li>';
							}
							else {
							  choose="（收）";
							  str +='<span class="typename typename5">'+choose+'<span></li>';
							}						
							str +='<li class="bt-2">'+obj[i].cash+'</li>';
							str +='<li class="bt-3">'+obj[i].count_name+'</li>';
							str +='<li class="bt-4"></li>';
							str +='<li class="bt-5"></li>';
							str +='<li class="bt-6"></li>';
							str +='<li class="bt-7">'+obj[i].remark+'</li>';
							str +='</ul></div>';
							str +='<div id="list-box-'+obj[i].id+'" class="list-box list-box-payout">';
							str +='<div class="list-box-in">';
							str +='<div class="lb-image">';
							str +='<div class="lb-imgbox img-box" ></div></div>';
							str +='<div class="lb-main">';   
							str +='<ul class="lb-ul"><li class="lb-li">';
							str +='<label class="list-label-0">分类：</label>';
							str +='<span class="selectspan">';
							if(obj[i].flag_id==0){
							str +='<select id="categoey-'+obj[i].id+'" size="1" class="option" style="width:92px;background-color:#dfe0da;border-color:#c6c4c9;">';
							str +='<option value="'+obj[i].categoey_id+'" selected="true">'+obj[i].category_item+'</option>';
							str +='<option value="103">食品酒水</option><option value="104">居家物业</option>';
							str +='<option value="105">行车交通</option><option value="106">交流通讯</option>';
							str +='<option value="107">休闲娱乐</option><option value="108">学习进修</option><option value="100">衣服饰品</option>';
							str +='<option value="121">人情往来</option><option value="131">医疗保健</option>';
							str +='<option value="110">金融保险</option><option value="120">其他杂项</option></select></span></li>';
							}
							else{
							str +='<select id="categoey-'+obj[i].id+'" size="1" class="option" style="width:92px;background-color:#dfe0da;border-color:#c6c4c9;">';
							str +='<option value="'+obj[i].categoey_id+'" selected="true">'+obj[i].category_item+'</option>';
							str +='<option value="204">利息收入</option><option value="205">加班收入</option>';
							str +='<option value="206">奖金收入</option><option value="200">工资收入</option><option value="207">投资收入</option>';
							str +='<option value="208">兼职收入</option></select></span></li>';
							}
							str +='<li class="lb-li" style="margin-left:50px;">';
							str +='<label class="list-label-1">账户：</label>';
							str +='<span class="selectspan">';
							str +='<select id="count-'+obj[i].id+'" size="1" class="option" style="width:92px;background-color:#dfe0da;border-color:#c6c4c9;" >';
							str +='<option value="'+obj[i].count_id+'" selected="true">'+obj[i].count_name+'</option><option value="102">备用金</option>';
							str +='<option value="103">信用卡</option><option value="104">银行卡</option>';
							str +='<option value="105">存折</option><option value="100">现金</option><option value="106">理财产品</option>';
							str +='<option value="107">应付款项</option><option value="108">应收款项</option></select></span></li></ul>';
							str +='<ul class="lb-ul"><li class="lb-li">';
							str +='<label class="list-label-4">时间：</label>';
							str +='<input type="text" id="datepicker-'+obj[i].id+'" class="input list-datepick" value="'+obj[i].date+'" onClick="WdatePicker()"></li>';
							str +='<li class="lb-li" style="margin-left:50px;">';
							str +='<label class="list-label-2">金额：</label>';
							str +='<input type="text" id="cash-'+obj[i].id+'" class="input list-money" value="'+obj[i].cash+'"></li></ul>';
							str +='<ul class="lb-ul"><li class="lb-li"></li><li class="lb-li">';
							str +='<input type="text" id="remark-'+obj[i].id+'" class="input list-memo default-memo" value="'+obj[i].remark+'" style="width:450px;">';
							str +='</li></ul></div>';
							str +='<div class="lb-btn"><ul><li><a onclick="javascript:savedata('+obj[i].id+');">保存</a></li>';
							str +='<li><a class="del-btn"  onclick="javascript:deletedata('+obj[i].id+');">删除</a></li></ul></div></div></div>';
								
							  
							
				//		str += obj[i].categoey_id +" ,"+obj[i].cash +" ,"+obj[i].count_id;
					//	str += " ,"+obj[i].remark + " ," + obj[i].date;
					}
					fcright.innerHTML =str;
					for(var i=0;i<sum_count.length;i++)
					{
					if (G("in-"+sum_count[i])!=null)
						{
						G("in-"+sum_count[i]).innerHTML=sum_in[i];
						G("out-"+sum_count[i]).innerHTML=sum_out[i];
						}
					}
					G("all_in").innerHTML = parseInt(obj[obj.length-1].in_money);
					G("all_out").innerHTML = parseInt(obj[obj.length-1].out_money);
					G("ml_income-"+newtime).innerHTML = parseInt(obj[obj.length-1].in_money);
					G("ml-payout-"+newtime).innerHTML = parseInt(obj[obj.length-1].out_money);
				}
		     }
		  else
			  alert("something wrong!");
	   }			  
	  }
  
  //账目清单日期
  function acctime(){
	  var nowtime = date.getFullYear()+".";
	  nowtime += date.getMonth() + 1 + ".";
	  var days;
	  var m = date.getMonth()+1;
	  if( m== 2){
		  days=(date.getFullYear() % 4 == 0 ? 29 : 28);
		  }
	  else if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
		  days= 31;
		  }
	  else{
		  days= 30;
		  } 
	  var value = nowtime + "01" + "-" +nowtime + days;
	  G("acc_time").innerHTML= value;
  }
  
  /**
   * 点击加载账户信息
   */
  function loadAccountsHelp(){
	  var userid=G('userid').value;
	  var url='account.searchAccounts.action';
	    var data = 'users_id='+userid;
	    if(Request2==null)
	      Request2 = createRequest();
	    doAJAX(Request2, url, data, refreshSelect);
  }
  
 function refreshSelect(){
	  if(Request2.readyState==4){
		  if(Request2.status==200)
		     {
			  var selectObj=G('count');   //select 对象
			  var ob = Request2.responseText;
			    if(ob==0){
			  		
			    }else{
			    	var value=eval("("+ob+")");
			    	for(var i=0;i<value.length;i++){
			    		var option=document.createElement('option');
			    		option.value=value[i].id;
			    		option.text=value[i].name;
			    		selectObj.add(option);
			    	}
			    }
		     }else{
		    	 alert('something happened');
		     }
	  }
 }
  
  /******************页面初始化函数**************/
 $(document).ready(function(){  
	 
	  current(); 
  	  init();
  	  acctime();
  	 loadAccountsHelp();
	 $("#tabincome").click(function(){  
  		 $("#tabpayout").removeClass("showzhichu");
  	    $("#tabincome").addClass("showshouru");
 		 $("#content").fadeOut(20);
 	    $("#content1").fadeIn(200);
 	   
 	  });
 	
  	  $("#tabpayout").click(function(){
  		 $("#tabincome").removeClass("showshouru");
 	    $("#tabpayout").addClass("showzhichu");
 		 $("#content1").fadeOut(20);
 	    $("#content").fadeIn(200);
 	  });
  	  
  	
  	 
  	
  	});  

  
