loadProperties('zh-CN');

function loadProperties(lan) {
  jQuery.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    path: './js/i18n_Neo/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: lan,
    callback: function() {
      //加载成功后设置显示内容
      $('[data-betlist="0"]').html($.i18n.prop('betlist_Bet_List'));
      $('[data-betlist="1"]').html($.i18n.prop('betlist_Number'));
      $('[data-betlist="2"]').html($.i18n.prop('betlist_Company'));
      $('[data-betlist="3"]').html($.i18n.prop('betlist_ALL'));
      $('[data-betlist="4"]').val($.i18n.prop('result_Search'));
      $('[data-betlist="5"]').html($.i18n.prop('betlist_Total'));
      $('[data-betlist="6"]').html($.i18n.prop('betlist_Sheet'));
      $('[data-betlist="7"]').html($.i18n.prop('betlist_Player'));
      $('[data-betlist="8"]').html($.i18n.prop('betlist_Transaction'));
      $('[data-betlist="9"]').html($.i18n.prop('betlist_LastIP'));
      $('[data-betlist="10"]').html($.i18n.prop('betlist_Company'));
      $('[data-betlist="11"]').html($.i18n.prop('betlist_Number'));
      $('[data-betlist="12"]').html($.i18n.prop('betlist_Turnover'));
      $('[data-betlist="13"]').html($.i18n.prop('betlist_Comm'));
      $('[data-betlist="14"]').html($.i18n.prop('betlist_NetAmt'));
      $('[data-betlist="15"]').html($.i18n.prop('betlist_CancelTime'));
      $('[data-betlist="16"]').html($.i18n.prop('betlist_Function'));
      $('[data-betlist="17"]').html($.i18n.prop('betlist_page'));
      $('[data-betlist="18"]').html($.i18n.prop('betlist_first'));
      $('[data-betlist="19"]').html($.i18n.prop('betlist_previous'));
      $('[data-betlist="20"]').html($.i18n.prop('betlist_next'));
      $('[data-betlist="21"]').html($.i18n.prop('betlist_last'));
      $('[data-betlist="22"]').html($.i18n.prop('betlist_game'));
      
      $('[data-Statement="0"]').html($.i18n.prop('Statement_Statement'));
      $('[data-Statement="1"]').val($.i18n.prop('Statement_This_Week'));
      $('[data-Statement="2"]').val($.i18n.prop('Statement_Last_Week'));
      $('[data-Statement="3"]').val($.i18n.prop('Statement_Last_2Week'));
      $('[data-Statement="4"]').html($.i18n.prop('Statement_Date'));
      $('[data-Statement="5"]').html($.i18n.prop('Statement_Turn_Over'));
      $('[data-Statement="6"]').html($.i18n.prop('Statement_Comm'));
      $('[data-Statement="7"]').html($.i18n.prop('Statement_Pay_Out'));
      $('[data-Statement="8"]').html($.i18n.prop('Statement_WinLose'));
      $('[data-Statement="9"]').html($.i18n.prop('Statement_Settled'));
      $('[data-Statement="10"]').html($.i18n.prop('Statement_Balance'));
      
      $('[data-Drop="0"]').html($.i18n.prop('Drop_Drop_List'));
      $('[data-Drop="1"]').html($.i18n.prop('Drop_Number'));
      $('[data-Drop="2"]').html($.i18n.prop('Drop_Company'));
      $('[data-Drop="3"]').html($.i18n.prop('Drop_Game'));
      $('[data-Drop="4"]').html($.i18n.prop('Drop_ALL'));
      $('[data-Drop="5"]').val($.i18n.prop('Drop_Search'));
      $('[data-Drop="6"]').val($.i18n.prop('Drop_Print'));
      $('[data-Drop="7"]').html($.i18n.prop('Drop_Number'));
      $('[data-Drop="8"]').html($.i18n.prop('Drop_Company'));
      $('[data-Drop="9"]').html($.i18n.prop('Drop_Game'));
      $('[data-Drop="10"]').html($.i18n.prop('Drop_Drop'));
      $('[data-Drop="11"]').html($.i18n.prop('Drop_Net'));
      $('[data-Drop="12"]').html($.i18n.prop('Drop_TOP'));
      $('[data-Drop="13"]').html($.i18n.prop('Drop_BOTTOM'));
      $('[data-Drop="14"]').html($.i18n.prop('Drop_Page'));
      $('[data-Drop="15"]').html($.i18n.prop('Drop_first'));
      $('[data-Drop="16"]').html($.i18n.prop('Drop_previous'));
      $('[data-Drop="17"]').html($.i18n.prop('Drop_next'));
      $('[data-Drop="18"]').html($.i18n.prop('Drop_last'));

      $('[data-result="0"]').html($.i18n.prop('result_Date'));
      $('[data-result="1"]').val($.i18n.prop('result_Search'));
      $('[data-result="2"]').val($.i18n.prop('result_Today'));
      $('[data-result="3"]').val($.i18n.prop('result_Yesterdat'));
      $('[data-result="4"]').val($.i18n.prop('result_Print'));
      $('[data-result="5"]').html($.i18n.prop('result_Bet'));
      $('[data-result="6"]').html($.i18n.prop('result_Draw_Result'));
    }
  });
}
