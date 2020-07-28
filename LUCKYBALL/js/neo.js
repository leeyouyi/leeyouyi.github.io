// let lan = $('#language').find(":selected").val()
//     loadProperties(lan);
    function loadProperties(lan) {
        jQuery.i18n.properties({
        //加载资浏览器语言对应的资源文件
        name: "strings", //资源文件名称
        path: "./i18n_neo/", //资源文件路径
        mode: "map", //用Map的方式使用资源文件中的值
        language: lan,
        //加载成功后设置显示内容
        callback: function () {
          //規則
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
          }
        });
    }

    // $("#language").change(function () {
    //           let lan = $(this).val()
    //           console.log(lan)
    //           loadProperties(lan);
    // });
