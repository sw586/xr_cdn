$(document).ready(function($) {

    // 导航
    function myNav() {
        var _winw = $(window).width();
        if (_winw > 1199) {
            $('.nav li').bind('mouseenter', function() {
                $(this).find('dl').stop().show();
                if ($(this).find('dl').length) {
                    $(this).addClass('ok');
                }
                $('.nv-bg').show();
            });
            $('.nav li').bind('mouseleave', function() {
                $(this).removeClass('ok');
                $(this).find('dl').stop().hide();
                $('.nv-bg').hide();
            });
        } else {
            $('.nav li').unbind('mouseenter mouseleave');
            $('.nav .v1').click(function() {
                if ($(this).siblings('dl').length) {
                    $(this).siblings('dl').stop().slideToggle();
                    return false;
                }
            });
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
    });


    // 搜索
    $('.hd-link .so-btn').click(function() {
        $('.hd-link .so').stop().slideToggle();
    })

    // 选项卡 鼠标点击
    $(".TAB_CLICK2 li").click(function() {
        var tab = $(this).parent(".TAB_CLICK2");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).addClass('ok').siblings(con).removeClass('ok');
    });

    // 滚动导航悬浮
    $(document).on('scroll', function() {
        var scrollH = $(this).scrollTop();
        var h1 = $('.header').height();
        var h2 = $(".ban").height();
        var hh = h1 + h2 + 20;
        if (scrollH > hh) {
            $('.g-top').addClass('fixed');
            $('.container').css('height','100px');
            // $('.m-text-hlb').css('padding-top','180px')
        } else {
            $('.g-top').removeClass('fixed');
            $('.container').css('height','0px');
            // $('.m-text-hlb').css('padding-top','45px')
        }
    })
    $(document).on('scroll', function() {
        var scrollH = $(this).scrollTop();
        if (scrollH > $('.header').height()) {
            $('.index .header').addClass('fixed');
        } else {
            $('.index .header').removeClass('fixed');
        }
    })

    var $div_li = $(".ul-choose li");
    $div_li.hover(function() {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $div_li.index(this);
        $(".ul-choose .slideList > .wd").eq(index).show().siblings().hide();
    })

    // 单击展开收起
    $('.m-text-hlb .g-more-h').click(function() {
        $(this).toggleClass("on");
        if ($(this).hasClass('on')) {
            $(this).siblings(".txt").css({
                height: 'auto'
            });
            $(this).css("background-image", "url(images/g-icon-ha1.png)")
            $("a", this).text("点击收起");
        } else {
            $(this).siblings(".txt").css({
                height: '15.03em'
            });
            $(this).css("background-image", "url(images/g-icon-ha.png)")
            $("a", this).text("点击展开查看更多");
        };
    });
    $('.row-g4 .g-more-h').click(function() {
        $(this).toggleClass("on");
        if ($(this).hasClass('on')) {
            $(this).siblings(".m-course").css({
                height: 'auto'
            });
            $(this).css("background-image", "url(images/g-icon-ha1.png)")
            $("a", this).text("点击收起");
        } else {
            $(this).siblings(".m-course").css({
                height: '26em'
            });
            $(this).css("background-image", "url(images/g-icon-ha.png)")
            $("a", this).text("点击展开查看更多");
        };
    });

});