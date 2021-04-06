// var UrlFlower = SOCKET.URL;
// var postUrl = API_URL;
// socket = io.connect(UrlFlower, { path: '/' + SOCKET.PATH + SOCKET.PREFIX });
// socket.on("connect", () => {
//   console.log("connect");
// });
// var e = currentRoom[1].data.event

// if (mobile) {
//   mobileEvent(e)
//   $('.slide-menu').addClass('disabled')

// } else {
//   socketEvent(e)
//   $('.game-nav').addClass('disabled')
// }

var isSocket = false
var userCardAry;
var aiCardAry = []
var actionAry = []
var watchAry = []
var giveUpAry = []
var username;
var actionId;
var actionIDAry = []
var count
var topChip
var betCoinList
var nowMoney 
var gameId
var base = 1
var gameIn = false
var replayBtn = false
var flowerBalance = {
  'TXC': 0,
  'TXS': 0
}
var roomNum = 0
var playNum = [0,0,0,0,0]

function is_Mobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
var mobile = is_Mobile()

//type creat
var game = {
  base:1,
  gameId:'123456789',
  level:1,
  betCoinList: ['1','2','3','4','5','6','7']
}

var type = 'creat'
var players =[0,1,2,3,4]
var user = {
  remain:{
    TXC:1000,
    TXS:1000
  }
}

function noSockect(res){
  if (res.type === "creat") {
    gameIn = true
    gameId = res.game.gameId
    base = res.game.base
    let level = res.game.level
    roomNum = res.game.level
    let roomName
    let admission
    betCoinList = res.game.betCoinList
    topChip = res.game.betCoinList[6]
    document.querySelector('#chipsBox').querySelectorAll('.chipsimgBox').forEach(function (item, index) {

      item.querySelector('p').innerText = betCoinList[index + 1]
      let text = item.querySelector('p').innerHTML
      item.querySelector('p').innerText = text
      if (text >= 10) {
        item.querySelector('p').style.left = '-12px'
      }
      if (text >= 100) {
        item.querySelector('p').style.left = '-25px'
      }
    })
    document.querySelectorAll(".createBox").forEach(function (item,index) {
      item.querySelector('.itemRight').querySelectorAll('.chipsimgBox').forEach(function (box, index) {
        box.querySelector('p').innerText = betCoinList[index]
      })
      let text = item.querySelector('p').innerHTML
      item.querySelector('p').innerText = text
      if (text >= 10) {
        item.querySelector('p').style.left = '-12px'
      }
      if (text >= 100) {
        item.querySelector('p').style.left = '-25px'
      }
    })
    for (let i = 0; i < 5; i++) {
      $('#item' + i).find('.money').text(base)

    }
    $('#RatioMoney').text(base)
   
    // $('#follow_Txt').text('跟注 :' + base)
    $('#follow_Txt').text( $.i18n.prop("len_Ratio")+' :' + base)

    switch (level) {
      case '1':
        roomName = $.i18n.prop("len_Room0")
        admission = 20
        break;
      case '2':
        roomName = $.i18n.prop("len_Room1")
        admission = 60
        break;
      case '3':
        roomName = $.i18n.prop("len_Room2")
        admission = 250
        break;
      case '4':
        roomName = $.i18n.prop("len_Room3")
        admission = 600
        break;
    }
    // showTime()
    $('#gameId').text(`# ${res.game.gameId}`)
    $('#room').text(roomName)
    $('#base').text(base)
    $('#admission').text(admission)
    let playerlength = res.players.length

    for (let i = 0; i < playerlength - 1; i++) {
      $('#item' + i).find('.memberName').text(res.players[i].name)
      $('#item' + i).find('.totalSpan').text(res.players[i].coin)
    }
    let UserIndex = playerlength - 1
    username = res.players[UserIndex].name
    nowMoney = base
    $('#item4').find('.memberName').text(username)
    $('#item4').find('.totalSpan').text(res.user.remain.TXC)
    $('#item4').find('.totalSpan2').text(res.user.remain.TXS)

  }
  if (res.type === 'active') {
    actionId = res.player
    actionPlayer(actionId)
    actionIDAry.push(actionId)
    if (actionId === 4) {
      isUser = true
      UserPlayerFun()
    } else {
      isUser = false
    }
    count = res.turns + 1
    $('#round').text(count)
  }
  if (res.type === 'watchCard') {
    let watchCradId = res.id
    if (watchCradId !== 4) {
      aiunfold(watchCradId)
    }
  }
  if (res.type === 'cardContent') {
    userCardSort(res)
  }
  if (res.type === 'giveUp') {
    let giveUpId = res.id
    if (giveUpId === 4) {
      userCardSort(res)
      $('#showPoker').find('.pokerImg').addClass('pokerImgBg')
    }
    aiFold(giveUpId)
    for (let i = 0; i < 5; i++) {
      $('#item' + i).find('.information').removeClass('userLeftboder')
    }
    document.querySelector("#progress" + giveUpId).style.display = "none";
  }
  if (res.type === 'followBet' || res.type === 'addBet') {
    let betId = res.id
    let bet = res.coin
    let remain = res.remain ///
    if (betId !== 4) {
      aipay(betId, bet, remain)
    } else {
      if (Number($('#item4').find('.totalSpan').text()) !== 0) {
        $('#item4').find('.totalSpan').text(remain - base)
      } else {
        $('#item4').find('.totalSpan2').text(remain - base)
      }
    }
    for (let i = 0; i < 5; i++) {
      $('#item' + i).find('.information').removeClass('userLeftboder')
    }
    document.querySelector("#progress" + betId).style.display = "none";
  }
  if (res.type === 'followBet') playVoice('flower_voice_2')
  if (res.type === 'addBet') playVoice('flower_voice_4')
  if (res.type === 'compare') {
    let comparetId = res.id
    let loser = res.data.loser
    let winer = res.data.winer
    let loserCardText = res.data.loserCard.type
    let loserCards = res.data.loserCard.cards;
    Ratio(comparetId, winer, loser, loserCards, loserCardText)
  }
  if (res.type === 'end') {
    let endAry = res.card
    let winer = res.winer
    let userTxt = endAry[4].type
    let userCard = endAry[4].cards
    endFun(endAry, winer, userTxt, userCard)
    Replay()
    gameIn = false
    getMoney()
  }
}

function mobileEvent(event) {
  socket.on(event, res => {
    // console.log("[-] 接收到資料：", res);
    // console.log(res)
    if (res.type === "creat") {
      gameIn = true
      showTime()
      gameId = res.game.gameId
      base = res.game.base
      let level = res.game.level
      roomNum = res.game.level
      let roomName
      let admission
      betCoinList = res.game.betCoinList
      topChip = res.game.betCoinList[6]
      document.querySelector('#chipsBox').querySelectorAll('.chipsimgBox').forEach(function (item, index) {
        item.querySelector('p').innerText = betCoinList[index + 1]
        let text = item.querySelector('p').innerHTML
        item.querySelector('p').innerText = text
      })
      document.querySelectorAll(".createBox").forEach(function (item) {
        item.querySelector('.chips').querySelectorAll('.chipsimgBox').forEach(function (box, index) {
          box.querySelector('p').innerText = betCoinList[index + 1]
        })
        let text = item.querySelector('p').innerHTML
        item.querySelector('p').innerText = text
      })

      switch (level) {
        case '1':
          roomName = $.i18n.prop("len_Room0")
          admission = 20
          break;
        case '2':
          roomName = $.i18n.prop("len_Room1")
          admission = 60
          break;
        case '3':
          roomName = $.i18n.prop("len_Room2")
          admission = 250
          break;
        case '4':
          roomName = $.i18n.prop("len_Room3")
          admission = 600
          break;
      }

      $('#gameId').text(`# ${res.game.gameId}`)
      $('#room').text(roomName)
      $('#base').text(base)
      $('#admission').text(admission)
      let playerlength = res.players.length

      for (let i = 0; i < playerlength - 1; i++) {
        $('#item' + i).find('.memberName').text(res.players[i].name)
        $('#item' + i).find('.totalSpan').text(res.players[i].coin)
      }
      let UserIndex = playerlength - 1
      username = res.players[UserIndex].name
      nowMoney = base
      $('#item4').find('.memberName').text(username)
      $('#item4').find('.totalSpan').text(res.user.remain.TXC)
      $('#item4').find('.totalSpan2').text(res.user.remain.TXS)
      startFun()
      // flower()
      for (let i = 0; i < 5; i++) {
        $('#item' + i).find('.money').text(base)
      }
    }
    if (res.type === 'active') {
      actionId = res.player
      actionPlayer(actionId)
      actionIDAry.push(actionId)
      if (actionId === 4) {
        isUser = true
        UserPlayerFun()
      } else {
        isUser = false
      }
      // count = res.turns + 1
      // $('#round').text(count)
    }
    
    if (res.type === 'watchCard') {
      let watchCradId = res.id
      if (watchCradId !== 4) {
        aiWatch(watchCradId)
      }
    }
    if (res.type === 'cardContent') {
      userCardSort(res)
    }
    if (res.type === 'giveUp') {
      let giveUpId = res.id
      if (giveUpId === 4) {
        userShow()
        $('#box nav').hide()
        $('#userFlod').show()
        brightness(4)
        userCardSort(res)
      } else {
        aiFlod(giveUpId)
      }

      document.querySelector("#progress" + giveUpId).style.display = "none";
    }
    if (res.type === 'followBet' || res.type === 'addBet') {
      let betId = res.id
      let bet = res.coin
      let remain = res.remain
      if (betId !== 4) {
        aiPay(betId, bet, remain)
      } else {
        if (Number($('#item4').find('.totalSpan').text()) !== 0) {
          $('#item4').find('.totalSpan').text(remain - base)
        } else {
          $('#item4').find('.totalSpan2').text(remain - base)
        }

      }
      document.querySelector("#progress" + betId).style.display = "none";
    }
    if (res.type === 'followBet') playVoice('flower_voice_2')
    if (res.type === 'addBet') playVoice('flower_voice_4')
    if (res.type === 'compare') {
      let comparetId = res.id
      let loser = res.data.loser
      let winer = res.data.winer
      let loserCardText = res.data.loserCard.type
      let loserCards = res.data.loserCard.cards;
      aiRatio(comparetId, winer, loser, loserCards, loserCardText)
    }
    if (res.type === 'end') {
      let endAry = res.card
      let winer = res.winer
      let userTxt = endAry[4].type
      let userCard = endAry[4].cards
      endFun(endAry, winer, userTxt, userCard)
      Replay()
      gameIn = false
      getMoney()
    }
  });
}

function socketEvent(event) {
  socket.on(event, res => {
    // console.log("[-] 接收到資料：", res);
    // console.log(res)
    if (res.type === "creat") {
      gameIn = true
      gameId = res.game.gameId
      base = res.game.base
      let level = res.game.level
      roomNum = res.game.level
      let roomName
      let admission
      betCoinList = res.game.betCoinList
      topChip = res.game.betCoinList[6]
      document.querySelector('#chipsBox').querySelectorAll('.chipsimgBox').forEach(function (item, index) {
        item.querySelector('p').innerText = betCoinList[index + 1]
        let text = item.querySelector('p').innerHTML
        item.querySelector('p').innerText = text
        if (text >= 10) {
          item.querySelector('p').style.left = '-12px'
        }
        if (text >= 100) {
          item.querySelector('p').style.left = '-25px'
        }
      })
      document.querySelectorAll(".createBox").forEach(function (item) {
        item.querySelector('.itemRight').querySelectorAll('.chipsimgBox').forEach(function (box, index) {
          box.querySelector('p').innerText = betCoinList[index]
        })
        let text = item.querySelector('p').innerHTML
        item.querySelector('p').innerText = text
        if (text >= 10) {
          item.querySelector('p').style.left = '-12px'
        }
        if (text >= 100) {
          item.querySelector('p').style.left = '-25px'
        }
      })
      for (let i = 0; i < 5; i++) {
        $('#item' + i).find('.money').text(base)

      }
      $('#RatioMoney').text(base)
     
      // $('#follow_Txt').text('跟注 :' + base)
      $('#follow_Txt').text( $.i18n.prop("len_Ratio")+' :' + base)

      switch (level) {
        case '1':
          roomName = $.i18n.prop("len_Room0")
          admission = 20
          break;
        case '2':
          roomName = $.i18n.prop("len_Room1")
          admission = 60
          break;
        case '3':
          roomName = $.i18n.prop("len_Room2")
          admission = 250
          break;
        case '4':
          roomName = $.i18n.prop("len_Room3")
          admission = 600
          break;
      }
      showTime()
      $('#gameId').text(`# ${res.game.gameId}`)
      $('#room').text(roomName)
      $('#base').text(base)
      $('#admission').text(admission)
      let playerlength = res.players.length

      for (let i = 0; i < playerlength - 1; i++) {
        $('#item' + i).find('.memberName').text(res.players[i].name)
        $('#item' + i).find('.totalSpan').text(res.players[i].coin)
      }
      let UserIndex = playerlength - 1
      username = res.players[UserIndex].name
      nowMoney = base
      $('#item4').find('.memberName').text(username)
      $('#item4').find('.totalSpan').text(res.user.remain.TXC)
      $('#item4').find('.totalSpan2').text(res.user.remain.TXS)

    }
    if (res.type === 'active') {
      actionId = res.player
      actionPlayer(actionId)
      actionIDAry.push(actionId)
      if (actionId === 4) {
        isUser = true
        UserPlayerFun()
      } else {
        isUser = false
      }
      count = res.turns + 1
      $('#round').text(count)
    }
    if (res.type === 'watchCard') {
      let watchCradId = res.id
      if (watchCradId !== 4) {
        aiunfold(watchCradId)
      }
    }
    if (res.type === 'cardContent') {
      userCardSort(res)
    }
    if (res.type === 'giveUp') {
      let giveUpId = res.id
      if (giveUpId === 4) {
        userCardSort(res)
        $('#showPoker').find('.pokerImg').addClass('pokerImgBg')
      }
      aiFold(giveUpId)
      for (let i = 0; i < 5; i++) {
        $('#item' + i).find('.information').removeClass('userLeftboder')
      }
      document.querySelector("#progress" + giveUpId).style.display = "none";
    }
    if (res.type === 'followBet' || res.type === 'addBet') {
      let betId = res.id
      let bet = res.coin
      let remain = res.remain ///
      if (betId !== 4) {
        aipay(betId, bet, remain)
      } else {
        if (Number($('#item4').find('.totalSpan').text()) !== 0) {
          $('#item4').find('.totalSpan').text(remain - base)
        } else {
          $('#item4').find('.totalSpan2').text(remain - base)
        }
      }
      for (let i = 0; i < 5; i++) {
        $('#item' + i).find('.information').removeClass('userLeftboder')
      }
      document.querySelector("#progress" + betId).style.display = "none";
    }
    if (res.type === 'followBet') playVoice('flower_voice_2')
    if (res.type === 'addBet') playVoice('flower_voice_4')
    if (res.type === 'compare') {
      let comparetId = res.id
      let loser = res.data.loser
      let winer = res.data.winer
      let loserCardText = res.data.loserCard.type
      let loserCards = res.data.loserCard.cards;
      Ratio(comparetId, winer, loser, loserCards, loserCardText)
    }
    if (res.type === 'end') {
      let endAry = res.card
      let winer = res.winer
      let userTxt = endAry[4].type
      let userCard = endAry[4].cards
      endFun(endAry, winer, userTxt, userCard)
      Replay()
      gameIn = false
      getMoney()
    }
  });
}

function userCardSort(res) {
  let userCard = res.card.cards
  let userTxt = res.card.type
  let sortCard = CardsSort(userCard)
  let newUserCard = []
  sortCard.forEach((item) => {
    newUserCard.push(item.card)
  })
  showPokerFun(newUserCard, userTxt)
}

function doPost(data, success = () => {}) {
  $.ajax({
    type: "POST",
    url:API_URL,
    async: false,
    data: data,
    success: function (data) {
      // console.log(data)
      data = JSON.parse(data)
      success(data)
    },
    error: data => console.log(data)
  })
}

function doBet(coin) {
  const i = {
    type: "setBet",
    name: username,
    coin: coin,
    gameId: gameId,
  }

  doPost(i)
}

function doCompare(to) {
  const i = {
    type: "compare",
    name: username,
    gameId: gameId,
    to: to,
  }

  doPost(i)
}

function doGiveUp() {
  const i = {
    type: "giveUp",
    name: username,
    gameId: gameId,
  }

  doPost(i)
}

function doWatchCard() {
  const i = {
    type: "watchCard",
    name: username,
    gameId: gameId,
  }

  doPost(i)
}

function Replay() {
  setTimeout(function () {
    $('#ReplayBox').show()
    $('.game-nav').removeClass('disabled')
    $('.slide-menu').removeClass('disabled')
    flower_eventsInit()
  }, 3000)

}

function returnRoom() {
  let lan =$('#language').data("lan")
  let showTxt =''
  switch (lan) {
      case 'zh-TW':
          showTxt = '遊戲進行中，請稍後'
          break;
      case 'zh-CN':
          showTxt = '游戏进行中，请稍后'
          break;
      case 'en':
          showTxt = 'Game in progress, please wait'
          break;
  }
  if (gameIn) return egAlert._show(showTxt);
  if (roomApiLogin) {
    location.reload()
    return false
  }
  $.get(`/game/flower/1`, function (res) {
    if ($("#icon_shadow").length > 0) $("#icon_shadow").remove();
    $("#pageView").html(res);
  });
}

function flower_eventsInit() {
  $('#Replay').on("click", () => {
    playVoice('click_1')
    // console.log(replayBtn)
    if(!replayBtn){
      try {
        // Egbet 登入
        // console.log(login)
        const getUrl = "/user/check"
        $.get(getUrl, res => {
          const data = JSON.parse(res)
          let lan =$('#language').data("lan")
          if (data.code != 0) {
            if (login.loginStatus) {
              let str =''
              let str2 =''
              switch (lan) {
                      case 'zh-TW':
                              str = '登入'
                              str2 = '帳號已從別處登入'
                              break;
                      case 'zh-CN':
                              str = '登入'
                              str2 = '帐号已从别处登入'
                              break;
                      case 'en':
                              str = 'Sign in'
                              str2 = 'Account is already logged in from elsewhere'
                              break;
              } 
              $('#logoutBtn').text(str)

              egAlert._show(str2)
            } else {
              let str =''
              switch (lan) {
                      case 'zh-TW':
                              str = '請先登入才能開新局'
                              break;
                      case 'zh-CN':
                              str = '请先登入才能开新局'
                              break;
                      case 'en':
                              str = 'Please log in to start a new game'
                              break;
              } 
              egAlert._show(str)
            }
            returnRoom()
            return
          } else {
            if (login.userName !== username) {
              let str =''
              switch (lan) {
                      case 'zh-TW':
                              str = '請登入相同帳號或重新整理'
                              break;
                      case 'zh-CN':
                              str = '请登入相同帐号或重新整理'
                              break;
                      case 'en':
                              str = 'Please log in to the same account or refresh'
                              break;
              } 
              egAlert._show(str)
              return
            }
            if (Number(flowerBalance.TXC) < levelFun(currentRoom[1].level) && Number(flowerBalance.TXS) < levelFun(currentRoom[1].level)) {
              let str =''
              switch (lan) {
                      case 'zh-TW':
                              str = '餘額不足'
                              break;
                      case 'zh-CN':
                              str = '余额不足'
                              break;
                      case 'en':
                              str = 'Insufficient balance'
                              break;
              } 
              egAlert._show(str)
              returnRoom()
              return
            }
          }
          flower_roomInit()
        })
        replayBtn = true
      } catch (error) {
        // API 登入
        if (roomApiLogin) flower_roomInit()
        replayBtn = false
      }
    }

  })
}

function flower_roomInit() {

  // 建立遊戲
  const postData = {
    type: "gameStart", //要做的事情
    game: gameName, //遊戲名稱
    name: username, //帳號
    level: currentRoom[1].level, //遊戲等級
  }
  $.ajax({
    type: "POST",
    data: postData,
    url: postUrl,
    success: function (data) {

      currentRoom[1].data = JSON.parse(data)

      let url = is_Mobile() !== true ? `/views/game/${gameName}.html` : "/views/game/flower_mobile.html"
      $(".wrap").load(url, function () { //讀取遊戲
        $(".wrap").css({
          paddingTop: "0",
          paddingBottom: "0",
        });
        replayBtn = false
      });
    },
    error: function (error) {
      console.log(error);
    }
  });

}

/**選單案紐 */
function initNiuMenu() {

  let iconDOM = $("#info");
  let guide = GameplayGuide.init("flower");
  const betsLogs = BetsLogs.init()
  // let initMenu = GameInfoMenu.init(iconDOM, "logs", "sound", "help", "shadow", "menu", "exit");
  let initMenu = GameInfoMenu.init(iconDOM, "logs", "sound", "help", "exit");
  initMenu.setEvent("help", () => {
      guide.hasClick()
    })
    .setEvent("logs", () => betsLogs.hasClick())
    .setEvent("sound", (e, o) => {
      clickVoice(o);
    })
    .setEvent("shadow", () => {
      initMenu._deleteMenu();
      guide._deleteDOM();
      betsLogs._deleteDOM()._clearLogs()
    })
    .setEvent("exit", () => {
      returnRoom();
    });
}

/**取餘額 */
function getMoney() {
  let data = {
    type: "getRemain", //取餘額
    name: username, //使用者名稱
  }
  $.ajax({
    type: "POST",
    data: data,
    url: postUrl,
    success: function (res) {
      res = JSON.parse(res);
      flowerBalance.TXC = res.TXC
      flowerBalance.TXS = res.TXS
      // console.log(flowerBalance.TXC, flowerBalance.TXC)
      // console.log("遊戲結束取餘額", res);
      $('#item4').find('.totalSpan').text(res.TXC);
      $('#item4').find('.totalSpan2').text(res.TXS);
    }
  });
}

function levelFun(level) {
  let admission = 0
  // console.log('level', level)
  switch (level) {
    case 1:
      admission = 20
      break;
    case 2:
      admission = 60
      break;
    case 3:
      admission = 250
      break;
    case 4:
      admission = 600
      break;
  }
  return admission
}

function i18nFun() {
  // i18n
  let lan =$('#language').data("lan")
  loadProperties(lan);
  function loadProperties(lan) {
    jQuery.i18n.properties({
      //加载资浏览器语言对应的资源文件
      name: "strings", //资源文件名称
      path: "./i18n/", //资源文件路径
      mode: "map", //用Map的方式使用资源文件中的值
      language: lan,
      callback: function () {
        waitingLan(lan)
        //加载成功后设置显示内容
        $('[data-len="01"]').html($.i18n.prop("len_Fold"))
        $('[data-len="02"]').html($.i18n.prop("len_Raise"))
        $('[data-len="03"]').html($.i18n.prop("len_Ratio"))
        if(isUser){
          let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
          $('[data-len="04"]').html($.i18n.prop("len_Follow")+':' + DoubleMoney)
        }else{
          if (!determine){
            $('[data-len="04"]').html($.i18n.prop("len_Automatic"))
          }else{
            $('[data-len="04"]').html($.i18n.prop("len_Cancel"))
          }
        }
        $('[data-len="07"]').html($.i18n.prop("len_flower"))
        $('[data-len="08"]').html($.i18n.prop("len_Ante"))
        $('[data-len="09"]').html($.i18n.prop("len_Access"))
        $('[data-len="10"]').html($.i18n.prop("len_Num"))

        for (let i = 0; i < 5; i++) {
          switchFn(playNum[i] ,`06${i}`)
        }

        function switchFn(num,dataNum){
          switch (num) {
            case 0:
              $(`[data-len=${dataNum}]`).html($.i18n.prop("len_trips"));
              break;
            case 1:
              $(`[data-len=${dataNum}]`).html($.i18n.prop("len_straight_flush"));
              break;
            case 2:
              $(`[data-len=${dataNum}]`).html($.i18n.prop("len_Flush"));
              break;
            case 3:
              $(`[data-len=${dataNum}]`).html($.i18n.prop("len_straight"));
              break;
            case 4:
              $(`[data-len=${dataNum}]`).html($.i18n.prop("len_one_pair"));
              break;
            case 5:
              $(`[data-len=${dataNum}]`).html($.i18n.prop("len_Separate"));
              break;                
            case 6:
              $(`[data-len=${dataNum}]`).html($.i18n.prop("len_special"));
              break; 
          }
        }
        
        switch (roomNum) {
          case '1':
            $('[data-len="11"]').html($.i18n.prop("len_Room0"))
            break;
          case '2':
            $('[data-len="11"]').html($.i18n.prop("len_Room1"))
            break;
          case '3':
            $('[data-len="11"]').html($.i18n.prop("len_Room2"))
            break;
          case '4':
            $('[data-len="11"]').html($.i18n.prop("len_Room3"))
            break;
        }
        let loseDiv 
        if(mobile){
          loseDiv = $('.Lose img')
        }else{
          loseDiv =$('.LosePng')
        }
        switch (lan) {
          case 'zh-TW':
            loseDiv.attr('src','./images/flowerImage/Lose.png')
            $('#userLose').attr('src','./images/flowerImage/Lose.png')
            $('#Replay').css({
              'background-image': 'url(./images/flowerImage/NewGame.png)'
            })
            break;
          case 'zh-CN':
            loseDiv.attr('src','./images/flowerImage/Lose.png')
            $('#userLose').attr('src','./images/flowerImage/Lose.png')
            $('#Replay').css({
              'background-image': 'url(./images/flowerImage/NewGame.png)'
            })
            break;
          case 'en':
            loseDiv.attr('src','./images/flowerImage/loser.png')
            $('#userLose').attr('src','./images/flowerImage/loser.png')
            $('#Replay').css({
              'background-image': 'url(./images/flowerImage/new_icon.png)'
            })
            break;
        }

      }
    });
  }

  $('.sublanguage li').click(function (){
    let lan = $(this).data("lan")
    loadProperties(lan);
  })

}
 //i18n
function i18nTxtFn(CardText,num){
  // len_trips = 豹子
  // len_straight_flush = 同花順
  // len_Flush = 金花
  // len_straight = 順子
  // len_one_pair = 對子
  // len_Separate = 高牌
  // len_special = 特殊
  let Txt 
  switch (CardText) {
    case '豹子':
      Txt = $.i18n.prop("len_trips")
      playNum[num] = 0
      break;
    case '同花順':
      Txt = $.i18n.prop("len_straight_flush")
      playNum[num] = 1
      break;    
    case '金花':
      Txt = $.i18n.prop("len_Flush")
      playNum[num] = 2
      break;  
    case '順子':
      Txt = $.i18n.prop("len_straight")
      playNum[num] = 3
      break;
    case '對子':
      Txt = $.i18n.prop("len_one_pair")
      playNum[num] = 4
      break;
    case '高牌':
      Txt = $.i18n.prop("len_Separate")
      playNum[num] = 5
      break;     
    case '特殊':
      Txt = $.i18n.prop("len_special")
      playNum[num] = 6
      break;         
  }
  return Txt
}
function waitingLan(lan){
  jQuery.i18n.properties({
  name: "strings", //资源文件名称
  path: "./i18n/", //资源文件路径
  mode: "map", //用Map的方式使用资源文件中的值
  language: lan,
  callback: function () {
        $('[data-len="12"]').html($.i18n.prop("len_prompt"))
        $('#prompt-Box span').attr( "data-text0", $.i18n.prop("len_promptSpan"));
        $('[data-len="13"]').html($.i18n.prop("len_game"))
        $('[data-len="14"]').html($.i18n.prop("len_start"))
        $('.gameStart0').attr( "data-text2", $.i18n.prop("len_game") );
        $('.gameStart1').attr( "data-text3", $.i18n.prop("len_start") );
      }
  })
}