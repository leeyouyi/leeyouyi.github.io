jQuery.fn.extend({
    everyTime: function (b, c, d, e, a) {
        return this.each(function () {
            jQuery.timer.add(this, b, c, d, e, a);
        });
    },
    oneTime: function (a, b, c) {
        return this.each(function () {
            jQuery.timer.add(this, a, b, c, 1);
        });
    },
    stopTime: function (a, b) {
        return this.each(function () {
            jQuery.timer.remove(this, a, b);
        });
    }
});
jQuery.event.special;
jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            "ms": 1,
            "cs": 10,
            "ds": 100,
            "s": 1000,
            "das": 10000,
            "hs": 100000,
            "ks": 1000000
        },
        timeParse: function (c) {
            if (c == undefined || c == null) {
                return null;
            }
            var a = this.regex.exec(jQuery.trim(c.toString()));
            if (a[2]) {
                var b = parseFloat(a[1]);
                var d = this.powers[a[2]] || 1;
                return b * d;
            } else {
                return c;
            }
        },
        add: function (e, c, h, g, b, f) {
            var a = 0;
            if (jQuery.isFunction(h)) {
                if (!b) {
                    b = g;
                }
                g = h;
                h = c;
            }
            c = jQuery.timer.timeParse(c);
            if (typeof c != "number" || isNaN(c) || c <= 0) {
                return;
            }
            if (b && b.constructor != Number) {
                f = !!b;
                b = 0;
            }
            b = b || 0;
            f = f || false;
            var d = jQuery.data(e, this.dataKey) || jQuery.data(e, this.dataKey, {});
            if (!d[h]) {
                d[h] = {};
            }
            g.timerID = g.timerID || this.guid++;
            var i = function () {
                if (f && this.inProgress) {
                    return;
                }
                this.inProgress = true;
                if ((++a > b && b !== 0) || g.call(e, a) === false) {
                    jQuery.timer.remove(e, h, g);
                }
                this.inProgress = false;
            };
            i.timerID = g.timerID;
            if (!d[h][g.timerID]) {
                d[h][g.timerID] = window.setInterval(i, c);
            }
            this.global.push(e);
        },
        remove: function (c, b, d) {
            var e = jQuery.data(c, this.dataKey),
                a;
            if (e) {
                if (!b) {
                    for (b in e) {
                        this.remove(c, b, d);
                    }
                } else {
                    if (e[b]) {
                        if (d) {
                            if (d.timerID) {
                                window.clearInterval(e[b][d.timerID]);
                                delete e[b][d.timerID];
                            }
                        } else {
                            for (var d in e[b]) {
                                window.clearInterval(e[b][d]);
                                delete e[b][d];
                            }
                        }
                        for (a in e[b]) {
                            break;
                        }
                        if (!a) {
                            a = null;
                            delete e[b];
                        }
                    }
                }
                for (a in e) {
                    break;
                }
                if (!a) {
                    jQuery.removeData(c, this.dataKey);
                }
            }
        }
    }
});
jQuery(window).bind("unload", function () {
    jQuery.each(jQuery.timer.global, function (a, b) {
        jQuery.timer.remove(b);
    });
});