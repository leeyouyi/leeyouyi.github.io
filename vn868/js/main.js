// i18n
// loadProperties('zh-TW');
// loadProperties('zh-CN');
loadProperties('en');

function loadProperties(lan) {
  jQuery.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    path: './js/i18n/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: lan,
    callback: function () {
      //加载成功后设置显示内容
      $('[data-btn="btnPass"]').val($.i18n.prop('nav_btnPass'));
      $('[data-btn="btnLogout"]').val($.i18n.prop('nav_btnLogout'));
      $('[data-mem="01"]').html($.i18n.prop('mem_BetCredit'));
      $('[data-mem="02"]').html($.i18n.prop('mem_Outstanding'));
      $('[data-marguee="01"]').html($.i18n.prop('nva_marguee'));
      $('[data-nav="01"]').html($.i18n.prop('nav_Betting1'));
      $('[data-nav="02"]').html($.i18n.prop('nav_Running'));
      $('[data-nav="03"]').html($.i18n.prop('nav_BetList'));
      $('[data-nav="04"]').html($.i18n.prop('nav_Statement'));
      $('[data-nav="06"]').html($.i18n.prop('nav_Drop'));
      $('[data-nav="07"]').html($.i18n.prop('nav_Result'));
      $('[data-nav="08"]').html($.i18n.prop('nav_Schedule'));
      $('[data-nav="09"]').html($.i18n.prop('nav_Promotion'));
      $('[data-nav="10"]').html($.i18n.prop('nav_WebRules'));
      $('[data-nav="11"]').html($.i18n.prop('nav_PhoneBetRules'));
      $('[data-nav="12"]').html($.i18n.prop('nav_South'));
      $('[data-nav="13"]').html($.i18n.prop('nav_Middle'));
      $('[data-nav="14"]').html($.i18n.prop('nav_North'));
      $('[data-nav="15"]').html($.i18n.prop('nav_Special'));
      $('[data-nav="16"]').html($.i18n.prop('nav_Standard'));
      $('[data-nav="17"]').html($.i18n.prop('nav_Normal2D'));
      $('[data-nav="18"]').html($.i18n.prop('nav_Normal3D'));

      $('[data-home="01"]').html($.i18n.prop('home_AccountProfile'));
      $('[data-home="02"]').html($.i18n.prop('home_Credit'));
      $('[data-home="03"]').html($.i18n.prop('home_Account'));
      $('[data-home="04"]').html($.i18n.prop('home_Name'));
      $('[data-home="05"]').html($.i18n.prop('home_Nickname'));
      $('[data-home="06"]').html($.i18n.prop('home_LastLoginIP'));
      $('[data-home="07"]').html($.i18n.prop('home_Balance'));
      $('[data-home="08"]').html($.i18n.prop('home_Outstanding'));
      $('[data-home="09"]').html($.i18n.prop('home_GivenCredit'));
      $('[data-home="10"]').html($.i18n.prop('home_BetCredit'));
      $('[data-home="11"]').html($.i18n.prop('home_Company'));
      $('[data-home="12"]').html($.i18n.prop('home_Comm'));
      $('[data-home="13"]').html($.i18n.prop('home_Odds'));
      $('[data-btn="btnConfig"]').val($.i18n.prop('home_Setting'));
      $('[data-btn="btnNkSave"]').val($.i18n.prop('home_Save'));
      $('[data-btn="btnNkCancel"]').val($.i18n.prop('home_Cancel'));

      //Schedule页
      $('[data-sche="title"]').html($.i18n.prop('Sch_title'));
      $('[data-sche="date"]').html($.i18n.prop('Sch_date'));
      $('[data-sche="mon"]').html($.i18n.prop('Sch_mon'));
      $('[data-sche="tue"]').html($.i18n.prop('Sch_tue'));
      $('[data-sche="wed"]').html($.i18n.prop('Sch_wed'));
      $('[data-sche="thu"]').html($.i18n.prop('Sch_thu'));
      $('[data-sche="fri"]').html($.i18n.prop('Sch_fri'));
      $('[data-sche="sat"]').html($.i18n.prop('Sch_sat'));
      $('[data-sche="sun"]').html($.i18n.prop('Sch_sun'));

      //promotion页
      $('[data-promo="title"]').html($.i18n.prop('Pro_title'));

      // Phone_Bet_Rules页
      $('[data-Phone="title"]').html($.i18n.prop('Phone_title'));
      $('[data-Phone="title2"]').html($.i18n.prop('Phone_title2'));
      $('[data-Phone="title3"]').html($.i18n.prop('Phone_title3'));
      $('[data-Phone="method"]').html($.i18n.prop('Phone_method'));
      $('[data-Phone="eg"]').html($.i18n.prop('Phone_eg'));
      $('[data-Phone="bet"]').html($.i18n.prop('Phone_bet'));
      $('[data-Phone="bet2"]').html($.i18n.prop('Phone_bet2'));
      $('[data-Phone="2d1"]').html($.i18n.prop('Phone_2d1'));
      $('[data-Phone="2d2"]').html($.i18n.prop('Phone_2d2'));
      $('[data-Phone="2d3"]').html($.i18n.prop('Phone_2d3'));
      $('[data-Phone="3d1"]').html($.i18n.prop('Phone_3d1'));
      $('[data-Phone="3d2"]').html($.i18n.prop('Phone_3d2'));
      $('[data-Phone="4d1"]').html($.i18n.prop('Phone_4d1'));
      $('[data-Phone="5d1"]').html($.i18n.prop('Phone_5d1'));
      $('[data-Phone="45"]').html($.i18n.prop('Phone_45'));
      $('[data-Phone="345"]').html($.i18n.prop('Phone_345'));
      $('[data-Phone="2345"]').html($.i18n.prop('Phone_2345'));
      $('[data-Phone="12345"]').html($.i18n.prop('Phone_12345'));
      $('[data-Phone="mix"]').html($.i18n.prop('Phone_mix'));
      $('[data-Phone="1234"]').html($.i18n.prop('Phone_1234'));
      $('[data-Phone="1_234"]').html($.i18n.prop('Phone_1_234'));
      $('[data-Phone="12_34"]').html($.i18n.prop('Phone_12_34'));
      $('[data-Phone="title2"]').html($.i18n.prop('Phone_title2'));
      $('[data-Phone="_123"]').html($.i18n.prop('Phone_123'));
      $('[data-Phone="23"]').html($.i18n.prop('Phone_23'));
      $('[data-Phone="123"]').html($.i18n.prop('Phone_123A'));
      $('[data-Phone="0123"]').html($.i18n.prop('Phone_0123'));
      $('[data-Phone="1_23"]').html($.i18n.prop('Phone_1_23'));
      $('[data-Phone="x23"]').html($.i18n.prop('Phone_x23'));
      $('[data-Phone="11_22"]').html($.i18n.prop('Phone_11_22'));
      $('[data-Phone="11_22_33"]').html($.i18n.prop('Phone_11_22_33'));
      $('[data-Phone="pl2"]').html($.i18n.prop('Phone_pl2'));
      $('[data-Phone="pl3"]').html($.i18n.prop('Phone_pl3'));
      $('[data-Phone="pl2_2"]').html($.i18n.prop('Phone_pl2_2'));

      // Web_Rules页
      $('[data-Web="rules"]').html($.i18n.prop('Web_rules'));
      $('[data-Web="playing"]').html($.i18n.prop('Web_playing'));
      $('[data-Web="method"]').html($.i18n.prop('Web_method'));
      $('[data-Web="type"]').html($.i18n.prop('Web_type'));
      $('[data-Web="g_type"]').html($.i18n.prop('Web_g_type'));
      $('[data-Web="number"]').html($.i18n.prop('Web_number'));
      $('[data-Web="winning"]').html($.i18n.prop('Web_winning'));
      $('[data-Web="length"]').html($.i18n.prop('Web_length'));
      $('[data-Web="position"]').html($.i18n.prop('Web_position'));
      $('[data-Web="head"]').html($.i18n.prop('Web_head'));
      $('[data-Web="last"]').html($.i18n.prop('Web_last'));
      $('[data-Web="hlast"]').html($.i18n.prop('Web_hlast'));
      $('[data-Web="roll"]').html($.i18n.prop('Web_roll'));
      $('[data-Web="roll7"]').html($.i18n.prop('Web_roll7'));
      $('[data-Web="top_roll7"]').html($.i18n.prop('Web_top_roll7'));
      $('[data-Web="mid_roll7"]').html($.i18n.prop('Web_mid_roll7'));
      $('[data-Web="bot_roll7"]').html($.i18n.prop('Web_bot_roll7'));
      $('[data-Web="pl2"]').html($.i18n.prop('Web_pl2'));
      $('[data-Web="pl3"]').html($.i18n.prop('Web_pl3'));
      $('[data-Web="2d0"]').html($.i18n.prop('Web_2d0'));
      $('[data-Web="2d1"]').html($.i18n.prop('Web_2d1'));
      $('[data-Web="2d2"]').html($.i18n.prop('Web_2d2'));
      $('[data-Web="2d3"]').html($.i18n.prop('Web_2d3'));
      $('[data-Web="2d4"]').html($.i18n.prop('Web_2d4'));
      $('[data-Web="2d5"]').html($.i18n.prop('Web_2d5'));
      $('[data-Web="2d6"]').html($.i18n.prop('Web_2d6'));
      $('[data-Web="2d7"]').html($.i18n.prop('Web_2d7'));
      $('[data-Web="2d8"]').html($.i18n.prop('Web_2d8'));
      $('[data-Web="2d9"]').html($.i18n.prop('Web_2d9'));
      $('[data-Web="3d0"]').html($.i18n.prop('Web_3d0'));
      $('[data-Web="3d1"]').html($.i18n.prop('Web_3d1'));
      $('[data-Web="3d2"]').html($.i18n.prop('Web_3d2'));
      $('[data-Web="3d3"]').html($.i18n.prop('Web_3d3'));
      $('[data-Web="3d4"]').html($.i18n.prop('Web_3d4'));
      $('[data-Web="3d5"]').html($.i18n.prop('Web_3d5'));
      $('[data-Web="3d6"]').html($.i18n.prop('Web_3d6'));
      $('[data-Web="3d7"]').html($.i18n.prop('Web_3d7'));
      $('[data-Web="3d8"]').html($.i18n.prop('Web_3d8'));
      $('[data-Web="3d9"]').html($.i18n.prop('Web_3d9'));
      $('[data-Web="text1"]').html($.i18n.prop('Web_text1'));
      $('[data-Web="text2"]').html($.i18n.prop('Web_text2'));
      $('[data-Web="text3"]').html($.i18n.prop('Web_text3'));
      $('[data-Web="text4"]').html($.i18n.prop('Web_text4'));
      $('[data-Web="text5"]').html($.i18n.prop('Web_text5'));
      $('[data-Web="text6"]').html($.i18n.prop('Web_text6'));
      $('[data-Web="example"]').html($.i18n.prop('Web_example'));
      $('[data-Web="company"]').html($.i18n.prop('Web_company'));
      $('[data-Web="2dOdds"]').html($.i18n.prop('Web_2dOdds'));
      $('[data-Web="3dOdds"]').html($.i18n.prop('Web_3dOdds'));
      $('[data-Web="4dOdds"]').html($.i18n.prop('Web_4dOdds'));
      $('[data-Web="5dOdds"]').html($.i18n.prop('Web_5dOdds'));
      $('[data-Web="pl2Odds"]').html($.i18n.prop('Web_pl2Odds'));
      $('[data-Web="pl2Odds2"]').html($.i18n.prop('Web_pl2Odds2'));
      $('[data-Web="pl3Odds"]').html($.i18n.prop('Web_pl3Odds'));
      $('[data-Web="result"]').html($.i18n.prop('Web_result'));
      $('[data-Web="mix"]').html($.i18n.prop('Web_mix'));
      $('[data-Web="turnover"]').html($.i18n.prop('Web_turnover'));
      $('[data-Web="multiple"]').html($.i18n.prop('Web_multiple'));
      $('[data-Web="win"]').html($.i18n.prop('Web_win'));
      $('[data-Web="remark"]').html($.i18n.prop('Web_remark'));


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

// $('#tw').click(function () {
//   loadProperties('zh-TW');
//   // shape(usernum)
// });
// $('#cn').click(function () {
//   loadProperties('zh-CN');
//   // shape(usernum)
// });
// $('#en').click(function () {
//   loadProperties('en');
//   // shape(usernum)
// });