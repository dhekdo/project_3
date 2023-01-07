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
    let textureIndex = $(".texture_wrap > img:first").index();
    let sc = 1;
    
    if( ampScroll > ampOffset + 800 ){
        $(".amp > div:nth-child(2), .amp_img_box").animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 1300 ){
        $(".amp >div:nth-child(3)").animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 1600 ){
        $(".amp1").animate({opacity : 1}, 1500);
    }
    if( ampScroll > ampOffset + 2000 + sc ){
        $(".texture_wrap img").eq(textureIndex).animate({opacity : 1}, 1000);
        // textureIndex++;
        // for( textureIndex = 1; textureIndex < 6; textureIndex++ ){
        //     $(".texture_wrap img").eq(textureIndex).animate({opacity : 1}, 2000);
        //     for( let sc = 1; sc < 7; sc++ ){

        //     }
        // }
            // for( let sc = 300; sc < 1600; sc =+ 300  ){
            //     textureIndex++;
            //     $(".texture_wrap img").eq(textureIndex).animate({opacity : 1}, 2000);
            // }
    }
    if( ampScroll > ampOffset + 2300 ){
        $(".texture_wrap img").eq(1).animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 2600 ){
        $(".texture_wrap img").eq(2).animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 2900 ){
        $(".texture_wrap img").eq(3).animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 3100 ){
        $(".texture_wrap img").eq(4).animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 3400 ){
        $(".texture_wrap img").eq(5).animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 3700 ){
        $(".texture_wrap img").eq(6).animate({opacity : 1}, 1000);
    }
});
