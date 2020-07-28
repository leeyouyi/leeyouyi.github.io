// let lan = $('#language').find(":selected").val()
// loadProperties(lan);
function loadProperties(lan) {
    jQuery.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: "strings", //资源文件名称
    path: "./i18n_luke/", //资源文件路径
    mode: "map", //用Map的方式使用资源文件中的值
    language: lan,
    //加载成功后设置显示内容
    callback: function () {
        $('[data-about="about_0"]').text($.i18n.prop('about_0'));
        $('[data-about="about"]').text($.i18n.prop('about_about'));
        $('[data-about="aboutList1"]').text($.i18n.prop('about_aboutList1'));
        $('[data-about="aboutList2"]').text($.i18n.prop('about_aboutList2'));
        $('[data-about="aboutList3"]').text($.i18n.prop('about_aboutList3'));
        $('[data-game="game_0"]').text($.i18n.prop('game_0'));
        $('[data-game="background"]').text($.i18n.prop('background_background'));
        $('[data-game="backgroundList1"]').text($.i18n.prop('background_backgroundList1'));
        $('[data-game="backgroundList2"]').text($.i18n.prop('background_backgroundList2'));
      }
    });
}

// $("#language").change(function () {
//           let lan = $(this).val()
//           console.log(lan)
//           loadProperties(lan);
// });