$(document).ready(function(){
  $('#history1_dropYear').attr('disabled','disabled')
  $('#history1_dropMonth').attr('disabled','disabled')
    let date = new Date();
    let month = date.getMonth() + 1 ;   
    for (let i = 0; i < $('#history1_dropMonth option').length; i++) {
        let option = $('#history1_dropMonth option').eq(i).val()
        if(option === String(month)){
            $('#history1_dropMonth option').eq(i).attr("selected", "true")
        }
    }
    getfirst('大樂透')
});

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
$('#selectType').change(function(){
  let val = $(this).val()
  let txt = typeNum(val)
  $('#typeTxt').text(txt)
  getfirst(txt)
})
$('[name=history1$chk]').change(function(){

  let val =$(this).val()

  if(val==='radYM'){
      $('#history1_dropYear').attr('disabled','')
      $('#history1_dropMonth').attr('disabled','')
      $('#history1_txtNO').attr('disabled','disabled')
  }else{
    $('#history1_dropYear').attr('disabled','disabled')
    $('#history1_dropMonth').attr('disabled','disabled')
    $('#history1_txtNO').attr('disabled','')
  }
})
function typeNum(val){
    let txt = ''
    switch (val) {
      case '0':
        txt = '請選擇遊戲'
        break;
      case '1':
        txt = '威力彩'
        break;
      case '2':
      txt = '大樂透'
        break;    
      case '5':
      txt = '今彩539'
        break; 
      case '12':
      txt = '雙贏彩'
        break; 
      case '6':
      txt = '3星彩'
        break; 
      case '7':
      txt = '4星彩'
        break; 
      case '4':
      txt = '38樂合彩'
        break; 
      case '3':
      txt = '49樂合彩'
        break; 
      case '10':
      txt = '39樂合彩'
        break; 
    }
    return txt
}
$('#history1_btnSubmit').click(function(){
  let checked = $('[name=history1$chk]:checked').val()
  let type = $('#selectType option:selected').val()
  let typeTxt = typeNum(type)
  if(checked === 'radNO'){
    let num = $('#history1_txtNO').val()
    let length = num.length
    let regex = /^[0-9\s]*$/;
    if(num == '' || length !== 9) {
      alert('請輸入九碼期別')
      return false
    }
    if(regex.test(num)&& length===9){
      getAPi_num(typeTxt,num,'number','num')
    }
  }else{
    let date = new Date();
    let year = date.getFullYear() ;
    let month = $('#history1_dropMonth option:selected').val()
    if(Number(month)<10) month = '0' + month
    let time = year + '_' + month
    getAPi_num(typeTxt,time,'time','time')
  }

})

function getAPi_num(typeTxt,method,path,parameter){

  $.ajax({
    url:  `http://tw57.com/server/v1/lottery/${path}?game=${typeTxt}&${parameter}=${method}`,
    type: 'GET',
    success: function(res) {
      let data = JSON.parse(res)
      let reversed = data.reverse()
      if(data.length === 0){
        alert('查無資料')
        return false
      } 
      getType(reversed)
    },
    error: function(err) {
      console.log(err)
    }
  });
}

function getType(data){

  $('#historyBox').empty()
  let html =''
  if(isMobileDevice()){
     html =``
  }else{
     html = `
     <table class="table_org td_hm">
      <tbody id="historyTbody">
        <tr>
          <td colspan="1" class="td_org1 width100 historyTd">
            期別
          </td>
          <td colspan="1" class="td_org1 width100">
            開獎日
          </td>
          <td colspan="6" class="td_org1 award awardTitle" id="award">
            獎號
          </td>
          <td colspan="1" class="td_org1 width100 special" id="special">
            特別號
          </td>
        </tr> 
      </tbody>
    </table>`
  }
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
          special =  data[i].res[1][0]
        }else if( name === '威力彩'){
          ary = data[i].res[0]
          special =  data[i].res[1][0]
        }else{
          ary = data[i].res[0]
        }

        setHtml(name,num,str4,ary,special)
      }
}

function setHtml(name,num,date,ary,special){
  let html =''

  if(isMobileDevice()){
    html = `
    <table class="table_org td_hm">
      <tbody id="historyTbody">
        <tr>
          <td colspan="1" class="td_org1 width100 historyTd">
            期別
          </td>
          <td colspan="1" class="td_org1 width100">
            開獎日
          </td>
          <td colspan="6" class="td_org1 award awardTitle" id="award">
            獎號
          </td>
          <td colspan="1" class="td_org1 width100 special" id="special">
            特別號
          </td>
        </tr>
    `
    html += '<tr class="historyTr">'
  }else{
    html = '<tr class="historyTr">'
  }

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
    if(isMobileDevice()){
      html += `      
          </tbody>
          </table>`
      $('#historyBox').append(html)
    }else{
      $('#historyTbody').append(html)
    }
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

  function isMobileDevice() {
      const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPod', 'BlackBerry', 'Windows Phone']
      let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
      return isMobileDevice
  }
