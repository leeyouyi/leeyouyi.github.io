

var page = localStorage.getItem('page')
if (!page) {
  localStorage.setItem('page', 'mainTxt')
  page = localStorage.getItem('page')
}
$(document).ready(function () {
  var index = 0
  switch (page) {
    case 'mainTxt':
      index = 0
      break;
    case 'online':
      index = 1
      break;
    case 'number':
      index = 2
      break;
    case 'howPlay':
      index = 3
      break;
    case 'audience':
      index = 4
      break;
    default: 'mainTxt'
      break;
  }
  
  $(`#${page}`).find('img')
  .attr('src', `./images/mobile/menu-2_0${index+1}.png`)

  $.ajax({
    url: `/view/${page}.html`,
    type: 'GET',
    success: function (res) {
      $('#main').html(res)
      getApi()
      if(page === 'online'){
        let script = document.createElement('script');
        script.src = "./js/video.js";
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    },
    error: function (err) {
      console.log(err)
    },
  })
  $("a[rel^='prettyPhoto']").prettyPhoto()

})
$('#menu ul li').mouseenter(function () {
  let index = $('#menu ul li').index($(this)[0])
  $('#menu ul li')
    .eq(index)
    .find('img')
    .attr('src', `./images/mobile/menu-2_0${index + 1}.png`)
})
$('#menu ul li').mouseleave(function () {
  if ($(this).hasClass('active')) return
  let index = $('#menu ul li').index($(this)[0])
  $('#menu ul li')
    .eq(index)
    .find('img')
    .attr('src', `./images/mobile/menu-1_0${index + 1}.png`)
})
$('#menu ul li').click(function () {
  let index = $('#menu ul li').index($(this)[0])
  // console.log(index)
  $('#menu ul li').removeClass('active')
  for (let i = 0; i < 5; i++) {
    $('#menu ul li')
      .eq(i)
      .find('img')
      .attr('src', `./images/mobile/menu-1_0${i + 1}.png`)
  }
  $(this).addClass('active')
  $('#menu ul li')
    .eq(index)
    .find('img')
    .attr('src', `./images/mobile/menu-2_0${index + 1}.png`)
  let id = $(this).find('a').attr('id')
  localStorage.setItem('page', id)
  $.ajax({
    url: `./view/${id}.html`,
    type: 'GET',
    success: function (res) {
      $('#main').html(res)
      if (index === 0) {
        getApi()
      }
      if(index === 1){
        let script = document.createElement('script');
        script.src = "./js/video.js";
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    },
    error: function (err) {
      console.log(err)
    },
  })
})
$('#audience').click(function () {
  let parent = $(this).parent()
  let index = $('#menu ul li').index(parent[0])
  $('#menu ul li').removeClass('active')
  for (let i = 0; i < 5; i++) {
    $('#menu ul li')
      .eq(i)
      .find('img')
      .attr('src', `./images/mobile/menu-1_0${i + 1}.png`)
  }
  parent.addClass('active')
  $('#menu ul li')
    .eq(index)
    .find('img')
    .attr('src', `./images/mobile/menu-2_0${index + 1}.png`)
  localStorage.setItem('page', 'audience')
  $.ajax({
    url: './view/audience.html',
    type: 'GET',
    success: function (res) {
      $('#main').html(res)
    },
    error: function (err) {
      console.log(err)
    },
  })
})

function getApi() {
  $.ajax({
    url: `http://tw57.com/server/v1/lottery`,
    type: 'GET',
    success: function (res) {
      let data = JSON.parse(res)
      // console.log(data)
      ajaxList(data)
    },
    error: function (err) {
      console.log(err)
    },
  })
}
function ajaxList(data) {
  let mapData = data.map(item=>{
    let name =  item.name
    let index = 0
    // console.log(item)
    switch (name) {
      case '大樂透':
        index = 0
        break;
      case '威力彩':
        index = 1
        break;
      case '38樂合彩':
        index = 2
        break;
      case '49樂合彩':
        index = 3
        break;
      case '今彩539':
        index = 4
        break;
      case '39樂合彩':
        index = 5
        break;
      case '3星彩':
        index = 6
        break;
      case '4星彩':
        index = 7
        break;
      case '雙贏彩':
        index = 8
        break;
    
      default:
        break;
    }
    return{
      date:item.date,
      name:item.name,
      num:item.num,
      res:item.res,
      index:index
      // ...item, index
    }
  })
  let sortData = mapData.sort((a,b)=>{
     return a.index - b.index
  })
  // console.log(sortData)
  sortData.forEach((item, index) => {

    let itemAry = []
    let itemAry2 = []
    let className = ''
    let className2 = ''
    if (item.name === '大樂透') {
      itemAry = item.res[0]
      itemAry2 = item.res[1][0]
      itemAry.push(itemAry2)
      className = '.red'
      className2 = '.green'
    } else if (item.name === '威力彩') {
      itemAry = item.res[0]
      itemAry2 = item.res[1][0]
      itemAry.push(itemAry2)
      className = '.green'
      className2 = '.red'
    } else {
      itemAry = item.res[0]
    }
    switch (index) {
      case 2:
        className = '.green'
        break
      case 3:
        className = '.red'
        break
      case 4:
        className = '.yellow'
        break
      case 5:
        className = '.yellow'
        break
      case 6:
        className = '.purple'
        break
      case 7:
        className = '.purple'
        break
      case 8:
        className = '.aqua'
        break
    }
    let obj = {
      num: item.num,
      date: item.date,
      ball: itemAry,
    }
    $('.lotto-no').eq(index).find('.num').text(obj.num)
    $('.lotto-no').eq(index).find('p').eq(1).text(obj.date)

    let ary = obj.ball
    let last = ary.length - 1
    // console.log(ary)
    for (let i = 0; i < ary.length; i++) {
      $('.lotto-ball').eq(index).find(className).eq(i).text(ary[i])
      $('.lotto-ball').eq(index).find(className2).eq(0).text(ary[last])
    }
  })
}
