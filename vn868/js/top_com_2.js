$(document).ready(function () {
    initSelectLan();
    initMarquee();
    queryNotice();
    $("body").everyTime("60s", function () {
        queryNotice();
    });
    $(window).trigger("resize");
    $(".menu").css({
        "width": document.body.clientWidth
    });
    $(".main").css({
        "width": document.body.clientWidth - 414
    });
    if (document.body.clientWidth < 1100) {
        $(".mq .md,.marqueetext,.marquee").width(243);
        $(".btns").attr("style", "float:none;");
    }
    $(".s_menu,#m_betting2,#m_run_bottom").width(($(window).width() - 455 < 719 ? 719 : $(window).width() - 455));
});
var mainWidth = 0;
$(window).resize(function () {
    var a = $(window).width();
    a = a > mainWidth ? a : mainWidth;
    var b = $(".main").width() - (a > 955 ? 955 : (a < 700 ? 700 : a));
    $(".main,.marquee,.marquee .md, .marqueetext").each(function () {
        $(this).width($(this).width() - b);
    });
    $(".marqueetext div:first").each(function () {
        var c = $(".marqueetext").width();
        $(this).css({
            "padding": "0pt " + c + "px"
        });
    });
});

function resetMainWidth(a, b) {
    a += 212;
    mainWidth = $(window).width();
    a = a > mainWidth ? a : mainWidth;
    $("body").width(a);
    b += 80;
    var c = $(window).height();
    b = b > c ? b : c;
    $("body").height(b);
}

function initMarquee() {
    $("#notice").marquee("marqueetext").mouseover(function () {
        $(this).trigger("stop");
    }).mouseout(function () {
        $(this).trigger("start");
    }).mousemove(function (a) {
        if ($(this).data("drag") == true) {
            this.scrollLeft = $(this).data("scrollX") + ($(this).data("x") - a.clientX);
        }
    }).mousedown(function (a) {
        $(this).data("drag", true).data("x", a.clientX).data("scrollX", this.scrollLeft);
    }).mouseup(function () {
        $(this).data("drag", false);
    });
}

function queryNotice() {
    isShowLoading = false;
    $.ajax({
        url: noticeUrl,
        success: function (a) {
            var b = a.join("; ");
            $("#announcement").html(b);
        },
        error: function () {}
    });
}

function setFontSize(b) {
    var c = window.parent.main || window.container.main;
    c = c.document;
    var a = $.cookie("font-size") || 12;
    a = b == "+" ? a - 0 + 1 : a - 1;
    if (a < 8 || a > 25) {
        return;
    }
    setReportFontSize(c, a);
    $.cookie("font-size", a, {
        expires: 30,
        path: "/"
    });
}