var Request2;
// ********************************************************************************************************
function drawPie() {
	Request = createRequest();
	var userid = document.getElementById("userid").value;
	var url = "chart.pieChart.action";
	var attr = "userid=" + userid + "&flagid=0";
	doAJAX(Request, url, attr, getData);
	Request2 = createRequest();
	var url = "chart.pieChart.action";
	attr = "userid=" + userid + "&flagid=1";
	doAJAX(Request2, url, attr, getData2);
}
// 画出账户支出饼图
function getData() {
	if (Request.readyState == 4) {
		if (Request.status == 200) {
			var str = [];
			var req = Request.responseText;
			
			if (parseInt(req) == 0) { //数据为空
				///alert('no data!');
				var tb = document.getElementById("tbOut");
				var html = '';
				html += '<tr class="row-0"><td class="tLeft">';
				html += '</td><td class="tRight money double ">';
				html += '</td></tr>';
				tb.innerHTML += html;
				return false;
			}
			
			//数据不为空
			var value = eval("(" + req + ")");
			var tb = document.getElementById("tbIn");
			var html = '';
			for ( var i = 0; i < value.length; i++) {
				html += '<tr class="row-' + i + '"><td class="tLeft">';
				html += value[i].name;
				html += '</td><td class="tRight money double ">';
				html += value[i].cash;
				html += '</td></tr>';
				if (parseInt(value[i].cash) != 0) {
					var temp = [ value[i].name, value[i].cash ];
					str.push(temp);
				}
			}
			tb.innerHTML = "";
			tb.innerHTML += html;

			var background = {
					type : 'linearGradient',
					x0 : 0,
					y0 : 0,
					x1 : 0,
					y1 : 1,
					colorStops : [ {
						offset : 0,
						color : '#d2e6c9'
					}, {
						offset : 1,
						color : 'white'
					} ]
				};
			// 画饼图
			$('#zichan_diagram').jqChart({
				title : {
					text : 'outcome'
				},// 图表标题
				border : {
					strokeStyle : '#6ba851'
				},// 边线颜色
				background : background,/* 背景渐变色的调整 */
				animation : {
					duration : 3
				},// 动画效果
				crosshairs : {
					enabled : true, // specifies whether the crosshairs are
									// visible
					snapToDataPoints : true, // specifies whether the
												// crosshairs span to data
												// points
					hLine : {
						visible : true,
						strokeStyle : 'red'
					}, // horizontal line options
					vLine : {
						visible : true,
						strokeStyle : 'red'
					}
				// vertical line options
				},// 十字准线样式修改*/
				paletteColors : {
					type : 'default', // default, grayscale, customColors
					customColors : undefined
				},// t调色板*/
				legend : {// 标注的一些样式修改
					title : {
						margin : 0
					}, // legend title
					border : {
						padding : 2,
						strokeStyle : 'grey',
						cornerRadius : 6
					}, // legend border
					font : '12px sans-serif', // item text font
					textFillStyle : 'black', // item text color
					textLineWidth : 0, // item text border line width
					textStrokeStyle : undefined, // item text border color
					background : undefined, // legend background
					margin : 4, // legend margings
					visible : true
				// specifies if the legend is visible
				},
				series : [

				{
					title : "消费情况 ",  //标题
					type : 'pie',  //饼图
					data : str   //画饼图所需要的数据
				} ]
			});

		} else {
			alert('something happened');
		}
	}
}

// 画出账户收入饼图
function getData2() {
	if (Request2.readyState == 4) {
		if (Request2.status == 200) {
			var str = [];
			var req = Request2.responseText;
			if (parseInt(req) == 0) {
				//alert('no data!');
				var tb = document.getElementById("tbOut");
				var html = '';
				html += '<tr class="row-0"><td class="tLeft">';
				html += '</td><td class="tRight money double ">';
				html += '</td></tr>';
				tb.innerHTML += html;
				return false;
			}
			var value = eval("(" + req + ")");
			var tb = document.getElementById("tbOut");
			var html = '';
			for ( var i = 0; i < value.length; i++) {
				html += '<tr class="row-' + i + '"><td class="tLeft">';
				html += value[i].name;
				html += '</td><td class="tRight money double ">';
				html += value[i].cash;
				html += '</td></tr>';
				if (parseInt(value[i].cash) != 0) {
					var temp = [ value[i].name, value[i].cash ];
					str.push(temp);
				}
			}
			tb.innerHTML = "";
			tb.innerHTML += html;

			var background = {
				type : 'linearGradient',
				x0 : 0,
				y0 : 0,
				x1 : 0,
				y1 : 1,
				colorStops : [ {
					offset : 0,
					color : '#80aa64'
				}, {
					offset : 1,
					color : 'grey'
				} ]
			};
			$('#fuzhai_diagram').jqChart({
				title : {
					text : 'income'
				},// 图表标题
				border : {
					strokeStyle : '#6ba851'
				},// 边线颜色
				background : background,/* 背景渐变色的调整 */
				animation : {
					duration : 2
				},// 动画效果
				crosshairs : {
					enabled : true, // specifies whether the crosshairs are
									// visible
					snapToDataPoints : true, // specifies whether the
												// crosshairs span to data
												// points
					hLine : {
						visible : true,
						strokeStyle : 'red'
					}, // horizontal line options
					vLine : {
						visible : true,
						strokeStyle : 'red'
					}
				// vertical line options
				},// 十字准线样式修改*/
				paletteColors : {
					type : 'default', // default, grayscale, customColors
					customColors : undefined
				},// t调色板*/
				legend : {// 标注的一些样式修改
					title : {
						margin : 0
					}, // legend title
					border : {
						padding : 2,
						strokeStyle : 'grey',
						cornerRadius : 6
					}, // legend border
					font : '12px sans-serif', // item text font
					textFillStyle : 'black', // item text color
					textLineWidth : 0, // item text border line width
					textStrokeStyle : undefined, // item text border color
					background : undefined, // legend background
					margin : 4, // legend margings
					visible : true
				// specifies if the legend is visible
				},
				series : [

				{
					title : "消费情况 ",
					type : 'pie',
					data : str
				} ]
			});

		} else {
			alert('something happened');
		}
	}
}

// *******************************************************************************************************
// 日常收支图
function drawBar() {
	Request = createRequest();
	var userid = document.getElementById("userid").value;
	var url = "chart.barChart.action";
	var attr = "userid=" + userid + "&flagid=0";
	doAJAX(Request, url, attr, getOutcome);
	Request2 = createRequest();
	url = "chart.barChart.action";
	attr = "userid=" + userid + "&flagid=1";
	doAJAX(Request2, url, attr, getOutcome2);
}
// 画出日常支出条形图
function getOutcome() {
	if (Request.readyState == 4) {
		if (Request.status == 200) {
			var str = [];
			var totalout = 0.0;
			var req = Request.responseText;
			if (parseInt(req) == 0) {
				//alert('no data!');
				var tb = document.getElementById("listDiv1");
				var html = '';
				html += '<ul class="listRow row' + i + '" ><li class="li1">';
				html += '</li><li class="tRight money li3">';
				html += '</li></ul>';
				tb.innerHTML += html;
				return false;
			}
			var value = eval("(" + req + ")");
			var tb = document.getElementById("listDiv1");
			var html = '';
			for ( var i = 0; i < value.length; i++) {
				if (parseInt(value[i].cash) != 0) {
					totalout += parseInt(value[i].cash);
					var temp = [ value[i].name, value[i].cash ];
					str.push(temp);
					html += '<ul class="listRow row' + i
							+ '" ><li class="li1">';
					html += value[i].name;
					html += '</li><li class="tRight money li3">';
					html += value[i].cash;
					html += '</li></ul>';
				}
			}
			tb.innerHTML = "";
			tb.innerHTML += html;
			document.getElementById("outAmount").innerText = totalout;
			var background = {
				type : 'linearGradient',
				x0 : 0,
				y0 : 0,
				x1 : 0,
				y1 : 1,
				colorStops : [ {
					offset : 0,
					color : '#80aa64'
				}, {
					offset : 1,
					color : '#c5353b'
				} ]
			};
			$('#charOut').jqChart({
				title : {
					text : 'outcome'
				},// 图表标题
				border : {
					strokeStyle : '#6ba851'
				},// 边线颜色
				background : background,/* 背景渐变色的调整 */
				animation : {
					duration : 3
				},// 动画效果
				crosshairs : {
					enabled : true, // specifies whether the crosshairs are
									// visible
					snapToDataPoints : true, // specifies whether the
												// crosshairs span to data
												// points
					hLine : {
						visible : true,
						strokeStyle : 'red'
					}, // horizontal line options
					vLine : {
						visible : true,
						strokeStyle : 'red'
					}
				// vertical line options
				},// 十字准线样式修改*/
				paletteColors : {
					type : 'customColors', // default, grayscale, customColors
					customColors : '111'
				},// t调色板*/
				legend : {// 标注的一些样式修改
					title : {
						margin : 0
					}, // legend title
					border : {
						padding : 2,
						strokeStyle : 'grey',
						cornerRadius : 6
					}, // legend border
					font : '12px sans-serif', // item text font
					textFillStyle : 'black', // item text color
					textLineWidth : 0, // item text border line width
					textStrokeStyle : undefined, // item text border color
					background : undefined, // legend background
					margin : 4, // legend margings
					visible : true
				// specifies if the legend is visible
				},
				axes : [/* 此处是对轴线的一些优化 */
				{
					location : 'left',
					minimum : 0,
					maximum : 60000,
					interval : 1000
				} ],
				series : [

				{
					title : "日常支出 ",
					type : 'histogram',
					data : str
				} ]
			});

		} else {
			alert('something happened');
		}
	}
}

// 画出日常收入条形图
function getOutcome2() {
	if (Request2.readyState == 4) {
		if (Request2.status == 200) {
			var str = [];
			var totalin = 0.0;
			var req = Request2.responseText;
			if (parseInt(req) == 0) {
				//alert('no data!');
				var tb = document.getElementById("listDiv2");
				var html = '';
				html += '<ul class="listRow row' + i + '" ><li class="li1">';
				html += '</li><li class="tRight money li3">';
				html += '</li></ul>';
				tb.innerHTML += html;
				return false;
			}
			var value = eval("(" + req + ")");
			var tb = document.getElementById("listDiv2");
			var html = '';
			for ( var i = 0; i < value.length; i++) {
				if (parseInt(value[i].cash) != 0) {
					totalin += parseInt(value[i].cash);
					var temp = [ value[i].name, value[i].cash ];
					str.push(temp);
					html += '<ul class="listRow row' + i
							+ '" ><li class="li1">';
					html += value[i].name;
					html += '</li><li class="tRight money li3">';
					html += value[i].cash;
					html += '</li></ul>';
				}
			}
			tb.innerHTML = "";
			tb.innerHTML += html;
			document.getElementById("inAmount").innerText = totalin;
			var background = {
				type : 'linearGradient',
				x0 : 0,
				y0 : 0,
				x1 : 0,
				y1 : 1,
				colorStops : [ {
					offset : 0,
					color : '#80aa64'
				}, {
					offset : 1,
					color : '#c5353b'
				} ]
			};
			$('#charIn').jqChart({
				title : {
					text : 'income'
				},// 图表标题
				border : {
					strokeStyle : '#6ba851'
				},// 边线颜色
				background : background,/* 背景渐变色的调整 */
				animation : {
					duration : 3
				},// 动画效果
				crosshairs : {
					enabled : true, // specifies whether the crosshairs are
									// visible
					snapToDataPoints : true, // specifies whether the
												// crosshairs span to data
												// points
					hLine : {
						visible : true,
						strokeStyle : 'red'
					}, // horizontal line options
					vLine : {
						visible : true,
						strokeStyle : 'red'
					}
				// vertical line options
				},// 十字准线样式修改*/
				paletteColors : {
					type : 'default', // default, grayscale, customColors
					customColors : undefined
				},// t调色板*/
				legend : {// 标注的一些样式修改
					title : {
						margin : 0
					}, // legend title
					border : {
						padding : 2,
						strokeStyle : 'grey',
						cornerRadius : 6
					}, // legend border
					font : '12px sans-serif', // item text font
					textFillStyle : 'black', // item text color
					textLineWidth : 0, // item text border line width
					textStrokeStyle : undefined, // item text border color
					background : undefined, // legend background
					margin : 4, // legend margings
					visible : true
				// specifies if the legend is visible
				},
				axes : [/* 此处是对轴线的一些优化 */
				{
					location : 'left',
					minimum : 0,
					maximum : 50000,
					interval : 500
				} ],
				series : [

				{
					title : "日常支出 ",
					type : 'histogram',
					data : str
				} ]
			});

		} else {
			alert('something happened');
		}
	}
}

// ******************************************************************************************************
// 画趋势折线图
function drawLine() {
	Request = createRequest();
	var userid = document.getElementById("userid").value;
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var url = "chart.lineChart.action";
	var attr = "userid=" + userid + "&year=" + year + "&month=" + month;
	doAJAX(Request, url, attr, getTrend);
}
function getTrend() {
	if (Request.readyState == 4) {
		if (Request.status == 200) {
			var str1 = [];
			var str2 = [];
			var totalin = 0;
			var totalout = 0;
			var remain = 0;
			var req = Request.responseText;
			var value = eval("(" + req + ")");
			if (parseInt(req) == 0) {
				alert('no data!');
				var tb = document.getElementById("listDiv");
				var html = '';
				html += '<table class="tableList" id="trendTable" cellpadding="0" cellspacing="0" border="0" style="width:100%;">';
				html += '<tbody><tr><th class="first" width="120"><span>时间</span></th>';
				html += '<th>收入</th><th>支出</th><th class="end"><span>结余</span></th></tr></tbody></table>';
				tb.innerHTML += html;
				return false;
			}
			for ( var i = 0; i < value.length; i++) {
				totalin += parseInt(value[i].income);
				totalout += parseInt(value[i].outcome);
				remain += (parseInt(value[i].income) - parseInt(value[i].outcome));
			}
			var tb = document.getElementById("listDiv");
			var html = '';
			html += '<table class="tableList" id="trendTable" cellpadding="0" cellspacing="0" border="0" style="width:100%;">';
			html += '<tbody><tr><th class="first" width="120"><span>时间</span></th>';
			html += '<th>收入</th><th>支出</th><th class="end"><span>结余</span></th></tr></tbody>';
			html += '<tbody id="tb1"><tr class="rowH3"><td class="td1">总计：</td><td class="td2 money">';
			html += totalin;
			html += '</td><td class="td3 money">';
			html += totalout;
			html += '</td><td class="td4 money">';
			html += remain;
			html += '</td></tr><tr class="rowH2"><td class="td1">';
			html += new Date().getFullYear();
			html += '年</td><td class="td2 money">';
			html += totalin;
			html += '</td><td class="td3 money">';
			html += totalout;
			html += '</td><td class="td4 money">';
			html += remain;
			html += '</td></tr>';
			for ( var i = 0; i < value.length; i++) {
				var temp = [ value[i].month, value[i].outcome ];
				str1.push(temp); // 支出折线图数据
				temp = [ value[i].month, value[i].income ];
				str2.push(temp); // 收入折线图数据
				html += '<tr class="rowH1"><td class="td1">';
				html += (i + 1);
				html += '月</td><td class="td2 money">';
				html += value[i].income;
				html += '</td><td class="td3 money">';
				html += value[i].outcome;
				html += '</td><td class="td4 money">';
				html += (parseInt(value[i].income) - parseInt(value[i].outcome));
				html += '</td></tr>'
			}
			html += '</tbody></table>';
			tb.innerHTML = "";
			tb.innerHTML += html;
			var background = {
				type : 'linearGradient',
				x0 : 0,
				y0 : 0,
				x1 : 0,
				y1 : 1,
				colorStops : [ {
					offset : 0,
					color : '#80aa64'
				}, {
					offset : 1,
					color : '#c5353b'
				} ]
			};
			$('#charBox').jqChart({
				title : {
					text : 'income'
				},// 图表标题
				border : {
					strokeStyle : '#6ba851'
				},// 边线颜色
				background : background,/* 背景渐变色的调整 */
				animation : {
					duration : 3
				},// 动画效果
				crosshairs : {
					enabled : true, // specifies whether the crosshairs are
									// visible
					snapToDataPoints : true, // specifies whether the
												// crosshairs span to data
												// points
					hLine : {
						visible : true,
						strokeStyle : 'red'
					}, // horizontal line options
					vLine : {
						visible : true,
						strokeStyle : 'red'
					}
				// vertical line options
				},// 十字准线样式修改*/
				paletteColors : {
					type : 'customColors', // default, grayscale, customColors
					customColors :'111' 
				},// t调色板*/
				legend : {// 标注的一些样式修改
					title : {
						margin : 0
					}, // legend title
					border : {
						padding : 2,
						strokeStyle : 'grey',
						cornerRadius : 6
					}, // legend border
					font : '12px sans-serif', // item text font
					textFillStyle : 'black', // item text color
					textLineWidth : 0, // item text border line width
					textStrokeStyle : undefined, // item text border color
					background : undefined, // legend background
					margin : 4, // legend margings
					visible : true
				// specifies if the legend is visible
				},
				axes : [/* 此处是对轴线的一些优化 */
				{
					location : 'left',
					minimum : 0,
					maximum : (totalin + totalout),
					interval : (totalin + totalout) / 10
				} ],
				series : [

				{
					title : "收入 ",
					type : 'line',
					data : str2
				} ]
			});

		} else {
			alert('something happened');
		}
	}
}
