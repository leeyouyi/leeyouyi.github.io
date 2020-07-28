var lan = "en",
    lanDesc = {
        "en": "English",
        "zh_CN": "中文",
        "vn": "TiengViet"
    };

function initSelectLan() {
    $("#language").change(function () {
        setLocal($(this).val());
    });
}
if ($.browser.msie && $.browser.version == "7.0") {
    $(document).ready(function () {
        $(".combo ul").css({
            "margin-left": "-87px"
        });
    });
}
var homeUrl = null;

function setLocal(a) {
    $.ajax({
        url: localUrl,
        data: {
            locale: a,
            type: "json"
        },
        success: function (b) {
            refreshFrame();
        }
    });
}

function setModel(a) {
    $.ajax({
        url: stylesheetUrl,
        data: {
            model: a,
            type: "json"
        },
        success: function (b) {
            refreshFrame();
        }
    });
}

function refreshFrame() {
    if (window.parent.frames.length > 0) {
        $.each(window.parent.frames, function (a, b) {
            if ($(b).attr("name") == "main") {
                $(b)[0].location.href = homeUrl;
            } else {
                $(b)[0].location.reload();
            }
        });
    } else {
        window.location.reload();
    }
}
var localTime = (new Date()).getTime();

function initTime(a) {
    $.ajax({
        url: timeUrl,
        success: function (b) {
            if (b["code"] == 0) {
                var c = b["timeMillis"];
                $("body").everyTime("1s", function () {
                    c += 1000;
                    var d = new Date(c);
                    a = a || "H:i:s A M d,Y";
                    $("#time").html(d.dateFormat(a));

                });
            }
        }
    });
}