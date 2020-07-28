


let language = $('#language').find(":selected").val()
let navigator_language = navigator.language || language
let lan = localStorage.getItem('language') ;

if(!lan){
    localStorage.setItem('language',navigator_language);
    lan = localStorage.getItem('language')
}
$('#language').val(navigator_language)
$(`#language option[value=${lan}]`).attr('selected', 'selected');
loadProperties_header(lan);
loadProperties(lan);

function loadProperties_header(lan) {
    jQuery.i18n.properties({
    //加载资浏览器语言对应的资源文件
    name: "strings", //资源文件名称
    path: "./i18n/header/", //资源文件路径
    mode: "map", //用Map的方式使用资源文件中的值
    language: lan,
    //加载成功后设置显示内容
    callback: function () {
      // header
        $('[data-head="home"]').text($.i18n.prop('head_home'));
        $('[data-head="about"]').text($.i18n.prop('head_about'));
        $('[data-head="background"]').text($.i18n.prop('head_background'));
        $('[data-head="rules"]').text($.i18n.prop('head_rules'));
        $('[data-head="history"]').text($.i18n.prop('head_history'));
        // $('[data-head="lottery"]').text($.i18n.prop('head_lottery'));
        // $('[data-head="minute"]').text($.i18n.prop('head_minute'));
        // $('[data-head="three"]').text($.i18n.prop('head_three'));
        // $('[data-head="five"]').text($.i18n.prop('head_five'));
        // footer
        $('[data-foot="foot1"]').text($.i18n.prop('foot1'));
        $('[data-foot="foot2"]').text($.i18n.prop('foot2'));
        $('[data-foot="foot3"]').text($.i18n.prop('foot3'));
        $('[data-foot="foot4"]').text($.i18n.prop('foot4'));
        $('[data-foot="footTxt1"]').text($.i18n.prop('footTxt1'));
        $('[data-foot="footTxt2"]').text($.i18n.prop('footTxt2'));

      }
    });
}

$("#language").change(function () {
          let lan = $(this).val()
          console.log(lan)
          localStorage.setItem('language',lan)
          loadProperties_header(lan);
          loadProperties(lan);
});

$('#nav-opener').click(function(){
	let left = $('#nav-drop').css('left')
	if(left !== '0px'){
		$('#nav-drop').css({
			'left':'0'
		})
		$('#nav-opener span').css({
			'top': '10px'
		})
		$('#nav-opener span').eq(0).css({
			'transform': 'rotate(45deg)'
		})
		$('#nav-opener span').eq(1).css({
			'transform': 'rotate(-45deg)'
		})
		$('#nav-opener span').eq(2).css({
			'opacity': '0'
		})
	}else{
		$('#nav-drop').css({
			'left':'100%'
		})
		$('#nav-opener span').css({
			'transform': 'rotate(0deg)'
		})
		$('#nav-opener span').eq(0).css({
			'top': '23px'
		})
		$('#nav-opener span').eq(1).css({
			'top': '12px'
		})
		$('#nav-opener span').eq(2).css({
			'top': '1px',
			'opacity': '1'
		})

	}


})