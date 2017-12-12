$(function () {
    var st = 180;
    $('#nav_all>li').mouseenter(function () {
        $(this).find('em').stop(false, true).slideDown(st);
    }).mouseleave(function () {
        $(this).find('em').stop(false, true).slideUp(st);
    });
});