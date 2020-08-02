// JavaScript Document

function autoScroll(obj){  
	  $(obj).find("ul").animate({  
		  marginTop : "-50px"  
	  },500,function(){  
		  $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
	  })  
  }  
  $(function(){  
	  setInterval('autoScroll(".gg-list")',4500);
});




var iframe = document.getElementById("banner-box");
$(document).ready(function() {
	iframe.style.height = window.innerHeight + 'px';
});
$(window).resize(function(){
	iframe.style.height = window.innerHeight + 'px';
});

 
 
$(window).bind("resize scroll",function(){
	background_video();
	});
//触发属性添加事件
$(function(){
	background_video();
});
//属性添加事件
function background_video(){
var wW=$(window).width();
var scroll_len = $(window).scrollTop();
	if(wW<768){
		$("#background_video").attr("preload","none");
  	}
	else{
		$("#background_video").attr("preload","auto");
  	}
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$("#background_video").attr("preload","none");
	}
	else{
		$("#background_video").attr("preload","auto");
  	}
};


$(document).ready(function() {
  $(".index-s-img,.index-solution,.index-news").owlCarousel({
    autoPlay : 7000,
    navigation:false,
    paginationSpeed : 1500,
    goToFirstSpeed : 1500,
	itemsCustom : [
        [0, 1],
        [480, 2],
        [992, 3],
      ],
  });
});

$(document).ready(function() {
  $(".index-a-img").owlCarousel({
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


//手风琴
var fsBanner = function(container,options) {
	var self = this;

	var defaults = {
		'showName':true,	
		'toUpdate':{},
		'whenEmpty':{},
		'trigger':'click',
		'hideParent':null,
		'onChanged':null
	}

	this.options = $.extend({}, defaults, options);

	this.ilast = -1;

	this.setup = function() {
		this.container = $(container);
		this.items = this.container.find('div');

		if (!this.container.width()) this.container.width(this.container.parent().width());

		this.part = this.container.width() / this.items.length;
		this.mini = this.part/1.6;
		// 收缩栏目占总宽度1/4
		this.widmain = this.container.width() - (this.mini*this.items.length-1);

		this.items.css({'height':this.container.height(),'width':this.widmain+this.mini});	

		if (!this.options.showName) this.items.find('.name').hide();

		this.items.each(function(i) {
			var $item = $(this);
			$item.css({'z-index':i});
			if (self.options.trigger == 'click') $item.on('click',function() { self.selectItem($item,i); });
			if (self.options.trigger == 'mouse') $item.on('mouseenter',function() { self.selectItem($item,i,true); });
		});

		if (self.options.trigger == 'mouse') {
			this.container.on('mouseleave',function() { self.resetcss(); });
		}

		this.resetcss();
		this.container.show();
	}

	this.resetcss = function() {
		this.items.each(function(i) {
			var $item = $(this);
			$item.stop().animate({'left':i*self.part});

			if (self.options.showName) {
				var $name = $item.find('.name');
				if ($name.hasClass('minimized')) $name.hide().removeClass('minimized').fadeIn('fast');
			}
		});
		this.ilast = null;
		this.updateHtml();
	};

	this.selectItem = function($expanded,iexpanded,forceClick) {
		this.$lastexpanded = this.$expanded;

		if (forceClick) this.ilast = null;
		if (iexpanded == this.ilast) {
			this.$expanded = null;			
			this.resetcss();
		} else {
			this.$expanded = $expanded;			
			this.items.each(function(i) {
				var $item = $(this);
				if (i <= iexpanded) {
					$item.stop().animate({'left':i*self.mini});
				} else {
					$item.stop().animate({'left':i*self.mini+self.widmain});
				}
				if (self.options.showName) {
					var $name = $item.find('.name');
					var method = (i == iexpanded) ? 'removeClass' : 'addClass';				
					if (method == 'addClass' && $name.hasClass('minimized')) method = '';
					if (method) $name.hide()[method]('minimized').fadeIn('fast');
				}
			});
			this.ilast = iexpanded;
			this.updateHtml($expanded);
		}
		this.fireChanged();
	};

	this.updateHtml = function($expanded) {
		this.$expanded = $expanded;

		var $parent = $(self.options.hideParent);
		$.each(this.options.toUpdate,function(field,selector) {
			var $obj = $(selector);
			var showit = false;
			var value = '';
			if ($expanded) {
				$parent.show();
				value = $expanded.find('.'+field).html();
				showit = true;
			} else {
				if ($parent.length) {
					showit = false;
					$parent.hide();
				} else {
					if (self.options.whenEmpty[field]) {
						value = self.options.whenEmpty[field];
						showit = true;
					}
				}
			}
			$obj.hide();
			if (showit) $obj.html(value).fadeIn('fast');
		});
	};

	this.fireChanged = function() {
		if (this.options.onChanged) {
			this.options.onChanged(this.$expanded,this.$lastexpanded);
		}
	};
	this.setup();
};

$.fn.fsBanner = function(options) {
	return new fsBanner(this,options);
};

$('.ex[name=5] .fsbanner').fsBanner({
	trigger: 'mouse',
	toUpdate: { 
		title: '.ex[name=5] .mytitle',
		description: '.ex[name=5] .mydescription'
	},
	hideParent: '.ex[name=5] .myparent'
});

$(window).bind("resize scroll",function(){
$('.ex[name=5] .fsbanner').fsBanner({
	trigger: 'mouse',
	toUpdate: { 
		title: '.ex[name=5] .mytitle',
		description: '.ex[name=5] .mydescription'
	},
	hideParent: '.ex[name=5] .myparent'
});
	});
//触发属性添加事件




//视频
try{Typekit.load({ async: true });}catch(e){}
/**
 * Full Background Video
 *
 * More info on Audio/Video Media Events/Attributes/Methods
 * - https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
 * - http://www.w3schools.com/tags/ref_av_dom.asp
 */

(function (global) {

  // Define Bideo constructor on the global object
  global.Bideo = function () {

    // Plugin options
    this.opt = null;
    // The Video element
    this.videoEl = null;

    // Approximate Loading Rate
    //
    // The value will be a number like 0.8
    // which means to load 4 seconds of the video
    // it takes 5 seconds. If the number is super low
    // like 0.2 (regular 3g connections) then you can
    // decide whether to play the video or not.
    // This behaviour will be controller with
    // the `acceptableLoadingRate` option.
    this.approxLoadingRate = null;

    // Methods to which `this` will be bound
    this._resize = null;
    this._progress = null;

    // Time at which video is initialized
    this.startTime = null;

    this.onLoadCalled = false;

    // Initialize and setup the video in DOM`
    this.init = function (opt) {
      // If not set then set to an empty object
      this.opt = opt = opt || {};

      var self = this;

      self._resize = self.resize.bind(this);

      // Video element
      self.videoEl = opt.videoEl;

      // Meta data event
      self.videoEl.addEventListener('loadedmetadata', self._resize, false);

      // Fired when enough has been buffered to begin the video
      // self.videoEl.readyState === 4 (HAVE_ENOUGH_DATA)
      self.videoEl.addEventListener('canplay', function () {
        // Play the video when enough has been buffered
        if (!self.opt.isMobile) {
          self.opt.onLoad && self.opt.onLoad();
          if (self.opt.autoplay !== false) self.videoEl.play();
        }
      });

      // If resizing is required (resize video as window/container resizes)
      if (self.opt.resize) {
        global.addEventListener('resize', self._resize, false);
      }

      // Start time of video initialization
      this.startTime = (new Date()).getTime();

      // Create `source` for video
      this.opt.src.forEach(function (srcOb, i, arr) {
        var key
          , val
          , source = document.createElement('source');

        // Set all the attribute key=val supplied in `src` option
        for (key in srcOb) {
          if (srcOb.hasOwnProperty(key)) {
            val = srcOb[key];

            source.setAttribute(key, val);
          }
        }

        self.videoEl.appendChild(source);
      });

      if (self.opt.isMobile) {
        if (self.opt.playButton) {
          self.opt.videoEl.addEventListener('timeupdate', function () {
            if (!self.onLoadCalled) {
              self.opt.onLoad && self.opt.onLoad();
              self.onLoadCalled = true;
            }
          });


          self.opt.playButton.addEventListener('click', function () {
            self.opt.pauseButton.style.display = 'inline-block';
            this.style.display = 'none';

            self.videoEl.play();
          }, false);

          self.opt.pauseButton.addEventListener('click', function () {
            this.style.display = 'none';
            self.opt.playButton.style.display = 'inline-block';

            self.videoEl.pause();
          }, false);
        }
      }

      return;
    }

    // Called once video metadata is available
    //
    // Also called when window/container is resized
    this.resize = function () {
      // IE/Edge still don't support object-fit: cover
      if ('object-fit' in document.body.style) return;

      // Video's intrinsic dimensions
      var w = this.videoEl.videoWidth
        , h = this.videoEl.videoHeight;

      // Intrinsic ratio
      // Will be more than 1 if W > H and less if H > W
      var videoRatio = (w / h).toFixed(2);

      // Get the container DOM element and its styles
      //
      // Also calculate the min dimensions required (this will be
      // the container dimentions)
      var container = this.opt.container
        , containerStyles = global.getComputedStyle(container)
        , minW = parseInt( containerStyles.getPropertyValue('width') )
        , minH = parseInt( containerStyles.getPropertyValue('height') );

      // If !border-box then add paddings to width and height
      if (containerStyles.getPropertyValue('box-sizing') !== 'border-box') {
        var paddingTop = containerStyles.getPropertyValue('padding-top')
          , paddingBottom = containerStyles.getPropertyValue('padding-bottom')
          , paddingLeft = containerStyles.getPropertyValue('padding-left')
          , paddingRight = containerStyles.getPropertyValue('padding-right');

        paddingTop = parseInt(paddingTop);
        paddingBottom = parseInt(paddingBottom);
        paddingLeft = parseInt(paddingLeft);
        paddingRight = parseInt(paddingRight);

        minW += paddingLeft + paddingRight;
        minH += paddingTop + paddingBottom;
      }

      // What's the min:intrinsic dimensions
      //
      // The idea is to get which of the container dimension
      // has a higher value when compared with the equivalents
      // of the video. Imagine a 1200x700 container and
      // 1000x500 video. Then in order to find the right balance
      // and do minimum scaling, we have to find the dimension
      // with higher ratio.
      //
      // Ex: 1200/1000 = 1.2 and 700/500 = 1.4 - So it is best to
      // scale 500 to 700 and then calculate what should be the
      // right width. If we scale 1000 to 1200 then the height
      // will become 600 proportionately.
      var widthRatio = minW / w;
      var heightRatio = minH / h;

      // Whichever ratio is more, the scaling
      // has to be done over that dimension
      if (widthRatio > heightRatio) {
        var new_width = minW;
        var new_height = Math.ceil( new_width / videoRatio );
      }
      else {
        var new_height = minH;
        var new_width = Math.ceil( new_height * videoRatio );
      }

      this.videoEl.style.width = new_width + 'px';
      this.videoEl.style.height = new_height + 'px';
    };

  };

}(window));


(function () {

  var bv = new Bideo();
  var wW=$(window).width();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 0px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
	    src: [
      {
        src: '/Data/szhonghong/template/cn/video/case.mp4',
        type: 'video/mp4'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());