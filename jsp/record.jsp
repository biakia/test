<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head><title>记账</title>
<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="../js/record.js"></script>
<script type="text/javascript" src="../DatePicker/WdatePicker.js"></script>
<link href="../css/record.css" type="text/css" rel="stylesheet">
</head>

<body>
 
<div id="container" >
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
		<div id="nav">		
		 <div id="tabincome" class="tabshouru"></div>
        <div  id="tabpayout" class="tabzhichu showzhichu"></div>
        </div>
<div id="content" class="content">
  
    <div id="tou_xiang_kuang">
      <div id="zhao_pian"><image src="../photo/${imagename}" height="94px" width="130px"></image></div>
    </div>
    <div id="ji_lu">
      <div id="zhang_hu">分类
         <select id="categoey" size="1" class="option" style="height:22px;width:150px; background:#f0f0f0;">
             <option value="100" selected="true">衣服饰品</option>
             <option value="103">食品酒水</option>
             <option value="104">居家物业</option>
             <option value="105">行车交通</option>
             <option value="106">交流通讯</option>
             <option value="107">休闲娱乐</option>
             <option value="108">学习进修</option>
             <option value="121">人情往来</option>
             <option value="131">医疗保健</option>
             <option value="110">金融保险</option>
             <option value="120">其他杂项</option>
       </select>
      </div> 
      <div id="fen_lei">账户
         <select id="count" size="1"  class="option" style="height:22px;width:150px; background:#f0f0f0;">
      
        </select>
      </div>
      <p>&nbsp;</p>
      <div id="jin_er">金额
          <input class="cash" id="cash"  type="text" class="text" style="height:22px;width:150px;background:#f0f0f0;" >
          <a  id="calbtn" onmousedown="Calender();"  class="calender" onmouseover="overCalender();"></a>
      </div>
      <!--    @author lishukun  @time 2013-11-22      -->
      <div id="shi_jian">时间 
          <input class="Wdate" id="datepick" type="text" onClick="WdatePicker()" style="height:22px;width:150px; background:#f0f0f0;"> 
      </div>
      <p>&nbsp;</p>
      <div id="bei_zhu">
       <input type="text" id="remark" value="点击填写备注" style="height:22px;width:470px;background:#f0f0f0;"  onfocus="javascript:if(this.value==this.defaultValue)this.value='';" onblur="javascript:if(this.value=='')this.value=this.defaultValue;">
      </div>
    </div>
    <div id="xing_zeng">
      <p>&nbsp;</p>
      <div id="xing_zeng_button"> 
         <input type="button"  onclick="addData();" class="tb-save">
      </div>
      <p>&nbsp;</p>
    </div>
       
 </div>
  <div id="content1" class="content1">
 
      
     <div id="tou_xiang_kuang">
      <div id="zhao_pian"><image src="../photo/${imagename}" height="94px" width="130px"></image></div>
    </div>
    <div id="ji_lu">
      <div id="zhang_hu">分类
         <select id="categoey_in" size="1" class="option" style="height:22px;width:150px; background:#f0f0f0;">
             <option value="200" selected="true">工资收入</option>
             <option value="202">职业收入</option>
             <option value="203">其他收入</option>
       </select>
      </div> 
      <div id="fen_lei">账户
         <select id="count_in" size="1" class="option" style="height:22px;width:150px; background:#f0f0f0;">
         <option value="100" selected="true">现金</option>
           <option value="102">备用金</option>
          <option value="103">信用卡</option>
          <option value="104">银行卡</option>
          <option value="105">存折</option>
          <option value="106">理财产品</option>
          <option value="107">应付款项</option>
         <option value="108">应收款项</option>
        </select>
      </div>
      <p>&nbsp;</p>
      <div id="jin_er">金额
          <input class="cash" id="cash_in"  type="text" class="text" style="height:22px;width:150px;background:#f0f0f0;" >
          <a  id="calbtn" onmousedown="Calender();"  class="calender" onmouseover="overCalender();"></a>
      </div>
      <!--    @author lishukun  @time 2013-11-22      -->
      <div id="shi_jian">时间 
          <input class="Wdate" id="datepick_in" type="text" onClick="WdatePicker()" style="height:22px;width:150px;background:#f0f0f0;"> 
      </div>
      <p>&nbsp;</p>
      <div id="bei_zhu">
       <input type="text" id="remark_in" value="点击填写备注" style="height:22px;width:470px;background:#f0f0f0;"  onfocus="javascript:if(this.value==this.defaultValue)this.value='';" onblur="javascript:if(this.value=='')this.value=this.defaultValue;">
      </div>
    </div>
    <div id="xing_zeng">
      <p>&nbsp;</p>
      <div id="xing_zeng_button"> 
         <input type="button"  onclick="addData_in();" class="tb-save">
      </div>
      <p>&nbsp;</p>
    </div>      
 </div>

  
 
 
<div class="content_1">
<div id="qing_dan" style="font-size:16px;">
        <ul>
           <li class="all_list" style="height:35px"> <span id="acc_time" class="list_time"></span></li>           
        </ul>
        <ul style="float:right">
          <li class="total_list">总支出:<span class="all_payout">-<span id="all_out" ></span></span></li>
          <li class="total_list">总收入:<span class="all_income">+<span id="all_in"></span></span></li>
          <li class="total_list">（默认单位：元）</li>
        </ul>
     </div>
<div id="fc-left">
   <div id="fc-year">
      <a id="fcy-prev">
         <span class="fcy-pl"></span>
      </a>
      <div id="fcy-box" style="position:relative;text-align:center;"><span id="year_value">2014</span></div>
      <a id="fcy-next">
          <span class="fcy-nr"></span>
      </a>
   </div>
   <a href="javascript:;" id="fc-next" onmousedown="moveTop()" class="hover"></a>
   
   <div id="month-box" onselectstart="javascript:return false;">
      <div id="fc-month-box" style="overflow:hidden;">
      <div class="year" id="year-2014">
          <div class="month newmonth" id="month-2014-12" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-12">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-12">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">12</span>
                      </li>
                     </ul>
               </div>
              <div class="month newmonth" id="month-2014-11" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-11" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-11">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">11</span>
                      </li>
                     </ul>
               </div>   
                <div class="month newmonth" id="month-2014-10" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-10" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-10">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">10</span>
                      </li>
                     </ul>
                 </div>          
                  <div class="month newmonth" id="month-2014-09" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-09" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-09">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">9</span>
                      </li>
                     </ul>
                 </div> 
                 <div class="month newmonth" id="month-2014-08" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-08" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-08">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">8</span>
                      </li>
                     </ul>
               </div>   
               <div class="month newmonth" id="month-2014-07" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-07" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-07">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">7</span>
                      </li>
                     </ul>
               </div> 
                <div class="month newmonth" id="month-2014-06" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-06" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-06">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">6</span>
                      </li>
                     </ul>
               </div> 
                <div class="month newmonth" id="month-2014-05" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-05" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-05">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">5</span>
                      </li>
                     </ul>
               </div>
                <div class="month newmonth" id="month-2014-04" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-04" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-04">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">4</span>
                      </li>
                     </ul>
               </div>
               <div class="month newmonth" id="month-2014-03" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-03" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-03">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">3</span>
                      </li>
                     </ul>
               </div>
               <div class="month newmonth" id="month-2014-02" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-02" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-02">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">2</span>
                      </li>
                     </ul>
               </div> 
                <div class="month newmonth" id="month-2014-01" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2014-01" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2014-01">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">1</span>
                      </li>
                     </ul>
               </div>        
          </div>     
           <div class="year" id="year-2013">
               <div class="year-num">
                 <div>2013年</div>
               </div>
               <div class="month newmonth" id="month-2013-12" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-12">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-12">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">12</span>
                      </li>
                     </ul>
               </div>
               <div class="month " id="month-2013-11" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-11" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-11">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">11</span>
                      </li>
                     </ul>
               </div>   
               <div class="month " id="month-2013-10" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-10" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-10">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">10</span>
                      </li>
                     </ul>
                 </div>              
               <div class="month " id="month-2013-09" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-09" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-09">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">9</span>
                      </li>
                     </ul>
                 </div> 
               <div class="month " id="month-2013-08" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-08" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-08">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">8</span>
                      </li>
                     </ul>
               </div>   
               <div class="month " id="month-2013-07" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-07" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-07">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">7</span>
                      </li>
                     </ul>
               </div> 
               <div class="month " id="month-2013-06" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-06" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-06">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">6</span>
                      </li>
                     </ul>
               </div> 
               <div class="month " id="month-2013-05" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-05" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-05">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">5</span>
                      </li>
                     </ul>
               </div>
                <div class="month " id="month-2013-04" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-04" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-04">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">4</span>
                      </li>
                     </ul>
               </div>
               <div class="month " id="month-2013-03" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-03" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-03">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">3</span>
                      </li>
                     </ul>
               </div>
               <div class="month " id="month-2013-02"onmouseover="mouseOver(this);" onmouseout="mouseOut(this);"  onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-02" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-02">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">2</span>
                      </li>
                     </ul>
               </div> 
               <div class="month " id="month-2013-01" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2013-01" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2013-01">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">1</span>
                      </li>
                     </ul>
               </div>        
           </div>    
           
           <div class="year" id="year-2012">
               <div class="year-num">
                 <div>2012年</div>
               </div>
               <div class="month" id="month-2012-12" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-12">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-12">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">12</span>
                      </li>
                     </ul>
               </div>
               <div class="month " id="month-2012-11" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-11" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-11">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">11</span>
                      </li>
                     </ul>
               </div>   
               <div class="month " id="month-2012-10" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-10" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-10">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">10</span>
                      </li>
                     </ul>
                 </div>    
                <div class="month " id="month-2012-9" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-9" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-9">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">9</span>
                      </li>
                     </ul>
                 </div>   
               <div class="month " id="month-2012-8" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-8" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-8">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">8</span>
                      </li>
                     </ul>
               </div> 
               <div class="month " id="month-2012-7" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-7" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-7">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">7</span>
                      </li>
                     </ul>
               </div>
               <div class="month " id="month-2012-6" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-6" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-6">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">6</span>
                      </li>
                     </ul>
               </div> 
               <div class="month " id="month-2012-5" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-5" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-5">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">5</span>
                      </li>
                     </ul>
               </div>
               <div class="month " id="month-2012-4" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-4" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-4">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">4</span>
                      </li>
                     </ul>
               </div>
               <div class="month " id="month-2012-3" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-3" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-3">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">3</span>
                      </li>
                     </ul>
               </div>
               <div class="month " id="month-2012-2" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-2" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-2">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">2</span>
                      </li>
                     </ul>
               </div> 
               <div class="month " id="month-2012-1" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2012-1" >0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2012-1">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">1</span>
                      </li>
                     </ul>
               </div>                                                 
          </div>
          <div class="year" id="year-2011">
               <div class="year-num">
                 <div>2011年</div>
               </div>
               <div class="month" id="month-2011-12" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-12">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-12">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">12</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-11" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-11">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-11">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">11</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-10" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-10">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-10">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">10</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-9" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-9">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-9">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">9</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-8" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-8">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-8">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">8</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-7" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-7">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-7">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">7</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-6" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-6">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-6">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">6</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-5" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-5">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-5">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">5</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-4" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-4">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-4">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">4</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-3" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-3">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-3">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">3</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-2" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-2">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-2">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">2</span>
                      </li>
                     </ul>
               </div>
               <div class="month" id="month-2011-1" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onmouseup="mouseUp(this);">
                    <ul class="month-l" style="float:left;">
                      <li class="ml-income" >
                        +
                        <span id="ml_income-2011-1">0</span>
                      </li>
                      <li class="ml-payout">
                       -
                        <span id="ml-payout-2011-1">0</span>
                      </li>
                     </ul>
                     <ul class="month-r">
                      <li>
                        <span class="month-num">1</span>
                      </li>
                     </ul>
               </div>
          </div>     
      </div>
   </div>
   <a href="javascript:;" id="fc-prev" onmousedown="moveDown()"  class="hover"></a>
<script type="text/javascript">  
jsScroll(document.getElementById('month-box'), 18, 18, 'divScrollBar');//个性化滚动条脚本  jsScroll(对象名称, 滚动条宽度, 滑块高度, 滚动条样式名称)  
</script>  
</div>

<div id="fc-right" >
 <div id="fc-tit">
  <ul>
  <li class="fct-li l-1 sort choose" id="sort-tran_time" onclick="tFilter.ctrl.sort.set('tran_time');">
      <span class="span">
         <span class="out">
            <span class="in down"></span>
         </span>
      </span>
  </li>
  <li class="fct-li l-2 sort" id="sort-category_id" onclick="tFilter.ctrl.sort.set('category_id');">
      <span class="out">
         <span class="in">分&nbsp;&nbsp;类</span>
      </span>
  </li>
  <li class="fct-li l-2-1 sort" id="sort-tran_type" onclick="tFilter.ctrl.sort.set('tran_type');">
      <span class="out">
        <span class="in"></span>
      </span>
  </li>
  <li class="fct-li l-3 sort" id="sort-item_amount" onclick="tFilter.ctrl.sort.set('item_amount');">
      <span class="out">
         <span class="in">金&nbsp;&nbsp;额</span>
      </span>
  </li>
  <li class="fct-li l-4 sort" id="sort-buyer_name" onclick="tFilter.ctrl.sort.set('buyer_name');">
      <span class="out">
         <span class="in">账&nbsp;&nbsp;户</span>
      </span>
  </li>
  <li class="fct-li l-5">
      <span class="out">商家/对方账户</span>
  </li>
  <li class="fct-li l-6 sort" id="sort-project_id" onclick="tFilter.ctrl.sort.set('project_id');">
      <span class="out">
          <span class="in">项&nbsp;&nbsp;目</span>
      </span>
  </li>
  <li class="fct-li l-7">备&nbsp;&nbsp;注</li>
  </ul>
  </div>
  <div id="list">
  
  </div>
</div>
 
</div>
		
		
		
			
<div id="footer">
	<p>&copy; 2013  Courtesy | Design by 西安交通大学 软件11班糊涂虫子工作室

</p>
</div>
<script type="text/javascript">
//欢迎来到站z长特效网，我们的网址是www.zzjs.net，很好记，zz站长，js就是js特效，本站收集大量高质量js代码，还有许多广告代码下载。
tab_zzjs("h3","div","","onclick",2); tab_zzjs("h4","ol");tab_zzjs("h3","div","tab");
</script>
</div>
</body>
</html>