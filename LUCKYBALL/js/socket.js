
// http://60.245.62.177:2000/socket/ + 以下三個字串之一
// ws://60.245.62.177:2000/socket/{message type}/{game type}
// message type: {"timer" : 提供這個遊戲的倒數計時, "lotto" : 提供這個遊戲的開獎結果}
// game type: {
//   EveryMinute: 分分彩
//   FiveMinute : 五分彩
//   ThirdMinute: 三分彩
// }
// var socketUrl = 'ws://60.245.62.177:2000/socket/timer/'
// var socketUrl = 'http://60.245.62.177:2000/socket'
// var socketUrl = 'https://luckylotto.cc/server/v1/socket'
var socketUrl = 'https://luckylotto.cc'


var EveryMinute = 'EveryMinute'
var ThirdMinute = 'ThirdMinute'
var FiveMinute = 'FiveMinute'
var pa1 = 'past1'   //分分彩過去記錄 class
var pa2 = 'past2'   //三分彩過去記錄 class
var pa3 = 'past3'   //五分彩過去記錄 class
var hisd1 = [];     //存放分分彩首次歷史記錄資料
var hisd2 = [];     //存放三分彩首次歷史記錄資料
var hisd3 = [];     //存放五分彩首次歷史記錄資料

// var wsUriMinute = socketUrl + EveryMinute
// var wsUriThird= socketUrl + ThirdMinute
// var wsUriFive = socketUrl + FiveMinute

var page = $('#hidden').val()
function websocket(type){
  
  // const socket = io.connect(socketUrl, { query: { game: type }, path: "/server/v1/socket/"})
  const socket = io.connect(socketUrl + "/socket", { query: { game: type }, path: "/socket/", upgrade: false })
  socket.on("connect", () => (
      socket
      .on("lotto", function(msg){   // "lotto" : 提供這個遊戲的開獎結果
        // console.log("[Lotto]", msg)
        let data = JSON.parse(msg)
        // console.log(data.gameId);
        // console.log(data.result);

        // index
        $(`#${type}`).find('.openedPeriodNumber').text(data.gameId);  //Winning Numbers
        data.result.forEach((a,i)=>{
          $(`#${type}`).find('.numbersInfoBall').find('.ball3').eq(i).text(a)  //ball number
        })

        // history
        $(`#${type}`).find('.nextOpeningDate').text(Number(data.gameId) + 1);   //Next Lottery

        var currentTime;   // 當前時間
        var ffTime;      // 分分彩下一張彩票時間
        var sfcTime;      // 三分彩下一張彩票時間
        var wfcTime;      // 五分彩下一張彩票時間
       
        function getesttimes() {
          var dt = new Date();
          dt.setHours(dt.getHours());
          var yy = dt.getFullYear();
          var mo = dt.getMonth() + 1;
          if (mo < 10) {
            mo = "0" + mo;
          }
          var dd = dt.getDate();
          if (dd < 10) {
            dd = "0" + dd;
          }
          var hh = dt.getHours();
          if (hh < 10) {
            hh = "0" + hh;
          }
          var mm = dt.getMinutes();
          if (mm < 10) {
            mm = "0" + mm;
          }
          var fmm = dt.getMinutes() + 1;
          if (fmm < 10) {
            fmm = "0" + fmm;
          }
          var sfcmm = dt.getMinutes() + 3;
          if (sfcmm < 10) {
            sfcmm = "0" + sfcmm;
          }
          var wfcmm = dt.getMinutes() + 5;
          if (wfcmm < 10) {
            wfcmm = "0" + wfcmm;
          }
          var ss = dt.getSeconds();
          if (ss < 10) {
            ss = "0" + ss;
          }

          var contents = hh + ":" + mm + ":" + ss;
          var ffcont = hh + ":" + fmm + ":" + ss;
          var sfccont = hh + ":" + sfcmm + ":" + ss;
          var wfcont = hh + ":" + wfcmm + ":" + ss;
          currentTime = yy + "-" + mo + "-" + dd + " " + contents;
          ffTime = yy + "-" + mo + "-" + dd + "  " + ffcont;
          sfcTime = yy + "-" + mo + "-" + dd + "  " + sfccont;
          wfcTime = yy + "-" + mo + "-" + dd + "  " + wfcont;
        }
        getesttimes();

        var pp = 1;  //記錄當前頁
        var ball = [];  //儲存ball號碼
        for (let i=0; i < 5; i++){
          ball[i] = data.result[i];
        }
        // console.log('ball');
        // console.log(ball);
        
        // console.log(hisd1);
        // console.log(hisd1.length);
        // console.log(hisd2);
        // console.log(hisd3);

        var newdata;  //存放 history各彩種經由socket接到的新資料

        var btnNums;  //按鈕數量
        switch (type) {
          case 'EveryMinute':
            if (page == 'indexPage'){
              hisd1.unshift({'time': currentTime, 'gameId': Number(data.gameId), result: ball});
            }
            if (page == 'historyPage'){
              hisd1.unshift({'time': currentTime, 'gameId': Number(data.gameId), result: ball});
            }
            if (hisd1.length > 100){  //最多只能存放100筆記錄
              hisd1.pop();
            }
            $('.ffDate').html(ffTime);
            // console.log(hisd1.length);
            newdata = hisd1;
            // console.log(newdata[0].time)
            btnNums = Math.ceil(hisd1.length/10);
            // console.log('btnNums : ' + btnNums);
            // console.log('EveryMinute');
            break;
          case 'ThirdMinute':
            if (page == 'indexPage'){
              hisd2.unshift({'time': currentTime, 'gameId': Number(data.gameId), result: ball});
            }
            if (page == 'historyPage'){
              hisd2.unshift({'time': currentTime, 'gameId': Number(data.gameId), result: ball});
            }
            if (hisd2.length > 100){  //最多只能存放100筆記錄
              hisd2.pop();
            }
            $('.sfcDate').html(sfcTime);
            newdata = hisd2;
            btnNums = Math.ceil(hisd2.length/10);
            // console.log('ThirdMinute');
            break;  
          case 'FiveMinute':
            if (page == 'indexPage'){
              hisd3.unshift({'time': currentTime, 'gameId': Number(data.gameId), result: ball});
            }
            if (page == 'historyPage'){
              hisd3.unshift({'time': currentTime, 'gameId': Number(data.gameId), result: ball});
            }
            if (hisd3.length > 100){  //最多只能存放100筆記錄
              hisd3.pop();
            }
            $('.wfcDate').html(wfcTime);
            newdata = hisd3;
            btnNums = Math.ceil(hisd3.length/10);
            // console.log('FiveMinute');
            break;
          default:
            break;
        }
        
        console.log(type);
        console.log(newdata);

        // index 開獎歷史記錄
        function indexRecords(data){
          let str = '';
          str += `
            <div class="stagesResult">
              <font class="left">&nbsp;&nbsp;${data[0].gameId}</font>
              <span class="right">
                ${data[0].result[0]}&nbsp;${data[0].result[1]}&nbsp;${data[0].result[2]}&nbsp;${data[0].result[3]}&nbsp;${data[0].result[4]}&nbsp;
              </span>
            </div>
        
            <div class="stagesResult stagesBackground">
              <font class="left">&nbsp;&nbsp;${data[1].gameId}</font>
              <span class="right">
                ${data[1].result[0]}&nbsp;${data[1].result[1]}&nbsp;${data[1].result[2]}&nbsp;${data[1].result[3]}&nbsp;${data[1].result[4]}&nbsp;
              </span>
            </div>
        
            <div class="stagesResult">
              <font class="left">&nbsp;&nbsp;${data[2].gameId}</font>
              <span class="right">
                ${data[2].result[0]}&nbsp;${data[2].result[1]}&nbsp;${data[2].result[2]}&nbsp;${data[2].result[3]}&nbsp;${data[2].result[4]}&nbsp;
              </span>
            </div>
        
            <div class="stagesResult stagesBackground">
              <font class="left">&nbsp;&nbsp;${data[3].gameId}</font>
              <span class="right">
                ${data[3].result[0]}&nbsp;${data[3].result[1]}&nbsp;${data[3].result[2]}&nbsp;${data[3].result[3]}&nbsp;${data[3].result[4]}&nbsp;
              </span>
            </div>
        
            <div class="stagesResult">
              <font class="left">&nbsp;&nbsp;${data[4].gameId}</font>
              <span class="right">
                ${data[4].result[0]}&nbsp;${data[4].result[1]}&nbsp;${data[4].result[2]}&nbsp;${data[4].result[3]}&nbsp;${data[4].result[4]}&nbsp;
              </span>
            </div>

            <div class="stagesResult stagesBackground">
              <font class="left">&nbsp;&nbsp;${data[5].gameId}</font>
              <span class="right">
                ${data[5].result[0]}&nbsp;${data[5].result[1]}&nbsp;${data[5].result[2]}&nbsp;${data[5].result[3]}&nbsp;${data[5].result[4]}&nbsp;
              </span>
            </div>

            <div class="stagesResult">
              <font class="left">&nbsp;&nbsp;${data[6].gameId}</font>
              <span class="right">
                ${data[6].result[0]}&nbsp;${data[6].result[1]}&nbsp;${data[6].result[2]}&nbsp;${data[6].result[3]}&nbsp;${data[6].result[4]}&nbsp;
              </span>
            </div>

            <div class="stagesResult stagesBackground">
              <font class="left">&nbsp;&nbsp;${data[7].gameId}</font>
              <span class="right">
                ${data[7].result[0]}&nbsp;${data[7].result[1]}&nbsp;${data[7].result[2]}&nbsp;${data[7].result[3]}&nbsp;${data[7].result[4]}&nbsp;
              </span>
            </div>
          `
          
          // console.log(data);
          $(`#${type}`).find('.stagesResultWrapper').html(str);
        }


        function newBtns(){
          // console.log(btnNums);
          // var pages = document.querySelector('.page_btn');  
          var pages = $(`.${type}`).find('.page_btn');
                  
          // 製作按鈕字串塞入HTML
          var str = '';
          for (var i=0; i < btnNums; i++){
            str+=`<a class="paginate_button" tabindex="0">${i+1}</a>`
          };
          pages.html(str);
  
          //按鈕監聽
          var btn = document.querySelectorAll(`.${type} .page_btn a`); //頁數按鈕
          var prev = document.querySelector(`.${type} .previous`);     //上一頁
          var nex = document.querySelector(`.${type} .next`);          //下一頁
  
          for (var i=0; i < btn.length; i++){
            btn[i].addEventListener('click', newPage.bind(this,(i+1),newdata,btnNums));
          }
          
          //上一頁按鈕監聽
          prev.addEventListener('click', function(){
            // console.log(pp);
            if (pp == 1){
              return;
            }else {
              newPage((pp-1),newdata, btnNums);
            }
          });
  
          //下一頁按鈕監聽
          nex.addEventListener('click', function(){
            // console.log(pp);
            if (pp == btnNums){
              return;
            }else {
              newPage((pp+1),newdata, btnNums);
            }
          });

          newPage(pp,newdata, btnNums);
        }

        if (page == 'indexPage'){
          indexRecords(newdata);
        }else if(page == 'historyPage'){
          newBtns();
        }

        //切換頁面
        function newPage(page, data, btnNums){
          // console.log(page);
          pp = page;  //記錄當前頁給上下頁用

          // 代表每頁出現10筆資料
          var items = 10;
          console.log('btnNums : ' + btnNums);
          // 當前頁數，對應現在當前頁數
          let currentPage = page;
          if (currentPage > btnNums) {
            currentPage = btnNums;
          }

          // 按鈕按下 1，會出現 1～10筆資料，但陣列索引值卻是 0～9 的資料
          var pageIndexStart = (currentPage-1) * items;
          var pageIndexEnd = currentPage * items;


          // 上一頁、下一頁功能
          var previous = document.querySelector(`.${type} .previous`);
          var next = document.querySelector(`.${type} .next`);
          if (page > 1){
            previous.classList.remove("disabled");
            previous.style.cursor = 'pointer';
          }else {
            previous.classList.add("disabled");
            previous.style.cursor = 'unset';
          }

          if (page == btnNums){
            next.classList.add("disabled");
            next.style.cursor = 'unset';
          }else {
            next.classList.remove("disabled");
            next.style.cursor = 'pointer';
          }

          // 給空字串塞資料用
          var str = '';
          for (var i=pageIndexStart; i < pageIndexEnd; i++){
            if (i >= data.length){break;} //修正因為ary只有36筆資料，36之後沒有資料，所以出現錯誤
            str += `
              <tr class="stagesDate" role="row" class="odd">
                <td class="sorting_1">${data[i].time}</td>
                <td class="sorting_2">${data[i].gameId}</td>
                <td class="sort0">
                  <span class="ball1">${data[i].result[0]}</span>
                  <span class="ball1">${data[i].result[1]}</span>
                  <span class="ball1">${data[i].result[2]}</span>
                  <span class="ball1">${data[i].result[3]}</span>
                  <span class="ball1">${data[i].result[4]}</span>
                </td>
              </tr>
            `
          }
          $(`.${type}`).find('.cont').html(str);
        }
        // newPage(1, data, btnNums);

      })
      .on("timer", function(msg){   // "timer" : 提供這個遊戲的倒數計時
        //  console.log("[Timer]", msg)
        let data = JSON.parse(msg)
        let time = data.last;
        // console.log(time);
         getTime(time,type);
      })
      .on("disconnect", function() {
        console.log("[Exist]")
      }),
      console.log("connect"))
   )
}

function init(){
  websocket(EveryMinute)
  websocket(ThirdMinute)
  websocket(FiveMinute)
}

// console.log(page)
function getHistory(type){
  // var history = `http://60.245.62.177:2000/history/default/${type}`
  var history = `https://luckylotto.cc/server/v1/history/default/${type}`
  
  $.ajax({
    url: history,
    type: 'GET',
    success: function(res) {
      let newres = JSON.parse(res)  //字串轉陣列
      let mapData = newres.map((item)=>{
        let date = new Date(item.time);
        let year = date.getFullYear() ;
        let month = date.getMonth() + 1 ;
        let day = date.getDate() ;
        let hour = date.getHours() ;
        let minute = date.getMinutes() ;
        let second = date.getSeconds() ;
        if(month <10) month = '0' + month
        if(day <10) day = '0' + day
        if(hour <10) hour = '0' + hour
        if(minute <10) minute = '0' + minute
        if(second <10) second = '0' + second
        let time = '' + year +'-' + month +'-'+ day +' '+ hour +':'+ minute +':'+ second 
        return(
           {
            time:time,
            gameId:item.gameId,
            result:item.result
           }
        )
      })
      // console.log(mapData);

      if (type == 'EveryMinute'){
        let dts = mapData;
        mapDatas1(dts);   //將分分彩資料傳給 mapDatas1
      }else if(type == 'ThirdMinute'){
        let dts = mapData;
        mapDatas2(dts);   //將分分彩資料傳給 mapDatas2
      }else if (type == 'FiveMinute'){
        let dts = mapData;
        mapDatas3(dts);   //將分分彩資料傳給 mapDatas3
      }

      //顯示各彩種下一張彩票時間
      function getesttimes() {
        var dt = new Date();
        dt.setHours(dt.getHours());
        var yy = dt.getFullYear();
        var mo = dt.getMonth() + 1;
        if (mo < 10) {
          mo = "0" + mo;
        }
        var dd = dt.getDate();
        if (dd < 10) {
          dd = "0" + dd;
        }
        var hh = dt.getHours();
        if (hh < 10) {
          hh = "0" + hh;
        }
        var mm = dt.getMinutes() + 1;
        if (mm < 10) {
          mm = "0" + mm;
        }
        var fmm = dt.getMinutes() + 1;
        if (fmm < 10) {
          fmm = "0" + fmm;
        }
        var sfcmm = dt.getMinutes() + 3;
        if (sfcmm < 10) {
          sfcmm = "0" + sfcmm;
        }
        var wfcmm = dt.getMinutes() + 5;
        if (wfcmm < 10) {
          wfcmm = "0" + wfcmm;
        }
        var ss = dt.getSeconds();
        if (ss < 10) {
          ss = "0" + ss;
        }

        if (fmm > 60){
          fmm = fmm - 60;
          hh = hh + 1;
        }

        var contents = hh + ":" + mm + ":" + ss;
        var ffcont = hh + ":" + fmm + ":" + ss;
        var sfccont = hh + ":" + sfcmm + ":" + ss;
        var wfcont = hh + ":" + wfcmm + ":" + ss;
      
        // $(".openingDate").html(yy + "-" + mo + "-" + dd + "  " + contents);
        $(".ffDate").html(yy + "-" + mo + "-" + dd + "  " + ffcont);
        $(".sfcDate").html(yy + "-" + mo + "-" + dd + "  " + sfccont);
        $(".wfcDate").html(yy + "-" + mo + "-" + dd + "  " + wfcont);
      }

      //累積獎金
      function jackpot(min, max){
        let num;
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        $(`#${type}`).find('.jackpot').html("$" + num);
      }
      jackpot(1000000,1999999);

      if(page === 'indexPage' ){
        console.log(page)
        mapData.forEach((item,index) => {
          let txt = item.result.toString().replace(/,/g, "&nbsp;");
          $(`#${type} .stagesResult`).find('.left').eq(index).text(item.gameId)
          $(`#${type} .stagesResult`).find('.right').eq(index).html(txt)
          $(`#${type}`).find('.openedPeriodNumber').text(mapData[0].gameId)
          mapData[0].result.forEach((a,i)=>{
            $(`#${type}`).find('.numbersInfoBall').find('.ball3').eq(i).text(a)
          })
        });
        getesttimes();  //顯示各彩種下一張彩票時間

        
        

      }else if(page === 'historyPage'){
        // console.log(page)
        mapData.forEach((item,index) => {
          $(`#${type} .nextOpeningDate`).text(Number(item.gameId) + 1);   // Next Lottery
        })

        var btnNum = Math.ceil(mapData.length/10); 
        // console.log(btnNum);
        // console.log(mapData[0].result);
        // console.log(mapData);
        
        var data = [];  //儲存ball號碼
        for (let i=0; i < mapData.length; i++){
          data[i] = mapData[i].result;
          // console.log(data[i]);
          // for (var j=0; j < 10; j++){
          //   $(`#${type} .stagesDate`).find(`.sort${i} .ball1`).eq(j).text(data[i][j])
          // }
        }

        mapData.forEach((item,index) => {
          // console.log(item.result);
          // $(`#${type} .stagesDate`).find('.sorting_1').eq(index).text(item.time)
          // $(`#${type} .stagesDate`).find('.sorting_2').eq(index).text(item.gameId)
          $(`#${type}`).find('.openedPeriodNumber').text(mapData[0].gameId)
          mapData[0].result.forEach((a,i)=>{
            $(`#${type}`).find('.numbersInfoBall').find('.ball3').eq(i).text(a)
          })
        })

        getesttimes();  //顯示各彩種下一張彩票時間

        function showBtns(){
          // var pages = document.querySelector('.page_btn');  
          var pages = $(`.${type}`).find('.page_btn');
                  
          // 製作按鈕字串塞入HTML
          var str = '';
          for (var i=0; i < btnNum; i++){
            str+=`<a class="paginate_button" tabindex="0">${i+1}</a>`
          };
          pages.html(str);
  
          //按鈕監聽
          var btn = document.querySelectorAll(`.${type} .page_btn a`); //頁數按鈕
          var prev = document.querySelector(`.${type} .previous`);     //上一頁
          var nex = document.querySelector(`.${type} .next`);          //下一頁
  
          for (var i=0; i < btn.length; i++){
            btn[i].addEventListener('click', changePage.bind(this,(i+1),mapData, data, type, btnNum));
          }
          
          //上一頁按鈕監聽
          prev.addEventListener('click', function(){
            // console.log(pp);
            if (pp == 1){
              return;
            }else {
              changePage((pp-1),mapData, data, type, btnNum);
            }
          });
  
          //下一頁按鈕監聽
          nex.addEventListener('click', function(){
            // console.log(pp);
            if (pp == btnNum){
              return;
            }else {
              changePage((pp+1),mapData, data, type, btnNum);
            }
          });
        }
        showBtns();
        changePage(1, mapData, data, type, btnNum);
      }
    },
    error: function(err) {
      // alert('Ajax request 發生錯誤');
      console.log('Ajax request 發生錯誤');
    },
  });

}

getHistory(EveryMinute)
getHistory(ThirdMinute)
getHistory(FiveMinute)


//過去的歷史記錄
function passHistory(type,time,last,past){
  // var passhistory = `http://60.245.62.177:2000/history/query/${type}/${time}/${last}`
  var passhistory = `https://luckylotto.cc/server/v1/history/query/${type}/${time}/${last}`
  
  $.ajax({
    url: passhistory,
    type: 'GET',
    success: function(res) {
      console.log(type);
      let passres = JSON.parse(res)  //字串轉陣列
      let passData = passres.map((item)=>{
        let date = new Date(item.time);
        let year = date.getFullYear() ;
        let month = date.getMonth() + 1 ;
        let day = date.getDate() ;
        let hour = date.getHours() ;
        let minute = date.getMinutes() ;
        let second = date.getSeconds() ;
        if(month <10) month = '0' + month
        if(day <10) day = '0' + day
        if(hour <10) hour = '0' + hour
        if(minute <10) minute = '0' + minute
        if(second <10) second = '0' + second
        let time = '' + year +'-' + month +'-'+ day +' '+ hour +':'+ minute +':'+ second 
        return(
           {
            time:time,
            gameId:item.gameId,
            result:item.result
           }
        )
      })
      console.log(passData);

      var pp;  //記錄當前頁
      var passbtNum = Math.ceil(passData.length/20); 
      console.log('passbtNum');
      console.log(passbtNum);

      function showpassBtns(){
        // var pages = document.querySelector('.page_btn');  
        var pages = $(`.${past}`).find('.page_btn');
                
        // 製作按鈕字串塞入HTML
        var str = '';
        for (var i=0; i < passbtNum; i++){
          str+=`<a class="paginate_button" tabindex="0">${i+1}</a>`
        };
        pages.html(str);
      
        //按鈕監聽
        var btn = document.querySelectorAll(`.${past} .page_btn a`); //頁數按鈕
        var prev = document.querySelector(`.${past} .previous`);     //上一頁
        var nex = document.querySelector(`.${past} .next`);          //下一頁
      
        for (var i=0; i < btn.length; i++){
          btn[i].addEventListener('click', changePage.bind(this,(i+1),passData,passbtNum));
        }
        
        //上一頁按鈕監聽
        prev.addEventListener('click', function(){
          console.log(pp);
          if (pp == 1){
            return;
          }else {
            changePage((pp-1),passData,passbtNum);
          }
        });
      
        //下一頁按鈕監聽
        nex.addEventListener('click', function(){
          console.log(pp);
          if (pp == passbtNum){
            return;
          }else {
            changePage((pp+1),passData,passbtNum);
          }
        });
      }
      showpassBtns();

      //切換頁面
      function changePage(page, data, passbtNum){
        console.log(page);
        pp = page;  //記錄當前頁給上下頁用
        // console.log(data[0].time);
        // console.log(ball);

        // 代表每頁出現20筆資料
        var items = 20;

        // 當前頁數，對應現在當前頁數
        let currentPage = page;
        if (currentPage > passbtNum) {
          currentPage = passbtNum;
        }

        // 按鈕按下 1，會出現 1～10筆資料，但陣列索引值卻是 0～9 的資料
        var pageIndexStart = (currentPage-1) * items;
        var pageIndexEnd = currentPage * items;


        // 上一頁、下一頁功能
        var previous = document.querySelector(`.${past} .previous`);
        var next = document.querySelector(`.${past} .next`);
        if (page > 1){
          previous.classList.remove("disabled");
          previous.style.cursor = 'pointer';
        }else {
          previous.classList.add("disabled");
          previous.style.cursor = 'unset';
        }

        if (page == passbtNum){
          next.classList.add("disabled");
          next.style.cursor = 'unset';
        }else {
          next.classList.remove("disabled");
          next.style.cursor = 'pointer';
        }

        // 給空字串塞資料用
        var str = '';
        for (var i=pageIndexStart; i < pageIndexEnd; i++){
          if (i >= data.length){break;} //修正因為ary只有36筆資料，36之後沒有資料，所以出現錯誤
          str += `
            <tr class="stagesDate" role="row" class="odd">
              <td class="sorting_1">${data[i].time}</td>
              <td class="sorting_2">${data[i].gameId}</td>
              <td class="sort0">
                <span class="ball1">${data[i].result[0]}</span>
                <span class="ball1">${data[i].result[1]}</span>
                <span class="ball1">${data[i].result[2]}</span>
                <span class="ball1">${data[i].result[3]}</span>
                <span class="ball1">${data[i].result[4]}</span>
              </td>
            </tr>
          `
        }

        // document.querySelector('.cont').innerHTML = str;     
        $(`.${past}`).find('.cont').html(str);
      }
      changePage(1,passData,passbtNum);
    },
    error: function(err) {
      // alert('Ajax request 發生錯誤');
      console.log('Ajax request 發生錯誤');
    }
  })
}

// passHistory(EveryMinute,0,600)
// passHistory(ThirdMinute,10,21)
// passHistory(FiveMinute,10,21)



// function init(){
//   doWebSocket(wsUriMinute,EveryMinute);
//   doWebSocket(wsUriThird,ThirdMinute);
//   doWebSocket(wsUriFive,FiveMinute);
// }

function doWebSocket(url,type){
  ws = new WebSocket(url);
  ws.onopen = function(evt) { onOpen(evt,type) };
  ws.onclose = function(evt) { onClose(evt,type) };
  ws.onmessage = function(evt) { onMessage(evt,type) };
  ws.onerror = function(evt) { onError(evt,type) };

}

function onOpen(evt, type){
  console.log('open connection')
  // console.log(evt);
}

function onClose(evt){
  console.log('close connection')
}

function onMessage(evt,type){
  let data = JSON.parse(event.data)
  console.log(type,data)
  var histime = data.last;
}

function onError(evt){
  console.log(evt.data)
}

//倒數時間
function getTime(time,type){
  var histime = time;
  var strs;
  var str = histime.toString().split("");
  var arr = [];
  $(`#${type} .numbersInfoNext`).empty();   //清空
  $(`#${type} .historyResultDate`).empty();   //清空
  for (let i=0; i < str.length; i++){ 
    arr[i] = str[str.length - (i+1)]     
    // console.log(arr[i]);
    // strs = `<span class="count1">${arr[i]}</span>`;
    // $(`#${type} .historyResultDate`).append(strs);
  }
  for (let j=str.length-1; j >= 0; j--){  //相反
    strs = `<span class="count1">${arr[j]}</span>`;
    $(`#${type} .numbersInfoNext`).append(strs);      // index
    $(`#${type} .historyResultDate`).append(strs);    // history
    
  }
}

// getTime(47,EveryMinute);
// getTime(572,ThirdMinute);
// getTime(573,FiveMinute);


//取出 gethistoy EveryMinute的 mapData給 hisd1
function mapDatas1(data){
  // console.log('EveryMinute')
  for (let i in data) {
    hisd1[i] = data[i]
  }
}

//取出 gethistoy ThirdMinute的 mapData 給 hisd2
function mapDatas2(data){
  // console.log('ThirdMinute')
  for (let i in data) {
    hisd2[i] = data[i]
  }
}

//取出 gethistoy FiveMinute的 mapData 給 hisd3
function mapDatas3(data){
  // console.log('FiveMinute')
  for (let i in data) {
    hisd3[i] = data[i]
  }
}

//切換頁面
var pp;  //記錄當前頁
function changePage(page, hisdata, ball, type, btnNum){
  // console.log(page);
  pp = page;  //記錄當前頁給上下頁用
  // console.log(data[0].time);
  // console.log(ball);

  // 代表每頁出現10筆資料
  var items = 10;

  // 當前頁數，對應現在當前頁數
  let currentPage = page;
  if (currentPage > btnNum) {
    currentPage = btnNum;
  }

  // 按鈕按下 1，會出現 1～10筆資料，但陣列索引值卻是 0～9 的資料
  var pageIndexStart = (currentPage-1) * items;
  var pageIndexEnd = currentPage * items;


  // 上一頁、下一頁功能
  var previous = document.querySelector(`.${type} .previous`);
  var next = document.querySelector(`.${type} .next`);
  if (page > 1){
    previous.classList.remove("disabled");
    previous.style.cursor = 'pointer';
  }else {
    previous.classList.add("disabled");
    previous.style.cursor = 'unset';
  }

  if (page == btnNum){
    next.classList.add("disabled");
    next.style.cursor = 'unset';
  }else {
    next.classList.remove("disabled");
    next.style.cursor = 'pointer';
  }

  // 給空字串塞資料用
  var str = '';
  for (var i=pageIndexStart; i < pageIndexEnd; i++){
    if (i >= hisdata.length){break;} //修正因為ary只有36筆資料，36之後沒有資料，所以出現錯誤
    str += `
      <tr class="stagesDate" role="row" class="odd">
        <td class="sorting_1">${hisdata[i].time}</td>
        <td class="sorting_2">${hisdata[i].gameId}</td>
        <td class="sort0">
          <span class="ball1">${hisdata[i].result[0]}</span>
          <span class="ball1">${hisdata[i].result[1]}</span>
          <span class="ball1">${hisdata[i].result[2]}</span>
          <span class="ball1">${hisdata[i].result[3]}</span>
          <span class="ball1">${hisdata[i].result[4]}</span>
        </td>
      </tr>
    `
  }

  // document.querySelector('.cont').innerHTML = str;     
  $(`.${type}`).find('.cont').html(str);
}

window.addEventListener("load", init, false);