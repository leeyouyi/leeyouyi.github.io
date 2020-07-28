// i18n
// loadProperties('zh-TW');
// loadProperties('zh-CN');
// loadProperties('vn');
loadProperties('en');


function loadProperties(lan) {
  jQuery.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: 'strings', //资源文件名称
    // path: './js/i18n-jeremy/', //资源文件路径
    path: '../js/i18n-jeremy/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: lan,
    callback: function () {
      //加载成功后设置显示内容
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

      //Roll7頁      
      $('[data-Roll7="betroll"]').html($.i18n.prop('Roll_betroll'));
      $('[data-Roll7="com"]').html($.i18n.prop('Roll_com'));
      $('[data-Roll7="wildcard"]').html($.i18n.prop('Roll_wildcard'));
      $('[data-Roll7="key"]').html($.i18n.prop('Roll_key'));
      $('[data-Roll7="time"]').html($.i18n.prop('Roll_time'));
      $('[data-Roll7="number"]').html($.i18n.prop('Roll_number'));
      $('[data-Roll7="top"]').html($.i18n.prop('Roll_top'));
      $('[data-Roll7="bottom"]').html($.i18n.prop('Roll_bottom'));
      $('[data-Roll7="topbot"]').html($.i18n.prop('Roll_topbot'));
      $('[data-Roll7="roll7"]').html($.i18n.prop('Roll_roll7'));
      $('[data-Roll7="Roll_toproll7"]').html($.i18n.prop('Roll_toproll7'));
      $('[data-Roll7="Roll_midroll7"]').html($.i18n.prop('Roll_midroll7'));
      $('[data-Roll7="Roll_botroll7"]').html($.i18n.prop('Roll_botroll7'));
      $('[data-Roll7="Roll_all"]').html($.i18n.prop('Roll_all'));
      $('[data-Roll7="Roll_place"]').html($.i18n.prop('Roll_place'));
      $('[data-Roll7="Roll_total"]').html($.i18n.prop('Roll_total'));
      $('[data-Roll7="Roll_net"]').html($.i18n.prop('Roll_net'));
      $('[data-Roll7="Roll_place2"]').html($.i18n.prop('Roll_place2'));

      //Parlay 頁
      $('[data-Parlay="Parlay_bet"]').html($.i18n.prop('Parlay_bet'));
      $('[data-Parlay="Parlay_com"]').html($.i18n.prop('Parlay_com'));
      $('[data-Parlay="Parlay_time"]').html($.i18n.prop('Parlay_time'));
      $('[data-Parlay="Parlay_num1"]').html($.i18n.prop('Parlay_num1'));
      $('[data-Parlay="Parlay_num2"]').html($.i18n.prop('Parlay_num2'));
      $('[data-Parlay="Parlay_num3"]').html($.i18n.prop('Parlay_num3'));
      $('[data-Parlay="Parlay_amount"]').html($.i18n.prop('Parlay_amount'));
      $('[data-Parlay="Parlay_all"]').html($.i18n.prop('Parlay_all'));
      $('[data-Parlay="Parlay_total"]').html($.i18n.prop('Parlay_total'));
      $('[data-Parlay="Parlay_net"]').html($.i18n.prop('Parlay_net'));
      $('[data-Parlay="Parlay_place"]').html($.i18n.prop('Parlay_place'));
      $('[data-Parlay="Parlay_place2"]').html($.i18n.prop('Parlay_place2'));

      //Special_bet2 頁
      $('[data-SpecBet2="SpecBet2_bet"]').html($.i18n.prop('SpecBet2_bet'));
      $('[data-SpecBet2="SpecBet2_com"]').html($.i18n.prop('SpecBet2_com'));
      $('[data-SpecBet2="SpecBet2_key"]').html($.i18n.prop('SpecBet2_key'));
      $('[data-SpecBet2="SpecBet2_time"]').html($.i18n.prop('SpecBet2_time'));
      $('[data-SpecBet2="SpecBet2_num"]').html($.i18n.prop('SpecBet2_num'));
      $('[data-SpecBet2="SpecBet2_top"]').html($.i18n.prop('SpecBet2_top'));
      $('[data-SpecBet2="SpecBet2_bottom"]').html($.i18n.prop('SpecBet2_bottom'));
      $('[data-SpecBet2="SpecBet2_topbot"]').html($.i18n.prop('SpecBet2_topbot'));
      $('[data-SpecBet2="SpecBet2_roll"]').html($.i18n.prop('SpecBet2_roll'));
      $('[data-SpecBet2="SpecBet2_all"]').html($.i18n.prop('SpecBet2_all'));
      $('[data-SpecBet2="SpecBet2_total"]').html($.i18n.prop('SpecBet2_total'));
      $('[data-SpecBet2="SpecBet2_net"]').html($.i18n.prop('SpecBet2_net'));
      $('[data-SpecBet2="SpecBet2_place"]').html($.i18n.prop('SpecBet2_place'));
      $('[data-SpecBet2="SpecBet2_big"]').html($.i18n.prop('SpecBet2_big'));
      $('[data-SpecBet2="SpecBet2_small"]').html($.i18n.prop('SpecBet2_small'));
      $('[data-SpecBet2="SpecBet2_odd"]').html($.i18n.prop('SpecBet2_odd'));
      $('[data-SpecBet2="SpecBet2_even"]').html($.i18n.prop('SpecBet2_even'));
      $('[data-SpecBet2="SpecBet2_in"]').html($.i18n.prop('SpecBet2_in'));
      $('[data-SpecBet2="SpecBet2_out"]').html($.i18n.prop('SpecBet2_out'));
      $('[data-SpecBet2="SpecBet2_small_odd"]').html($.i18n.prop('SpecBet2_small_odd'));
      $('[data-SpecBet2="SpecBet2_small_even"]').html($.i18n.prop('SpecBet2_small_even'));
      $('[data-SpecBet2="SpecBet2_big_odd"]').html($.i18n.prop('SpecBet2_big_odd'));
      $('[data-SpecBet2="SpecBet2_big_even"]').html($.i18n.prop('SpecBet2_big_even'));
      $('[data-SpecBet2="SpecBet2_odd_odd"]').html($.i18n.prop('SpecBet2_odd_odd'));
      $('[data-SpecBet2="SpecBet2_even_even"]').html($.i18n.prop('SpecBet2_even_even'));
      $('[data-SpecBet2="SpecBet2_odd_even"]').html($.i18n.prop('SpecBet2_odd_even'));
      $('[data-SpecBet2="SpecBet2_even_odd"]').html($.i18n.prop('SpecBet2_even_odd'));
      $('[data-SpecBet2="SpecBet2_zodiac"]').html($.i18n.prop('SpecBet2_zodiac'));
      $('[data-SpecBet2="SpecBet2_nozodiac"]').html($.i18n.prop('SpecBet2_nozodiac'));
      $('[data-SpecBet2="SpecBet2_swimming"]').html($.i18n.prop('SpecBet2_swimming'));
      $('[data-SpecBet2="SpecBet2_divine"]').html($.i18n.prop('SpecBet2_divine'));
      $('[data-SpecBet2="SpecBet2_place2"]').html($.i18n.prop('SpecBet2_place2'));

      //Special_bet3 頁
      $('[data-SpecBet3="SpecBet3_bet"]').html($.i18n.prop('SpecBet3_bet'));
      $('[data-SpecBet3="SpecBet3_com"]').html($.i18n.prop('SpecBet3_com'));
      $('[data-SpecBet3="SpecBet3_time"]').html($.i18n.prop('SpecBet3_time'));
      $('[data-SpecBet3="SpecBet3_spec"]').html($.i18n.prop('SpecBet3_spec'));
      $('[data-SpecBet3="SpecBet3_place"]').html($.i18n.prop('SpecBet3_place'));
      $('[data-SpecBet3="SpecBet3_num"]').html($.i18n.prop('SpecBet3_num'));
      $('[data-SpecBet3="SpecBet3_top"]').html($.i18n.prop('SpecBet3_top'));
      $('[data-SpecBet3="SpecBet3_bottom"]').html($.i18n.prop('SpecBet3_bottom'));
      $('[data-SpecBet3="SpecBet3_market"]').html($.i18n.prop('SpecBet3_market'));
      $('[data-SpecBet3="SpecBet3_total"]').html($.i18n.prop('SpecBet3_total'));
      $('[data-SpecBet3="SpecBet3_commidis"]').html($.i18n.prop('SpecBet3_commidis'));
      $('[data-SpecBet3="SpecBet3_net"]').html($.i18n.prop('SpecBet3_net'));
      $('[data-SpecBet3="SpecBet3_even_odd"]').html($.i18n.prop('SpecBet3_even_odd'));
      $('[data-SpecBet3="SpecBet3_odd_even"]').html($.i18n.prop('SpecBet3_odd_even'));
      $('[data-SpecBet3="SpecBet3_even_even"]').html($.i18n.prop('SpecBet3_even_even'));
      $('[data-SpecBet3="SpecBet3_odd_odd"]').html($.i18n.prop('SpecBet3_odd_odd'));
      $('[data-SpecBet3="SpecBet3_big_even"]').html($.i18n.prop('SpecBet3_big_even'));
      $('[data-SpecBet3="SpecBet3_small_even"]').html($.i18n.prop('SpecBet3_small_even'));
      $('[data-SpecBet3="SpecBet3_big_odd"]').html($.i18n.prop('SpecBet3_big_odd'));
      $('[data-SpecBet3="SpecBet3_small_odd"]').html($.i18n.prop('SpecBet3_small_odd'));
      $('[data-SpecBet3="SpecBet3_50s"]').html($.i18n.prop('SpecBet3_50s'));
      $('[data-SpecBet3="SpecBet3_50b"]').html($.i18n.prop('SpecBet3_50b'));
      $('[data-SpecBet3="SpecBet3_odd"]').html($.i18n.prop('SpecBet3_odd'));
      $('[data-SpecBet3="SpecBet3_even"]').html($.i18n.prop('SpecBet3_even'));
      $('[data-SpecBet3="SpecBet3_from25"]').html($.i18n.prop('SpecBet3_from25'));
      $('[data-SpecBet3="SpecBet3_from00"]').html($.i18n.prop('SpecBet3_from00'));
      $('[data-SpecBet3="SpecBet3_zodiac"]').html($.i18n.prop('SpecBet3_zodiac'));
      $('[data-SpecBet3="SpecBet3_nozodiac"]').html($.i18n.prop('SpecBet3_nozodiac'));
      $('[data-SpecBet3="SpecBet3_swimming"]').html($.i18n.prop('SpecBet3_swimming'));
      $('[data-SpecBet3="SpecBet3_divine"]').html($.i18n.prop('SpecBet3_divine'));
      $('[data-SpecBet3="SpecBet3_from30"]').html($.i18n.prop('SpecBet3_from30'));
      $('[data-SpecBet3="SpecBet3_allt"]').html($.i18n.prop('SpecBet3_allt'));
      $('[data-SpecBet3="SpecBet3_all_eodd"]').html($.i18n.prop('SpecBet3_all_eodd'));
      $('[data-SpecBet3="SpecBet3_all_odde"]').html($.i18n.prop('SpecBet3_all_odde'));
      $('[data-SpecBet3="SpecBet3_all_evev"]').html($.i18n.prop('SpecBet3_all_evev'));
      $('[data-SpecBet3="SpecBet3_all_odod"]').html($.i18n.prop('SpecBet3_all_odod'));
      $('[data-SpecBet3="SpecBet3_all_bige"]').html($.i18n.prop('SpecBet3_all_bige'));
      $('[data-SpecBet3="SpecBet3_all_smalle"]').html($.i18n.prop('SpecBet3_all_smalle'));
      $('[data-SpecBet3="SpecBet3_all_bigo"]').html($.i18n.prop('SpecBet3_all_bigo'));
      $('[data-SpecBet3="SpecBet3_all_smallo"]').html($.i18n.prop('SpecBet3_all_smallo'));
      $('[data-SpecBet3="SpecBet3_all_50s"]').html($.i18n.prop('SpecBet3_all_50s'));
      $('[data-SpecBet3="SpecBet3_all_50b"]').html($.i18n.prop('SpecBet3_all_50b'));
      $('[data-SpecBet3="SpecBet3_all_odd"]').html($.i18n.prop('SpecBet3_all_odd'));
      $('[data-SpecBet3="SpecBet3_all_even"]').html($.i18n.prop('SpecBet3_all_even'));
      $('[data-SpecBet3="SpecBet3_all_from25"]').html($.i18n.prop('SpecBet3_all_from25'));
      $('[data-SpecBet3="SpecBet3_all_from00"]').html($.i18n.prop('SpecBet3_all_from00'));
      $('[data-SpecBet3="SpecBet3_all_zodiac"]').html($.i18n.prop('SpecBet3_all_zodiac'));
      $('[data-SpecBet3="SpecBet3_all_nozodiac"]').html($.i18n.prop('SpecBet3_all_nozodiac'));
      $('[data-SpecBet3="SpecBet3_all_swim"]').html($.i18n.prop('SpecBet3_all_swim'));
      $('[data-SpecBet3="SpecBet3_all_divine"]').html($.i18n.prop('SpecBet3_all_divine'));
      $('[data-SpecBet3="SpecBet3_all_from30"]').html($.i18n.prop('SpecBet3_all_from30'));
      $('[data-SpecBet3="SpecBet3_allf"]').html($.i18n.prop('SpecBet3_allf'));
      $('[data-SpecBet3="SpecBet3_2dspec"]').html($.i18n.prop('SpecBet3_2dspec'));
      $('[data-SpecBet3="SpecBet3_roll"]').html($.i18n.prop('SpecBet3_roll'));
      $('[data-SpecBet3="SpecBet3_num1"]').html($.i18n.prop('SpecBet3_num1'));
      $('[data-SpecBet3="SpecBet3_num2"]').html($.i18n.prop('SpecBet3_num2'));
      $('[data-SpecBet3="SpecBet3_2d_all"]').html($.i18n.prop('SpecBet3_2d_all'));

      //Standard_bet2 頁
      $('[data-StandBet2="Stand_bet2_bet"]').html($.i18n.prop('Stand_bet2_bet'));
      $('[data-StandBet2="Stand_bet2_com"]').html($.i18n.prop('Stand_bet2_com'));
      $('[data-StandBet2="Stand_bet2_wildcard"]').html($.i18n.prop('Stand_bet2_wildcard'));
      $('[data-StandBet2="Stand_bet2_key"]').html($.i18n.prop('Stand_bet2_key'));
      $('[data-StandBet2="Stand_bet2_time"]').html($.i18n.prop('Stand_bet2_time'));
      $('[data-StandBet2="Stand_bet2_place"]').html($.i18n.prop('Stand_bet2_place'));
      $('[data-StandBet2="Stand_bet2_num"]').html($.i18n.prop('Stand_bet2_num'));
      $('[data-StandBet2="Stand_bet2_top"]').html($.i18n.prop('Stand_bet2_top'));
      $('[data-StandBet2="Stand_bet2_bottom"]').html($.i18n.prop('Stand_bet2_bottom'));
      $('[data-StandBet2="Stand_bet2_topbot"]').html($.i18n.prop('Stand_bet2_topbot'));
      $('[data-StandBet2="Stand_bet2_roll"]').html($.i18n.prop('Stand_bet2_roll'));
      $('[data-StandBet2="Stand_bet2_all"]').html($.i18n.prop('Stand_bet2_all'));
      $('[data-StandBet2="Stand_bet2_total"]').html($.i18n.prop('Stand_bet2_total'));
      $('[data-StandBet2="Stand_bet2_net"]').html($.i18n.prop('Stand_bet2_net'));
      $('[data-StandBet2="Stand_bet2_all1"]').html($.i18n.prop('Stand_bet2_all1'));
      $('[data-StandBet2="Stand_bet2_all2"]').html($.i18n.prop('Stand_bet2_all2'));
      $('[data-StandBet2="Stand_bet2_all3"]').html($.i18n.prop('Stand_bet2_all3'));
      $('[data-StandBet2="Stand_bet2_all4"]').html($.i18n.prop('Stand_bet2_all4'));
      $('[data-StandBet2="Stand_bet2_all5"]').html($.i18n.prop('Stand_bet2_all5'));
      $('[data-StandBet2="Stand_bet2_all6"]').html($.i18n.prop('Stand_bet2_all6'));
      $('[data-StandBet2="Stand_bet2_all7"]').html($.i18n.prop('Stand_bet2_all7'));
      $('[data-StandBet2="Stand_bet2_all8"]').html($.i18n.prop('Stand_bet2_all8'));
      $('[data-StandBet2="Stand_bet2_all9"]').html($.i18n.prop('Stand_bet2_all9'));
      $('[data-StandBet2="Stand_bet2_all10"]').html($.i18n.prop('Stand_bet2_all10'));
      $('[data-StandBet2="Stand_bet2_place2"]').html($.i18n.prop('Stand_bet2_place2'));

      //Normal 2D_Bet2 頁
      $('[data-Normal_2D="Normal_2D_bet"]').html($.i18n.prop('Normal_2D_bet'));
      $('[data-Normal_2D="Normal_2D_com"]').html($.i18n.prop('Normal_2D_com'));
      $('[data-Normal_2D="Normal_2D_key"]').html($.i18n.prop('Normal_2D_key'));
      $('[data-Normal_2D="Normal_2D_time"]').html($.i18n.prop('Normal_2D_time'));
      $('[data-Normal_2D="Normal_2D_title"]').html($.i18n.prop('Normal_2D_title'));
      $('[data-Normal_2D="Normal_2D_place"]').html($.i18n.prop('Normal_2D_place'));

      //Normal 2D_Bet2 頁
      $('[data-Normal_3D="Normal_3D_bet"]').html($.i18n.prop('Normal_3D_bet'));
      $('[data-Normal_3D="Normal_3D_com"]').html($.i18n.prop('Normal_3D_com'));
      $('[data-Normal_3D="Normal_3D_key"]').html($.i18n.prop('Normal_3D_key'));
      $('[data-Normal_3D="Normal_3D_time"]').html($.i18n.prop('Normal_3D_time'));
      $('[data-Normal_3D="Normal_3D_title"]').html($.i18n.prop('Normal_3D_title'));
      $('[data-Normal_3D="Normal_3D_Hundred"]').html($.i18n.prop('Normal_3D_Hundred'));
      $('[data-Normal_3D="Normal_3D_place"]').html($.i18n.prop('Normal_3D_place'));
      






      // $('[data-len="06"]').html(userTxt);

    }
  });
}

// $('#tw').click(function () {
//   loadProperties('zh-TW');
//   // shape(usernum)
// });
$('#cn').click(function () {
  console.log('cn');
  loadProperties('zh-CN');
  // shape(usernum)
});
$('#en').click(function () {
  console.log('en');
  loadProperties('en');
  // shape(usernum)
});
$('#vn').click(function () {
  console.log('vn');
  loadProperties('vn');
  // shape(usernum)
});