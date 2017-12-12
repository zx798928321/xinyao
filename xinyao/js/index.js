jQuery(".hp-tab-newprd").slide({ titCell: ".j-sw-nav li", mainCell: ".j-sw-c", effect: "left", easing: "easeInQuint", delayTime:600 }); //第一个
jQuery(".slideGroup .slideBox").slide({ mainCell: "ul", autoPage: false, effect: "left", autoPlay:false, vis: 3, prevCell: ".sPrev", nextCell: ".sNext", mouseOverStop: false });


$(".hp-tab-newprd .j-sw-nav li").each(function (k, img) {
    new JumpObj(img, 12);
});

$(".sec5 .ico .img").each(function (k, img) {
    new JumpObj(img, 12);
});

function JumpObj(elem, range, startFunc, endFunc) {
    var curMax = range = range || 6;
    startFunc = startFunc || function () { };
    endFunc = endFunc || function () { };
    var drct = 0;
    var step = 1;

    init();

    function init() { elem.style.position = 'relative'; active() }
    function active() { elem.onmouseover = function (e) { if (!drct) jump() } }
    function deactive() { elem.onmouseover = null }

    function jump() {
        var t = parseInt(elem.style.bottom);
        if (!drct) motionStart();
        else {
            var nextbottom = t - step * drct;
            if (nextbottom >= -curMax && nextbottom <= 0) elem.style.bottom = nextbottom + 'px';
            else if (nextbottom < -curMax) drct = -1;
            else {
                var nextMax = curMax / 4;
                if (nextMax < 1) { motionOver(); return; }
                curMax = nextMax;
                drct = 1;
            }
        }
        setTimeout(function () { jump() }, 200 / (curMax + 3) + drct * 3);
    }
    function motionStart() {
        startFunc.apply(this);
        elem.style.bottom = '0';
        drct = 1;
    }
    function motionOver() {
        endFunc.apply(this);
        curMax = range;
        drct = 0;
        elem.style.bottom = '0';
    }

    this.jump = jump;
    this.active = active;
    this.deactive = deactive;
}

$(window).scroll(function () {
    
var windowHeight = $(window).height();
var Scroll = $(document).scrollTop();

//标题1
if (($(".donghua1").offset().top - Scroll - windowHeight) <= 0) {
    $(".donghua1 .cosl").animate({ right: '70%' }, 600);
    $(".donghua1 .cosr").animate({ left: '70%' }, 600, function (e) {
            $(".donghua1 .text").animate({ top: '30', opacity: 1 }, 300);
        });
}

//我是谁
if (($(".donghua2").offset().top - Scroll - windowHeight) <= 0) {
    $(".donghua2 .cosl").animate({ right: '75%' }, 600);
    $(".donghua2 .cosr").animate({ left: '75%' }, 600, function (e) {
        $(".donghua2 h2").animate({ opacity: 1 }, 100, function (e) {
            $(".donghua2 .text").animate({ top: '70', opacity: 1,left:"42.5%", }, 300);
        });
    });
}

//案例按钮
if (($(".donghua").offset().top - Scroll - windowHeight) <= 0) {
    $(".hp-tab-newprd").animate({ width: "1200px" }, 500, function () {
        $(".hp-tab-newprd").find(".j-sw-nav").addClass("animated pulse");
    })
}

});


$(".sec3_con .hp-tab-newprd .j-sw-nav li").click(function(){
    $(this).addClass("on");
    $(this).siblings().removeClass("on")
});

$(".sec3_con .hp-tab-newprd .j-sw-nav li").mouseover(function(){
$(this).addClass("on");
$(this).siblings().removeClass("on")
});

//案例轮播
var caseSwiper = new Swiper('.case_swiper',{
slidesPerView: 1,
effect:'cube',
nextButton: '.swiper-button-next',
prevButton: '.swiper-button-prev',
})

/*********鼠标滚动效果*********/
var ok = "false";
var ok2 = "false";
var ok3 = "false";
$(window).scroll(function () {

var windowHeight = $(window).height();
var Scroll = $(document).scrollTop();

    //数字
    if (($(".sec5").offset().top - Scroll - windowHeight) <= 0) {
    $(".sec5 .cosl2").animate({ right: '50%' }, 500);
    $(".sec5 .cosr2").animate({ left: '50%' }, 500, function (e) {
        $(".sec5 h2").animate({ top: '0px', opacity: 1 }, 500, function (e) {
            $(".sec5 .txt").animate({ top: '160px', opacity: 1 }, 500, function (e) {

            });
        });
    });
    if (ok == "false") {
        ok = "true";
        var options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        };
        var demo = new CountUp("myTargetElement1", 0, 1998, 0, 2, options);
        var demo2 = new CountUp("myTargetElement2", 0, 120, 0, 2, options);
        var demo3 = new CountUp("myTargetElement3", 0, 50, 0, 1, options);
        demo.start();
        setTimeout(function () {
            demo2.start();
        }, 900);

        setTimeout(function () {
            demo3.start();
        }, 2000);


        }
    }
    // 合作伙伴
    $("#list ul li").hover(function(){
        $(this).children('img').eq(0).css("display","none");
        $(this).children('img').eq(1).css("display","block");
    },function(){  
        $(this).children('img').eq(1).css("display","none");
        $(this).children('img').eq(0).css("display","block");
    })  

    // 底部图片
    $("#footer_three ul li").hover(function(){
        $(this).children('img').eq(0).css("display","none");
        $(this).children('img').eq(1).css("display","block");
    },function(){  
        $(this).children('img').eq(1).css("display","none");
        $(this).children('img').eq(0).css("display","block");
    })  

});