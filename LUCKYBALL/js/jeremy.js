// let language = $('#language').find(":selected").val()
// let lan = localStorage.getItem('language') ;
// console.log()
// if(!lan){
//     localStorage.setItem('language',language);
//     lan = localStorage.getItem('language')
// }
function loadProperties(lan) {
  jQuery.i18n.properties({
  //加载资浏览器语言对应的资源文件
  name: "strings", //资源文件名称
  path: "../i18n_jeremy/", //资源文件路径
  mode: "map", //用Map的方式使用资源文件中的值
  language: lan,
  //加载成功后设置显示内容
  callback: function () {
      $('[data-head="history_title"]').text($.i18n.prop('history_title'));
      $('[data-head="history_tree"]').text($.i18n.prop('history_tree'));
      $('[data-head="history_winNum"]').text($.i18n.prop('history_winNum'));
      $('[data-head="history_current"]').text($.i18n.prop('history_current'));
      $('[data-head="history_records"]').text($.i18n.prop('history_records'));
      $('[data-head="history_date"]').text($.i18n.prop('history_date'));
      $('[data-head="history_installments"]').text($.i18n.prop('history_installments'));
      $('[data-head="history_number"]').text($.i18n.prop('history_number'));
      $('[data-head="history_pre"]').text($.i18n.prop('history_pre'));
      $('[data-head="history_next"]').text($.i18n.prop('history_next'));
      $('[data-head="history_nextLot"]').text($.i18n.prop('history_nextLot'));
      $('[data-head="history_information"]').text($.i18n.prop('history_information'));
      $('[data-head="history_more"]').text($.i18n.prop('history_more'));
      $('[data-head="history_info1"]').text($.i18n.prop('history_info1'));
      $('[data-head="history_info2"]').text($.i18n.prop('history_info2'));
      $('[data-head="history_info3"]').text($.i18n.prop('history_info3'));
      $('[data-head="history_info4"]').text($.i18n.prop('history_info4'));
    }
  });
}

// $("#language").change(function () {
//   let lan = $(this).val()
//   console.log(lan)
//   loadProperties(lan);
// });