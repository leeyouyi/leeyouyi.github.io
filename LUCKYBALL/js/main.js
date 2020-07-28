var curNum=0;
var picArray = Array('../images/banner1.png', '../images/banner2.png');
var picLinkArray = Array('about/rules.html', 'history.html', 'index.html');

function showPic(num){
	markDot();
	// $('.banner').css('background-image','url('+picArray[num]+')');
	$('.banner img').attr('src',picArray[num]);
}
function autoShowPic(){
	curNum++;
	if(curNum>picArray.length-1)
		curNum=0;

    $('.banner img').fadeOut(0,
        function() {
            showPic(curNum);
            $('.banner img').fadeIn(1000);
        });
}
function markDot(){
    var html = '';
    // $('#imgPlay').css('left', $(document).width() / 2 + 420);
	$('#imgPlay').html('');
	
	for(var s=0;s<picArray.length;s++) {
	    html += '<span ';
		if(s==curNum)
			html+='class="on" ';
		html+='onClick="onClickPic('+s+');"><a href="'+picLinkArray[s]+'"></a></span>';
	}
	$('#imgPlay').html(html);
	$(".banner").unbind();
	// $('.banner').click(function(){
	// 	window.open(picLinkArray[curNum],'');
	// });
}
function onClickPic(num){
	clearTimeout(showPicInterval);
	curNum=num;
	showPic(num);
	stePicInterval();
}
function stePicInterval(){
	showPicInterval = setInterval('autoShowPic()',8000);
}

$(document).ready(function () {
	// $('.banner').css('background-image', 'url(' + picArray[0] + ')');
	$('.banner img').attr('src',picArray[0]);
  markDot();
  stePicInterval();
});

