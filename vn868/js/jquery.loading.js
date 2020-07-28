(function (a) {
    a.fn.showLoading_cache = null;
    a.fn.showLoading = function (n, i, q, k) {
        tLoadingStatus = n;
        var c;
        var d = a.fn.showLoading_cache;
        if (d) {
            c = a("#" + a.fn.showLoading_cache + ",#" + a.fn.showLoading_cache + "_img");
        } else {
            c = Math.random().toString();
            d = "jql" + Math.random().toString().replace(/\./g, "");
            a.fn.showLoading_cache = d;
            var g = i || "JQ_PL_LOADING_BG";
            var r = q || "JQ_PL_LOADING_IMG";
            c = a('<div id="' + d + '" class="' + g + '"><span></span></div><div id="' + d + '_img" class="' + r + '"></div>').appendTo("body");
        }
        if (n) {
            var f = k || undefined;
            var e = document.body.scrollHeight;
            var b = document.documentElement.clientHeight;
            var l = e > b ? e : b;
            var m = document.body.scrollWidth;
            var j = document.documentElement.clientWidth;
            var p = m > j ? m : j;
            if (f) {
                l = a("#" + k).height();
                p = a("#" + k).width();
                c.css("top", a("#" + k).offset().top);
                c.css("left", a("#" + k).offset().left);
            }
            c.width(p).height(l).show();
            c.css({
                "background-position": "center " + (l - 50) / 3
            });
            if (a.browser.msie && a.isFunction(a.fn.bgiframe)) {
                c.bgiframe();
            }
        } else {
            c.hide();
        }
        return this;
    };
}(jQuery));
var tLoadingStatus = false;
$(window).resize(function () {
    if (tLoadingStatus) {
        $(document).showLoading(true);
    }
});