loadProperties('zh-CN');

function loadProperties(lan) {
  jQuery.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    path: '../js/i18n_Chris/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: lan,
    callback: function() {
      //加载成功后设置显示内容
      $('[data-title="bet2D"]').html($.i18n.prop('title_bet2D'));
      $('[data-title="bet3D"]').html($.i18n.prop('title_bet3D'));
      $('[data-title="betPL"]').html($.i18n.prop('title_betPL'));
      $('[data-title="betSPE"]').html($.i18n.prop('title_betSPE'));
      $('[data-title="betRun"]').html($.i18n.prop('title_betRun'));
      $('[data-title="betRun2D"]').html($.i18n.prop('title_betRun2D'));
      $('[data-title="betRun3D"]').html($.i18n.prop('title_betRun3D'));
      $('[data-title="company"]').html($.i18n.prop('title_company'));
      $('[data-title="timeLeft"]').html($.i18n.prop('title_timeLeft'));
      $('[data-title="number"]').html($.i18n.prop('title_number'));
      $('[data-title="top"]').html($.i18n.prop('title_top'));
      $('[data-title="bottom"]').html($.i18n.prop('title_bottom'));
      $('[data-title="topBottom"]').html($.i18n.prop('title_topBottom'));
      $('[data-title="roll"]').html($.i18n.prop('title_roll'));
      $('[data-title="roll7"]').html($.i18n.prop('title_roll7'));
      $('[data-title="topRoll7"]').html($.i18n.prop('title_topRoll7'));
      $('[data-title="midRoll7"]').html($.i18n.prop('title_midRoll7'));
      $('[data-title="bottomRoll7"]').html($.i18n.prop('title_bottomRoll7'));
      $('[data-title="market"]').html($.i18n.prop('title_market'));
      $('[data-title="totalAmt"]').html($.i18n.prop('title_totalAmt'));
      $('[data-title="discount"]').html($.i18n.prop('title_discount'));
      $('[data-title="netAmt"]').html($.i18n.prop('title_netAmt'));
      $('[data-title="betAmt"]').html($.i18n.prop('title_betAmt'));
      $('[data-title="special"]').html($.i18n.prop('title_special'));
      $('[data-title="evenOdd"]').html($.i18n.prop('title_evenOdd'));
      $('[data-title="oddEven"]').html($.i18n.prop('title_oddEven'));
      $('[data-title="eveneven"]').html($.i18n.prop('title_eveneven'));
      $('[data-title="oddodd"]').html($.i18n.prop('title_oddodd'));
      $('[data-title="B_even"]').html($.i18n.prop('title_B_even'));
      $('[data-title="S_even"]').html($.i18n.prop('title_S_even'));
      $('[data-title="B_odd"]').html($.i18n.prop('title_B_odd'));
      $('[data-title="S_odd"]').html($.i18n.prop('title_S_odd'));
      $('[data-title="small"]').html($.i18n.prop('title_small'));
      $('[data-title="big"]').html($.i18n.prop('title_big'));
      $('[data-title="odd"]').html($.i18n.prop('title_odd'));
      $('[data-title="even"]').html($.i18n.prop('title_even'));
      $('[data-title="25"]').html($.i18n.prop('title_25'));
      $('[data-title="00"]').html($.i18n.prop('title_00'));
      $('[data-title="zodiac"]').html($.i18n.prop('title_zodiac'));
      $('[data-title="Nozodiac"]').html($.i18n.prop('title_Nozodiac'));
      $('[data-title="swimming"]').html($.i18n.prop('title_swimming'));
      $('[data-title="divine"]').html($.i18n.prop('title_divine'));
      $('[data-title="30"]').html($.i18n.prop('title_30'));
      $('[data-title="2D_spe"]').html($.i18n.prop('title_2D_spe'));
      $('[data-title="number1"]').html($.i18n.prop('title_number1'));
      $('[data-title="number2"]').html($.i18n.prop('title_number2'));
      $('[data-title="numberCard"]').html($.i18n.prop('title_numberCard'));
      $('[data-title="shortKey"]').html($.i18n.prop('title_shortKey'));
      $('[data-title="limit"]').html($.i18n.prop('title_limit'));
      $('[data-check="all"]').html($.i18n.prop('check_all'));
      $('[data-btn="submit"]').val($.i18n.prop('btn_submit'));
      $('[data-btn="clear"]').val($.i18n.prop('btn_clear'));
    }
  });
}
