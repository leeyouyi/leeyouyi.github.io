var closeTimeArr = {};
var timeLeft_now = (new Date()).getTime();


function initCloseTime() {
    serverTime += getTimezoneDiff();
    $.each(closeTimeArr, function (a, d) {

        if (d == "0") {
            return true;
        }
        var c = d.split(":");
        var b = new Date();
        b.setHours(c[0]);
        b.setMinutes(c[1]);
        b.setSeconds(0);
        b.setMilliseconds(0);
        closeTimeArr[a] = b.getTime();

    });
    $("body").everyTime("1s", "timeLeft", function () {
        $.each(closeTimeArr, function (b, e) {
            if (e == 0) {
                return true;
            }
            var a = "00:00:00";
            var c = new Date();
            var d = e - serverTime - (c.getTime() - timeLeft_now);
            if (d <= 0) {
                a = "00:00:00";
                closeTimeArr[b] = 0;
            } else {
                d = d + (new Date()).getTimezoneOffset() * 60000;
                d = new Date(d);
                a = d.dateFormat("H:i:s");
            }

            $("#time_" + b).text(a);
        });
    });
}