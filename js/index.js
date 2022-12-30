// 줄 잡아당기면 홈화면 전환
$("#mainSwi").click(function(){
    $(".mainBg_off").fadeOut(2000);
    $(".mainBg_on").show();
    $("#mainSwi").css("cursor", "default");
});

// 시간 보이는 효과
$(".books").hover(function(){
    $(".time img:nth-child(4), .time span").show();
},function(){
    $(".time img, .time span").hide();
});
$(".cart").hover(function(){
    $(".time img:nth-child(3), .time span").show();
},function(){
    $(".time img, .time span").hide();
});
$(".cup").hover(function(){
    $(".time img:nth-child(2), .time span").show();
},function(){
    $(".time img, .time span").hide();
});
$(".frame").hover(function(){
    $(".time img:nth-child(1), .time span").show();
},function(){
    $(".time img, .time span").hide();
});
$(".tennis").hover(function(){
    $(".time img:nth-child(5), .time span").show();
},function(){
    $(".time img, .time span").hide();
});
$(".turntables").hover(function(){
    $(".time img:nth-child(6), .time span").show();
},function(){
    $(".time img, .time span").hide();
});