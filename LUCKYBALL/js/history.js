// 切換頁面彩種
$("#ffc_his").click(function () {   //分分彩
  $(".content1").css("display","block");
  $(".content2").css("display","none");
  $(".content3").css("display","none");
});

$("#sfc_his").click(function () {   //三分彩
  $(".content2").css("display","block");
  $(".content1").css("display","none");
  $(".content3").css("display","none");
});

$("#wfc_his").click(function () {   //五分彩
  $(".content3").css("display","block");
  $(".content1").css("display","none");
  $(".content2").css("display","none");
});

let title = document.querySelectorAll('.his_button li')
for (let i = 0; i < title.length; i++) {
  title[i].addEventListener('click', function () {
    for (let j = 0; j < title.length; j++) {
      title[j].className = 'hisbtn'
    }
    this.className = 'hisbtn click'
  })
}


// 過去歷史記錄
const past1 = document.querySelector('.past1'); // Past XYFF History 視窗
const open1 = document.querySelector('.openPast1'); //Past XYFF Open
const close1 = document.querySelector('.closePast1'); //Past XYFF Close
const past2 = document.querySelector('.past2'); // Past XYFF History 視窗
const open2 = document.querySelector('.openPast2'); //Past XYFF Open
const close2 = document.querySelector('.closePast2'); //Past XYFF Close
const past3 = document.querySelector('.past3'); // Past XYFF History 視窗
const open3 = document.querySelector('.openPast3'); //Past XYFF Open
const close3 = document.querySelector('.closePast3'); //Past XYFF Close

open1.onclick = function(){   //分分彩
  console.log('open one');
  passHistory(EveryMinute,0,600,pa1);
  past1.style.display = 'block';
  past1.classList.add('wow', 'bounceInUp');
  new WOW().init();
}

close1.onclick = function(){
  console.log('close one');
  past1.classList.remove('wow', 'bounceInUp');
  $('.past1').fadeOut(1000);
  new WOW().init();
}

open2.onclick = function(){   //三分彩
  console.log('open two');
  passHistory(ThirdMinute,0,200,pa2);
  past2.style.display = 'block';
  past2.classList.add('wow', 'bounceInUp');
  new WOW().init();
}

close2.onclick = function(){
  console.log('close two');
  past2.classList.remove('wow', 'bounceInUp');
  $('.past2').fadeOut(1000);
  new WOW().init();
}

open3.onclick = function(){   //五分彩
  console.log('open three');
  passHistory(FiveMinute,0,120,pa3);
  past3.style.display = 'block';
  past3.classList.add('wow', 'bounceInUp');
  new WOW().init();
}

close3.onclick = function(){
  console.log('close three');
  past3.classList.remove('wow', 'bounceInUp');
  $('.past3').fadeOut(1000);
  new WOW().init();
}
// passHistory(EveryMinute,0,600)