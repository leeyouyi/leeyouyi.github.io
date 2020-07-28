
function loadProperties(lan) {
    jQuery.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: "strings", //资源文件名称
    path: "./i18n/", //资源文件路径
    mode: "map", //用Map的方式使用资源文件中的值
    language: lan,
    //加载成功后设置显示内容
    callback: function () {
      // index
        $('[data-home="scrollInfo"]').text($.i18n.prop('main_scrollInfo'));
        $('[data-home="numbersInfoTitle"]').text($.i18n.prop('main_numbersInfoTitle'));
        $('[data-home="homeResultWait"]').text($.i18n.prop('main_homeResultWait'));
        $('[data-home="NextTime"]').text($.i18n.prop('main_NextTime'));
        $('[data-home="urrent"]').text($.i18n.prop('main_urrent'));
        $('[data-home="stages"]').text($.i18n.prop('main_stages'));
        $('[data-home="numbers"]').text($.i18n.prop('main_numbers'));
        $('[data-home="readMore"]').text($.i18n.prop('main_readMore'));
        $('[data-home="related"]').text($.i18n.prop('main_related'));
        $('[data-home="more"]').text($.i18n.prop('main_more'));
        $('[data-home="relatedList1"]').text($.i18n.prop('main_relatedList1'));
        $('[data-home="relatedList2"]').text($.i18n.prop('main_relatedList2'));
        $('[data-home="relatedList3"]').text($.i18n.prop('main_relatedList3'));
        $('[data-home="relatedList4"]').text($.i18n.prop('main_relatedList4'));
        $('[data-home="qasQuestion1"]').text($.i18n.prop('main_qasQuestion1'));
        $('[data-home="qasAnswer1"]').text($.i18n.prop('main_qasAnswer1'));
        $('[data-home="qasQuestion2"]').text($.i18n.prop('main_qasQuestion2'));
        $('[data-home="qasAnswer2"]').text($.i18n.prop('main_qasAnswer2'));

      }
    });
}
