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
    
    if( ampScroll > ampOffset + 800 ){
        $(".amp > div:nth-child(2)").css({transform : 'translateY(0px)', opacity : 1, transition : 'all 2s'});
        
    }
    if( ampScroll > ampOffset + 1000 ){
        $(".amp_img_box").animate({opacity : 1}, 1000);
    }
    if( ampScroll > ampOffset + 1400 ){
        $(".amp >div:nth-child(3)").css({transform : 'translateY(0px)', opacity : 1, transition : 'all 2s'});
    }
    if( ampScroll > ampOffset + 1700 ){
        $(".amp1").css({transform : 'rotate(0deg)', opacity : 1, transition : 'all 2s'});
    }
    for( textureIndex = 0; textureIndex < 7; textureIndex++  ){
        if( ampScroll > ampOffset + ( 2000 + textureIndex * 300 )){
            $(".texture_wrap img").eq(textureIndex).css({transform : 'translateY(0px)', opacity : 1, transition : 'all 1.5s'});;
        }
    }

    if( ampScroll > ampOffset + 4300 ){
        $(".amp_mist_bg").css({
            transform : 'translateX(0px)',
            opacity : 1,
            transition : 'all 2s',
            zIndex : '100',  
        });
    }
    if( ampScroll > ampOffset + 4400 ){
        $(".amp_mist_bg").animate({opacity : 0}, 1000);
        $(".mist1").animate({opacity : 1}, 1000);
        $(".amp").animate({opacity : 0}, 1000);

    }

});
