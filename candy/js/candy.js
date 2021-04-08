(function () {
 
  // let socketUrl = 'https://egbet.net:1050'
  let configWith;
  let configHeight;

  if (window.screen.availWidth <= 375){       //iphone8
    configWith = 315;
    configHeight = 339.1;
  }else if (window.screen.availWidth <= 414){ //iphone8 Pro
    configWith = 354;
    configHeight = 370;
  }else if (window.screen.availWidth <= 768){ //ipad
    configWith = 625;
    configHeight = 662;
  }
  else if (window.screen.availWidth <= 1024 && window.screen.availHeight == 768){ //ipad 橫
    configWith = 538;
    configHeight = 570;
  // }else if (window.innerWidth == 1024 && window.innerHeight <= 1254){ //ipad Pro
  //   configWith = 920;
  //   configHeight = 975;
  //   alert(window.innerWidth + "直");
  //   alert(window.innerHeight + "直");
  // }else if (window.screen.availWidth <= 1366 && window.screen.availHeight == 1024){ //ipad Pro 橫
  //   configWith = 670;
  //   configHeight = 710;
  //   alert(window.screen.availWidth + "橫");
  //   alert(window.screen.availHeight + "橫");
  }else if (window.innerWidth <= 1920){  //desktop
    configWith = 670;
    configHeight = 710;
    // alert(window.innerWidth + "橫");
    // alert(window.innerHeight + "橫");
  }else if (window.innerWidth > 1920){
    configWith = 670;
    configHeight = 710;
  }
  
  if(window.screen.availWidth <= 1024){
    $('.betInfo-Pro .nameMoney').find('.username').attr('id','userName')
    $('.betInfo-Pro .nameMoney').find('.txc').attr('class','balance TXC')
    $('.betInfo-Pro .nameMoney').find('.txs').attr('class','balance TXS')
    $('.amountBox-Pro').find('.money').attr('id', 'money');

  }else{
    $('.info .nameMoney').find('.username').attr('id','userName')
    $('.info .nameMoney').find('.txc').attr('class','balance TXC')
    $('.info .nameMoney').find('.txs').attr('class','balance TXS')
    $('.amountBox').find('.money').attr('id', 'money');

  }

  // 判斷是否為 iPad
  if (/(iPad)/i.test(navigator.userAgent)) {  
    if (window.innerHeight == 1254 || window.innerHeight == 1366){ 
      configWith = 920;
      configHeight = 975;
      // alert(window.innerWidth + "直");
      // alert(window.innerHeight + "直");
    }
  };


  // 判斷是否為 Safari
  if (navigator.userAgent.match("Safari")){
    if(window.innerWidth <= 1024){
      $('.betInfo-Pro .nameMoney').find('.username').attr('id','userName')
      $('.betInfo-Pro .nameMoney').find('.txc').attr('class','balance TXC')
      $('.betInfo-Pro .nameMoney').find('.txs').attr('class','balance TXS')
      $('.amountBox-Pro').find('.money').attr('id', 'money');
  
    }else{
      $('.info .nameMoney').find('.username').attr('id','userName')
      $('.info .nameMoney').find('.txc').attr('class','balance TXC')
      $('.info .nameMoney').find('.txs').attr('class','balance TXS')
      $('.amountBox').find('.money').attr('id', 'money');
  
    }

    if (window.innerHeight == 1254){
      configWith = 920;
      configHeight = 975;
      // alert(window.innerWidth + "直");
      // alert(window.innerHeight + "直");
    }
  }


  const config = {
    type: Phaser.AUTO,
    width: configWith,
    height: configHeight,
    // backgroundColor: '#2d2d2d',
    transparent: true,
    parent: "canvas",
    scene: {
      key:'GameScene',
      preload: preload,
      create: create,
      update: update,
    },

  };

  let game = new Phaser.Game(config);

  let betTime = document.querySelectorAll('.betTime')
  let nameMoney = document.querySelectorAll('.nameMoney')
  let times = document.querySelectorAll('.timer')
  let num = 0
  let postAry = []
  let mapAry = []
  let endAry = []
  let path = []
  let pathGraphics = []
  let pathCurve = []
  let xAry = []
  let curve = []
  let graphics = []
  let candy = []
  let candy1 = []
  let candy2 = []
  let candy3 = []
  let test4Ary = []
  let text = []
  let testGraphics = []
  let pathGraphics2 = []
  let scene
  let Mask
  let Win
  let WinText
  let Lose
  let colorAry = [0xF18E48, 0xE64D81, 0xFDD82E, 0x05A687, 0x289EDA]
  let txtInterval
  let shockInterval
  let alphaInterval
  let draw = false
  let numAry=[]
  let trend = document.getElementById('trend');
  let ctx = trend.getContext("2d");
  let drawAry =[]
  drawAry[0] = []
  let gameId = 0
  let gameIdAry = []
  let userEmit = false 
  // let userName 
  let recordAry = []
  let status =''
  let statusAry = []
  let isInterval = false
  let coin = 0
  let hidden = false
  let revealsAry= []
  // let socketUrl = SOCKET.URL
  // let apiUrl = API_URL;
  let subEn = false;
  let subCn = false;
  let subTw = true;
  
  clearInterval(alphaInterval)

  let noSocketTime = 20
  times.forEach(item=>{item.innerText = noSocketTime })
  function noSocket() {
    let T = noSocketTime === 20 ? 5000 : 1000
    setTimeout(()=>{
      noSocketTime = noSocketTime -1
      if(noSocketTime < 0) {
        T = 5000
      }else{
        num = noSocketTime
        times.forEach(item=>{item.innerText = num })
      }


      // noSocket() 
      if(num > 0)  {
        draw = false
        if(Mask)Mask.setAlpha(1)
      }
      if(num === 20){
        isInterval = false
        userEmit = false
        first()
        playVoice('bgm')
        // scene.scene.restart()
        // scene.scene.pause();
        if (window.screen.availWidth > 1024){
          scene.sys.game.destroy(true);
          game = new Phaser.Game(config);
          odds();  //沒加新的回合開始會跑板
        }

      }
      if(num === 3){
        pauseVoice('bgm')
        playVoice('time')
      } 
      if (num === 1) shock()
      if (num <= 0) {

        draw = true
        playVoice('surprise')
        MaskFn()
        drawDisable()
        clearInterval(shockInterval)
          let res={
            history:[0,1,2,3,4],
            array:[0,1,2,3,4]
          }
          // postAry = res.history
          // endAry = res.array
          // numAry.unshift(endAry)
          // for (let i = 0; i < 5; i++) {
          //   mapAry[i] = []
          //   for (let j = 0; j < postAry[i].length; j++) {
          //     let map = postAry[i][j].split(',')
          //     mapAry[i].push(map)
          //   }
          // }
        randomFn()
      }
      noSocket()
    },T)
  }
  noSocket()
  // socket = io.connect(socketUrl, { path: '/' + SOCKET.PATH + SOCKET.PREFIX });
  // socket.on("connect", () => {
  //   console.log("connect");
  //   //遊戲結束跑動畫時間6秒
  //   socket.on("candyWaitToStart", res=>{
  //     // console.log(res)

    
  //     times.forEach(item=>{
      
  //     betTime.forEach(item=>{
  //       if (window.screen.availWidth <= 414){
  //         item.style.top = '-7px'
  //       }
  //     })

  //     nameMoney.forEach(item=>{ 
  //       if (window.screen.availWidth <= 414){
  //         item.style.top = '-5px'
  //       }
  //     })
  //       if (window.screen.availWidth <= 414){
  //         item.style.fontSize = '12px'
  //         item.style.top = '-10px'
  //       }else if (window.screen.availWidth <= 768){
  //         item.style.whiteSpace = 'nowrap'
  //         item.style.top = '-7px'
  //         item.style.fontSize = '16px'
  //       }else if (window.screen.availWidth <= 1024){
  //         item.style.whiteSpace = 'nowrap'
  //         item.style.fontSize = '20px'
  //         item.style.top = '0px'
  //       }else {
  //         item.style.width = '125px'
  //         item.style.fontSize = '38px'
  //         item.style.top = '69px'
  //       } 

  //       if (window.screen.availHeight == 768){  //ipad橫
  //         item.style.width = '125px'
  //         item.style.fontSize = '38px'
  //         item.style.top = '69px'
  //       }
        
  //       // 開獎狀態
  //       if (subEn){
  //         // console.log('subEn :' + subEn);
  //         if (window.screen.availWidth >= 1024){
  //           item.style.fontSize = '30px';
  //         }
  //         item.innerText = 'Opening';
  //       }else if (subCn) {
  //         // console.log('subCn :' + subCn);
  //         item.innerText = '开奖中'
  //       }else if (subTw) {
  //         // console.log('subTw :' + subTw);
  //         item.innerText = '開獎中'
  //       }
  //     })
  //   })

  //   //遊戲ID
  //   socket.on("candyOpenNewGame", res=>{
  //     // console.log(res)
  //     $('.betId').text('# '+res.gameId)
  //     gameId = res.gameId
  //     // gameIdAry.unshift(res.gameId)
  //   })
  //   //下注時間
  //   socket.on("candyGameBetCountdown", res=>{
  //     // console.log(res)  

  //     num =res.time
  //     times.forEach(item=>{
  //       if (window.screen.availWidth <= 414){
  //         item.style.fontSize = '44px'
  //         // item.style.top = '-18px'
  //       }else if (window.screen.availWidth <= 768){
  //         item.style.width = '49px'
  //         item.style.fontSize = '34px'
  //         item.style.top = '0px'
  //       }else if (window.screen.availWidth <= 1024){
  //         item.style.width = '69px'
  //         item.style.fontSize = '44px'
  //         item.style.top = '7px'
  //       }else{
  //         item.style.width = '89px'
  //         item.style.fontSize = '80px'
  //         item.style.top = '48px'
  //       }

  //       if (window.screen.availHeight == 768){
  //         item.style.width = '89px'
  //         item.style.fontSize = '80px'
  //         item.style.top = '48px'
  //       }
  //       item.innerText = num
  //     })

  //     // betTime.forEach(item=>{
  //     //   if (window.screen.availWidth <= 414){
  //     //     item.style.top = '-20px'
  //     //   }
  //     // })

  //     // nameMoney.forEach(item=>{
  //     //   if (window.screen.availWidth <= 414){
  //     //     item.style.top = '-18px'
  //     //   }
  //     // })

      
  //     if(num > 0)  {
  //       draw = false
  //       if(Mask)Mask.setAlpha(1)
  //     }
  //     if(num === 20){
  //       isInterval = false
  //       userEmit = false
  //       first()
  //       playVoice('bgm')
  //       // scene.scene.restart()
  //       // scene.scene.pause();
  //       if (window.screen.availWidth > 1024){
  //         scene.sys.game.destroy(true);
  //         game = new Phaser.Game(config);
  //         odds();  //沒加新的回合開始會跑板
  //       }

  //     }
  //     if(num === 3){
  //       pauseVoice('bgm')
  //       playVoice('time')
  //     } 
  //     if (num === 1) shock()
  //     if (num <= 0) {

  //       draw = true
  //       playVoice('surprise')
  //       MaskFn()
  //       drawDisable()
  //       clearInterval(shockInterval)
  //       setTimeout(()=>{
  //         times.forEach(item=>{
  //           if (window.screen.availWidth <= 414){
  //             item.style.fontSize = '12px'
  //             item.style.top = '-10px'
  //           }else if (window.screen.availWidth <= 768){
  //             item.style.whiteSpace = 'nowrap'
  //             item.style.top = '-7px'
  //             item.style.fontSize = '16px'
  //           }else if (window.screen.availWidth <= 1024){
  //             item.style.whiteSpace = 'nowrap'
  //             item.style.fontSize = '20px'
  //             item.style.top = '0px'
  //           }else {
  //             item.style.width = '125px'
  //             item.style.fontSize = '38px'
  //             item.style.top = '69px'
  //           } 
  
  //           if (window.screen.availHeight == 768){  //ipad橫
  //             item.style.width = '125px'
  //             item.style.fontSize = '38px'
  //             item.style.top = '69px'
  //           }


  //           // item.innerText = '開獎中'
  //           // 開獎狀態
  //           if (subEn){
  //             // console.log('subEn :' + subEn);
  //             if (window.screen.availWidth >= 1024){
  //               item.style.fontSize = '30px';
  //             }
  //             item.innerText = 'Opening'
  //           }else if (subCn) {
  //             // console.log('subCn :' + subCn);
  //             item.innerText = '开奖中'
  //           }else if (subTw) {
  //             // console.log('subTw :' + subTw);
  //             item.innerText = '開獎中'
  //           }

  //         })
  //         betTime.forEach(item=>{
  //           if (window.screen.availWidth <= 414){
  //             item.style.top = '-7px'
  //           }
  //         })
  
  //         nameMoney.forEach(item=>{ 
  //           if (window.screen.availWidth <= 414){
  //             item.style.top = '-5px'
  //           }
  //         })
         
  //       },1000)

  //     }
  //   })
  //   //開獎資料

  //   socket.on("candyReveal", res=>{
  //     // console.log(res)
  //     postAry = res.history
  //     endAry = res.array
  //     numAry.unshift(endAry)
  //     for (let i = 0; i < 5; i++) {
  //       mapAry[i] = []
  //       for (let j = 0; j < postAry[i].length; j++) {
  //         let map = postAry[i][j].split(',')
  //         mapAry[i].push(map)
  //       }
  //     }
  //    randomFn()
     
  //   })
  // });

  function userCheckFn(){
    const getUrl = "/user/check"
    $.get(getUrl, res => {
      const data = JSON.parse(res)
      // console.log(data)
      if (data.code != 0) {
        // returnRoom()
        return
      } else{
        $('#userName').text(data.res.username)
        $('.username').text(data.res.username)
        let userName  = data.res.username
        const postData = {
          type: "getRemain", // 取餘額
          name: userName, // 使用者名稱
        }
        $.ajax({
          type: "POST",
          data: postData,
          url: MAIN_URL,
          success: function (res) {
          
            const data = JSON.parse(res)
            // console.log(data)
            $('.TXC').text(data.data.TXC)
            $('.TXS').text(data.data.TXS)
          },
          error: function (error) {
            console.log(error);
          }
        });

      }

    })
  }
  function init() {
    loadProperties($('#language').data("lan"));
    odds();
    ShowSub($('#language').data("lan"));
    // getgameid()
    // getreveals()
    // initNiuMenu()
    // userCheckFn()
    setTimeout(()=>{
      drawImg()
    },500)
  }
  init()

  function getgameid(){
    $.ajax({
      type: "get",
      url: apiUrl + '/gameid',
      success: function (res) {
        if(res.gameId === false) return
        gameId = res.gameId
        $('.betId').text('# '+ res.gameId)
        // gameIdAry.unshift(res.gameId)
        // console.log(gameIdAry)
      },
      error: function (error) {
        console.log(error)
      }
    });
  }

  function getreveals(){
    $.ajax({
      type: "get",
      url: apiUrl + '/reveals',
      success: function (res) {
        // console.log(res);
        revealsAry.splice(0)
         gameIdAry = res.data.map((item)=>{
          return item.gameId
        })
        // console.log(gameIdAry);
        let Ary = res.data.map((item)=>{
            return item.res
        })
        for (let i = 0; i < Ary.length; i++) {
          let x = Ary[i].slice(1,10).replace(/,/g, "");
          let myArray = [];
  
          function foo(x) {
              for (let j = 0; j < x.length; j++) {
                  myArray.push(Number(x.slice(j, j + 1)));
              }
          };
          foo(x); 
         
          revealsAry.push(myArray)
        }
        // console.log(revealsAry);

        setTimeout(()=>{
          drawFn()
        },1000)
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
  if (document.hidden !== undefined) {
    document.addEventListener('visibilitychange', () => {
      // console.log(document.hidden)   
      if(document.hidden){
        hidden = true
      }else{
        // clearInterval(shockInterval)
        // scene.scene.restart()
        // window.location.reload()
        if (window.screen.availWidth <= 1024){
            window.location.reload()
            hidden = false
        }
      }

    })
  }

  function first() {
    $('#box .btn').css({
      'background': 'linear-gradient(#C8388E, #651785) no-repeat'
    })
    $('#box .plus').css({
      'background': 'url(./images/candy/Icon/plusOn.svg)'
    })
    $('#box .minus').css({
      'background': 'url(./images/candy/Icon/minusOn.svg)'
    })
    $('#box .confirm').css({
      'color': '#ffffff'
    })
    $('#box .money').attr('disabled',false)
      test4Ary.splice(0)
      if(Mask)Mask.setAlpha(1)
    // if (testGraphics.length !== 0) {
      
      for (let i = 0; i < testGraphics.length; i++) {
        testGraphics[i].clear()
        testGraphics[i].destroy()
      }
      for (let i = 0; i < pathGraphics.length; i++) {
        pathGraphics[i].clear()
        pathGraphics[i].destroy()
        path[i] = undefined
        // console.log(path[i])
      }
      for (let i = 0; i < pathGraphics2.length; i++) {
        pathGraphics2[i].clear();
        pathGraphics2[i].destroy()

      }
      for (let i = 0; i < text.length; i++) {
        text[i].setColor('#400A04')
      }
      if (scene.click !== undefined) {
        if(scene.end!== undefined) {
          candy3[scene.end].setAlpha(0)
          scene.endTween.pause(true)
        }
        if(scene.top!== undefined) scene.top.pause(true)
        scene.click = undefined
        

      }
      if (scene.click2) scene.click2 = []

      for (let i = 0; i < 5; i++) {
        $('.infoText >div').eq(i).find('p').attr('class', 'multipleS')
        $('.infoTextM >div').eq(i).find('p').attr('class', 'multiple')
      }
      if(!isInterval){
        goInterval(0)
        textInterval(0)
      }
      Win.setAlpha(0)
      Lose.setAlpha(0)
     if(WinText)WinText.setText('')
    
    // }
  }


  function goInterval(i) {
    // tweensAry.splice(0)
    clearInterval(alphaInterval)
    let j = 0

    alphaInterval = setInterval(() => {
      playVoice('pickup04')
      candy1[i].setAlpha(1)
      if (i === 0) {
        j = 4
      } else {
        j = i - 1
      }
      candy1[j].setAlpha(0)
      i += 1
      if (i >= 5) {
        i = 0
      }
    }, 500)
  }

  function textInterval(i) {

    clearInterval(txtInterval)
    let j = 0

    txtInterval = setInterval(() => {
      text[i].setColor('#FFF1D4')
      
      if (i === 0) {
        j = 4
      } else {
        j = i - 1
      }
      text[j].setColor('#400A04')
      i += 1
      if (i >= 5) {
        i = 0
        // clearInterval(txtInterval)
      }

    }, 500)
  }

  function MaskFn() {
    if(Mask){
      scene.tweens.add({
        targets: Mask,
        alpha: 0,
        ease: 'Sine.easeInOut',
        duration: 5000,
      })
      // Mask.setAlpha(0)
      // Mask.x = scene.MaskX
      // Mask.y = scene.MaskY
      // let c = 1
      // let interval = setInterval(() => {
      //   c -= 0.005
      //   Mask.setAlpha(c)
      //   if (c <= 0) {
         
      //     // start()
      //     clearInterval(interval)
      //   }
      // }, 10);
    }
  }

  function shock() {
 
    let left = 0
    let top = 0
    let rector = 3
    let a = 1
    shockInterval = setInterval(() => {

      if (a === 1) {
        Mask.x += left + rector
      }
      if (a === 2) {
        Mask.y += top + rector
      }
      if (a === 3) {
        Mask.x -= left + rector
      }
      if (a === 4) {
        Mask.y -= top + rector
      }

      if (a < 4) {
        a += 1
      } else {
        a = 1
      }
      // console.log(a)
    }, 50);
  }

  function preload() {

    this.load.image('Mask', './images/candy/Mask.png')
    this.load.image('Win', './images/candy/Win.png')
    this.load.image('Lose', './images/candy/Lose.png')
    this.load.spritesheet('Items', './images/candy/Items.png', {
      frameWidth: 110,
      frameHeight: 110
    })
  }

  function create() {

    goInterval(0)
    textInterval(0)
    scene = this
    Mask = this.add.image(game.config.width / 2, game.config.height / 2 - 10, 'Mask').setDepth(10).setScale(1.05)
    Win = this.add.image((game.config.width / 2) , (game.config.height / 2 - 50), 'Win').setDepth(5).setAlpha(0)
    Lose = this.add.image((game.config.width / 2) , (game.config.height / 2), 'Lose').setDepth(5).setAlpha(0)
    
    // $('.sublanguage li').click(function (){
    //   // console.log(Mask)
    //   let lan = $(this).data("lan")
    //   // console.log(lan)
    //   let str =''
    //   switch (lan) {
    //       case 'zh-TW':
    //           Mask.setScale(1.05)
    //           break;
    //       case 'zh-CN':
    //           Mask.setScale(2)
    //           break;
    //       case 'en':
    //           Mask.setScale(3)
    //           break;
    //   }
    // }) 
                  
    scene.MaskX = Mask.x
    scene.MaskY = Mask.y
    // Mask.setAlpha(0)
    // Win.setAlpha(1)
    // Lose.setAlpha(1)

    // x: 55,195,335,475,615
    // y: 55 ,655    
    let x = (game.config.width / 100) * 82 / 5 / 2
    let y = (game.config.height / 100) * 18.3
    let y2 = (game.config.height / 100) * 81.69
    let y3 = (game.config.height / 100) * 7.746
    let y4 = (game.config.height / 100) * 92.25
    let y5 = (game.config.height / 100) * 88

    for (let i = 0; i < 5; i++) {

      curve[i] = new Phaser.Curves.Line(new Phaser.Math.Vector2(x, y), new Phaser.Math.Vector2(x, y2))
      graphics[i] = this.add.graphics().setDepth(2);
      graphics[i].lineGradientStyle(10, 0x5E5E5E, 0xCBCBCB, 0xCBCBCB, 0x5E5E5E, 1)
      curve[i].draw(graphics[i]);
      xAry.push(x)
      this.anims.create({
        key: 'Items' + i,
        frames: this.anims.generateFrameNumbers('Items', {
          start: i,
          end: i
        }),
      });
      this.anims.create({
        key: 'Items5',
        frames: this.anims.generateFrameNumbers('Items', {
          start: 5,
          end: 5
        }),
      });
      this.anims.create({
        key: 'Items' + (i + 6),
        frames: this.anims.generateFrameNumbers('Items', {
          start: i + 6,
          end: i + 6
        }),
      });
      let z = i + 12

      this.anims.create({
        key: 'Items' + z,
        frames: this.anims.generateFrameNumbers('Items', {
          start: z,
          end: z
        }),
      });

      candy[i] = this.add.sprite(x, y3, 'Items').setInteractive().setDepth(5)
      candy[i].play('Items' + i)
      candy1[i] = this.add.sprite(x, y3, 'Items').setInteractive().setDepth(4)
      candy1[i].play('Items' + (i + 6))
      candy1[i].setAlpha(0)
      candy2[i] = this.add.sprite(x, y4, 'Items').setInteractive().setDepth(5)
      candy2[i].play('Items5')
      candy3[i] = this.add.sprite(x, y4, 'Items').setInteractive().setDepth(4)
      let mtext = 13
      let ytext = 0
      if (game.config.width <= 354){  //iphone8P 8
        mtext = 6
      }else if (game.config.width <= 538){  //ipad
        ytext = 6
      }else if (game.config.width == 920){  //ipad Pro
        ytext = -10
      }

      text[i] = this.add.text(x - mtext, y5 - ytext, i + 1, {
        fontFamily: "Impact",
        fontSize: '48px',
        fill: '#400A04',
        align: 'center'
      }).setDepth(6).setStroke('#B48459', 2);
      candy3[i].setAlpha(0)
      scene.click2 = []

      if (game.config.width <= 315){
        candy[i].setScale(0.5);
        candy1[i].setScale(0.5); //糖果光影
        candy2[i].setScale(0.5);
        candy3[i].setScale(0.5);
        text[i].setScale(0.5);
        Mask.setScale(0.5);
        Win.setScale(0.6);
        Lose.setScale(0.7);
      }else if (game.config.width <= 354){  //iphone8P 8
        candy[i].setScale(0.5);
        candy1[i].setScale(0.5); //糖果光影
        candy2[i].setScale(0.5);
        candy3[i].setScale(0.5);
        text[i].setScale(0.5);
        Mask.setScale(0.55);
        Win.setScale(0.65);
        Lose.setScale(0.7);
      }else if (game.config.width <= 538){  //ipad 橫
        Mask.setScale(0.8);
      }else if (game.config.width <= 625){ //ipad 
        Mask.setScale(0.95);
      }else if (game.config.width <= 670){  //desttop
        Mask.setScale(1);
      }else if (game.config.width <= 920){  //ipad Pro
        Mask.setScale(1.4);
      }

      candy[i].on('pointerdown', function (pointer) {
        playVoice('button01a');
        // console.log(i)
        // console.log(num);
        if (num == 0){
          userEmit = true;
        }
        if(userEmit) return
        if (!draw) {
          clearInterval(alphaInterval)

          for (let i = 0; i < candy.length; i++) {
            candy1[i].setAlpha(0)
          }
          candy1[i].setAlpha(1)
          scene.click = i
        }

      })
      candy2[i].on('pointerdown', function (pointer) {
        playVoice('button02a');
        // console.log(i)
        if(userEmit) return
        if (!draw) {
          clearInterval(txtInterval)

          if (scene.click2.length === 0) {
            for (let i = 0; i < text.length; i++) {
              text[i].setColor('#400A04')
            }
          }

          text[i].setColor('#FFF1D4')

          let find = scene.click2.find(item => {
            return item === i;
          })
          if (find === i) {
            text[i].setColor('#400A04')
            let index = scene.click2.indexOf(find)
            scene.click2.splice(index, 1);
          } else {
            scene.click2.push(i)
          }

          let el = $('.infoText >div')
          let lan = $('#language').data("lan")
          for (let i = 0; i < 5; i++) {
            if (scene.click2.length === i + 1) {
              el.eq(i).find('p').attr('class', 'multipleL')
              // console.log(scene.click2);
            
              //配合修正中英文切換賠率
              if (lan == 'zh-TW'){
                $('.multipleL').css('padding-left','0px');
              }else if (lan == 'zh-CN'){
                $('.multipleL').css('padding-left','0px');
              }else if (lan == 'en'){
                $('.multipleL').css('padding-left','7px');
              }
              // el.eq(i).siblings().find('p').attr('class', 'multipleS')
            } else {
              el.eq(i).find('p').attr('class', 'multipleS')
              
              //配合修正中英文切換賠率
              if (lan == 'zh-TW'){
                $('.multipleS').css('padding-left','50px');
              }else if (lan == 'zh-CN'){
                $('.multipleS').css('padding-left','50px');
              }else if (lan == 'en'){
                $('.multipleS').css('padding-left','7px');
              }
            }
          }

          let el2 = $('.infoTextM >div')
          for (let i = 0; i < 5; i++) {
            if (scene.click2.length === i + 1) {
              // console.log('點選');
              el2.eq(i).find('p').attr('class', 'multipleM')
              el2.eq(i).siblings().find('p').attr('class', 'multiple')
            } else {
              el2.eq(i).find('p').attr('class', 'multiple')
            }
          }
        }
        // console.log(scene.click2)
      })

      x += (game.config.width / 100) * 20.895
    }

  }

 
 
  function update() {
   
    if (test4Ary.length !== 0) {
      //上色
      // console.log(path[0].vec.x,path[0].vec.y)
      for (let i = 0; i < pathGraphics.length; i++) {
        // if(hidden)   return false
        if (path[i].t === 0) {
          
          setTimeout(() => {
            pathCurve[i].getPoint(path[i].t, path[i].vec);
            pathGraphics2[i].fillStyle(colorAry[i], .5); // 顏色 透明度
            pathGraphics2[i].fillPoint(path[i].vec.x, path[i].vec.y, 18);
            pathGraphics[i].fillStyle(colorAry[i], 1); // 顏色 透明度
            pathGraphics[i].fillPoint(path[i].vec.x, path[i].vec.y, 10);
          }, i * 500);
        } else {
          pathCurve[i].getPoint(path[i].t, path[i].vec);
          pathGraphics2[i].fillStyle(colorAry[i], .5); // 顏色 透明度
          pathGraphics2[i].fillPoint(path[i].vec.x, path[i].vec.y, 18);
          pathGraphics[i].fillStyle(colorAry[i], 1); // 顏色 透明度
          pathGraphics[i].fillPoint(path[i].vec.x, path[i].vec.y, 10);
        }
        //  console.log(path[i].t)
        if (path[4].t === 1)test4Ary.splice(0)
      }
    }
  }

  function drawDisable(){
    clearInterval(alphaInterval)
    clearInterval(txtInterval)
    // pauseVoice('bgm')
    if(!userEmit){
      scene.click = undefined
      scene.click2 = []
      for (let i = 0; i < candy.length; i++) {
        candy1[i].setAlpha(0)
      }
      for (let i = 0; i < text.length; i++) {
        text[i].setColor('#400A04')
      }
      // goInterval(0)
      // textInterval(0)
      isInterval =true
      $('#box .btn').css({
        'background': 'linear-gradient(180deg, #D9D9D9 0%, #888888 81%) no-repeat'
      })
      $('#box .plus').css({
        'background': 'url(./images/candy/Icon/plusOff.svg)'
      })
      $('#box .minus').css({
        'background': 'url(./images/candy/Icon/minusOff.svg)'
      })
      $('#box .confirm').css({
        'color': '#787F8E'
      })
      $('#box .money').attr('disabled',true)
    }
  }
  function randomFn() {

    //橫線
    let k = 0
    let X = (game.config.width / 100) * 82 / 5 / 2
    let X2 = (game.config.width / 100) * 20.89
    // let Y = (game.config.height / 100) * 33.8
    let Y = (game.config.height / 100) * 25
    // let Y2 = (game.config.height / 100) * 35.21 / 10
    let Y2 = (game.config.height / 100) * 50 / 10
 
    testGraphics.splice(0)
    // console.log(testGraphics.length)
    for (let i = 0; i < mapAry.length; i++) {
     
      for (let j = 0; j < mapAry[i].length; j++) {
       
        if (j % 2 === 0) {

          let x = (Number(mapAry[i][j][0])) * X2 + X
          let y = Number(mapAry[i][j][1]) * Y2 + Y
          let a = (Number(mapAry[i][j + 1][0])) * X2 + X
          let b = Number(mapAry[i][j][1]) * Y2 + Y
          let test = new Phaser.Curves.Line(new Phaser.Math.Vector2(x, y), new Phaser.Math.Vector2(a, b))
          testGraphics[k] = scene.add.graphics().setDepth(.5);
          testGraphics[k].lineGradientStyle(10, 0x5E5E5E, 0x5E5E5E, 0xCBCBCB, 0xCBCBCB, 1)
          test.draw(testGraphics[k]);
          k += 1
        }
      }
    }
    // if(!hidden) {
      setTimeout(()=>{
        start()
      },2000)
    // }

  }

  function start() {

    if (mapAry.length === 0) return false
    pathGraphics.splice(0)
    pathGraphics2.splice(0)
    pathCurve.splice(0)

    //路徑線
      for (let i = 0; i < candy.length; i++) {
        path[i] = {
          t: 0,
          vec: new Phaser.Math.Vector2()
        };
        pathGraphics[i] = scene.add.graphics().setDepth(3).setName('cache');
        pathGraphics2[i] = scene.add.graphics().setDepth(3).setName('cache');
        pathGraphics2[i].setAlpha(0)
        pathCurve[i] = new Phaser.Curves.Path(candy[i].x, candy[i].y + (game.config.height / 100) * 10.56)
        // pathGraphics[i].lineStyle(10, 0xffffff, .5); // 寬度 顏色 透明度
      }
    

    let i = 0
    let pathInterval = setInterval(() => {
      if(i === scene.click){
        pathGraphics[scene.click].setDepth(3.5) 
        pathGraphics2[scene.click].setDepth(3.5) 
      }

      function run(i){
        let X = (game.config.width / 100) * 82 / 5 / 2
        let X2 = (game.config.width / 100) * 20.89
        // let Y = (game.config.height / 100) * 33.8
        let Y = (game.config.height / 100) * 25
        // let Y2 = (game.config.height / 100) * 35.21 / 10
        let Y2 = (game.config.height / 100) * 50 / 10
        let Y3 = (game.config.height / 100) * 80.985
  
        for (let j = 0; j < mapAry[i].length; j++) {
          let x = (Number(mapAry[i][j][0])) * X2 + X
          let y = Number(mapAry[i][j][1]) * Y2 + Y
          pathCurve[i].lineTo(x, y);
          test4Ary.push(x, y)
        }
  
        let z = (Number(mapAry[i][mapAry[i].length - 1][0])) * X2 + X
        pathCurve[i].lineTo(z, Y3)
  
        scene.tweens.add({
          targets: path[i],
          t: 1,
          ease: 'Sine.easeInOut',
          duration: 4000,
        });
      }
      run(i)
      // playVoice('flow')
      i += 1
      
      if(i < 5)  playVoice('flow')
      if(i === 5) playVoice('slowflow')
      if (i >= 5) {

        clearInterval(pathInterval)
        setTimeout(() => {

          if (scene.click !== undefined) {
            isInterval =false
            if(!userEmit) return 
            candy1[scene.click].setAlpha(1)
            // tweensAry[scene.click].resume()
            scene.top = scene.tweens.add({
              targets: candy1[scene.click],
              alpha: .1,
              ease: 'Sine.easeInOut',
              repeat: -1,

            });
            let z = scene.click + 12
            scene.end = endAry.indexOf(scene.click)
            let find = scene.click2.find(item => {
              return item === scene.end
            })
            let payMoney = 0
            if (find === scene.end) {
              text[scene.end].setColor('#F8E71C')
              playVoice('win')
              Win.setAlpha(1)
              let userName = $('#userName').text()
              const postData = {
                type: "getRemain", // 取餘額
                name: userName, // 使用者名稱
              }
             
              $.ajax({
                type: "POST",
                data: postData,
                url: MAIN_URL,
                success: function (res) {
                
                  const data = JSON.parse(res)
                  // console.log(data)
                  $('.TXC').text(data.data.TXC)
                  $('.TXS').text(data.data.TXS)
                },
                error: function (error) {
                  console.log(error);
                }
              });
              switch (scene.click2.length) {
                case 1:
                  payMoney =coin* 5 * 0.9
                  break;
                case 2:
                  payMoney =coin* 2.5 * 0.9
                  break;
                case 3:
                  payMoney =coin* 1.6 * 0.9
                  break;
                case 4:
                  payMoney =coin* 1.25 * 0.9
                  break;
                case 5:
                  payMoney =coin* 1 * 0.9
                  break;
              }
              status = 'win'
              payMoney = payMoney.toFixed(2)
              color = "color:#85FF00"

              let fontSize = "";
              window.screen.availWidth > 1024 ?  fontSize = '120px' : fontSize = '60px'
              
              WinText = scene.add.text( candy[4].x, Win.y+50, payMoney, {
                fontFamily: "Arial-BoldMT",
                border: '1px solid #417505',
                fontSize: fontSize,
                fill: '#7ED321',
                rtl:true,
              }).setDepth(6).setStroke('#417505', 5).setShadow(2, 2, "rgba(0,,0,0,.5)", 2, true, true);

            }else{
              playVoice('powerdown07')
              Lose.setAlpha(1)
              status = 'lose' 
              payMoney = coin
              color = "color:#FF0000"
              payMoney ='-'+(payMoney * 1).toFixed(2)
            }

            statusAry.unshift({
              status:status,
              payMoney:payMoney,
              color:color
            })
            candy3[scene.end].play('Items' + z)
            candy3[scene.end].setAlpha(1)
            scene.endTween = scene.tweens.add({
              targets: candy3[scene.end],
              alpha: .1,
              ease: 'Sine.easeInOut',
              repeat: -1,

            });

            pathGraphics[scene.click].setDepth(5)
            pathGraphics2[scene.click].setAlpha(1)
            pathGraphics2[scene.click].setDepth(1.5)
            scene.tweens.add({
              targets: pathGraphics2[scene.click],
              alpha: .1,
              ease: 'Sine.easeInOut',
              repeat: -1,
            });
          }
          
          getreveals()
          betRecordEnd()
          userEmit =false
          // test()
        }, 4000)
      }
    }, 500);
  }

  var bet = false;
  var lot = false;

  // 投注紀錄
  $("#open_bet").click(function () {
    bet = !bet;
    if (bet) {
      $(".bet").css({
        left: "0px"
      });
    } else {
      $(".bet").css({
        left: "-250px"
      });
    }
    if (window.screen.availWidth <= 768){
      $(".lottery").css({
        right: "-250px"
      });
      lot = false
    }
  })

  // 開獎紀錄
  $("#open_lottery").click(function () {
    lot = !lot;
    if (lot) {
      $(".lottery").css({
        right: "0px"
      });
    } else {
      $(".lottery").css({
        right: "-250px"
      });
    }
    if (window.screen.availWidth <= 768){
      $(".bet").css({
        left: "-250px"
      });
      bet = false
    }
  })
  // 減少金額
  $('.amountBox .minus').click(() => {
    playVoice('button04a');
    if(userEmit) return;
    if(draw)return
    let money = Number($('#money').val())
    money -= 1
    if (money <= 0) return
    $('#money').val(money)

    let bonus1 = money * 5 * 0.9;
    bonus1 = bonus1.toFixed(2);
    $("#bonus1").text(bonus1);
    let bonus2 = money * 2.5 * 0.9;
    bonus2 = bonus2.toFixed(2);
    $("#bonus2").text(bonus2);
    let bonus3 = money * 1.6 * 0.9;
    bonus3 = bonus3.toFixed(2);
    $("#bonus3").text(bonus3);
    let bonus4 = money * 1.25 * 0.9;
    bonus4 = bonus4.toFixed(2);
    $("#bonus4").text(bonus4);
    let bonus5 = money * 1 * 0.9;
    bonus5 = bonus5.toFixed(2);
    $("#bonus5").text(bonus5);
  })
  // 增加金額
  $('.amountBox .plus').click(() => {
    playVoice('button03a');
    if(userEmit) return;
    if(draw)return
    let money = Number($('#money').val())
    money += 1
    $('#money').val(money)

    let bonus1 = money * 5 * 0.9;
    bonus1 = bonus1.toFixed(2);
    $("#bonus1").text(bonus1);
    let bonus2 = money * 2.5 * 0.9;
    bonus2 = bonus2.toFixed(2);
    $("#bonus2").text(bonus2);
    let bonus3 = money * 1.6 * 0.9;
    bonus3 = bonus3.toFixed(2);
    $("#bonus3").text(bonus3);
    let bonus4 = money * 1.25 * 0.9;
    bonus4 = bonus4.toFixed(2);
    $("#bonus4").text(bonus4);
    let bonus5 = money * 1 * 0.9;
    bonus5 = bonus5.toFixed(2);
    $("#bonus5").text(bonus5);
  })
  // 加減金額動畫
  $('.amountBox .minus').mousedown(() => {
    $('.amountBox .minus').css({
      'transform': 'scale(1.2)'
    })
  })
  $('.amountBox .plus').mousedown(() => {
    $('.amountBox .plus').css({
      'transform': 'scale(1.2)'
    })
  })
  $('.amountBox .minus').mouseup(() => {
    $('.amountBox .minus').css({
      'transform': 'scale(1)'
    })
  })
  $('.amountBox .plus').mouseup(() => {
    $('.amountBox .plus').css({
      'transform': 'scale(1)'
    })
  })
  
  //即時變動可贏金額
  var obj = {};
  var val = [];
  var bonu = ["bonus1", "bonus2", "bonus3", "bonus4", "bonus5"];
　Object.defineProperty(obj,"newProp",{
　　get:function(){
　　　return obj;
　　},
　　set:function(newVal){
      for (var i = 0; i < 5; i++){
        val[i] = [];
        for (var j = 0; j < newVal.length; j++){
          val[j] = newVal[j];
      　　document.getElementById(bonu[i]).innerHTML = Number(val[i]).toFixed(2);
        }
      }
　　}
　})

　document.addEventListener("keyup",function(e){
　　obj.newProp = bonus();
　})

  // 可贏金額
  function bonus(){
    let money = Number($('#money').val());
    let bonusAry=[]
    let bonus1 = money * 5 * 0.9;
    let bonus2 = money * 2.5 * 0.9;
    let bonus3 = money * 1.6 * 0.9;
    let bonus4 = money * 1.25 * 0.9;
    let bonus5 = money * 1 * 0.9;
    bonusAry.push(bonus1,bonus2,bonus3,bonus4,bonus5)
    return bonusAry
  }

  // 確認下注
  $('.confirm').click(function(){
    // console.log('下注');
    playVoice('coin05')
    if(scene.click === undefined || scene.click2.length === 0 ) return
    if(!login.loginStatus) {
      if ($('#language').data("lan") == 'zh-TW'){
        egAlert._show('請先登入')
        return 
      }else if ($('#language').data("lan") == 'zh-CN'){
        egAlert._show('请先登入')
        return 
      }else if ($('#language').data("lan") == 'en'){
        egAlert._show('Please log in to select a room')
        return 
      }else if ($('#language').data("lan") == 'th-Th'){
        egAlert._show('กรุณาเข้าสู่ระบบก่อน')
        return 
      }
    } 

    if(userEmit) return
    if(draw)return

    //下注金額若是小於可下注籌碼
    if (Number($('#money').val()) > Number($('.balance.TXC').text()) && Number($('#money').val()) > Number($('.balance.TXS').text())){
      let lan =$('#language').data("lan")
      let txt = ''
      switch (lan) {
        case 'zh-TW':
                txt = '下注金額不足'
                break;
        case 'zh-CN':
                txt = '下注金额不足'
                break;
        case 'en':
                txt = 'Insufficient bet amount'
                break;
      }
      egAlert._show(txt);
      return;
    }
    //下注金額為0無法下注
    if ($('#money').val() == 0){
      let lan =$('#language').data("lan")
      let txt = ''
      switch (lan) {
        case 'zh-TW':
                txt = '下注金額不能為0'
                break;
        case 'zh-CN':
                txt = '下注金额不能为0'
                break;
        case 'en':
                txt = 'Bet amount cannot be 0'
                break;
      }
      egAlert._show(txt);
      return;
    }

    let userName = $('#userName').text()
    const postData ={
      type: "bets", // => 固定值
      bets: JSON.stringify({ // => 投注資料
          topLine: [scene.click+1], // => 上排的糖果編號（1 到 5）
          btmLine: scene.click2.map((item)=>{
            return item+1
          }), // => 下排的巧克力編號（1 到 5，順序隨意）
      }),
      coin: $('#money').val(),  // => 下注金額
      gameId: gameId, // => 遊戲編號（從 socket 拿）
      username: userName
    }
    // console.log(postData)
    $.ajax({
      type: "POST",
      data: postData,
      url: apiUrl + '/bets',
      success: function (res) {
        const data = JSON.parse(res)

        // console.log(data);
        $('.TXC').text(Number(data.balance.TXC).toFixed(2))
        $('.TXS').text(Number(data.balance.TXS).toFixed(2))
        recordAry.unshift({
          click: scene.click+1,
          click2: scene.click2.map((item)=>{
            return item+1
          }),
          gameId:gameId,
          coin:$('#money').val()
        })
        // egAlert._show('下注成功')
        $('.betStatus').css({
          'visibility': 'visible'
        })
        if (subTw){
          $('.betStatus span').text('下注成功')
        }else if (subCn) {
          $('.betStatus span').text('下注成功')
        }else if (subEn) {
          $('.betStatus span').text('Successful bet')
        }
        // $('.betStatus span').text('下注成功')
        coin = $('#money').val()
        $('#box .btn').css({
          'background': 'linear-gradient(180deg, #D9D9D9 0%, #888888 81%) no-repeat'
        })
        $('#box .plus').css({
          'background': 'url(./images/candy/Icon/plusOff.svg)'
        })
        $('#box .minus').css({
          'background': 'url(./images/candy/Icon/minusOff.svg)'
        })
        $('#box .confirm').css({
          'color': '#787F8E'
        })
        $('#box .money').attr('disabled',true)


        setTimeout(()=>{
          betRecord()
          $('.betStatus').css({
            'visibility': 'hidden'
          })
        },2000)
      },
      error: function (error) {
        console.log(error);
        // egAlert._show('下注失敗')
        $('.betStatus').css({
          'visibility': 'visible'
        })
        if (subTw){
          $('.betStatus span').text('下注失敗')
        }else if (subCn) {
          $('.betStatus span').text('下注失败')
        }else if (subEn) {
          $('.betStatus span').text('Bet failed')
        }
        // $('.betStatus span').text('下注失敗')
        setTimeout(()=>{
          $('.betStatus').css({
            'visibility': 'hidden'
          })
        },2000)
        userEmit = false
      }
    });

    userEmit = true
  })

  // 增加金額(平板、手機)
  $('.amountBox-Pro .plus').click(() => {
    playVoice('button03a');
    if(userEmit) return
    if(draw)return
    let money = Number($('#money').val())
    money += 1
    $('#money').val(money)

    let bonus1 = money * 5 * 0.9;
    bonus1 = bonus1.toFixed(2);
    $("#bonus6").text(bonus1);
    let bonus2 = money * 2.5 * 0.9;
    bonus2 = bonus2.toFixed(2);
    $("#bonus7").text(bonus2);
    let bonus3 = money * 1.6 * 0.9;
    bonus3 = bonus3.toFixed(2);
    $("#bonus8").text(bonus3);
    let bonus4 = money * 1.25 * 0.9;
    bonus4 = bonus4.toFixed(2);
    $("#bonus9").text(bonus4);
    let bonus5 = money * 1 * 0.9;
    bonus5 = bonus5.toFixed(2);
    $("#bonus10").text(bonus5);
  })
  // 減少金額
  $('.amountBox-Pro .minus').click(() => {
    playVoice('button04a');
    if(userEmit) return
    if(draw)return
    let money = Number($('#money').val())
    money -= 1
    if (money <= 0) return
    $('#money').val(money)

    let bonus1 = money * 5 * 0.9;
    bonus1 = bonus1.toFixed(2);
    $("#bonus6").text(bonus1);
    let bonus2 = money * 2.5 * 0.9;
    bonus2 = bonus2.toFixed(2);
    $("#bonus7").text(bonus2);
    let bonus3 = money * 1.6 * 0.9;
    bonus3 = bonus3.toFixed(2);
    $("#bonus8").text(bonus3);
    let bonus4 = money * 1.25 * 0.9;
    bonus4 = bonus4.toFixed(2);
    $("#bonus9").text(bonus4);
    let bonus5 = money * 1 * 0.9;
    bonus5 = bonus5.toFixed(2);
    $("#bonus10").text(bonus5);
  })

  // 加減金額動畫(平版、手機)
  $('.amountBox-Pro .minus').click(() => {
    $('.amountBox-Pro .minus').css({
      'transform': 'scale(1.2)'
    })
    minuScale(); 
  })
  $('.amountBox-Pro .plus').click(() => {
    $('.amountBox-Pro .plus').css({
      'transform': 'scale(1.2)'
    })
    plulsScale();
  })
  function minuScale(){
    setTimeout(() => {
      $('.amountBox-Pro .minus').css({
        'transform': 'scale(1)'
      })  
    }, 50);
  }
  function plulsScale(){
    setTimeout(() => {
      $('.amountBox-Pro .plus').css({
        'transform': 'scale(1)'
      })
    }, 50);
  }

  //平板、手機輸入check用
  $('#money').keypress(function(e){
    if (e.keyCode == 13){
    let money = Number($('#money').val())
    $('#money').val(money)

    let bonus1 = money * 5;
    bonus1 = bonus1.toFixed(2);
    $("#bonus6").text(bonus1);
    let bonus2 = money * 2.5;
    bonus2 = bonus2.toFixed(2);
    $("#bonus7").text(bonus2);
    let bonus3 = money * 1.6;
    bonus3 = bonus3.toFixed(2);
    $("#bonus8").text(bonus3);
    let bonus4 = money * 1.25;
    bonus4 = bonus4.toFixed(2);
    $("#bonus9").text(bonus4);
    let bonus5 = money * 1;
    bonus5 = bonus5.toFixed(2);
    $("#bonus10").text(bonus5);
    }
  })

  //走勢圖
  function drawImg(){
  
    if (trend.getContext) {
      let img = []
      let x = 40
      let y = 30
      
      for (let i = 0; i < 5; i++) {
        img[i] = new Image()
        img[i].src = `./images/candy/${i+1}.png`
        img[i].onload = function () {
          x += 35
          ctx.drawImage(img[i], x, y, 30, 30)
          let point = [x, y]
          // imgAry.push(point)
          if(drawAry[0].length<5) drawAry[0].push(point)
          

        }
      }
    }
  }
  

  function drawFn() {
    if (trend.getContext) {
      ctx.clearRect(0,0,trend.width,trend.height); 
      drawImg() 
      // $("#lotbox").empty()
      if(revealsAry.length > 10) {
        document.querySelector('.lotteryWarp').style.overflowX = 'hidden';
      }
      let y2 = 50
      let color = ['#FF8932', '#E64D81', '#FDD82E', '#05A687', '#006FBD']
      // let numLength = numAry.length<= 20 ? numAry.length : 20
      // console.log(revealsAry)
      for (let i = 0; i < revealsAry.length; i++) {
        drawAry[i+1] = []
        y2 += 50
        let x2 = 55
        for (let j = 0; j < 5; j++) {
          x2 += 35
          ctx.beginPath();
          ctx.arc(x2, y2, 10, 0, Math.PI * 2, true);
          ctx.fillStyle = color[revealsAry[i][j]];
          ctx.closePath();
          ctx.fill();
          ctx.font = "12px Noto Sans Cjk";
          ctx.fillStyle = '#ffffff';
          ctx.fillText(j+1 , x2 - 3, y2 + 4);
          ctx.closePath();
          let point = [x2, y2]
          drawAry[i+1].push(point)

        }
   
      }

      let x3 = 7
      let y3 = 48

      for (let i = 0 ; i < revealsAry.length; i++) {
  
        let  str = '# '+  String(gameIdAry[i]).slice(2,8)
        let  str1 = String(gameIdAry[i]).slice(8) 

        y3+=50
        for (let j = 0; j < 5; j++) {
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.strokeStyle = color[revealsAry[i][j]];
          let y = revealsAry[i][j]
          let o = revealsAry[i-1] || [0,1,2,3,4]
          let k = o.indexOf(y)
          if(i===0){

            ctx.moveTo(drawAry[i][k][0]+15, drawAry[i][k][1] + 25);
            ctx.lineTo(drawAry[i + 1][j][0], drawAry[i + 1][j][1] - 10);
          }else{
            ctx.moveTo(drawAry[i][k][0], drawAry[i][k][1] + 10);
            ctx.lineTo(drawAry[i + 1][j][0], drawAry[i + 1][j][1] - 10);
          }
      
          ctx.stroke();
        }

        ctx.font = "14px Noto Sans Cjk";
        ctx.fillStyle = '#ffffff';
        ctx.fillText(str , x3, y3);
        ctx.fillText(str1 , x3+10, y3+18);

      }

    }
  }
  //投注紀錄

  function betRecord(){

    if(recordAry.length===0) return

      for (let i = 0; i < 1; i++) {
        
        let html = `
        <div class="item">
          <div class="number">
            <div>
              <span class="item_id"># ${recordAry[i].gameId}</span>
            </div>
           
          </div>
          <div class="score">
            <div>
            <img src="./images/candy/${recordAry[i].click}.png"> <span>${recordAry[i].click2.join(' ')} </span>
            
            </div>
            <div>
              <h4>${Number(recordAry[i].coin)}</h4>
            </div>
          </div>`
       
          $('.betItem').prepend(html)
      }
  }
  function betRecordEnd(){
    
    if(recordAry.length===0) return
    if(statusAry.length===0) return
    if(recordAry.length !== statusAry.length) return
    $('.betItem').empty()
    // console.log(recordAry)
    // console.log(statusAry)
      for (let i = 0; i < statusAry.length; i++) {
        
        let html = `
        <div class="item">
          <div class="number">
            <div>
              <span class="item_id"># ${recordAry[i].gameId}</span>
            </div>
            <h4  style=${statusAry[i].color}>${statusAry[i].payMoney}</h4>    
          </div>
          <div class="score">
            <div>
            <img src="./images/candy/${recordAry[i].click}.png"> <span>${recordAry[i].click2.join(' ')} </span>
            
            </div>
            <div>
              <h4>${Number(recordAry[i].coin)}</h4>
            </div>
          </div>`
       
          $('.betItem').append(html)
      }
  }


  // 解決切換至別的遊戲後，返回糖果時聲音 bug
  $('.game-menu > a').click(function(){
    clearInterval(alphaInterval);
  })
  $('.slide-menu').click(function(){
    console.log('手機menu');
    $('.game-menu > a').click(function(){
      clearInterval(alphaInterval)
      console.log('切換手機game');
    })
  })

  
  // 動態語言切換(控制開獎狀態)
  function ShowSub(sub){
    this.sub = sub;
    // console.log('ShowSub :' + this.sub);
    if (this.sub == 'zh-TW'){
      subTw = true;
      subCn = false;
      subEn = false;
    }else if (this.sub == 'zh-CN'){
      subCn = true;
      subTw = false;
      subEn = false;
    }else if (this.sub == 'en'){
      subEn = true;
      subTw = false;
      subCn = false;
    }
  }

  // // 切換多國語言
  // $('#language').change(function(){
  //   // console.log($('#language').val());
  //   loadProperties($('#language').val());
  //   ShowSub($('#language').val());
    
  //   // 切換語言時清空所選的號碼
  //   scene.click2.splice(0);
  //   // console.log(scene.click2);
  //   // console.log(scene.click2.length);
  //   if (scene.click2.length === 0) {
  //     for (let i = 0; i < text.length; i++) {
  //       text[i].setColor('#400A04')
  //     }
  //   }

    
  //   // 動態調整因切換語言造成的跑版
  //   // 確認下注(手機、平板)
  //   if (window.screen.availWidth <= 414){
  //     if ($('#language').val() == 'zh-TW'){
  //       $('.confirm').css('padding','3px 8px 3px 10px');
  //     }else if ($('#language').val() == 'zh-CN'){
  //       $('.confirm').css('padding','3px 8px 3px 10px');
  //     }else if ($('#language').val() == 'en'){
  //       $('.confirm').css('padding','4px 12px 3px 13px');
  //     }
  //   }else if (window.screen.availWidth <= 1024){
  //     if ($('#language').val() == 'zh-TW'){
  //       $('.confirm').css('padding','3px 14px 3px 16px');
  //     }else if ($('#language').val() == 'zh-CN'){
  //       $('.confirm').css('padding','3px 14px 3px 16px');
  //     }else if ($('#language').val() == 'en'){
  //       $('.confirm').css('padding','5px 19px 3px 19px');
  //     }
  //   }

  //   odds();   // 修正中英文切換賠率跑版(桌機)
  // })


  // 切換多國語言
  $('.sublanguage li').click(function (){
    let lan = $(this).data("lan");
    // console.log('Now is：' + lan);
    loadProperties(lan);
    ShowSub(lan);
    // 切換語言時清空所選的號碼
    scene.click2.splice(0);
    if (scene.click2.length === 0) {
      for (let i = 0; i < text.length; i++) {
        text[i].setColor('#400A04')
      }
    }
    // 動態調整因切換語言造成的跑版
    // 確認下注(手機、平板)
    if (window.screen.availWidth <= 414){
      if (lan == 'zh-TW'){
        $('.confirm').css('padding','3px 8px 3px 10px');
      }else if (lan == 'zh-CN'){
        $('.confirm').css('padding','3px 8px 3px 10px');
      }else if (lan == 'en'){
        $('.confirm').css('padding','4px 12px 3px 13px');
      }
    }else if (window.screen.availWidth <= 1024){
      if (lan == 'zh-TW'){
        $('.confirm').css('padding','3px 14px 3px 16px');
      }else if (lan == 'zh-CN'){
        $('.confirm').css('padding','3px 14px 3px 16px');
      }else if (lan == 'en'){
        $('.confirm').css('padding','5px 19px 3px 19px');
      }
    }

    odds();   // 修正中英文切換賠率跑版(桌機)
  }) 

  
  // 修正中英文切換賠率跑版(桌機)
  function odds(){
    let lan = $('#language').data("lan")
    if (window.screen.availWidth > 1024){
      if (lan == 'zh-TW'){
        $('.multipleS').css('padding-left','50px');
      }else if (lan == 'zh-CN'){
        $('.multipleS').css('padding-left','50px');
      }else if (lan == 'en'){
        $('.multipleS').css('padding-left','7px');
      }
    }
  }

})()