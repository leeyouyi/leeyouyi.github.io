// loadProperties('zh-TW');
// loadProperties('zh-CN');
// loadProperties('en');
function loadProperties(lan) {
  jQuery.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    path: './i18n/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: lan,
    callback: function () {
      //加载成功后设置显示内容
      $('[data-candy="gameTime"]').html($.i18n.prop('title_betTime'));
      // 未登錄才能改變登錄狀態
      // if(!login.loginStatus) {
        // console.log('目前未登錄');
        $('[data-candy="login_state"]').html($.i18n.prop('login_state'));
      // } 
      $('[data-candy="bet_amount"]').html($.i18n.prop('bet_amount'));
      $('[data-candy="bet_confirm"]').html($.i18n.prop('bet_confirm'));
      $('[data-candy="bet_remark"]').html($.i18n.prop('bet_remark'));
      $('[data-candy="bet_lottery"]').html($.i18n.prop('bet_lottery'));
      $('[data-candy="title_trend"]').html($.i18n.prop('title_trend'));
      $('[data-candy="bet_betting"]').html($.i18n.prop('bet_betting'));
      $('[data-candy="title_betting"]').html($.i18n.prop('title_betting'));
      $('[data-candy="one_Odds"]').html($.i18n.prop('one_Odds'));
      $('[data-candy="two_Odds"]').html($.i18n.prop('two_Odds'));
      $('[data-candy="thr_Odds"]').html($.i18n.prop('thr_Odds'));
      $('[data-candy="fur_Odds"]').html($.i18n.prop('fur_Odds'));
      $('[data-candy="fiv_Odds"]').html($.i18n.prop('fiv_Odds'));

      $('[data-candy="one_mOdds"]').html($.i18n.prop('one_mOdds'));
      $('[data-candy="two_mOdds"]').html($.i18n.prop('two_mOdds'));
      $('[data-candy="thr_mOdds"]').html($.i18n.prop('thr_mOdds'));
      $('[data-candy="fur_mOdds"]').html($.i18n.prop('fur_mOdds'));
      $('[data-candy="fiv_mOdds"]').html($.i18n.prop('fiv_mOdds'));

    }
  });
}
