
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
      $('[data-home="EveryMinute"]').text($.i18n.prop('main_EveryMinute'));
      $('[data-home="ThirdMinute"]').text($.i18n.prop('main_ThirdMinute'));
      $('[data-home="FiveMinute"]').text($.i18n.prop('main_FiveMinute'));

      //history
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
      $('[data-head="history_open1"]').text($.i18n.prop('history_open1'));
      $('[data-head="history_open2"]').text($.i18n.prop('history_open2'));
      $('[data-head="history_open3"]').text($.i18n.prop('history_open3'));
      $('[data-head="history_xyffHis"]').text($.i18n.prop('history_xyffHis'));
      $('[data-head="history_xysfcHis"]').text($.i18n.prop('history_xysfcHis'));
      $('[data-head="history_xywfcHis"]').text($.i18n.prop('history_xywfcHis'));
      $('[data-head="history_close"]').text($.i18n.prop('history_close'));

      //about&&game
      $('[data-about="about_0"]').text($.i18n.prop('about_0'));
      $('[data-about="about"]').text($.i18n.prop('about_about'));
      $('[data-about="aboutList1"]').text($.i18n.prop('about_aboutList1'));
      $('[data-about="aboutList2"]').text($.i18n.prop('about_aboutList2'));
      $('[data-about="aboutList3"]').text($.i18n.prop('about_aboutList3'));
      $('[data-game="game_0"]').text($.i18n.prop('game_0'));
      $('[data-game="background"]').text($.i18n.prop('background_background'));
      $('[data-game="backgroundList1"]').text($.i18n.prop('background_backgroundList1'));
      $('[data-game="backgroundList2"]').text($.i18n.prop('background_backgroundList2'));
      //規則
      $('[data-rules="rules_Rules"]').text($.i18n.prop('rules_Rules'));
      $('[data-rules="rules_Home"]').text($.i18n.prop('rules_Home'));
      $('[data-rules="rules_ffc"]').text($.i18n.prop('rules_ffc'));
      $('[data-rules="rules_sfc"]').text($.i18n.prop('rules_sfc'));
      $('[data-rules="rules_wfc"]').text($.i18n.prop('rules_wfc'));
      $('[data-rules="rules_ffcRules"]').text($.i18n.prop('rules_ffcRules'));
      $('[data-rules="rules_sfcRules"]').text($.i18n.prop('rules_sfcRules'));
      $('[data-rules="rules_wfcRules"]').text($.i18n.prop('rules_wfcRules'));
      $('[data-rules="rules_Betting"]').text($.i18n.prop('rules_Betting'));
      $('[data-rules="rules_Bettingtxt"]').text($.i18n.prop('rules_Bettingtxt'));
      $('[data-rules="rules_Cost"]').text($.i18n.prop('rules_Cost'));
      $('[data-rules="rules_Costtxt"]').text($.i18n.prop('rules_Costtxt'));
      $('[data-rules="rules_WhenToPlay"]').text($.i18n.prop('rules_WhenToPlay'));
      $('[data-rules="rules_WhenToPlaytxt"]').text($.i18n.prop('rules_WhenToPlaytxt'));
      $('[data-rules="rules_HowToPlay"]').text($.i18n.prop('rules_HowToPlay'));
      $('[data-rules="rules_HowToPlaytxt"]').text($.i18n.prop('rules_HowToPlaytxt'));
      $('[data-rules="rules_DrawingResult"]').text($.i18n.prop('rules_DrawingResult'));
      $('[data-rules="rules_DrawingResulttxt"]').text($.i18n.prop('rules_DrawingResulttxt'));
      $('[data-rules="rules_DrawingResulttxt2"]').text($.i18n.prop('rules_DrawingResulttxt2'));
      $('[data-rules="rules_Properties"]').text($.i18n.prop('rules_Properties'));
      $('[data-rules="rules_Propertiestxt"]').text($.i18n.prop('rules_Propertiestxt'));
      $('[data-rules="rules_Propertiestxt2"]').text($.i18n.prop('rules_Propertiestxt2'));
      $('[data-rules="rules_PrizeSettings"]').text($.i18n.prop('rules_PrizeSettings'));
      $('[data-rules="rules_PrizeSettingstxt"]').text($.i18n.prop('rules_PrizeSettingstxt'));
      $('[data-rules="rules_WinningThePrize"]').text($.i18n.prop('rules_WinningThePrize'));
      $('[data-rules="rules_Total"]').text($.i18n.prop('rules_Total'));
      $('[data-rules="rules_Amount"]').text($.i18n.prop('rules_Amount'));
      $('[data-rules="rules_GettingYourPrize"]').text($.i18n.prop('rules_GettingYourPrize'));
      $('[data-rules="rules_GettingYourPrizetxt"]').text($.i18n.prop('rules_GettingYourPrizetxt'));

      //FAQ
      $('[data-FAQ="FAQ_Home"]').text($.i18n.prop('FAQ_Home'));
      $('[data-FAQ="FAQ_Faq"]').text($.i18n.prop('FAQ_Faq'));
      $('[data-FAQ="FAQ_FAQ"]').text($.i18n.prop('FAQ_FAQ'));
      $('[data-FAQ="FAQ_Left0"]').text($.i18n.prop('FAQ_Left0'));
      $('[data-FAQ="FAQ_Left1"]').text($.i18n.prop('FAQ_Left1'));
      $('[data-FAQ="FAQ_Left2"]').text($.i18n.prop('FAQ_Left2'));
      $('[data-FAQ="FAQ_Left3"]').text($.i18n.prop('FAQ_Left3'));
      $('[data-FAQ="FAQ_Left4"]').text($.i18n.prop('FAQ_Left4'));
      $('[data-FAQ="FAQ_Left5"]').text($.i18n.prop('FAQ_Left5'));
      $('[data-FAQ="FAQ_Left6"]').text($.i18n.prop('FAQ_Left6'));
      $('[data-FAQ="FAQ_Left7"]').text($.i18n.prop('FAQ_Left7'));
      $('[data-FAQ="FAQ_Q1"]').text($.i18n.prop('FAQ_Q1'));
      $('[data-FAQ="FAQ_A1"]').text($.i18n.prop('FAQ_A1'));
      $('[data-FAQ="FAQ_Q2"]').text($.i18n.prop('FAQ_Q2'));
      $('[data-FAQ="FAQ_A2"]').text($.i18n.prop('FAQ_A2'));
      $('[data-FAQ="FAQ_Q3"]').text($.i18n.prop('FAQ_Q3'));
      $('[data-FAQ="FAQ_A3"]').text($.i18n.prop('FAQ_A3'));
      $('[data-FAQ="FAQ_Q4"]').text($.i18n.prop('FAQ_Q4'));
      $('[data-FAQ="FAQ_A4"]').text($.i18n.prop('FAQ_A4'));
      $('[data-FAQ="FAQ_Q5"]').text($.i18n.prop('FAQ_Q5'));
      $('[data-FAQ="FAQ_A5"]').text($.i18n.prop('FAQ_A5'));
      $('[data-FAQ="FAQ_Q6"]').text($.i18n.prop('FAQ_Q6'));
      $('[data-FAQ="FAQ_A6"]').text($.i18n.prop('FAQ_A6'));
      $('[data-FAQ="FAQ_Q7"]').text($.i18n.prop('FAQ_Q7'));
      $('[data-FAQ="FAQ_A7"]').text($.i18n.prop('FAQ_A7'));
      $('[data-FAQ="FAQ_Q8"]').text($.i18n.prop('FAQ_Q8'));
      $('[data-FAQ="FAQ_A8"]').text($.i18n.prop('FAQ_A8'));


      //footer
      $('[data-foot="footTxt2"]').text($.i18n.prop('footTxt2'));

    }
  });
}
