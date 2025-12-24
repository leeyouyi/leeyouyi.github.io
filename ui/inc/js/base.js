$(document).ready(function() {
    // load_html();
    // checkall();
    setTimeout(function() {
        $('[data-toggle="tooltip"]').tooltip();
        // viewport();
        // contentHeight();
        // qa_collapse();
        // gotop();
        // side_memu_toggle();
        input_title_show_hide();
        password_eye();
        date_picker_fun();
        // print_popup_content();
    }, 500);
});
// $(window).resize(function() {
//     viewport();
// });

// function qa_collapse() {
//     $('.qa-all-close').click(function() {
//         $(this).parent(".btn-group").parent(".table-tit").next(".panel-group").find(".panel .panel-collapse").collapse('hide');
//     });
//     $('.qa-all-open').click(function() {
//         $(this).parent(".btn-group").parent(".table-tit").next(".panel-group").find(".panel .panel-collapse").collapse('show');
//     });
// };

// function modalConfirm() {
//     $(".toggle-alert").on("click", function() {
//         $(".modal-alert").modal('show');
//     });
// };

function password_eye() {
    $(".toggle-password").click(function() {
        $(this).toggleClass("icon-eye-2");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
}


function viewport() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 992) {
        // $(".main-container").removeClass("side-menu-close");
    } else {}
    if (viewportWidth > 768) {
        $(".menu-hold").removeClass("collapse");
    } else {
        $(".menu-hold").addClass("collapse");
        $(".main-container").removeClass("side-menu-close");
    }
}



function checkall() {
    $('.demo-checkall').click(function() {
        var state = $(this).find("input").is(':checked');
        if (state) {
            $(".tb-multi tbody .checkbox input").prop("checked", true);
        } else {
            $(".tb-multi tbody .checkbox input").prop("checked", false);
        }
    });

    $('.adress-check').click(function() {
        var state = $(this).find("input").is(':checked');
        if (state) {
            $(this).next('.adress-check-show').addClass("hide");
        } else {
            $(this).next('.adress-check-show').removeClass("hide");
        }
    });

}

// function radio_toggle() {
//     $(".check-collapse-all").click(function() {
//         $(".panel-group-check .panel a").removeClass("collapsed");
//         $(".panel-group-check .panel .collapse").addClass("in");
//     });
//     $(".check-collapse-all-none").click(function() {
//         $(".panel-group-check .panel a").addClass("collapsed");
//         $(".panel-group-check .panel .collapse").removeClass("in");
//     });
//     $(".radio-toggle-nomal").click(function() {
//         $(".normal-login").removeClass('hide');
//         $(".cert-login").addClass('hide');
//     });
//     $(".radio-toggle-cert").click(function() {
//         $(".normal-login").addClass('hide');
//         $(".cert-login").removeClass('hide');
//     });
//     $(".radio-hide").click(function() {
//         $(".demo-date").addClass("hide");
//     });
//     $(".radio-show").click(function() {
//         $(".demo-date").removeClass("hide");
//     });
//     $(".radio-hide2").click(function() {
//         $(".demo-date2").addClass("hide");
//     });
//     $(".radio-show2").click(function() {
//         $(".demo-date2").removeClass("hide");
//     });
//     $(".radio-hide3").click(function() {
//         $(".demo-date3").addClass("hide");
//     });
//     $(".radio-show3").click(function() {
//         $(".demo-date3").removeClass("hide");
//     });
//     $(".radio-toggle-input").click(function() {
//         // $(".radio-toggle-input input").prop('disabled', true);
//         $(".radio-toggle-input").parent().parent().find("input").prop('disabled', true);
//         $(this).parent().parent().find("input").prop('disabled', false);
//     });
//     $(".disabled-all").click(function() {
//         $(".radio-toggle-input").parent().parent().find("input").prop('disabled', true);
//     });
//     $(".other-toggle").click(function() {
//         $(".other-input").prop('disabled', false);
//     });
//     $(".other-toggle-disaled").click(function() {
//         $(".other-input").prop('disabled', true);
//     });
// }

function file_upload() {

    $('.btn-file.add input[type="file"]').on('change', function(e) {
        var fileName = e.target.files[0].name;
        // $(this).prev("span").text(fileName);
        $(this).parent().parent().parent().prepend('<div class="input-group btn-add-file"><input class="form-control" type="text" value="' + fileName + '" disabled><span class="input-group-btn"><button type="button" class="btn btn-default"><i class="icon-cross"></i></button></span></div>').on('click', '.btn-add-file .btn', function() {
            $(this).parent().parent().remove();
        });
    });
    $('.btn-file.add-img input[type="file"]').on('change', function(e) {
        var fileName = e.target.files[0].name;
        $(this).parent().parent().parent().find(".upload-img").removeClass("hide");
        $(this).parent().addClass("hide");
    });
    $(".upload-img i").click(function() {
        $(this).parent().addClass("hide");
        $(this).parent().parent().find(".btn-file.add-img").removeClass("hide");
    });

}

function add_member() {
    $('.add-member').on('click', function(e) {
        $(this).parent().prepend('<div class="input-group input-group-sm btn-add-member"><input class="form-control" type="text" value=""><span class="input-group-btn"><button type="button" class="btn btn-default"><i class="icon-cross"></i></button></span></div>').on('click', '.btn-add-member .btn', function() {
            $(this).parent().parent().remove();
        });
    });

}

function close_open_all() {
    $(".all-close").click(function() {
        $(".table-tit").addClass("collapsed").next(".collapse").collapse('hide');
    });
    $(".all-open").click(function() {
        $(".table-tit").removeClass("collapsed").next(".collapse").collapse('show');
    });
}

function alert_show() {
    $('.show-alert').click(function() {
        $('.pop-alert').addClass("in")
        setTimeout(function() {
            $('.pop-alert').removeClass("in")
        }, 3000);
    });
}


function date_picker_fun() {
    $('.datepicker').datepicker({
        todayHighlight: true,
        format: 'yyyy年mm月dd日',
    });
    $('.datepicker-start-end').datepicker({
        todayHighlight: true,
        format: 'yyyy年mm月dd日',
        startDate: "-1d",
        endDate: "+1d",
    });
    $(".datepicker-months").datepicker({ //只顯示月份
        todayHighlight: true,
        format: "yyyy年mm月",
        viewMode: "months",
        minViewMode: "months"
    });
    $(".datepicker-years").datepicker({ //只顯示年份
        todayHighlight: true,
        format: "yyyy年",
        viewMode: "years",
        minViewMode: "years"
    });
}

function side_memu_toggle() {
    /*content 的最小高*/
    $(".side-memu-toggle").click(function() {
        $(".main-container").toggleClass("side-menu-close");
        // $(".side-bar .panel > a span").toggleClass("fadeIn animated");
    });

    $(".mobile-menu-toggle .toggle-open").click(function() {
        $(this).addClass("hide").next(".toggle-close").removeClass("hide");
        $(".main-container").addClass("side-menu-open");
        $(".header .top-nav").addClass("show");
        $("#right-content").addClass("right-content-act");
        $(".menu-hold").collapse('show');
    });

    $(".mobile-menu-toggle .toggle-close").click(function() {
        $(this).addClass("hide").prev(".toggle-open").removeClass("hide");
        $(".main-container").removeClass("side-menu-open");
        $(".header .top-nav").removeClass("show");
        $("#right-content").removeClass("right-content-act");
        $(".menu-hold").collapse('hide');
    });
    $(".main-container").on('click', '.right-content-act', function() {
        $(".mobile-menu-toggle .toggle-close").addClass("hide").prev(".toggle-open").removeClass("hide");
        $("#right-content").removeClass("right-content-act");
        // $("ul.menu").removeClass("mobile-menu-open");
        $(".main-container").removeClass("side-menu-open");
        $(".header .top-nav").removeClass("show");
    })
}



function contentHeight() {
    /*content 的最小高*/
    var window_h = $(window).height();
    var side_h = $(".side-menu-hold").height() + (200);
    var gap = 234;
    var gap2 = 333;
    if (side_h < window_h) {
        $("#right-content .content").css('min-height', (window_h - gap) + 'px');
        $("#inpage").css('min-height', (window_h - gap2) + 'px');
    } else if (side_h > window_h) {
        $("#right-content .content").css('min-height', (side_h - gap) + 'px');
        $("#inpage").css('min-height', (side_h - gap2) + 'px');
    }
    // alert(side_h);
}
// 點了placeholder消失
function input_title_show_hide() {
    $('input:text, textarea,input:password').each(function() {
        var $this = $(this);
        $this.data('placeholder', $this.attr('placeholder'))
            .focus(function() {
                $this.removeAttr('placeholder');
            })
            .blur(function() {
                $this.attr('placeholder', $this.data('placeholder'));
            });
    });
}

function gotop() {
    $("#topcontrol,.main-tab li a").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 150) {
            $('#topcontrol').addClass("fade");
            $('.online-service').addClass("active");
        } else {
            $('#topcontrol').removeClass("fade");
            $('.online-service').removeClass("active");
        }
    });
}



function load_html() {
    // $('#header').load("../../html/header.html");
    // $('#cframe').load("../../html/nav-area.html");
    // $('#footer').load("../../html/footer.html");
    // $('.load-header').load("../html/RWD-header.html");
    // $('.load-footer').load("../html/RWD-footer.html");
    // $('#header').html('<div class=header><div class=main-container><a href=../../html/setting/details.html title=藝FUN券 class="logo taipei"><label class=sr-only>藝FUN券</label></a> <span class=header-tit>藝FUN券</span><ul class="for-cframe top-nav"><li><a href=../../html/setting/details.html title=回首頁 data-placement=bottom data-toggle=tooltip><i class=icon-home></i></a><li><a href=../../html/setting/PW_chang.html title=變更密碼 data-placement=bottom data-toggle=tooltip><i class=icon-people></i></a><li><a href=../../login.html title=登出 data-placement=bottom data-toggle=tooltip data-container=body><i class=icon-logout></i></a></ul><div class=mobile-menu-toggle><a href=javascript:; title=打開側選單 class=toggle-open></a> <a href=javascript:; title=關閉側選單 class="hide toggle-close"></a></div><span class="admin welcome">000000(旅宿業者)，您好！</span></div></div>');
    $('#cframe').html('<div class="side-menu-hold tab-content"><div class=side-menu-title><span>主選單</span> <a href=javascript:; class=side-memu-toggle><i></i></a></div><div class="fade tab-pane"id=side-menu-1><div class="panel-group side-bar"id=accordion3><div class=panel><div class=side-close-cover></div><a href=../../html/setting/main-store.html title="UI Pattern"class="one-level m-store"><i class=icon-store></i><span class="animated fadeIn">總店基本資料</span></a></div><div class=panel><div class=side-close-cover></div><a href=../../html/setting/main-store-multi.html title="UI Pattern"class="one-level m-store-multi"><i class=icon-store></i><span class="animated fadeIn">多店模式</span></a></div><div class="panel search-list"><div class=side-close-cover></div><a href=#CC1 title=查詢清單 class=collapsed aria-expanded=false data-parent=#accordion3 data-toggle=collapse><i class=icon-search_list></i><span>查詢清單</span></a><div class="collapse panel-collapse"id=CC1 aria-expanded=false><ul class=panel-body><li class="panel search-list-1"><a href=../../html/setting/search-list-week.html title=週結帳務確認>週結帳務確認</a><li class="panel search-list-2"><a href=../../html/setting/search-list-day.html title=日結帳務查詢>日結帳務查詢</a></ul></div></div><div class="panel store"><div class=side-close-cover></div><a href=#CC4 title=我的帳戶​ class=collapsed aria-expanded=false data-parent=#accordion3 data-toggle=collapse><i class=icon-money-list></i><span>我的帳戶​</span></a><div class="collapse panel-collapse"id=CC4 aria-expanded=false><ul class=panel-body><li class="panel store-1"><a href=../../html/setting/details.html title=明細資料查詢​>明細資料查詢​</a><li class="panel store-2"><a href=../../html/setting/statement.html title=週結資料​>週結資料</a></ul></div></div><div class="panel m3"><div class=side-close-cover></div><a href=#CC5 title=管理設定​ class=collapsed aria-expanded=false data-parent=#accordion3 data-toggle=collapse><i class=icon-cog></i><span>管理設定​</span></a><div class="collapse panel-collapse"id=CC5 aria-expanded=false><ul class=panel-body><li class="panel m3-1"><a href=../../html/setting/account.html title=基本資料​>基本資料</a><li class="panel m3-2"><a href=../../html/setting/PW_chang.html title=變更密碼​>變更密碼​</a></ul></div></div><div class="panel m4"><div class=side-close-cover></div><a href=../../html/setting/Pre-order-confirmation.html title="UI Pattern"class="one-level m-store-multi"><span class="animated fadeIn">預購訂單確認</span></a></div></div></div></div>');
    // $('#footer').html('<a class=online-service data-toggle=tooltip href=javascript:; title=線上客服><i class=icon-service3></i></a><div id=topcontrol><i class=icon-chevron-up></i></div><div class="clearfix mb20"></div><footer><div class="container ct"><small>Copyright@ 2023 Ministry of Culture,R.O.C. All Rights Reserved. 中華民國文化部 版權所有 ​</small></div></footer><div class="clearfix mb20"></div>');
    $('.load-header').html('<div class="for-rwd header"><div class=container><a href=../login.html title=藝FUN券 class="logo taipei"><label class=sr-only>藝FUN券</label></a> <span class=header-tit>藝FUN券</span><div class=menu-hold><ul class=menu><li class=hidden-xs><a href=#U title=右上方功能區塊 class="hidden-xs hidden-sm key-u"accesskey=U id=AU tabindex=3>:::</a><li><a href=../login.html title=回首頁><i class=icon-home></i></a><li class=use><a href=instructions-use.html title=使用說明>使用說明</a><li class=search-store><a href=search-store.html title=查詢店家>查詢店家</a><li class=qa><a href=qa.html title=常見問答>常見問答</a><li class=download><a href=download.html title=下載專區>下載專區</a></ul></div><div class=mobile-menu-toggle><a href=javascript:; title=打開側選單 class=toggle-open></a> <a href=javascript:; title=關閉側選單 class="hide toggle-close"></a></div></div></div>');
}


function print_popup_content() {
    document.getElementById("Print").onclick = function() {
        printElement(document.getElementById("printThis-go"));
    };

    function printElement(elem) {
        var domClone = elem.cloneNode(true);

        var $printSection = document.getElementById("printSection");
        $("#right-content,body").addClass("modal-print");
        if (!$printSection) {
            var $printSection = document.createElement("div");
            $printSection.id = "printSection";
            document.body.appendChild($printSection);
        }
        $(".close-print").click(function() {
            $("#printSection").remove();
            $("#right-content,body").removeClass("modal-print");
        });
        $printSection.innerHTML = "";
        $printSection.appendChild(domClone);
        window.print();
    }
}

