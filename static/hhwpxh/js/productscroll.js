//$(function(){
//var clearTimer = null;
//var SleepTime = 6000;   //停留时长，单位毫秒
//$("#Agentslist1").jCarouselLite({
//    btnNext: "#btn_focus_next1",
//    btnPrev: "#btn_focus_prev1",
//	visible: 5,
//	scroll:1,
//	speed: 500,//滚动速度，单位毫秒
//	auto:3000,
//	mouseOver:true
//});

//});
//alert($("#index_image1 ul li").length);
$(document).ready(function(){  
    var clearTimer = null;
    var SleepTime = 6000;   //停留时长，单位毫秒
    if($("#Agentslist1 ul li").length>=4){ //超过了4个才执行 这个js    工程案例
    $("#Agentslist1").jCarouselLite({
        btnNext: "#btn_focus_next1",
        btnPrev: "#btn_focus_prev1",
	    visible: 4,
	    scroll:1,
	    speed: 500,//滚动速度，单位毫秒
	    auto:3000,
	    mouseOver:true
    });
    }
    
    if($("#Agentslist2 ul li").length>=2){ //超过了4个才执行 这个js    企业展示
    $("#Agentslist2").jCarouselLite({
        btnNext: "#btn_focus_next2",
        btnPrev: "#btn_focus_prev2",
	    visible: 1,
	    scroll:1,
	    speed: 500,//滚动速度，单位毫秒
	    auto:3000,
	    mouseOver:true
    });
    }
    
    if($("#Agentslist3 ul li").length>=2){ //超过了3个才执行 这个js    荣誉证书
    $("#Agentslist3").jCarouselLite({
        btnNext: "#btn_focus_next3",
        btnPrev: "#btn_focus_prev3",
	    visible: 1,
	    scroll:1,
	    speed: 500,//滚动速度，单位毫秒
	    auto:3000,
	    mouseOver:true
    });
    }
    
    if($("#Agentslist4 ul li").length>=2){ //超过了3个才执行 这个js    荣誉证书
    $("#Agentslist4").jCarouselLite({
        btnNext: "#btn_focus_next4",
        btnPrev: "#btn_focus_prev4",
	    visible: 2,
	    scroll:1,
	    speed: 500,//滚动速度，单位毫秒
	    auto:3000,
	    mouseOver:true
    });
    }
});