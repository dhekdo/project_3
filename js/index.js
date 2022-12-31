// 줄 잡아당기면 홈화면 전환
$("#mainSwi").click(function(){
    $(".mainBg_off").fadeOut(2000);
    $(".mainBg_on").show();
    $("#mainSwi").css("cursor", "default");
});

// 메뉴바 클릭 이벤트
$(".mainMenu").click(function(){
    $(".menu_box").slideToggle(function(){
        $(".mainMenu .eye span, .mainMenu .mouth span").toggleClass("menu_on");
        $(".logo a span").toggleClass("logo_on");
        $(".mainMenu .mouth span:nth-child(1)").toggleClass("rot1");
        $(".mainMenu .mouth span:nth-child(2)").toggleClass("rot2");
    });
});

// 메인 호버 이벤트
$(".main_hover").hover(function(){
    $(this).find("img:nth-child(1)").stop().animate({opacity:"0"},500);
    $(this).find("img:nth-child(2)").stop().animate({opacity:"1"},500);
},function(){
    $(this).find("img:nth-child(1)").stop().animate({opacity:"1"},500);
    $(this).find("img:nth-child(2)").stop().animate({opacity:"0"},500);
});

$(".light_on").hover(function(){
    $(this).find("img:nth-child(2)").stop().animate({opacity:"1"},500);
    $(this).find(".tooltip").stop().animate({opacity:"0.9"},500);
},function(){
    $(this).find("img:nth-child(2)").stop().animate({opacity:"0"},500);
    $(this).find(".tooltip").stop().animate({opacity:"0"},500);
});

$(".projector").hover(function(){
    $(".pr_on img").stop().animate({opacity:"1"},500);
},function(){
    $(".pr_on img").stop().animate({opacity:"0"},500);
});

// 시간 보이는 효과
$(".books").hover(function(){
    $(".time img:nth-child(4), .time span").stop().fadeIn();
},function(){
    $(".time img, .time span").stop().fadeOut();
});
$(".cart").hover(function(){
    $(".time img:nth-child(3), .time span").stop().fadeIn();
},function(){
    $(".time img, .time span").stop().fadeOut();
});
$(".cup").hover(function(){
    $(".time img:nth-child(2), .time span").stop().fadeIn();
},function(){
    $(".time img, .time span").stop().fadeOut();
});
$(".frame").hover(function(){
    $(".time img:nth-child(1), .time span").stop().fadeIn();
},function(){
    $(".time img, .time span").stop().fadeOut();
});
$(".tennis").hover(function(){
    $(".time img:nth-child(5), .time span").stop().fadeIn();
},function(){
    $(".time img, .time span").stop().fadeOut();
});
$(".turntables").hover(function(){
    $(".time img:nth-child(6), .time span").stop().fadeIn();
},function(){
    $(".time img, .time span").stop().fadeOut();
});




