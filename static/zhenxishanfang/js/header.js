//console.log(location.href)
var strUrl=window.location.href;
var arrUrl=strUrl.split("/");
var strPage=arrUrl[arrUrl.length-1];

var url=strPage.split(".")[0];
// alert(a.indexOf('about'))


document.writeln("<div class=\'header\'>");
document.writeln("        <div class=\'logo\'>");
document.writeln("            <a href=\'index.html\'>");
document.writeln("                <img src=\'images/logo.png\' alt=\'\' class=\'img1\'>");
document.writeln("                <img src=\'images/logo2.png\' alt=\'\' class=\'img2\'>");
document.writeln("            </a>");
document.writeln("        </div>");
document.writeln("        <div class=\'nav\'>");
document.writeln("            <ul>");
if(url.indexOf('index') != -1){
	document.writeln("                <li class=\"on\">");
}
else{
	document.writeln("                <li>");
}
document.writeln("                    <a href=\'index.html\' class=\'v1\'>首页</a>");
document.writeln("                </li>");
if(url.indexOf('product') != -1){
	document.writeln("                <li class=\"on\">");
}
else{
	document.writeln("                <li>");
}

document.writeln("                    <a href=\'product_category.html\' class=\'v1\'>产品</a>");
// document.writeln("                    <dl class=\'dn\'>");
// document.writeln("                        <dd><a href=\'\' class=\'v2\'>古木系列</a></dd>");
// document.writeln("                        <dd><a href=\'\' class=\'v2\'>阳光健康砖</a></dd>");
// document.writeln("                        <dd><a href=\'\' class=\'v2\'>K大板</a></dd>");
// document.writeln("                        <dd><a href=\'\' class=\'v2\'>时尚墙砖</a></dd>");
// document.writeln("                    </dl>");
document.writeln("                </li>");
if(url.indexOf('cases') != -1){
	document.writeln("                <li class=\"on\">");
}
else{
	document.writeln("                <li>");
}

document.writeln("                    <a href=\'cases_home.html\' class=\'v1\'>案例</a>");
document.writeln("                    <dl class=\'dn\'>");
document.writeln("                        <dd><a href=\'cases_home.html\' class=\'v2\'>家装案例</a></dd>");
document.writeln("                        <dd><a href=\'cases_project.html\' class=\'v2\'>工程案例</a></dd>");
document.writeln("                        <dd><a href=\'cases_designer.html\' class=\'v2\'>设计师案例</a></dd>");
document.writeln("                        <dd><a href=\'cases_partner.html\' class=\'v2\'>合作伙伴</a></dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
if(url.indexOf('industry') != -1){
	document.writeln("                <li class=\"on\">");
}
else{
	document.writeln("                <li>");
}

document.writeln("                    <a href=\'industry.html\' class=\'v1\'>产业</a>");
document.writeln("                    <dl class=\'dn\'>");
document.writeln("                        <dd><a href=\'industry.html\' class=\'v2\'>绿能新材</a></dd>");
document.writeln("                        <dd><a href=\'industry_qcdz.html\' class=\'v2\'>岩板家居</a></dd>");
document.writeln("                        <dd><a href=\'industry_ynrn.html\' class=\'v2\'>易暖热能</a></dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");

if(url.indexOf('media') != -1){
	document.writeln("                <li class=\"on\">");
}
else{
	document.writeln("                <li>");
}


document.writeln("                    <a href=\'media.html\' class=\'v1\'>媒体</a>");
document.writeln("                    <dl class=\'dn\'>");
document.writeln("                        <dd><a href=\'media.html\' class=\'v2\'>新闻资讯</a></dd>");
document.writeln("                        <dd><a href=\'media_market.html\' class=\'v2\'>市场动态</a></dd>");
document.writeln("                        <dd><a href=\'media_visit.html\' class=\'v2\'>人物访谈</a></dd>");
document.writeln("                        <dd><a href=\'media_video.html\' class=\'v2\'>企业视频</a></dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");

if(url.indexOf('about') != -1){
	document.writeln("                <li class=\"on\">");
	
}
else{
	document.writeln("                <li>");
	
}
document.writeln("                    <a href=\'about.html\' class=\'v1\'>关于我们</a>");
document.writeln("                    <dl class=\'dn\'>");
document.writeln("                        <dd><a href=\'about.html#ppjsm\' class=\'v2\'>品牌介绍</a></dd>");
document.writeln("                        <dd><a href=\'about.html#qywhm\' class=\'v2\'>企业文化</a></dd>");
document.writeln("                        <dd><a href=\'about.html#qyysm\' class=\'v2\'>企业优势</a></dd>");
document.writeln("                        <dd><a href=\'about.html#fzlcm\' class=\'v2\'>发展历程</a></dd>");
document.writeln("                        <dd><a href=\'about.html#zzrym\' class=\'v2\'>资质荣誉</a></dd>");
document.writeln("                        <dd><a href=\'about.html#rczpm\' class=\'v2\'>人才招聘</a></dd>");
document.writeln("                        <dd><a href=\'about.html#lzjsm\' class=\'v2\'>廉政建设</a></dd>");
document.writeln("                        <dd><a href=\'about.html#lxwmm\' class=\'v2\'>联系我们</a></dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");

if(url.indexOf('service') != -1){
	document.writeln("                <li class=\"on\">");
	
}
else{
	document.writeln("                <li>");
	
}

document.writeln("                    <a href=\'service.html\' class=\'v1\'>服务支持</a>");
document.writeln("                    <dl class=\'dn\'>");
document.writeln("                        <dd><a href=\'service.html\' class=\'v2\'>工程合作</a></dd>");
document.writeln("                        <dd><a href=\'service_partner.html\' class=\'v2\'>联盟合作</a></dd>");
document.writeln("                        <dd><a href=\'service_merchants.html\' class=\'v2\'>招商合作</a></dd>");
document.writeln("                        <dd><a href=\'service_store.html\' class=\'v2\'>授权门店</a></dd>");
document.writeln("                        <dd><a href=\'service_sale.html\' class=\'v2\'>售后服务</a></dd>");
document.writeln("                        <dd><a href=\'service_question.html\' class=\'v2\'>常见问题</a></dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("        <div class=\'hd-link\'>");
document.writeln("            <span class=\'so-btn\'></span>");
document.writeln("            <div class=\'so\'>");
document.writeln("                <form action=\'\'>");
document.writeln("                    <input type=\'text\' class=\'inp\' placeholder=\'请输入搜索关键词\' />");
document.writeln("                    <input type=\'\' class=\'btn\' value=\'\' />");
document.writeln("                </form>");
document.writeln("            </div>");
document.writeln("            <span class=\'txt\'>en</span>");
document.writeln("            <span class=\'shop\'></span>");
document.writeln("        </div>");
document.writeln("    </div>");
//console.log(11111)

$('.btn').on('click', function(event) {
	var keywords = $('.inp').val();
	location.href = "product_category.html?search=" + keywords;
});
$('.shop').on('click', function(event) {
	window.open('https://kitocz.tmall.com/');
});
$('.txt').on('click', function(event) {
	location.href ='http://kitoceramic.com/';
});

	var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
    	
        window.location.href='http://web.kito.cn/mobile/index.html';
    }


window.console && window.console.log && (console.log("这位看代码的童鞋，不如来加入我们吧，乾龙科技欢迎您！\n\n%c联系电话：0757-82533633，E-mail：kito518@163.com， 联系人：罗先生", "color:red", "\n\n应聘请说明来自console\n\n职位介绍：http://www.kito.cn/about_job.html"))
	