$(window).load(function(){
	$('body').addClass('loaded');
	$('#loader-wrapper .load_title').remove();
}); 
$('img').removeAttr('title');
//页面加载动画
//滚动促发动画
(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;

    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName, error;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);
//滚动促发动画

jQuery(document).ready(function($){
	//弹出
	$('.menu-button').on('click', function(event){
		event.preventDefault();
		$('.menu-box').addClass('in');
	});
	//关闭
	$('.menu-box').on('click', function(event){
		if($(event.target).is('.menu-bg') || $(event.target).is('.menu-close')) {
			event.preventDefault();
			$(this).removeClass('in');
		}
	});
	//esc按钮关闭
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.menu-bg').removeClass('in');
	    }
    });
});
//菜单弹出

//浏览器改变时触发属性添加

//浏览器改变时触发属性添加事件
$(window).bind("resize scroll",function(){
	addDataToggle();
	});
//触发属性添加事件
$(function(){
	addDataToggle();
});
//属性添加事件
function addDataToggle(){
var wW=$(window).width();
var scroll_len = $(window).scrollTop();
	if(wW<982){
		$(".head").addClass("hid");
		$(".menu-button").addClass("show");
  	}
	else{
		$(".head").removeClass("hid");
		$(".menu-button").removeClass("show");
		$('.top-nav li').hover(function(){
				$(this).children("dl").stop(true,true).slideDown(400);
			},function(){
				$(this).children("dl").stop(true,true).slideUp(400);
		});
  	}
};


wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100,
	callback:     function(box) {
	console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
  }
);
wow.init();
/* 滚动触发animating动画 */


//浏览器改变时触发属性添加事件
$(window).bind("resize",function(){
	inside_nav();
	});
//触发属性添加事件
$(function(){
	inside_nav();
})
//属性添加事件
function inside_nav(){
var wW=$(window).width();
	if(wW<768){
		$("#inside-nav .panel-button").attr("data-toggle","collapse");
		$("#inside-nav .panel-collapse").removeClass("in");
		$("#inside-nav .panel-collapse").css("height","auto");
	}
	else{
		$("#inside-nav .panel-button").attr("data-toggle","");
		$("#inside-nav .panel-collapse").addClass("in");
		}
};



$(document).ready(function() {
  $(".inside-culture,.inside-scps-ys,.inside-llwl-xm,.inside-ln,.join-jz-list,.gys-xz").owlCarousel({
    autoPlay : 7000,
    navigation:false,
    paginationSpeed : 1500,
    goToFirstSpeed : 1500,
	itemsCustom : [
        [0, 1],
        [480, 1],
        [768, 2],
        [992, 2],
        [1200, 3],
      ],
  });
});

$(document).ready(function() {
  $(".inside-zr,.inside-jcjg-yp,.inside-llwl-sl,.inside-s-fw,.inside-s-fw-nr,.join-yz-list,.gys-kh,.gys-rzlc-list,.join-hhr").owlCarousel({
    autoPlay : 7000,
    navigation:false,
    paginationSpeed : 1500,
    goToFirstSpeed : 1500,
	itemsCustom : [
        [0, 1],
        [480, 2],
        [768, 3],
        [992, 4],
      ],
  });
});
$(document).ready(function() {
  $(".inside-ps").owlCarousel({
    autoPlay : 7000,
    navigation:true,
    paginationSpeed : 1500,
    goToFirstSpeed : 1500,
	itemsCustom : [
        [0, 1],
        [480, 1],
        [768, 2],
        [992, 2],
      ],
	navigationText: [
      "<i class='ps-l'></i>",
      "<i class='ps-r'></i>"
	],
  });
});
$(document).ready(function() {
  $(".inside-jcjg-lc,.fa-xx-lc,.join-rzlc-list").owlCarousel({
    autoPlay : 7000,
    navigation:false,
    paginationSpeed : 1500,
    goToFirstSpeed : 1500,
	itemsCustom : [
        [0, 1],
        [480, 2],
        [768, 4],
        [992, 6],
        [1200, 8],
      ],
  });
});
$(document).ready(function() {
  $(".inside-dz1,.join-hzlc-list").owlCarousel({
    autoPlay : 7000,
    navigation:false,
    paginationSpeed : 1500,
    goToFirstSpeed : 1500,
	itemsCustom : [
        [0, 2],
        [768, 3],
        [992, 4],
        [1200, 6],
      ],
  });
});
$(document).ready(function() {
  $(".join-td-list").owlCarousel({
    autoPlay : 7000,
    navigation:false,
    paginationSpeed : 1500,
    goToFirstSpeed : 1500,
	itemsCustom : [
        [0, 2],
        [768, 3],
        [992, 4],
        [1200, 5],
      ],
  });
});

//内页图片滚动

$(".gys-hz-box>li").hover(function(){
		$(".gys-hz").stop(true,true).removeClass("on");				
	},function(){
		$(this).stop(true,true).addClass("on");
});
//合作商鼠标经过



$(window).bind("resize",function(){
	map_branch();
	});
//触发属性添加事件
$(function(){
	map_branch();
})
//属性添加事件
function map_branch() {
	if ($(".map-branch")) {
		//默认显示广东
		$(".map-dot.guangdong").addClass("cur");
		$("#company_guangdong").show().css({
			"left": $(".map-dot.guangdong").position().left + 36,
			"top": $(".map-dot.guangdong").position().top - $("#company_guangdong").height() / 2 + 8
		});
		$(".map-dot").on("mouseover", function() {
			$(this).addClass("cur").siblings(".map-dot").removeClass("cur");
		});
		$(".map-dot").on("mouseover", function() {
			$(this).addClass("cur").siblings(".map-dot").removeClass("cur");
			var dataid = $(this).attr("data-id")
				, comp = $("#company_" + dataid)
				, otherComp = $("#company_" + dataid).siblings(".branch-map-data");
			comp.fadeIn("fast").css({
				"left": $(this).position().left + 36,
				"top": $(this).position().top - comp.height() / 2 + 8
			});
			otherComp.hide();
		});
		$(".branch-map-data").on("mouseleave", function() {
			$(this).hide();
			$(".map-dot").removeClass("cur");
		});
	}
};



//图片滚动插件


 /* 代码整理：懒人之家 www.lanrenzhijia.com */
if ( typeof Object.create !== "function" ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {

	var Carousel = {
		init :function(options, el){
			var base = this;

			base.$elem = $(el);

			// options passed via js override options passed via data attributes
			base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

			base.userOptions = options;
			base.loadContent();
		},

		loadContent : function(){
			var base = this;

			if (typeof base.options.beforeInit === "function") {
				base.options.beforeInit.apply(this,[base.$elem]);
			}

			if (typeof base.options.jsonPath === "string") {
				var url = base.options.jsonPath;

				function getData(data) {
					if (typeof base.options.jsonSuccess === "function") {
						base.options.jsonSuccess.apply(this,[data]);
					} else {
						var content = "";
						for(var i in data["owl"]){
							content += data["owl"][i]["item"];
						}
						base.$elem.html(content);
					}
					base.logIn();
				}
				$.getJSON(url,getData);
			} else {
				base.logIn();
			}
		},

		logIn : function(action){
			var base = this;

			base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
					  .data("owl-originalClasses", base.$elem.attr("class"));

			base.$elem.css({opacity: 0});
			base.orignalItems = base.options.items;
			base.checkBrowser();
			base.wrapperWidth = 0;
			base.checkVisible;
			base.setVars();
		},

		setVars : function(){
			var base = this;
			if(base.$elem.children().length === 0){return false}
			base.baseClass();
			base.eventTypes();
			base.$userItems = base.$elem.children();
			base.itemsAmount = base.$userItems.length;
			base.wrapItems();
			base.$owlItems = base.$elem.find(".owl-item");
			base.$owlWrapper = base.$elem.find(".owl-wrapper");
			base.playDirection = "next";
			base.prevItem = 0;
			base.prevArr = [0];
			base.currentItem = 0;
			base.customEvents();
			base.onStartup();
		},

		onStartup : function(){
			var base = this;
			base.updateItems();
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.response();
			base.moveEvents();
			base.stopOnHover();
			base.owlStatus();

			if(base.options.transitionStyle !== false){
				base.transitionTypes(base.options.transitionStyle);
			}
			if(base.options.autoPlay === true){
				base.options.autoPlay = 5000;
			}
			base.play();

			base.$elem.find(".owl-wrapper").css("display","block")

			if(!base.$elem.is(":visible")){
				base.watchVisibility();
			} else {
				base.$elem.css("opacity",1);
			}
			base.onstartup = false;
			base.eachMoveUpdate();
			if (typeof base.options.afterInit === "function") {
				base.options.afterInit.apply(this,[base.$elem]);
			}
		},

		eachMoveUpdate : function(){
			var base = this;

			if(base.options.lazyLoad === true){
				base.lazyLoad();
			}
			if(base.options.autoHeight === true){
				base.autoHeight();
			}
			base.onVisibleItems();

			if (typeof base.options.afterAction === "function") {
				base.options.afterAction.apply(this,[base.$elem]);
			}
		},

		updateVars : function(){
			var base = this;
			if(typeof base.options.beforeUpdate === "function") {
				base.options.beforeUpdate.apply(this,[base.$elem]);
			}
			base.watchVisibility();
			base.updateItems();
			base.calculateAll();
			base.updatePosition();
			base.updateControls();
			base.eachMoveUpdate();
			if(typeof base.options.afterUpdate === "function") {
				base.options.afterUpdate.apply(this,[base.$elem]);
			}
		},

		reload : function(elements){
			var base = this;
			setTimeout(function(){
				base.updateVars();
			},0)
		},

		watchVisibility : function(){
			var base = this;

			if(base.$elem.is(":visible") === false){
				base.$elem.css({opacity: 0});
				clearInterval(base.autoPlayInterval);
				clearInterval(base.checkVisible);

			} else {
				return false;
			}
			base.checkVisible = setInterval(function(){
				if (base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate({opacity: 1},200);
					clearInterval(base.checkVisible);
				}
			}, 500);
		},

		wrapItems : function(){
			var base = this;
			base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
			base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
			base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display","block");
		},

		baseClass : function(){
			var base = this;
			var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
			var hasThemeClass = base.$elem.hasClass(base.options.theme);

			if(!hasBaseClass){
				base.$elem.addClass(base.options.baseClass);
			}

			if(!hasThemeClass){
				base.$elem.addClass(base.options.theme);
			}
		},

		updateItems : function(){
			var base = this;

			if(base.options.responsive === false){
				return false;
			}
			if(base.options.singleItem === true){
				base.options.items = base.orignalItems = 1;
				base.options.itemsCustom = false;
				base.options.itemsDesktop = false;
				base.options.itemsDesktopSmall = false;
				base.options.itemsTablet = false;
				base.options.itemsTabletSmall = false;
				base.options.itemsMobile = false;
				return false;
			}

			var width = $(base.options.responsiveBaseWidth).width();

			if(width > (base.options.itemsDesktop[0] || base.orignalItems) ){
				base.options.items = base.orignalItems;
			}

			if(typeof(base.options.itemsCustom) !== 'undefined' && base.options.itemsCustom !== false){
				//Reorder array by screen size
				base.options.itemsCustom.sort(function(a,b){return a[0]-b[0];});
				for(var i in base.options.itemsCustom){
					if(typeof(base.options.itemsCustom[i]) !== 'undefined' && base.options.itemsCustom[i][0] <= width){
						base.options.items = base.options.itemsCustom[i][1];
					}
				}
			} else {

				if(width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false){
					base.options.items = base.options.itemsDesktop[1];
				}

				if(width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false){
					base.options.items = base.options.itemsDesktopSmall[1];
				}

				if(width <= base.options.itemsTablet[0]  && base.options.itemsTablet !== false){
					base.options.items = base.options.itemsTablet[1];
				}

				if(width <= base.options.itemsTabletSmall[0]  && base.options.itemsTabletSmall !== false){
					base.options.items = base.options.itemsTabletSmall[1];
				}

				if(width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false){
					base.options.items = base.options.itemsMobile[1];
				}
			}

			//if number of items is less than declared
			if(base.options.items > base.itemsAmount && base.options.itemsScaleUp === true){
				base.options.items = base.itemsAmount;
			}
		},

		response : function(){
			var base = this,
				smallDelay;
			if(base.options.responsive !== true){
				return false
			}
			var lastWindowWidth = $(window).width();

			base.resizer = function(){
				if($(window).width() !== lastWindowWidth){
					if(base.options.autoPlay !== false){
						clearInterval(base.autoPlayInterval);
					}
					clearTimeout(smallDelay);
					smallDelay = setTimeout(function(){
						lastWindowWidth = $(window).width();
						base.updateVars();
					},base.options.responsiveRefreshRate);
				}
			}
			$(window).resize(base.resizer)
		},

		updatePosition : function(){
			var base = this;
			base.jumpTo(base.currentItem);
			if(base.options.autoPlay !== false){
				base.checkAp();
			}
		},

		appendItemsSizes : function(){
			var base = this;

			var roundPages = 0;
			var lastItem = base.itemsAmount - base.options.items;

			base.$owlItems.each(function(index){
				var $this = $(this);
				$this
					.css({"width": base.itemWidth})
					.data("owl-item",Number(index));

				if(index % base.options.items === 0 || index === lastItem){
					if(!(index > lastItem)){
						roundPages +=1;
					}
				}
				$this.data("owl-roundPages",roundPages)
			});
		},

		appendWrapperSizes : function(){
			var base = this;
			var width = 0;

			var width = base.$owlItems.length * base.itemWidth;

			base.$owlWrapper.css({
				"width": width*2,
				"left": 0
			});
			base.appendItemsSizes();
		},

		calculateAll : function(){
			var base = this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max();
		},

		calculateWidth : function(){
			var base = this;
			base.itemWidth = Math.round(base.$elem.width()/base.options.items)
		},

		max : function(){
			var base = this;
			var maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
			if(base.options.items > base.itemsAmount){
				base.maximumItem = 0;
				maximum = 0
				base.maximumPixels = 0;
			} else {
				base.maximumItem = base.itemsAmount - base.options.items;
				base.maximumPixels = maximum;
			}
			return maximum;
		},

		min : function(){
			return 0;
		},

		loops : function(){
			var base = this;

			base.positionsInArray = [0];
			base.pagesInArray = [];
			var prev = 0;
			var elWidth = 0;

			for(var i = 0; i<base.itemsAmount; i++){
				elWidth += base.itemWidth;
				base.positionsInArray.push(-elWidth);

				if(base.options.scrollPerPage === true){
					var item = $(base.$owlItems[i]);
					var roundPageNum = item.data("owl-roundPages");
					if(roundPageNum !== prev){
						base.pagesInArray[prev] = base.positionsInArray[i];
						prev = roundPageNum;
					}
				}
			}
		},

		buildControls : function(){
			var base = this;
			if(base.options.navigation === true || base.options.pagination === true){
				base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
			}
			if(base.options.pagination === true){
				base.buildPagination();
			}
			if(base.options.navigation === true){
				base.buildButtons();
			}
		},

		buildButtons : function(){
			var base = this;
			var buttonsWrapper = $("<div class=\"owl-buttons\"/>")
			base.owlControls.append(buttonsWrapper);

			base.buttonPrev = $("<div/>",{
				"class" : "owl-prev",
				"html" : base.options.navigationText[0] || ""
				});

			base.buttonNext = $("<div/>",{
				"class" : "owl-next",
				"html" : base.options.navigationText[1] || ""
				});

			buttonsWrapper
			.append(base.buttonPrev)
			.append(base.buttonNext);

			buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
			})

			buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
				if($(this).hasClass("owl-next")){
					base.next();
				} else{
					base.prev();
				}
			})
		},

		buildPagination : function(){
			var base = this;

			base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
			base.owlControls.append(base.paginationWrapper);

			base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event){
				event.preventDefault();
				if(Number($(this).data("owl-page")) !== base.currentItem){
					base.goTo( Number($(this).data("owl-page")), true);
				}
			});
		},

		updatePagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}

			base.paginationWrapper.html("");

			var counter = 0;
			var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

			for(var i = 0; i<base.itemsAmount; i++){
				if(i % base.options.items === 0){
					counter +=1;
					if(lastPage === i){
						var lastItem = base.itemsAmount - base.options.items;
					}
					var paginationButton = $("<div/>",{
						"class" : "owl-page"
						});
					var paginationButtonInner = $("<span></span>",{
						"text": base.options.paginationNumbers === true ? counter : "",
						"class": base.options.paginationNumbers === true ? "owl-numbers" : ""
					});
					paginationButton.append(paginationButtonInner);

					paginationButton.data("owl-page",lastPage === i ? lastItem : i);
					paginationButton.data("owl-roundPages",counter);

					base.paginationWrapper.append(paginationButton);
				}
			}
			base.checkPagination();
		},
		checkPagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}
			base.paginationWrapper.find(".owl-page").each(function(i,v){
				if($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages") ){
					base.paginationWrapper
						.find(".owl-page")
						.removeClass("active");
					$(this).addClass("active");
				}
			});
		},

		checkNavigation : function(){
			var base = this;

			if(base.options.navigation === false){
				return false;
			}
			if(base.options.rewindNav === false){
				if(base.currentItem === 0 && base.maximumItem === 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentItem === 0 && base.maximumItem !== 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.removeClass("disabled");
				} else if (base.currentItem === base.maximumItem){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentItem !== 0 && base.currentItem !== base.maximumItem){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.removeClass("disabled");
				}
			}
		},

		updateControls : function(){
			var base = this;
			base.updatePagination();
			base.checkNavigation();
			if(base.owlControls){
				if(base.options.items >= base.itemsAmount){
					base.owlControls.hide();
				} else {
					base.owlControls.show();
				}
			}
		},

		destroyControls : function(){
			var base = this;
			if(base.owlControls){
				base.owlControls.remove();
			}
		},

		next : function(speed){
			var base = this;

			if(base.isTransition){
				return false;
			}

			base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
			if(base.currentItem > base.maximumItem + (base.options.scrollPerPage == true ? (base.options.items - 1) : 0)){
				if(base.options.rewindNav === true){
					base.currentItem = 0;
					speed = "rewind";
				} else {
					base.currentItem = base.maximumItem;
					return false;
				}
			}
			base.goTo(base.currentItem,speed);
		},

		prev : function(speed){
			var base = this;

			if(base.isTransition){
				return false;
			}

			if(base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items){
				base.currentItem = 0
			} else {
				base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
			}
			if(base.currentItem < 0){
				if(base.options.rewindNav === true){
					base.currentItem = base.maximumItem;
					speed = "rewind"
				} else {
					base.currentItem =0;
					return false;
				}
			}
			base.goTo(base.currentItem,speed);
		},

		goTo : function(position,speed,drag){
			var base = this;

			if(base.isTransition){
				return false;
			}
			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumItem){
				position = base.maximumItem;
			}
			else if( position <= 0 ){
				position = 0;
			}

			base.currentItem = base.owl.currentItem = position;
			if( base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true){
				base.swapSpeed(0)
				if(base.browser.support3d === true){
					base.transition3d(base.positionsInArray[position]);
				} else {
					base.css2slide(base.positionsInArray[position],1);
				}
				base.afterGo();
				base.singleItemTransition();
				
				return false;
			}
			var goToPixel = base.positionsInArray[position];

			if(base.browser.support3d === true){
				base.isCss3Finish = false;

				if(speed === true){
					base.swapSpeed("paginationSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.paginationSpeed);

				} else if(speed === "rewind" ){
					base.swapSpeed(base.options.rewindSpeed);
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.rewindSpeed);

				} else {
					base.swapSpeed("slideSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.slideSpeed);
				}
				base.transition3d(goToPixel);
			} else {
				if(speed === true){
					base.css2slide(goToPixel, base.options.paginationSpeed);
				} else if(speed === "rewind" ){
					base.css2slide(goToPixel, base.options.rewindSpeed);
				} else {
					base.css2slide(goToPixel, base.options.slideSpeed);
				}
			}
			base.afterGo();
		},

		jumpTo : function(position){
			var base = this;
			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumItem || position === -1){
				position = base.maximumItem;
			}
			else if( position <= 0 ){
				position = 0;
			}
			base.swapSpeed(0)
			if(base.browser.support3d === true){
				base.transition3d(base.positionsInArray[position]);
			} else {
				base.css2slide(base.positionsInArray[position],1);
			}
			base.currentItem = base.owl.currentItem = position;
			base.afterGo();
		},

		afterGo : function(){
			var base = this;

			base.prevArr.push(base.currentItem);
			base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length -2];
			base.prevArr.shift(0)

			if(base.prevItem !== base.currentItem){
				base.checkPagination();
				base.checkNavigation();
				base.eachMoveUpdate();

				if(base.options.autoPlay !== false){
					base.checkAp();
				}
			}
			if(typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
				base.options.afterMove.apply(this,[base.$elem]);
			}
		},

		stop : function(){
			var base = this;
			base.apStatus = "stop";
			clearInterval(base.autoPlayInterval);
		},

		checkAp : function(){
			var base = this;
			if(base.apStatus !== "stop"){
				base.play();
			}
		},

		play : function(){
			var base = this;
			base.apStatus = "play";
			if(base.options.autoPlay === false){
				return false;
			}
			clearInterval(base.autoPlayInterval);
			base.autoPlayInterval = setInterval(function(){
				base.next(true);
			},base.options.autoPlay);
		},

		swapSpeed : function(action){
			var base = this;
			if(action === "slideSpeed"){
				base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
			} else if(action === "paginationSpeed" ){
				base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
			} else if(typeof action !== "string"){
				base.$owlWrapper.css(base.addCssSpeed(action));
			}
		},

		addCssSpeed : function(speed){
			var base = this;
			return {
				"-webkit-transition": "all "+ speed +"ms ease",
				"-moz-transition": "all "+ speed +"ms ease",
				"-o-transition": "all "+ speed +"ms ease",
				"transition": "all "+ speed +"ms ease"
			};
		},

		removeTransition : function(){
			return {
				"-webkit-transition": "",
				"-moz-transition": "",
				"-o-transition": "",
				"transition": ""
			};
		},

		doTranslate : function(pixels){
			return {
				"-webkit-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-moz-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-o-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-ms-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"transform": "translate3d("+pixels+"px, 0px,0px)"
			};
		},

		transition3d : function(value){
			var base = this;
			base.$owlWrapper.css(base.doTranslate(value));
		},

		css2move : function(value){
			var base = this;
			base.$owlWrapper.css({"left" : value})
		},

		css2slide : function(value,speed){
			var base = this;

			base.isCssFinish = false;
			base.$owlWrapper.stop(true,true).animate({
				"left" : value
			}, {
				duration : speed || base.options.slideSpeed ,
				complete : function(){
					base.isCssFinish = true;
				}
			});
		},

		checkBrowser : function(){
			var base = this;

			//Check 3d support
			var	translate3D = "translate3d(0px, 0px, 0px)",
				tempElem = document.createElement("div");

			tempElem.style.cssText= "  -moz-transform:"    + translate3D +
								  "; -ms-transform:"     + translate3D +
								  "; -o-transform:"      + translate3D +
								  "; -webkit-transform:" + translate3D +
								  "; transform:"         + translate3D;
			var	regex = /translate3d\(0px, 0px, 0px\)/g,
				asSupport = tempElem.style.cssText.match(regex),
				support3d = (asSupport !== null && asSupport.length === 1);

			var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

			base.browser = {
				"support3d" : support3d,
				"isTouch" : isTouch
			}
		},

		moveEvents : function(){
			var base = this;
			if(base.options.mouseDrag !== false || base.options.touchDrag !== false){
				base.gestures();
				base.disabledEvents();
			}
		},

		eventTypes : function(){
			var base = this;
			var types = ["s","e","x"];

			base.ev_types = {};

			if(base.options.mouseDrag === true && base.options.touchDrag === true){
				types = [
					"touchstart.owl mousedown.owl",
					"touchmove.owl mousemove.owl",
					"touchend.owl touchcancel.owl mouseup.owl"
				];
			} else if(base.options.mouseDrag === false && base.options.touchDrag === true){
				types = [
					"touchstart.owl",
					"touchmove.owl",
					"touchend.owl touchcancel.owl"
				];
			} else if(base.options.mouseDrag === true && base.options.touchDrag === false){
				types = [
					"mousedown.owl",
					"mousemove.owl",
					"mouseup.owl"
				];
			}

			base.ev_types["start"] = types[0];
			base.ev_types["move"] = types[1];
			base.ev_types["end"] = types[2];
		},

		disabledEvents :  function(){
			var base = this;
			base.$elem.on("dragstart.owl", function(event) { event.preventDefault();});
			base.$elem.on("mousedown.disableTextSelect", function(e) {
				return $(e.target).is('input, textarea, select, option');
			});
		},

		gestures : function(){
			var base = this;

			var locals = {
				offsetX : 0,
				offsetY : 0,
				baseElWidth : 0,
				relativePos : 0,
				position: null,
				minSwipe : null,
				maxSwipe: null,
				sliding : null,
				dargging: null,
				targetElement : null
			}

			base.isCssFinish = true;

			function getTouches(event){
				if(event.touches){
					return {
						x : event.touches[0].pageX,
						y : event.touches[0].pageY
					}
				} else {
					if(event.pageX !== undefined){
						return {
							x : event.pageX,
							y : event.pageY
						}
					} else {
						return {
							x : event.clientX,
							y : event.clientY
						}
					}
				}
			}

			function swapEvents(type){
				if(type === "on"){
					$(document).on(base.ev_types["move"], dragMove);
					$(document).on(base.ev_types["end"], dragEnd);
				} else if(type === "off"){
					$(document).off(base.ev_types["move"]);
					$(document).off(base.ev_types["end"]);
				}
			}

			function dragStart(event) {
				var event = event.originalEvent || event || window.event;

				if (event.which === 3) {
					return false;
				}
				if(base.itemsAmount <= base.options.items){
					return;
				}
				if(base.isCssFinish === false && !base.options.dragBeforeAnimFinish ){
					return false;
				}
				if(base.isCss3Finish === false && !base.options.dragBeforeAnimFinish ){
					return false;
				}

				if(base.options.autoPlay !== false){
					clearInterval(base.autoPlayInterval);
				}

				if(base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")){
					base.$owlWrapper.addClass("grabbing")
				}

				base.newPosX = 0;
				base.newRelativeX = 0;

				$(this).css(base.removeTransition());

				var position = $(this).position();
				locals.relativePos = position.left;
				
				locals.offsetX = getTouches(event).x - position.left;
				locals.offsetY = getTouches(event).y - position.top;

				swapEvents("on");

				locals.sliding = false;
				locals.targetElement = event.target || event.srcElement;
			}

			function dragMove(event){
				var event = event.originalEvent || event || window.event;

				base.newPosX = getTouches(event).x- locals.offsetX;
				base.newPosY = getTouches(event).y - locals.offsetY;
				base.newRelativeX = base.newPosX - locals.relativePos;	

				if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
					locals.dragging = true;
					base.options.startDragging.apply(base,[base.$elem]);
				}

				if(base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					locals.sliding = true;
				}

				if((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false){
					$(document).off("touchmove.owl");
				}

				var minSwipe = function(){
					return  base.newRelativeX / 5;
				}
				var maxSwipe = function(){
					return  base.maximumPixels + base.newRelativeX / 5;
				}

				base.newPosX = Math.max(Math.min( base.newPosX, minSwipe() ), maxSwipe() );
				if(base.browser.support3d === true){
					base.transition3d(base.newPosX);
				} else {
					base.css2move(base.newPosX);
				}
			}

			function dragEnd(event){
				var event = event.originalEvent || event || window.event;
				event.target = event.target || event.srcElement;

				locals.dragging = false;

				if(base.browser.isTouch !== true){
					base.$owlWrapper.removeClass("grabbing");
				}

				if(base.newRelativeX<0){
					base.dragDirection = base.owl.dragDirection = "left"
				} else {
					base.dragDirection = base.owl.dragDirection = "right"
				}

				if(base.newRelativeX !== 0){
					var newPosition = base.getNewPosition();
					base.goTo(newPosition,false,"drag");
					if(locals.targetElement === event.target && base.browser.isTouch !== true){
						$(event.target).on("click.disable", function(ev){
							ev.stopImmediatePropagation();
							ev.stopPropagation();
							ev.preventDefault();
							$(event.target).off("click.disable");
						});
						var handlers = $._data(event.target, "events")["click"];
						var owlStopEvent = handlers.pop();
						handlers.splice(0, 0, owlStopEvent);
					}
				}
				swapEvents("off");
			}
			base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart); 
		},

		getNewPosition : function(){
			var base = this,
				newPosition;
			
			newPosition = base.closestItem();

			if(newPosition>base.maximumItem){
				base.currentItem = base.maximumItem;
				newPosition  = base.maximumItem;
			} else if( base.newPosX >=0 ){
				newPosition = 0;
				base.currentItem = 0;
			}
			return newPosition;
		},
		closestItem : function(){
			var base = this,
				array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
				goal = base.newPosX,
				closest = null;

			$.each(array, function(i,v){
				if( goal - (base.itemWidth/20) > array[i+1] && goal - (base.itemWidth/20)< v && base.moveDirection() === "left") {
					closest = v;
					if(base.options.scrollPerPage === true){
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						base.currentItem = i;
					}
				} 
				else if (goal + (base.itemWidth/20) < v && goal + (base.itemWidth/20) > (array[i+1] || array[i]-base.itemWidth) && base.moveDirection() === "right"){
					if(base.options.scrollPerPage === true){
						closest = array[i+1] || array[array.length-1];
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						closest = array[i+1];
						base.currentItem = i+1;
					}
				}
			});
			return base.currentItem;
		},

		moveDirection : function(){
			var base = this,
				direction;
			if(base.newRelativeX < 0 ){
				direction = "right"
				base.playDirection = "next"
			} else {
				direction = "left"
				base.playDirection = "prev"
			}
			return direction
		},

		customEvents : function(){
			var base = this;
			base.$elem.on("owl.next",function(){
				base.next();
			});
			base.$elem.on("owl.prev",function(){
				base.prev();
			});
			base.$elem.on("owl.play",function(event,speed){
				base.options.autoPlay = speed;
				base.play();
				base.hoverStatus = "play";
			});
			base.$elem.on("owl.stop",function(){
				base.stop();
				base.hoverStatus = "stop";
			});
			base.$elem.on("owl.goTo",function(event,item){
				base.goTo(item)
			});
			base.$elem.on("owl.jumpTo",function(event,item){
				base.jumpTo(item)
			});
		},
		
		stopOnHover : function(){
			var base = this;
			if(base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false){
				base.$elem.on("mouseover", function(){
					base.stop();
				});
				base.$elem.on("mouseout", function(){
					if(base.hoverStatus !== "stop"){
						base.play();
					}
				});
			}
		},

		lazyLoad : function(){
			var base = this;

			if(base.options.lazyLoad === false){
				return false;
			}
			for(var i=0; i<base.itemsAmount; i++){
				var $item = $(base.$owlItems[i]);

				if($item.data("owl-loaded") === "loaded"){
					continue;
				}

				var	itemNumber = $item.data("owl-item"),
					$lazyImg = $item.find(".lazyOwl"),
					follow;

				if( typeof $lazyImg.data("src") !== "string"){
					$item.data("owl-loaded","loaded");
					continue;
				}				
				if($item.data("owl-loaded") === undefined){
					$lazyImg.hide();
					$item.addClass("loading").data("owl-loaded","checked");
				}
				if(base.options.lazyFollow === true){
					follow = itemNumber >= base.currentItem;
				} else {
					follow = true;
				}
				if(follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length){
					base.lazyPreload($item,$lazyImg);
				}
			}
		},

		lazyPreload : function($item,$lazyImg){
			var base = this,
				iterations = 0;
				if ($lazyImg.prop("tagName") === "DIV") {
					$lazyImg.css("background-image", "url(" + $lazyImg.data("src")+ ")" );
					var isBackgroundImg=true;
				} else {
					$lazyImg[0].src = $lazyImg.data("src");
				}
				checkLazyImage();

			function checkLazyImage(){
				iterations += 1;
				if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
					showImage();
				} else if(iterations <= 100){//if image loads in less than 10 seconds 
					setTimeout(checkLazyImage,100);
				} else {
					showImage();
				}
			}
			function showImage(){
				$item.data("owl-loaded", "loaded").removeClass("loading");
				$lazyImg.removeAttr("data-src");
				base.options.lazyEffect === "fade" ? $lazyImg.fadeIn(400) : $lazyImg.show();
				if(typeof base.options.afterLazyLoad === "function") {
					base.options.afterLazyLoad.apply(this,[base.$elem]);
				}
			}
		},

		autoHeight : function(){
			var base = this;
			var $currentimg = $(base.$owlItems[base.currentItem]).find("img");

			if($currentimg.get(0) !== undefined ){
				var iterations = 0;
				checkImage();
			} else {
				addHeight();
			}
			function checkImage(){
				iterations += 1;
				if ( base.completeImg($currentimg.get(0)) ) {
					addHeight();
				} else if(iterations <= 100){ //if image loads in less than 10 seconds 
					setTimeout(checkImage,100);
				} else {
					base.wrapperOuter.css("height", ""); //Else remove height attribute
				}
			}

			function addHeight(){
				var $currentItem = $(base.$owlItems[base.currentItem]).height();
				base.wrapperOuter.css("height",$currentItem+"px");
				if(!base.wrapperOuter.hasClass("autoHeight")){
					setTimeout(function(){
						base.wrapperOuter.addClass("autoHeight");
					},0);
				}
			}
		},

		completeImg : function(img) {
		    if (!img.complete) {
		        return false;
		    }
		    if (typeof img.naturalWidth !== "undefined" && img.naturalWidth == 0) {
		        return false;
		    }
		    return true;
		},

		onVisibleItems : function(){
			var base = this;

			if(base.options.addClassActive === true){
				base.$owlItems.removeClass("active");
			}
			base.visibleItems = [];
			for(var i=base.currentItem; i<base.currentItem + base.options.items; i++){
				base.visibleItems.push(i);

				if(base.options.addClassActive === true){
					$(base.$owlItems[i]).addClass("active");
				}
			}
			base.owl.visibleItems = base.visibleItems;
		},

		transitionTypes : function(className){
			var base = this;
			//Currently available: "fade","backSlide","goDown","fadeUp"
			base.outClass = "owl-"+className+"-out";
			base.inClass = "owl-"+className+"-in";
		},

		singleItemTransition : function(){
			var base = this;
			base.isTransition = true;

			var outClass = base.outClass,
				inClass = base.inClass,
				$currentItem = base.$owlItems.eq(base.currentItem),
				$prevItem = base.$owlItems.eq(base.prevItem),
				prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
				origin = Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2;

            base.$owlWrapper
	            .addClass('owl-origin')
	            .css({
	            	"-webkit-transform-origin" : origin+"px",
	            	"-moz-perspective-origin" : origin+"px",
	            	"perspective-origin" : origin+"px"
	            });
	        function transStyles(prevPos,zindex){
				return {
					"position" : "relative",
					"left" : prevPos+"px"
				};
			}

	        var animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

			$prevItem
			.css(transStyles(prevPos,10))
			.addClass(outClass)
			.on(animEnd, function() {
				base.endPrev = true;
				$prevItem.off(animEnd);
		    	base.clearTransStyle($prevItem,outClass);
			});

			$currentItem
			.addClass(inClass)
			.on(animEnd, function() {
				base.endCurrent = true;
				$currentItem.off(animEnd);
		    	base.clearTransStyle($currentItem,inClass);
		    });
		},

		clearTransStyle : function(item,classToRemove){
			var base = this;
			item.css({
					"position" : "",
					"left" : ""
				})
				.removeClass(classToRemove);
			if(base.endPrev && base.endCurrent){
				base.$owlWrapper.removeClass('owl-origin');
				base.endPrev = false;
				base.endCurrent = false;
				base.isTransition = false;
			}
		},

		owlStatus : function(){
			var base = this;
			base.owl = {
				"userOptions"	: base.userOptions,
				"baseElement" 	: base.$elem,
				"userItems"		: base.$userItems,
				"owlItems"		: base.$owlItems,
				"currentItem"	: base.currentItem,
				"prevItem"		: base.prevItem,
				"visibleItems"	: base.visibleItems,
				"isTouch" 		: base.browser.isTouch,
				"browser"		: base.browser,
				"dragDirection" : base.dragDirection
			}
		},

		clearEvents : function(){
			var base = this;
			base.$elem.off(".owl owl mousedown.disableTextSelect");
			$(document).off(".owl owl");
			$(window).off("resize", base.resizer);
		},

		unWrap : function(){
			var base = this;
			if(base.$elem.children().length !== 0){
				base.$owlWrapper.unwrap();
				base.$userItems.unwrap().unwrap();
				if(base.owlControls){
					base.owlControls.remove();
				}
			}
			base.clearEvents();
			base.$elem
				.attr("style", base.$elem.data("owl-originalStyles") || "")
				.attr("class", base.$elem.data("owl-originalClasses"));
		},

		destroy : function(){
			var base = this;
			base.stop();
			clearInterval(base.checkVisible);
			base.unWrap();
			base.$elem.removeData();
		},

		reinit : function(newOptions){
			var base = this;
			var options = $.extend({}, base.userOptions, newOptions);
		 	base.unWrap();
		 	base.init(options,base.$elem);
		},

		addItem : function(htmlString,targetPosition){
			var base = this,
				position;

			if(!htmlString){return false}

			if(base.$elem.children().length === 0){
				base.$elem.append(htmlString);
				base.setVars();
				return false;
			}
			base.unWrap();
			if(targetPosition === undefined || targetPosition === -1){
				position = -1;
			} else {
				position = targetPosition;
			}
			if(position >= base.$userItems.length || position === -1){
				base.$userItems.eq(-1).after(htmlString)
			} else {
				base.$userItems.eq(position).before(htmlString)
			}

			base.setVars();
		},

		removeItem : function(targetPosition){
			var base = this,
				position;

			if(base.$elem.children().length === 0){return false}
			
			if(targetPosition === undefined || targetPosition === -1){
				position = -1;
			} else {
				position = targetPosition;
			}

			base.unWrap();
			base.$userItems.eq(position).remove();
			base.setVars();
		}

	};

	$.fn.owlCarousel = function( options ){
		return this.each(function() {
			if($(this).data("owl-init") === true){
				return false;
			}
			$(this).data("owl-init", true);
			var carousel = Object.create( Carousel );
			carousel.init( options, this );
			$.data( this, "owlCarousel", carousel );
		});
	};

	$.fn.owlCarousel.options = {

		items : 5,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768,2],
		itemsTabletSmall : false,
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,

		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,

		autoPlay : false,
		stopOnHover : false,

		navigation : false,
		navigationText : ["prev","next"],
		rewindNav : true,
		scrollPerPage : false,

		pagination : true,
		paginationNumbers : false,

		responsive : true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth	: window,
		

		baseClass : "owl-carousel",
		theme : "owl-theme",

		lazyLoad : false,
		lazyFollow : true,
		lazyEffect : "fade",

		autoHeight : false,

		jsonPath : false,
		jsonSuccess : false,

		dragBeforeAnimFinish : true,
		mouseDrag : true,
		touchDrag : true,

		addClassActive : false,
		transitionStyle : false,

		beforeUpdate : false,
		afterUpdate : false,
		beforeInit : false,
		afterInit : false,
		beforeMove : false,
		afterMove : false,
		afterAction : false,
		startDragging : false,
		afterLazyLoad: false
		
	};
})( jQuery, window, document );
 /* 代码整理：懒人之家 www.lanrenzhijia.com */