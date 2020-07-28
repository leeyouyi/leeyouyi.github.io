
$(document).ready(function(){
    getfirst('大樂透')
    inputHtml('大樂透',6)

});

function typeNum(val){
  let txt = ''
  let num = null
  switch (val) {
    case '0':
      txt = '請選擇遊戲'
      break;
    case '1':
      txt = '威力彩'
      num = 6
      break;
    case '2':
      txt = '大樂透'
      num = 6
      break;    
    case '5':
      txt = '今彩539'
      num = 5
      break; 
    case '12':
      txt = '雙贏彩'
      num = 12
      break; 
    case '6':
      txt = '3星彩'
      num = 3
      break; 
    case '7':
      txt = '4星彩'
      num = 4
      break; 
    case '4':
      txt = '38樂合彩'
      num = 6
      break; 
    case '3':
      txt = '49樂合彩'
      num = 6
      break; 
    case '10':
      txt = '39樂合彩'
      num = 5
      break; 
  }
  return {
    txt:txt,
    num:num
  }
}

$('#select').change(function(){
  let val = $(this).val()
  let name = typeNum(val).txt
  let num = typeNum(val).num
  getfirst(name)
  $('#titleTxt').text(name)
  inputHtml(name,num)
})
function inputHtml(name,num){
  
  let html = ''
  html +=` 
      <td colspan="1" class="td_w width100 historyTd">
        <input class="width80" name="num" type="text" />
      </td>
      <td colspan="1" class="td_w width100">
        <input class="width80" name="date" type="text" />
      </td>
      `
    for (let i = 0; i < num; i++) {
      html += `
      <td class="td_w award">
        <input  class="width40"  name="ball${i}" type="text" />
      </td>
      `
      }
    if(name === '大樂透' || name === '威力彩'){
      html += `
      <td class="td_w width100">
        <input  class="width40"  name="special" type="text" />
      </td>
      `
    }
   
    $('.historyTr').html(html)
    let display = ''
    let colspan = ''
    if(name === '大樂透'){
      display = 'block'
      colspan = '6'
      $('.awardTitle').text('獎號')
      $('.special').text('特別號')
    }else if( name === '威力彩'){
      display = 'block'
      colspan = '6'
      $('.awardTitle').text('第一區')
      $('.special').text('第二區')
    }else if(name === '3星彩'){
      display = 'none'
      colspan = '3'
      $('.awardTitle').text('獎號')
    }else{
      display = 'none'
      colspan = '5'
      $('.awardTitle').text('獎號')
    }
    $('.special').css({
      'display':display
    })
    $('#awardID').attr('colspan',colspan)
}
var Account = 'admin'
var PassWord = 'elybkcmkijxburkbgfpe'

$('#submit').click(function(){
  let account =$('#account').val()
  let password =$('#password').val()
  if(account === Account && password === PassWord){
    $('#Mask').hide()
    $('#admin').show()
  }else{
    alert('帳號或密碼錯誤')
  }
  $('#account').val('')
  $('#password').val('')
})

function getfirst(type) {
  $.ajax({
    url: `http://tw57.com/server/v1/lottery`,
    type: 'GET',
    success: function (res) {
      let data = JSON.parse(res)
      // console.log(data)
      data.forEach(item => {
        if(item.name === type){
          let ary = [item]
          getType(ary)
        }
      });
    },
    error: function (err) {
      console.log(err)
    },
  })
}
function getType(data){

  $('#historyBox').empty()
  let html =''
     html = `
     <table class="table_org td_hm">
      <tbody id="historyTbody">
        <tr>
          <td colspan="1" class="td_org2 width100 historyTd">
            期別
          </td>
          <td colspan="1" class="td_org2 width100">
            開獎日
          </td>
          <td colspan="6" class="td_org2 award awardTitle" id="award">
            獎號
          </td>
          <td colspan="1" class="td_org2 width100 special" id="special">
            特別號
          </td>
        </tr> 
      </tbody>
    </table>

    `

      $('#historyBox').html(html)

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name
        let num = data[i].num
        let date = data[i].date
        let str = date.substring( 0 , 4 )
        let str2 = date.substring( 4 , date.length)
        let str3 =  String(Number(str) - 1911) 
        let str4 = str3 + str2
        let ary =[]
        let special =''
        // console.log(ary)
        if(name === '大樂透'){
          ary = data[i].res[0]
          special =  data[0].res[1][0]
        }else if( name === '威力彩'){
          ary = data[i].res[0]
          special =  data[0].res[1][0]
        }else{
          ary = data[i].res[0]
        }

        setHtml(name,num,str4,ary,special)
      }
}
function setHtml(name,num,date,ary,special){
  let html =''

    html = '<tr class="historyTr">'
  
    html += `
    <td colspan="1" class="td_w width100 historyTd">
      <span id="historyNum">${num}</span>
    `
    html +=`
    <td colspan="1" class="td_w width100">
      <span id="historyNum">${date}</span>
    `
    for (let i = 0; i < ary.length; i++) {
    html += `
    <td class="td_w award">
          <span>${ary[i]}</span>
    </td>`
    }
    if(name ==='大樂透' || name ==='威力彩' ){
      html += `
        <td class="td_w width100">
              <span>${special}</span>
              
        </td>`
        
    }

    html += `</tr>`

      $('#historyTbody').append(html)
    
    let display = ''
    let colspan = ''
    if(name === '大樂透'){
      display = 'block'
      colspan = '6'
      $('.awardTitle').text('獎號')
      $('.special').text('特別號')
    }else if( name === '威力彩'){
      display = 'block'
      colspan = '6'
      $('.awardTitle').text('第一區')
      $('.special').text('第二區')
    }else{
      display = 'none'
      colspan = '5'
      $('.awardTitle').text('獎號')
    }
    $('.special').css({
      'display':display
    })
    $('#award').attr('colspan',colspan)
  
}

$('#butotn').click(function(){
  let yes = confirm('您確認修改？')
  if (yes) {
    let val = $('#select').val()
    let amount = typeNum(val).num
    let num = $('input[name="num"').val()
    let name = typeNum(val).txt
    let date = $('input[name="date"').val()
    let special = $('input[name="special"').val()
    let regex = /^[0-9\s]*$/;
    let newdate = date.replace(/\//g,'')
    let ballAry =[]
    let year = Number(date.substring(0,3)) +1911
    let mon = date.substring(4,6)
    let day = date.substring(7,9)
    let reqDate = year + '_'+mon + '_' +day

    if(num.length !== 9 ||!regex.test(num) ){
      alert('請輸入九碼期別')
      return false
    }
    if(date.length !== 9 || !regex.test(newdate)){
      alert('日期格式不正確，正確格式為：109/01/01')
      return false
    }
    for (let i = 0; i <amount; i++) {
      let ball = $(`input[name="ball${i}"`).val()
      if(name === '3星彩' || name === '4星彩' ){
        if(ball.length !== 1 || !regex.test(ball)){
          alert('請輸入一碼球號')
          return false
        }
      }else{
        if(ball.length !== 2 || !regex.test(ball)){
          alert('請輸入兩碼球號')
          return false
        }
      }

      ballAry.push(ball)
      // console.log(ballAry)
    }
    let reqAry=[]
    if(name === '威力彩' || name === '大樂透' ){
      if(special.length !== 2  || !regex.test(special) ){
        alert('請輸入兩碼期別')
        return false
      }
      reqAry = [ballAry,[special]]
    }else{
      reqAry = [ballAry]
    }
   
    
    setApi(name,num,reqDate,reqAry)
  } 
})

function setApi(type,num,date,ballAry){
  let data ={
    game: type,
    num:Number(num),
    date:date,
    result:ballAry
  }
  // console.log(data)
  $.ajax({
    url:  `http://tw57.com/server/v1/lottery/elybkcmkijxburkbgfpe/`,
    type: 'POST',
    contentType : 'application/json; charset=utf-8',
    data : JSON.stringify(data),
    success: function(res) {
      let data = JSON.parse(res)
      // console.log(data)
      getfirst(type)
    },
    error: function(err) {
      console.log(err)
    }
  });
}

$('#delete').click(function(){
  let yes = confirm('您確認刪除？')
  if (yes) {
    let val = $('#select').val()
    let num = $('input[name="delete"').val()
    let name = typeNum(val).txt
    let regex = /^[0-9\s]*$/;
  
    if(num.length !== 9 ||!regex.test(num) ){
      alert('請輸入九碼期別')
      return false
    }

    deleteApi(name,num)
    $('input[name="delete"').val('')
  } 
})

function deleteApi(type,num){
  let data ={
    game: type,
    num:Number(num),
  }
  // console.log(data)
  $.ajax({
    url:  `http://tw57.com/server/v1/lottery/elybkcmkijxburkbgfpe/?game=${type}&num=${Number(num)}`,
    type: 'DELETE',
    success: function(res) {
      let data = JSON.parse(res)
      // console.log(data)
      getfirst(type)
    },
    error: function(err) {
      console.log(err)
    }
  });
}
$('#sign_out').click(function(){
  $('#Mask').show()
  $('#admin').hide()
})