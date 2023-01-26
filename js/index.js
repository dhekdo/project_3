// 메인 오프닝
$(".opening").show(function(){
    $(".opening").delay(2500).fadeOut();
    $(".top").fadeIn();
});

// 줄 잡아당기면 홈화면 전환
$("#mainSwi").click(function(){
    $(".mainBg_off").fadeOut(2000);
    $(".mainBg_on, .main_content").show();
    // $(".main_content").show();
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
$(".main_hover").hover(function(){
    let bgIndex =  $(this).index();

    $(".time > img").eq(bgIndex-1).stop().fadeIn();
    $(".time span").stop().fadeIn();
}, function(){
    $(".time span, .time > img").stop().fadeOut();
});

// 팝업 이벤트
$(".btn_cl").click(function(){
    $(".pop_up_box").css({display : 'none'});
});

// 스크롤 이벤트
$(window).scroll(function(){

    let ampScroll = $(this).scrollTop();
    let ampOffset = $(".top").offset().top;
    let ampBoxOffest = $(".amp").offset().top;
    
    // 앰플 상단 제목
    if( ampScroll > ampOffset + 800 ){
        $(".amp > div:nth-child(2)")
        .css({
            transform : 'translateY(0px)',
            opacity : 1,
            transition : 'all 2s'
        });
    }else if ( ampScroll < ampOffset + 800 ){
        $(".amp > div:nth-child(2)")
        .css({
            transform : 'translateY(50px)',
            opacity : 0,
            transition : 'all 1s'
        });
    }
    // 앰플 케이스 이미지
    if( ampScroll > ampOffset + 1000 ){
        $(".amp_img_box").css({
            opacity : 1,
            transition : 'all 2s'});
    }
     else if( ampScroll < ampOffset + 1000 ){
        $(".amp_img_box").css({
            opacity : 0,
            transition : 'all 0.5s'});
    }

    // 앰플 컨텐츠 박스
    if( ampScroll > ampOffset + 1400 ){
        $(".amp >div:nth-child(3)")
        .css({
            transform : 'translateY(0px)',
            opacity : 1,
            transition : 'all 2s'
        });
    }else if( ampScroll < ampOffset + 1400 ){
        $(".amp >div:nth-child(3)")
        .css({
            transform : 'translateY(50px)',
            opacity : 0,
            transition : 'all 1s'
        });
    }

    // 앰플 물방울 배경 이미지
    if( ampScroll > ampOffset + 1700 ){
        $(".amp1").css({
            transform : 'rotate(0deg)',
            opacity : 1,
            transition : 'all 2s'
        });
    }else if( ampScroll < ampOffset + 1700 ){
        $(".amp1").css({
            transform : 'rotate(-10deg)',
            opacity : 0,
            transition : 'all 1s'
        });
    }

    // 앰플 텍스쳐 이미지
    for( textureIndex = 0; textureIndex < 7; textureIndex++ ){
        if( ampScroll > ampOffset + ( 2000 + textureIndex * 300 )){
            $(".texture_wrap img").eq(textureIndex)
            .css({
                transform : 'translateY(0px)',
                opacity : 1,
                transition : 'all 1.5s'
            });
        }else if( ampScroll < ampOffset + ( 2000 + textureIndex * 300 ) ){
            $(".texture_wrap img").eq(textureIndex)
            .css({
                transform : 'translateY(-50px)',
                opacity : 0,
                transition : 'all 0.5s'
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
        $(".mist1").css({opacity : -opa + 0.5});
        $(".amp").css({opacity : opa + 0.1 });
        $(".bbg img").css({
            transform: `translate3d(${-start/15}%, 0px, 0px)`
        });
        $(".bbg span").css({
            transform: `translate3d(${-start/5}%, 0px, 0px)`
        });
    }

    if( ampScroll > 5000 ){
        let start = ampScroll - 5100;
        $(".bbg2 img").css({
            transform: `translate3d(${-start/20}%, 0px, 0px)`
        });
        $(".bbg2 span").css({
            transform: `translate3d(${-start+750}%, 0px, 0px)`
        });
    }

    // 미스트 컨텐츠 박스
    if ( ampScroll > 5550 ){
        
        $(".mist_opa").css({
            transform : 'translateY(0px)',
            opacity : 1,
            transition : 'all 0.35s'
        });
    }else if( ampScroll < 5580 ){
        $(".mist_opa2").css({
            transform : 'translateY(50px)',
            opacity : 0,
            transition : 'all 0.1s'
        });
        $(".mist_opa").css({
            transform : 'translateY(50px)',
            opacity : 0,
            transition : 'all 0.5s'
        });
    }

    // 미스트 케이스 이미지, 배경 이미지
    if ( ampScroll > 5850 ){
        
        $(".mist_opa2").css({
            transform : 'translateY(0px)',
            opacity : 0.2,
            transition : 'all 0.4s'
        });
        $(".bbg2 img").css({
            transform: `translate(0px, 0px)`
        });
        $(".bbg2 span").css({
            transform: `translate(5px, 0px)`
        });
        $(".mist > div:nth-child(1)").css({
            transform : 'translate(-50%, -50%) scale(1.1)',
            transition : 'all 0.3s',
            opacity : 1
        });
    }else if ( ampScroll < 5300 ){
        $(".mist > div:nth-child(1)").css({
            transform : 'translate(-50%, -50%) scale(1)',
            transition : 'all 0.15s',
            opacity : 0
        });
    }

    // 마이크로바이옴 구좌
    if( ampScroll > 8000 ){
        $(".content_box4").css({opacity : 1});
        $(".ball1").delay(100).animate({opacity : 1}, 600);
        $(".ball2").animate({opacity : 1}, 300);
        $(".ball3").delay(200).animate({opacity : 1}, 500);
        $(".star1").delay(600).animate({opacity : 1}, 600);
        $(".star2").delay(500).animate({opacity : 1}, 600);
        $(".m_circle1").delay(700).animate({opacity : 1}, 600);
        $(".m_circle2").delay(900).animate({opacity : 1}, 600);
        $(".m_circle3").delay(1000).animate({opacity : 1}, 600);
    } 
    else if ( ampScroll < 8000 ){
        $(".content_box4").css({opacity : 0, transition : 'all 2s'});
    }

    if( ampScroll > 8300 ){
        $(".content_box5 .con5_title").css({
            opacity : 1,
            transition : "all 1.5s"
        });
    } else if( ampScroll < 8300 ){
        $(".content_box5 .con5_title").css({
            opacity : 0,
            transition : "all 1.5s"
        });
    }
    if( ampScroll > 9000 ){
        $(".content_box5 .con5_title").css({
            transform : 'translate(0px, -250%) scale(0.3, 0.3)',
            transition : 'all 0.8s'
        }).children("span:nth-child(1)").css({
            transform : 'translate(0px, -330%) scale(2, 2)',
            transition : 'all 0.8s'
        }).end().find("span:nth-child(3)").css({
            opacity : '1',
            transition : 'all 1.2s'
        })
    } else if( ampScroll < 9000 ){
        $(".content_box5 .con5_title").css({
            transform : 'translate(0px, -50%)',
            transition : 'all 1.2s'
        }).children("span:nth-child(1)").css({
            transform : 'translate(0px, -50%)',
            transition : 'all 1.2s'
        }).end().find("span:nth-child(3)").css({
            opacity : '0',
            transition : 'all 0.5s'
        })
    }

    // 마이크로바이옴 텍스트 박스
    for( textBox = 0; textBox < 3; textBox++ ){
        if( ampScroll > ampOffset + ( 9700 + textBox * 200 ) ){
            $(".content_box5 .con5_text1 span").eq(textBox).css({
                opacity : '1',
                transition : 'all 0.3s',
                transform : 'translate(0px, -10px)'
            });
        } else if( ampScroll < ampOffset + ( 9700 + textBox * 200 ) ){
            $(".content_box5 .con5_text1 span").eq(textBox).css({
                opacity : '0',
                transition : 'all 0.3s',
                transform : 'translate(0px, 0px)'
            });
        }
    }
    if( ampScroll > 11200 ){
        $(".content_box5 .con5_text1 span").css({
            opacity : 0,
            transition : 'all 0.5s'
        });
    }
    for( textBox2 = 0; textBox2 < 4; textBox2++ ){
        if( ampScroll > ampOffset + ( 11400 + textBox2 * 200 )){
            
            $(".content_box5 .con5_text2 span").eq(textBox2).css({
                opacity : '1',
                transition : 'all 0.3s',
                transform : 'translate(0px, -10px)'
            });
            $(".content_box5 .con5_text2 a").css({
                opacity : '1',
                transition : 'all 0.3s',
                transform : 'translate(0px, -10px)'
            })
        } else if( ampScroll < ampOffset + ( 11400 + textBox2 * 200 ) ){
            $(".content_box5 .con5_text2 span").eq(textBox2).css({
                opacity : '0',
                transition : 'all 0.3s',
                transform : 'translate(0px, 0px)'
            });
            $(".content_box5 .con5_text2 a").css({
                opacity : '0',
                transition : 'all 0.3s',
                transform : 'translate(0px, 0px)'
            })
            $(".content_box5 .con5_text1").css({
                opacity : 1,
                transition : 'all 1s'
            })

    
            
        }
    }
        
});


    
