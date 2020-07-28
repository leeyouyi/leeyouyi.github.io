var today = new Date().dateFormat("Y-m-d");

var initData = function () {},
    initEvent = function () {};
$(document).ready(function () {
    initEvent();
    initData();
    resetMainWidthForPad();
});
document.onkeydown = function (b) {
    b = b || window.event;
    var a = b.keyCode || b.which;
    if (a < 112 || a > 123) {
        return true;
    }
    stopEvent(b);
    switch (a) {
        case 116:
            location.reload();
            break;
    }
};
var isShowLoading = true;
$.ajaxSetup({
    url: window.location.href,
    global: true,
    type: "POST",
    dataType: "json",
    beforeSend: function () {
        if (isShowLoading) {
            $(document).showLoading(true);
        }
    },
    complete: function () {
        if (isShowLoading) {
            $(document).showLoading(false);
        }
    },
    error: function (a, c, b) {
        if (a.readyState != 0) {
            alert("unknow err.");
        }
    }
});
$(document).ajaxSuccess(function (evt, request, settings) {
    var rsp = eval("(" + request.responseText + ")");
    if (rsp["code"] == "5") {
        location.reload();
    }
});

function ajaxSubmit(e, b) {
    if (!validator.checkForm(e)) {
        return false;
    }
    var c = $("#" + e);
    if (!c) {
        window.alert("form not found: " + e);
        return false;
    }
    var d = $(c).serialize();
    var a = $(c).attr("action");
    ajax(d, b, a);
}

function ajax(c, b, a) {
    $.ajax({
        type: "POST",
        url: a || document.location.href,
        data: c,
        success: function (d) {
            if (d && d.code == 0) {
                if (b && jQuery.isFunction(b)) {
                    b(d);
                } else {
                    alert(msg_success);
                    if (listUrl) {
                        window.location = listUrl;
                    }
                }
            } else {
                window.alert(d.msg);
            }
        }
    });
}

function isIE7() {
    return $.browser.msie && $.browser.version == "7.0";
}

function stopEvent(a) {
    a = a || event;
    if ($.browser.msie) {
        a.cancelBubble = true;
        a.keyCode = 0;
        a.returnValue = false;
    } else {
        a.preventDefault();
        a.stopPropagation();
    }
}

function serialize(c) {
    var e = {};
    c = $(c).serializeArray();
    for (var b = c.length; b--;) {
        var a = c[b].name;
        var d = c[b].value;
        if (d) {
            if (e[a]) {
                e[a] += "," + d;
            } else {
                e[a] = d;
            }
        }
    }
    return e;
}
$(window).scroll(function () {
    var b = $(window).scrollTop();
    var a = $(window).scrollLeft();
    $(".jqmOverlay").css({
        top: b,
        left: a
    });
    $("#divBox").each(function (d, e) {
        var c = $(e).css("left") - 0 + a;
        $(e).css({
            top: b + 120,
            left: c
        });
    });
});

function _confirm(b, a) {
    if (confirm(b)) {
        if (a) {
            a();
        }
        return true;
    }
    return false;
}

function setReportFontSize(b, a) {
    b = b || document;
    $(b).find("table.report").find("*").css({
        "font-size": function () {
            return a + "px";
        }
    });
}

function getTimezoneDiff() {
    return (new Date()).getTimezoneOffset() * 60000 + 3600000 * 7;
}

function resetMainWidthForPad() {
    if (navigator.userAgent.indexOf("iPad") > 0) {
        if (typeof (window.parent.parent.resetMainWidth) != "undefined") {
            window.parent.parent.resetMainWidth($(document).width(), $(document).height());
        }
    }
}