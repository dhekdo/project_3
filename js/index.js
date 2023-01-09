// 메인 오프닝
$(".opening").show(function(){
    $(".opening").delay(2500).fadeOut();
    $(".top").fadeIn();
});

// 줄 잡아당기면 홈화면 전환
$("#mainSwi").click(function(){
    $(".mainBg_off").fadeOut(2000);
    $(".mainBg_on").show();
    $(".main_content").show();
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

// 메뉴박스 마우스오버 효과
$(".menu_box_inner > ul > li").mouseover(function(){
    $(this).children().css({"color": "#ea6852", "transition": "all 0.5s"});
});
$(".menu_box_inner > ul > li").mouseout(function(){
    $(this).children().css({"color": "", "transition": "all 0.5s"});
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


// 스크롤 이벤트
$(window).scroll(function(){

    let ampScroll = $(this).scrollTop();
    let ampOffset = $(".top").offset().top;
    let ampBoxOffest = $(".amp").offset().top;
    
    if( ampScroll > ampOffset + 800 ){
        $(".amp > div:nth-child(2)")
        .css({
            transform : 'translateY(0px)',
            opacity : 1,
            transition : 'all 2s'
        });
        
    }
    if( ampScroll > ampOffset + 1000 ){
        $(".amp_img_box").animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 1400 ){
        $(".amp >div:nth-child(3)")
        .css({
            transform : 'translateY(0px)',
            opacity : 1,
            transition : 'all 2s'
        });
    }
    if( ampScroll > ampOffset + 1700 ){
        $(".amp1").css({
            transform : 'rotate(0deg)',
            opacity : 1,
            transition : 'all 2s'
        });
    }
    for( textureIndex = 0; textureIndex < 7; textureIndex++  ){
        if( ampScroll > ampOffset + ( 2000 + textureIndex * 300 )){
            $(".texture_wrap img").eq(textureIndex)
            .css({
                transform : 'translateY(0px)',
                opacity : 1,
                transition : 'all 1.5s'
            });
        }
    }

    let start = ampScroll - 4300;
    var opa= 1 - (start/1000);
    
    if( ampScroll > ampOffset + 4100 ){
        $(".mist1").css({zIndex : 3});
        $(".amp").css({zIndex : 5});
    }
    if( ampScroll > 4300){    
        $('.amp_mist_bg').css({ 
            opacity : 1,
            transform: `translateX(${-start*1.4}px)`,
            zIndex : 4,
            position : 'sticky',
            top : 0,
            right : 0
        });
        // $('.bbg >img').css({ 
        //     transform: `translateX(${-start + 200 }px)`});
        $(".mist1").css({opacity : -opa + 0.5});
        $(".amp").css({opacity : opa + 0.5 });
    }

    if ( ampScroll > 5550 ){
        $(".mist_opa").css({
            transform : 'translateY(0px)',
            opacity : 1,
            transition : 'all 0.35s'
        });
    }

    if ( ampScroll > 5850 ){
        $(".mist_opa2").css({
            transform : 'translateY(0px)',
            opacity : 0.2,
            transition : 'all 0.4s'
        });
        $(".mist > div:nth-child(1)").css({
            transform : 'translate(-50%, -50%) scale(1.1)',
            transition : 'all 0.3s',
            opacity : 1
        });
    }

});
