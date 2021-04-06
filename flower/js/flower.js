// 為0時有兩個玩家User和對手，增加對手玩家改變其數值 數值為0~3配合連線人數改變
var initLen = 3;
var playerItem = document.querySelector(".player");
var userPlayer = document.querySelector("#item4");
var chipsimgBox1 = document.querySelector("#chipsimgBox1");
var chipsBox = document.querySelector("#chipsBox");
var chipsimgBoxLen = document.querySelectorAll(".chipsimgBox").length;
var eye = document.querySelector("#eye");
var cloneEye = document.querySelector("#cloneEye");
var chipsWarp = document.querySelector(".chipsWarp");
var chipsimgBox = document.querySelectorAll(".chipsimgBox");
var total = 0;
var totalMoney = document.querySelector("#totalMoney");
var payMoney = document.querySelector("#payMoney");
var UserMoney = document.querySelector("#UserMoney");
var playerLen;
var initMoney = Number(initLen + 2);
var boderflag = true;
var createBox = document.querySelector(".createBox");
var User = true;
var isUser = false;
var determine = false;
var Poker = document.querySelector("#Poker");
var showPoker = document.querySelector("#showPoker");
var chipsDesktop = document.querySelector(".chipsDesktop");
var totalRound = 5
var Follow = document.querySelector("#Follow");
var follow_Txt = document.querySelector("#follow_Txt");
var widthTimeout;
var compare = document.querySelector("#compare");
var compareEnd = document.querySelector("#compareEnd");
var compareWin = document.querySelector("#compareWin");
var compareLose = document.querySelector("#compareLose");
var UserShow = false
var left1
var left2
var top1
var Txt = $.i18n.prop("len_Separate");
var usernum = 4;
var isShow = false
var Double = false
var zIndex = 1
var auto = false
var oneMoney = false



function randomFun(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgFun(min, max, n) {
  let imgAry = [n]
  for (let i = 0; i < n; i++) {
    let random = 0
    let exist
    do {
      exist = false
      random = randomFun(min, max)
      if (imgAry.indexOf(random) !== -1) exist = true
    }
    while (exist)
    imgAry[i] = random
  }
  return imgAry
}
//取得座標位置
function getPosition(element) {
  let x = 0;
  let y = 0;
  while (element) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }
  return {
    x: x,
    y: y
  };
}
// 移動座標計算
function positionFun(a, b) {
  let x = 0;
  let y = 0;
  if (a.x > b.x) {
    x = -(a.x - b.x);
  } else {
    x = b.x - a.x;
  }
  if (a.y > b.y) {
    y = -(a.y - b.y);
  } else {
    y = b.y - a.y;
  }
  return {
    x: x,
    y: y
  };
}
// 拆解牌堆，供以分析，並且按數字大小排序
var checkCardFlower = card => {
  let setting = {
    0: "方塊",
    1: "梅花",
    2: "紅桃",
    3: "黑桃"
  }
  let type = Math.floor(card / 13)
  let num = card % 13
  if (num === 0) {
    num = 13
    type -= 1
  }

  return {
    type: type,
    num: num,
    card: card,
    name: setting[type]
  }
}
// 拆解牌堆，供以分析，並且按數字大小排序(二維)
var analysisCardFlower = cardPiles => {
  let result = []
  cardPiles.map((item, i) => {
    // const cardPile = item.split(",")
    result[i] = []
    item
      .map(card => {
        if (card.length != 0) result[i].push(checkCardFlower(card))
      })
    result[i]
      .sort((a, b) => a.num - b.num)
  })
  return result
}
// 拆解牌堆，供以分析，並且按數字大小排序(一維)
var CardsSort = cardPile => {
  let result = []

  cardPile
    .map(card => {
      if (card.length != 0) result.push(checkCardFlower(card))
    })
  result
    .sort((a, b) => a.num - b.num)
  return result
}
//放籌碼範圍
function desktopPosition() {

  let desktopPosition = getPosition(chipsDesktop);
  let desktopWidth = chipsDesktop.offsetWidth;
  let desktopHeight = chipsDesktop.offsetHeight;
  let desktopWidth2 = desktopPosition.x + desktopWidth / 2;
  let desktopHeight2 = desktopPosition.y + desktopHeight / 2;
  let desktopPosition2 = {
    x: desktopWidth2,
    y: desktopHeight2
  };
  let randomchipsX = randomFun(desktopPosition.x, desktopPosition2.x);
  let randomchipsY = randomFun(desktopPosition.y, desktopPosition2.y);

  let randomchips = {
    x: randomchipsX,
    y: randomchipsY
  };
  return randomchips
}
//生成DOM
function init() {
  var playerItem = document.querySelector(".player");
  let box = document.querySelector(".box")
  for (let i = 0; i < initLen; i++) {
    let clone = playerItem.cloneNode(true);
    box.appendChild(clone);
    userPlayer.before(clone);
    let idName = "item" + Number(i + 1);
    clone.setAttribute("id", idName);
  }
  for (let i = initLen - 1; i >= 0; i--) {
    let clone2 = createBox.cloneNode(true);
    box.appendChild(clone2);
    createBox.after(clone2);
    let idName2 = "createBox" + Number(i + 1);
    clone2.setAttribute("id", idName2);

  }
  document.querySelectorAll(".chipsimgBox").forEach(function (item, index) {
    let idName = "chipsimgBox" + Number(index + 1);
    item.setAttribute("id", idName);
  });

  document.querySelectorAll(".createBox").forEach(function (item) {

    let clone2 = chipsimgBox1.cloneNode(true);
    clone2.style.position = "absolute";
    clone2.style.top = "0";
    clone2.style.left = "0";
    item.querySelector(".itemRight").appendChild(clone2);
    for (let i = 0; i < chipsimgBoxLen; i++) {
      let num = i + 1;
      let clone3 = document
        .querySelector("#chipsimgBox" + num)
        .cloneNode(true);
      item.querySelector(".itemRight").appendChild(clone3);
      clone3.style.position = "absolute";
      clone3.style.top = "0";
      clone3.style.left = "0";
      clone3.style.visibility = "hidden";
    }
  });
  document.querySelectorAll(".progress").forEach(function (item, index) {
    let idName = "progress" + Number(index);
    item.setAttribute("id", idName);
  });
  document.querySelectorAll(".progress-bar").forEach(function (item, index) {
    let idName = "progressbar" + Number(index);
    item.setAttribute("id", idName);
    item.setAttribute("style", 'height:100%');
  });
  playerLen = document.querySelectorAll(".player").length;

}
init();
//createBox位置設定
function create() {
  for (let i = 0; i < 4; i++) {
    let offsetTop = document.querySelector('#item' + i).offsetTop
    let offsetLeft = document.querySelector('#item' + i).offsetLeft
    let width = document.querySelector('#item0').offsetWidth
    let height = document.querySelector('#item0').offsetHeight
    $('#createBox' + i).css({
      'position': 'absolute',
      'top': offsetTop,
      'left': offsetLeft,
      'width': width,
      'height': height
    })
  }
}
//ai 看牌控制
function aiunfold(watchCradId) {

  let play = watchCradId
  let clone = cloneEye.cloneNode(true);
  $("#item" + play).find('.poker').append(clone);
  let parentWidth = $("#item" + play).find('.poker').width();
  let parentHeight = $("#item" + play).find('.poker').height();
  clone.style.width = parentWidth / 2 + "px";
  clone.style.height = parentHeight / 2 + "px";
  clone.style.display = "block";
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      $("#item" + play).find('.poker').addClass('unfold')
      clone.style.position = "absolute";
      clone.style.top = "0";
      clone.style.left = "0";
      clone.style.right = "0";
      clone.style.bottom = "0";
      clone.style.margin = "auto";
      clone.style.transition = "1s";
      clone.style.transform = "translate(0px,-100px)";
      resolve("");
      playVoice('flower_voice_0')
    }, 1000)

  });
  promise.then(function () {
    setTimeout(function () {
      clone.style.opacity = "0";
    }, 300);
  });
}
//ai 棄牌控制
function aiFold(giveUpId) {
  playVoice('flower_voice_1')
  clearTimeout(widthTimeout)
  let play = giveUpId
  if (!$("#item" + play).find('.poker').hasClass('Fold')) {
    $("#item" + play).find('.poker').addClass('unfold Fold')
    $("#item" + play).find('.poker img').remove()
    if ($("#item" + play).find('.eye')) $("#item" + play).find('.eye').remove()
    for (let i = 0; i < 3; i++) {
      $("#item" + play).find('.poker').append('<div class="pokerImg"></div>')
    }
    $("#item" + play).find('.poker').append('<div class="eye"><img src="./images/flowerImage/Flod.png"></div>')
  }
  playerLen -= 1
}
//ai 敗牌控制
function aiLose(loser, loserCards, loserCardText) {

  let play = losser
  if (losser !== 4) {
    setTimeout(function () {
      if (!$("#item" + play).find('.losePoker').hasClass('losePoker')) {
        $("#item" + play).find('.poker').hide()
        let clone = document.querySelector(".losePoker").cloneNode(true);
        $("#item" + play).find('.itemRight').append(clone)
        $("#item" + play).find('.losePoker').show()
        document.querySelector('#item' + play).querySelector('.losePoker').querySelectorAll(".pokerImg").forEach(function (item, b) {

          item.style.transform = `rotate(0deg)`;
          item.style.background = `url('./images/flowerImage/Poker/${
            lossCards[b]}.png') center no-repeat`;
          item.style.backgroundSize = "cover";
          item.style.zIndex = "1";
        })

      }

    }, 1000);
  }
}
//ai 籌碼控制
function aipay(betId, bet, remain) {
  // console.log({betId})
  // console.log({bet})
  // console.log({remain})
  zIndex += 1
  clearTimeout(widthTimeout)
  let play = betId
  let unfold = false
  if ($("#item" + play).find('.poker').hasClass('unfold')) {
    bet = bet / 2
    unfold = true
  }
  bet < base + 1 ? nowMoney = base : nowMoney = bet


  let eq // [2,3,4,5,6,7]  
  for (let i = 0; i < betCoinList.length; i++) {
    if (bet == betCoinList[i]) {
      eq = i
    }

  }
  if (eq == 0) eq = 1

  let clonechips = $("#createBox" + play).find(".chipsimgBox").eq(eq).clone()
  if (nowMoney == base) clonechips.find('p').text(base)
  clonechips.addClass('moveChips')
  clonechips.css({
    'z-index': zIndex
  })

  let clone = document.querySelector('#createBox' + play)
  let randomchips = desktopPosition()
  let clonePosition = getPosition(clone);
  let move = positionFun(clonePosition, randomchips);

  $("#createBox" + play).find('.itemRight').append(clonechips);
  let total = Number($("#item" + play).find('.money').text())
  let movePromise = new Promise(function (resolve, reject) {
    clonechips.css({
      transition: ".3s",
    })
    resolve();
  });
  movePromise.then(function () {
    setTimeout(function () {
      clonechips.css({
        visibility: 'visible',
        transform: `translate(${move.x}px,${move.y}px)`
      })
      playVoice('chip')
      let pay
      if (unfold) {
        pay = Number(clonechips.find('p').text()) * 2
      } else {
        pay = Number(clonechips.find('p').text())
      }
      if (pay >= 10) {
        clonechips.find('p').css({
          'left': '-12px'
        })
      }
      clonechips.find('p').text(pay)
      if (pay >= 100) {
        clonechips.find('p').css({
          'left': '-25px'
        })
      }
      let aiPayMoney = clonechips.find('p').text()
      total += Number(aiPayMoney)
      $("#item" + play).find('.money').text(total)
      let ALLMoney = Number($('#totalMoney').text())
      ALLMoney += Number(aiPayMoney)
      let aiMoney = $("#item" + play).find('.totalSpan').text()
      aiMoney = Number(aiMoney) - Number(aiPayMoney)

      $("#item" + play).find('.totalSpan').text(aiMoney)
      $("#item" + play).find('.totalSpan').text(remain - base);
      $('#totalMoney').text(ALLMoney)
    }, 100)

  })

}
//ai 比牌控制
function Ratio(comparetId, winer, loser, loserCards, loserCardText) {
  playVoice('flower_voice_3')
  clearTimeout(widthTimeout)
  let left = comparetId //比牌的玩家
  let right = comparetId == winer ? loser : winer //被比牌的玩家
  let rightPlayer = document.querySelector('#item' + right)
  let rightCompare = document.querySelector("#rightCompare");
  let rightPosition = getPosition(rightCompare);
  let thisPosition = getPosition(rightPlayer);
  let rightVal = positionFun(thisPosition, rightPosition);
  let leftCompare = document.querySelector("#leftCompare");
  let leftPosition = getPosition(leftCompare);
  let leftPlayer = document.querySelector('#item' + left)
  let winPosition = getPosition(leftPlayer);
  let leftVal = positionFun(winPosition, leftPosition);
  let loseStyle = window.getComputedStyle(compareLose, null);
  let winStyle = window.getComputedStyle(compareWin, null);


  setTimeout(function () {
    playVoice('collision')
    rightPlayer.style.transition = ".7s";
    rightPlayer.style.zIndex = "33";
    rightPlayer.style.transform = `translate(${rightVal.x+50}px, ${rightVal.y}px)`;
    rightPlayer.querySelector(".addChips").style.display = "none";
    if (right == 4 || left == 4) {
      $('#item4').find('#eye').css({
        'opacity': "0"
      })
      $('#item4').find('.pokerImg').eq(1).css({
        'left': '40px'
      })
      $('#item4').find('.pokerImg').eq(2).css({
        'left': '80px'
      })
      document.querySelector("#backColorTxt").style.opacity = '0'
      document.querySelector("#backColor").style.opacity = '0'
    }
    leftPlayer.querySelector(".itemLeft").style.top = `${15}px`;
    leftPlayer.style.transition = ".7s";
    leftPlayer.style.zIndex = "33";
    leftPlayer.style.transform = `translate(${leftVal.x-50}px, ${
                  leftVal.y
                }px)`;
    leftPlayer.querySelector(".addChips").style.display = "none";
    compare.style.zIndex = "31";
    compare.style.opacity = "1";
  }, 100)

  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      compare.style.opacity = "0";
    }, 800);

    setTimeout(function () {
      compareEnd
        .querySelectorAll(".item")
        .forEach(function (item) {
          item.style.display = "block";
        });
      compareEnd.style.opacity = "1";
      compareEnd.style.zIndex = "31";

    }, 1000);
    let leftVh = -2
    let rightVh = 2

    if (loser !== right) {
      compareWin.style.borderWidth = '0 100px 40vh 0';
      compareLose.style.borderWidth = '40vh 0 0 100px';
      leftVh *= -1
      rightVh *= -1
    } else {
      compareWin.style.borderWidth = '40vh 100px 0 0';
      compareLose.style.borderWidth = '0 0 40vh 100px';
    }

    let vhAry = []
    vhAry.push(leftVh)
    vhAry.push(rightVh)
    resolve(vhAry);
  });
  promise.then(function (resolve) {
    let cardsAry = []
    let sortAry = CardsSort(loserCards)
    sortAry.forEach(function (item) {
      cardsAry.push(item.card)
    })

    setTimeout(function () {
      //輸家翻牌
      setTimeout(function () {

        if (loser !== 4) { // 其他玩家輸
          if (loser !== right) {
            rightPlayer = leftPlayer
          }

          let clone = document
            .querySelector(".losePoker")
            .cloneNode(true);
          rightPlayer.querySelector(".itemRight").appendChild(clone);
          rightPlayer.querySelector(".itemRight").querySelector('.backColorTxt').dataset.len = `06${comparetId}`
          // console.log('comparetId',comparetId)
          let ImgPromise = new Promise(function (resolve) {
            rightPlayer.querySelector('.playerPoker').classList.remove('unfold')
            rightPlayer.querySelectorAll('.pokerImg').forEach(function (item) {
              item.style.left = '0'
            })
            resolve();
          })
          ImgPromise.then(function (resolve) {
            setTimeout(function () {
              let previous = clone.parentNode.firstElementChild;
              previous.style.display = "none";
              clone.style.display = "block";
              playVoice('flop')
              playVoice('defeat')
              clone
                .querySelectorAll(".pokerImg")
                .forEach(function (item, index) {
                  item.style.transform = `rotate(0deg)`;
                  item.style.background = `url('./images/flowerImage/Poker/${cardsAry[index]}.png') center no-repeat`;
                  item.style.backgroundSize = "cover";
                });
              clone.querySelector('.backColor').style.opacity = "0"

            }, 300);
            setTimeout(function () {
              clone.querySelectorAll('.pokerImg').forEach(function (item, index) {
                if (index == 1) {
                  item.style.left = '40px'
                }
                if (index == 2) {
                  item.style.left = '80px'
                }
              })

            }, 400);
            setTimeout(function () {
              clone.querySelectorAll('.pokerImg').forEach(function (item, index) {
                item.classList.add('pokerImgBg')
              })
              clone.querySelector('.cross1').style.opacity = '1'
              clone.querySelector('.cross1').style.transform = 'scale(1.2)'
              clone.querySelector('.svg1').setAttribute('fill', '#D0021B')


              clone.querySelector('.backColor').style.opacity = "1"
            }, 900);
            setTimeout(function () {
              clone.querySelector('.cross2').style.opacity = '1'
              clone.querySelector('.cross2').style.transform = 'scale(1.2)'
              clone.querySelector('.svg2').setAttribute('fill', '#D0021B')
            }, 1400)
          })

          clone.querySelector('.backColorTxt').innerText = i18nTxtFn(loserCardText,comparetId)
          // loserCardText;
          playerLen -= 1
        } else { // USER輸

          document.querySelector('#UserFlod').style.display = 'none'
          let Img2Promise = new Promise(function (resolve) {

            $('#Poker').find('.pokerImg').eq(1).css({
              'left': '40px'
            })
            $('#Poker').find('.pokerImg').eq(2).css({
              'left': '80px'
            })
            resolve();
          })
          // playVoice('defeat')
          if (!UserShow) {
            Img2Promise.then(function () {
              setTimeout(function () {
                Poker.querySelectorAll(".pokerImg").forEach(function (item) {
                  item.style.left = '0'
                })
                showPoker.querySelectorAll(".pokerImg").forEach(function (item) {
                  item.style.left = '0'
                })
              }, 300);
            })

            setTimeout(function () {
              playVoice('flop')

              showPokerFun(cardsAry, loserCardText);
              $('#showPoker').find('.pokerImg').eq(1).css({
                'left': `${40}px`
              })
              $('#showPoker').find('.pokerImg').eq(2).css({
                'left': `${80}px`
              })
              $('#showPoker').find('.LosePng').css({
                'right': `${90}px`
              })

            }, 400);
          }
          setTimeout(function () {
            playVoice('defeat')
          }, 300)
          setTimeout(function () {

            $('#showPoker').find('.cross').show()
            $('#showPoker .cross1').css('left', '-60px')
            $('#showPoker .cross2').css('left', '-60px')
            $('#showPoker').find('.pokerImg').addClass('pokerImgBg')
            $('#UserFlod').show()
            $('#UserFlod img').hide()

            $('#showPoker').find('.cross1').css('opacity', '1')
            $('#showPoker').find('.cross1').css('transform', 'scale(1.2)')
            $('#showPoker .svg1').attr('fill', '#D0021B')

          }, 900);
          setTimeout(function () {
            $('#showPoker').find('.cross2').css('opacity', '1')
            $('#showPoker').find('.cross2').css('transform', 'scale(1.2)')
            $('#showPoker .svg2').attr('fill', '#D0021B')

          }, 1400);
          leftPlayer
            .querySelector(".progress")
            .classList.remove("progress");
          leftPlayer
            .querySelector(".progress-bar")
            .classList.remove("progress-bar");

        }
        rightPlayer = document.querySelector('#item' + right)
      }, 1000);

      compareWin.style.transition = '.1s';
      compareLose.style.transition = '.1s';
      leftPlayer.style.transition = '.1s';
      rightPlayer.style.transition = '.1s';
      compareWin.style.left = '-5vw';
      compareLose.style.right = '-5vw';

    }, 1500);
    setTimeout(function () {

      compareWin.style.left = '-10px';
      compareLose.style.right = '-10px';
      leftPlayer.style.transform = `translate(calc( ${leftVal.x}px + 3vw), ${
        leftVal.y
      }px)`;
      rightPlayer.style.transform = `translate(calc(${rightVal.x}px - 3vw), ${rightVal.y
      }px)`;
      $('#warp span').show()
      document
        .querySelector("#warp")
        .getElementsByTagName("span")[0].style.transform =
        ` scale(1.2)`;
      document
        .querySelector("#warp")
        .getElementsByTagName("span")[1].style.transform =
        ` scale(1.2)`;
      setTimeout(function () {
        compareWin.style.left = '-20px';
        compareLose.style.right = '-20px';
        leftPlayer.style.transform = `translate(calc(${leftVal.x}px - 9vw), ${
          leftVal.y
        }px)`;

        rightPlayer.style.transform = `translate(calc(${rightVal.x}px + 9vw), ${
          rightVal.y
        }px)`;
        document
          .querySelector("#warp")
          .getElementsByTagName("span")[0].style.transform =
          ` scale(1.8)`;
        document
          .querySelector("#warp")
          .getElementsByTagName("span")[1].style.transform =
          ` scale(1.8)`;
      }, 200)
      setTimeout(function () {
        compareWin.style.left = '-10px';
        compareLose.style.right = '-10px';
        leftPlayer.style.transform = `translate(calc( ${leftVal.x}px - 3vw), ${
          leftVal.y
        }px)`;
        rightPlayer.style.transform = `translate(calc( ${rightVal.x}px + 3vw), ${
          rightVal.y
        }px)`;
        document
          .querySelector("#warp")
          .getElementsByTagName("span")[0].style.transform =
          ` scale(1.2)`;
        document
          .querySelector("#warp")
          .getElementsByTagName("span")[1].style.transform =
          ` scale(1.2)`;
      }, 300)

    }, 2000)
    setTimeout(function () {
      if (right == 4 || left == 4) {
        $('#item4').find('#eye').css({
          'opacity': "1"
        })
        $('#item4').find('.pokerImg').eq(1).css({
          'left': `${left1}px`
        })
        $('#item4').find('.pokerImg').eq(2).css({
          'left': `${left2}px`
        })
        $('#showPoker').find('.LosePng').css({
          'right': `${-30}px`
        })
      }
      compareEnd.style.opacity = "0";
      compareEnd.style.zIndex = "1";
      compare.style.zIndex = "1";
      compareWin.style.transform =
        "translate(0px, 0px)";
      compareLose.style.transform =
        "translate(0px, 0px)";
      document
        .querySelector("#warp")
        .getElementsByTagName("span")[0].style.transform =
        "translate(0px, 0px) scale(1)";
      document
        .querySelector("#warp")
        .getElementsByTagName("span")[1].style.transform =
        "translate(0px, 0px) scale(1)";

      leftPlayer.querySelector(".addChips").style.display = "block";
      leftPlayer.querySelector(".itemLeft").style.top = `${top1}px`;
      leftPlayer.style.zIndex = "10";
      rightPlayer.style.zIndex = "10";
      leftPlayer.querySelector(".addChips").style.display = "block";
      rightPlayer.querySelector(".addChips").style.display = "block";
      leftPlayer.style.transition = "1s";
      rightPlayer.style.transition = "1s";
      rightPlayer.style.transform = `translate(0px, 0px)`;
      leftPlayer.style.transform = `translate(0px, 0px)`;
      document.querySelectorAll('.imgBox').forEach(function (item) {
        item.classList.remove('disabled')
      })
      $('#item' + left).find('.cross1').hide()
      $('#item' + left).find('.cross2').hide()
      $('#item' + right).find('.cross1').hide()
      $('#item' + right).find('.cross2').hide()

      $('.addChips').css('opacity', '1')
      document.querySelector("#backColorTxt").style.opacity = '1'
      document.querySelector("#backColor").style.opacity = '1'
      $('#warp span').hide()
      if (loser == 4) {
        $('#box').find('nav').hide()
        $('#item4').css('bottom', '90px')
        $('#item' + loser).find('.LosePng').css('right', '30%')

      }
      playVoice('Fork')
    }, 4500);

    setTimeout(function () {

      $('#item' + loser).find('.LosePng').show()
      if (loser == 4) {
        $('#item' + loser).find('.LosePng').css({
          'width': '80%',
          'right': '30%',
        })
      } else {
        $('#item' + loser).find('.LosePng').css({
          'width': '150%',
          'right': '10%',
          'bottom': '0px',
        })
      }

    }, 5500)
    setTimeout(function () {
      $('#item' + loser).find('.LosePng').show()
      if (loser == 4) {
        $('#item' + loser).find('.LosePng').css({
          'width': '40%',
          'right': '30%',
          'bottom': '15px',
        })
      } else {
        $('#item' + loser).find('.LosePng').css({
          'width': '80%',
          'right': '10%',
          'bottom': '0px',
        })
      }
    }, 6000)
    setTimeout(function () {
      $('#item' + loser).find('.LosePng').show()
      if (loser !== 4) {
        $('#item' + loser).find('.LosePng').css({
          'width': '50%',
          'right': '-30px',
          'bottom': '15px',
          'transition': '1s'
        })
      } else {
        $('#item' + loser).find('.LosePng').css({
          'width': '30%',
          'right': '-30px',
          'bottom': '15px',
          'transition': '1s'
        })
      }
    }, 7000)
  });

}
//遊戲結束
function endFun(endAry, winer, userTxt, userCard) {
  clearTimeout(widthTimeout)
  let newEndAry = []
  endAry.forEach((card) => {
    newEndAry.push(card.cards)
  })
  let sortAry = analysisCardFlower(newEndAry)
  let cardsAry = [];
  let winerItme = document.querySelector('#item' + winer)
  let winnerPosition = getPosition(winerItme)
  let endMoveAry = []
  let endMoveAry2 = []
  let endMoveAry3 = []
  let winerMoveAry = []
  let winerMoveAry2 = []
  let winerMoveAry3 = []

  function endMoveFun(el, ary, winAry) {

    document.querySelectorAll(el).forEach(function (item) {
      ary.push(getPosition(item))
    })
    let obj = {}
    for (let i = 0; i < ary.length; i++) {
      obj = {
        x: -(ary[i].x - winnerPosition.x),
        y: -(ary[i].y - winnerPosition.y)
      }
      winAry.push(obj)
    }

  }
  endMoveFun('.moveChips', endMoveAry, winerMoveAry)
  endMoveFun('.moveChips2', endMoveAry2, winerMoveAry2)
  endMoveFun('.moveChips3', endMoveAry3, winerMoveAry3)
  for (let i = 0; i < 5; i++) {
    cardsAry[i] = []
    sortAry[i].forEach(item => {
      cardsAry[i].push(item.card)

    })
  }

  for (let i = 0; i < endAry.length - 1; i++) {

    setTimeout(function () {

      if (!$("#item" + i).find('.losePoker').hasClass('losePoker')) {
        if (!$("#item" + i).find('.poker').hasClass('Fold')) {
          $("#item" + i).find('.poker').hide()
          let clone = document.querySelector(".losePoker").cloneNode(true);
          $("#item" + i).find('.itemRight').append(clone)
          $("#item" + i).find('.losePoker').show()
          $("#item" + i).find('.losePoker .lose').css({
            'z-index': '2'
          })
        
        }

        if (i === winer) {
          $("#item" + i).find('.eye img').hide()
          $("#item" + i).find('.winTxt').show()
          $("#item" + i).find('.losePoker').addClass('winBoder')
          $("#item" + i).css('z-index', '13')

        } else {
          $("#item" + i).find('.losePoker .pokerImg').addClass('pokerImgBg')

        }
        if ($("#item" + i).find('.poker').hasClass('Fold')) {
          $("#item" + i).find('.lose img').attr('src', './images/flowerImage/Flod.png')
        }
        if ($("#item" + i).find('.losePoker').hasClass('losePoker')) {
          document.querySelector('#item' + i).querySelector('.losePoker').querySelectorAll(".pokerImg").forEach(function (item, num) {
            item.style.transform = `rotate(0deg)`;
            item.style.background = `url('./images/flowerImage/Poker/${
              cardsAry[i][num]}.png') center no-repeat`;
            item.style.backgroundSize = "cover";
            item.style.zIndex = "1";
          })
        }

        $("#item" + i).find('.backColor').css({
          'z-index': '1'
        })
        $("#item" + i).find('.backColorTxt').text(
          i18nTxtFn(endAry[i].type,i)
          // endAry[i].type
          )
        $("#item" + i).find('.backColorTxt').data( 'len', `06${i}` );
      }
      $('#box').find('nav').hide()
      $('#item4').css('bottom', '90px')
    }, 1000);
  }
  setTimeout(function () {
    let width = document.querySelector('#item0').querySelector('.itemLeft').offsetWidth / 2
    if (winer == 0 || winer == 3) width = width * 2.5
    if (winer == 1 || winer == 2) width = width / 2
    if (winer == 4) width = width * 3

    function moveChips(el, Ary) {

      document.querySelectorAll(el).forEach(function (item, index) {
        item.style.transition = '1s'
        item.style.zIndex = '35'
        item.style.transform = `translate(${Ary[index].x + width}px, ${Ary[index].y}px)`
      })
      setTimeout(function () {
        document.querySelectorAll(el).forEach(function (item, index) {
          item.style.opacity = '0'

        })
      }, 500)
    }
    moveChips('.moveChips', winerMoveAry)
    moveChips('.moveChips2', winerMoveAry2)
    moveChips('.moveChips3', winerMoveAry3)
    playVoice('collect_chips')
    for (let i = 0; i < endAry.length; i++) {
      let top = i !== 4 ? '-60px' : '-100px'
      if (i !== winer) {

        let loseMoney = $("#item" + i).find('.money').text()
        $("#item" + i).find('.loseMoney').text('-' + loseMoney)
        $("#item" + i).find('.loseMoney').css({
          'visibility': 'visible',
          'top': top
        })
      } else {
        let winMoney = Number($('#totalMoney').text()) - Number($("#item" + winer).find('.money').text())
        $("#item" + winer).find('.loseMoney').text('+' + winMoney)
        $("#item" + winer).find('.loseMoney').css({
          'visibility': 'visible',
          'top': top,
          'color': 'rgb(133, 255, 0)'
        })
        let winerMoney = $("#item" + winer).find('.totalSpan').text()
        let total = Number(winerMoney) + Number(winMoney) + Number($("#item" + winer).find('.money').text())
        $("#item" + winer).find('.totalSpan').text(total)
      }
    }
  }, 2000);
  let UserNum = endAry.length - 1
  let UserCards = cardsAry[UserNum]

  if (!$("#item" + UserNum).find('.poker').eq(0).hasClass('showPoker')) {
    showPokerFun(UserCards, userTxt) //showPoker
    $('#UserFlod').show()
    if (winer !== 4) {
      $('#UserFlod img').attr('src', './images/flowerImage/CrossAll.svg')
      $('#showPoker').find('.pokerImg').addClass('pokerImgBg')
      $('#showPoker').find('.LosePng').show()
      // playVoice('Fork')
    } else {
      $('#UserFlod img').attr('src', './images/flowerImage/Win.png')
      $('#showPoker').find('.LosePng').hide()
      $('#showPoker').find('.winTxt').show()
      $('#showPoker').addClass('winBoder')
      // playVoice('win')
    }
  }
  if (winer !== 4) {
    $("#item4").find('.showPoker .pokerImg').addClass('pokerImgBg')
  }

}
//遊戲順序
function actionPlayer(actionId) {
  clearTimeout(widthTimeout)
  if (actionId !== 4) {

    document.querySelector('#item4').querySelector('.eye').style.filter = ' opacity(0.5)'
    $('#userInformation').removeClass('userLeftboder')
    isUser = false
    document
      .querySelector("#raiseImg")
      .setAttribute("src", "./images/flowerImage/Off.png");
    document
      .querySelector("#RatioImg")
      .setAttribute("src", "./images/flowerImage/Off2.png");
    document
      .querySelector("#FoldNavImg")
      .setAttribute("src", "./images/flowerImage/FoldOff.png");
    if (
      follow_Txt.innerText !== 
      // '取消跟注'
      $.i18n.prop("len_Cancel")
    ) {
      document
        .querySelector("#follow")
        .setAttribute("src", "./images/flowerImage/automatic.png");
      follow_Txt.innerText = 
      // '自动跟牌'
      $.i18n.prop("len_Automatic");
    }
  }
  let player = actionId
  let index = actionId
  $('#item' + actionId).find('.information').addClass('userLeftboder')
  document.querySelector("#progress" + player).style.display = "block";
  document
    .querySelector("#progressbar" + index)
    .setAttribute("style", `width: ${100}%;height: 100%`);
  let width = 100
  changeWidthFun(index, width, actionId)
}
//進度條控制
function changeWidthFun(index, width, actionId) {
  widthTimeout = setTimeout(function () {
    width -= 1;
    // console.log(width)
    document
      .querySelector("#progressbar" + index)
      .setAttribute("style", `width: ${width}%;height: 100%`);
    if (width <= 0) {
      if (actionId == 4) {
        let followChip;
        let payMoney
        document
          .querySelector(".chipsBoxWarp")
          .querySelectorAll(".chipsimgBox")
          .forEach(function (item) {

            let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
            if (item.querySelector("p").innerHTML == DoubleMoney) {
              followChip = item;
            } else if (nowMoney == base) {
              followChip = document.querySelector('#chipsBox').querySelector(".chipsimgBox")
              let text = followChip.querySelector('p').innerHTML
              followChip.querySelector('p').style.left = '0px'
              if (text >= 10) followChip.querySelector('p').style.left = '-12px'
              oneMoney = true
            }

          });
        payMoney = nowMoney
        let index = betCoinList.indexOf(nowMoney)
        // doBet(index)
        // chipMove(followChip)
        document.querySelector('#compare').style.opacity = '0'
        document.querySelector('#compare').style.height = '50%'
        document.querySelector('#compare').style.zIndex = '1'
        document.querySelectorAll('.imgBox').forEach(function (item) {
          item.classList.remove('disabled')
        })
      }
      clearTimeout(widthTimeout)
      document.querySelector("#progress" + actionId).style.display = "none";

      return false;
    }
    changeWidthFun(index, width, actionId)
  }, 100);
}
//籌碼移動
function chipMove(el) {
  zIndex += 1
  clearTimeout(widthTimeout)
  let randomchips = desktopPosition()
  let self = el;
  let thisPosition = getPosition(self);
  let move = positionFun(thisPosition, randomchips);
  let clone = self.cloneNode(true);

  clone.style.zIndex = zIndex
  clone.classList.add('moveChips2')
  let moveItem = chipsWarp.appendChild(clone);
  let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
  if (oneMoney) clone.querySelector("p").innerText = DoubleMoney
  if (nowMoney >= 2) oneMoney = false
  let text = clone.querySelector('p').innerHTML
  if (text < 10) {
    clone.querySelector('p').style.left = '0px'
  }
  if (text >= 10) {
    clone.querySelector('p').style.left = '-12px'
  }
  if (text >= 100) {
    clone.querySelector('p').style.left = '-25px'
  }
  total += Number(clone.querySelector("p").innerText);
  totalMoney.innerText = Number(totalMoney.innerText) + Number(clone.querySelector("p").innerText);
  payMoney.innerText = Number(total + base);
  let oncePay = Number(clone.querySelector("p").innerText);


  let movePromise = new Promise(function (resolve, reject) {
    moveItem.style.position = "absolute";
    let moveItemPosition = getPosition(moveItem);
    let x = -(moveItemPosition.x - thisPosition.x);
    let y = -(moveItemPosition.y - thisPosition.y);
    moveItem.style.visibility = "hidden"
    moveItem.style.transform = `translate(${x}px, ${y}px)`;
    playVoice('chip')
    let movePosition = {
      x: x,
      y: y
    };

    resolve(movePosition);
  });

  movePromise.then(function (result) {
    setTimeout(function () {
      moveItem.style.transition = ".2s";
      moveItem.style.transform = `translate(${move.x + result.x}px, ${move.y +
                result.y}px)`;
      setTimeout(function () {
        moveItem.style.visibility = "visible"
      }, 50)
      chipsBox.style.visibility = "hidden";
      $('nav').css({
        visibility: 'visible'
      })
      document.querySelector("#progress4").style.display = "none";

      document
        .querySelector("#progressbar4")
        .setAttribute("style", `width: ${100}%`);
      document
        .querySelector("#raiseImg")
        .setAttribute("src", "./images/flowerImage/Off.png");
      document
        .querySelector("#RatioImg")
        .setAttribute("src", "./images/flowerImage/Off2.png");
      document
        .querySelector("#FoldNavImg")
        .setAttribute("src", "./images/flowerImage/FoldOff.png");
      document.querySelector('#item4').querySelector('.eye').style.filter = ' opacity(0.5)'
      if (!determine) {
        document
          .querySelector("#follow")
          .setAttribute("src", "./images/flowerImage/automatic.png");
        follow_Txt.innerText = 
        // '自动跟牌'
        $.i18n.prop("len_Automatic")
      } else {
        document
          .querySelector("#follow")
          .setAttribute("src", "./images/flowerImage/cancelFollow.png");
        follow_Txt.innerText = 
        // '取消跟注'
        $.i18n.prop("len_Cancel");
      }
      isUser = false

    }, 100);
  });
  // console.log('nowMoney', nowMoney)
}
//User控制
function UserPlayerFun() {

  isUser = true
  let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
  document.querySelector('#RatioMoney').innerText = DoubleMoney
  // console.log('nowMoney', nowMoney)
  document.querySelector('#item4').querySelector('.eye').style.filter = 'unset'
  document
    .querySelector("#raiseImg")
    .setAttribute("src", "./images/flowerImage/Raise.png");
  document
    .querySelector("#RatioImg")
    .setAttribute("src", "./images/flowerImage/Ratio.png");
  document
    .querySelector("#FoldNavImg")
    .setAttribute("src", "./images/flowerImage/Fold.png");
  if (!determine) {
    document
      .querySelector("#follow")
      .setAttribute("src", "./images/flowerImage/Follow.png");
    follow_Txt.innerText = 
    // '跟注 : ' + DoubleMoney
    $.i18n.prop("len_Follow") + ' : ' + DoubleMoney;

  } else {
    let followChip;
    document
      .querySelector(".chipsBoxWarp")
      .querySelectorAll(".chipsimgBox")
      .forEach(function (item) {
        let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
        if (item.querySelector("p").innerHTML == DoubleMoney) {
          followChip = item;
        } else if (nowMoney == base) {
          followChip = document.querySelector('#chipsBox').querySelector(".chipsimgBox")
          let text = followChip.querySelector('p').innerHTML
          followChip.querySelector('p').style.left = '0px'
          if (text >= 10) followChip.querySelector('p').style.left = '-12px'
          oneMoney = true
        }
      });
    let payMoney = nowMoney
    let index = betCoinList.indexOf(nowMoney)
    // console.log(index)
    setTimeout(() => {
      // doBet(index)
      clearTimeout(widthTimeout)
      chipMove(followChip);
    }, 500)

  }

}
//攤開User樸克
function showPokerFun(showCards, CardText) {

  showPoker.style.display = "block";
  showPoker.querySelectorAll(".pokerImg").forEach(function (item, index) {
    item.style.transform = `rotate(0deg)`;
    item.style.background = `url('./images/flowerImage/Poker/${
      showCards[index]}.png') center no-repeat`;
    item.style.backgroundSize = "cover";
  });
  
  
  document.querySelector("#backColorTxt").innerText = i18nTxtFn(CardText, 4)
  // CardText;
  
  $('#Poker').before($('#showPoker'))
  $('#Poker').hide()
  UserShow = true
}

function shape(num) {

  // $.i18n.prop('len_special')

  if (r0 == r1 && r0 == r2) {
    Txt = $.i18n.prop("len_trips");
  } else if (r0 == r1 || r0 == r2 || r1 == r2) {
    Txt = $.i18n.prop("len_one_pair");
  } else if (c0 == c1 && c0 == c2) {
    if (r0 + 1 == r1 || r0 - 1 == r1 || (r0 + 1 == r2 || r0 - 1 == r2)) {
      if (average == r0 || average == r1 || average == r2) {
        Txt = $.i18n.prop("len_straight_flush");
      } else {
        Txt = $.i18n.prop("len_Flush");
      }
    } else if (r0 == 1 || r1 == 1 || r2 == 1) {
      if (r0 == 12 || r1 == 12 || r2 == 12) {
        if (r0 == 13 || r1 == 13 || r2 == 13) {
          Txt = $.i18n.prop("len_straight_flush");
        } else {
          Txt = $.i18n.prop("len_Flush");
        }
      } else {
        Txt = $.i18n.prop("len_Flush");
      }
    } else {
      Txt = $.i18n.prop("len_Flush");
    }
  } else if (r0 + 1 == r1 || r0 - 1 == r1 || (r0 + 1 == r2 || r0 - 1 == r2)) {
    if (average == r0 || average == r1 || average == r2) {
      Txt = $.i18n.prop("len_straight");
    } else {
      Txt = $.i18n.prop("len_Separate");
      if (r0 == 2 || r1 == 2 || r2 == 2) {
        if (r0 == 3 || r1 == 3 || r2 == 3) {
          if (r0 == 5 || r1 == 5 || r2 == 5) {
            Txt = $.i18n.prop("len_special");
          }
        }
      }
    }
  } else if (r0 == 1 || r1 == 1 || r2 == 1) {
    if (r0 == 12 || r1 == 12 || r2 == 12) {
      if (r0 == 13 || r1 == 13 || r2 == 13) {
        Txt = $.i18n.prop("len_straight");
      } else {
        Txt = $.i18n.prop("len_Separate");
      }
    } else {
      Txt = $.i18n.prop("len_Separate");
    }
  } else {
    Txt = $.i18n.prop("len_Separate");
  }
  return Txt;
}
//i18n
function ratioEnd1(a) {
  switch (a) {
    case $.i18n.prop("len_trips"):
      a = 1;
      break;
    case $.i18n.prop("len_straight_flush"):
      a = 2;
      break;
    case $.i18n.prop("len_Flush"):
      a = 3;
      break;
    case $.i18n.prop("len_straight"):
      a = 4;
      break;
    case $.i18n.prop("len_one_pair"):
      a = 5;
      break;
    case $.i18n.prop("len_Separate"):
      a = 6;
      break;
    case $.i18n.prop("len_special"):
      a = 7;
      break;
  }
  return a;
}
//i18n
function ratioEnd2(a) {
  switch (a) {
    case "Peach":
      a = 1;
      break;
    case "Heart":
      a = 2;
      break;
    case "Diamond":
      a = 3;
      break;
    case "Flower":
      a = 4;
      break;
  }
  return a;
}

//起始動畫&&User控制項
function flower() {

  left1 = document.querySelector("#userPokerImg1").offsetLeft;
  left2 = document.querySelector("#userPokerImg2").offsetLeft;
  top1 = document.querySelector("#userItemLeft").offsetTop;
  // ===================選單=====================
  let raise = document.querySelector("#raise");
  let chipsBoxFlag = true;
  let box = document.querySelector("#box");

  raise.addEventListener(
    "click",
    function (e) {
      if (isUser) {
        playVoice('click')
        let index = betCoinList.indexOf(nowMoney)
        for (let j = 0; j < index - 1; j++) {
          document
            .querySelector(".chipsWarp")
            .getElementsByClassName("chipsimgBox")[j].querySelector("p").style.color = "#aaa";
        }
        chipsBox.style.visibility = "visible";
        $('nav').css({
          visibility: 'hidden'
        })
        e.stopPropagation();
      }
    },
    false
  );

  chipsBox.addEventListener(
    "click",
    function (e) {
      chipsBoxFlag = false;
    },
    false
  );
  let all_in = document.querySelector("#all_in");
  all_in.addEventListener(
    "click",
    function (e) {
      chipsBoxFlag = false;
    },
    false
  );

  box.addEventListener(
    "click",
    function (e) {
      if (chipsBoxFlag === true) {
        if (chipsBox.style.visibility == "visible") {
          chipsBox.style.visibility = "hidden";
          $('nav').css({
            visibility: 'visible'
          })
          e.stopPropagation();
        }
      }
      chipsBoxFlag = true;
    },
    false
  );
  //跟牌
  Follow.addEventListener("click", function () {
    playVoice('click')
    let followChip;
    if (isUser) {
      let payMoney
      clearTimeout(widthTimeout)
      $('#userInformation').removeClass('userLeftboder')
      document
        .querySelector(".chipsBoxWarp")
        .querySelectorAll(".chipsimgBox")
        .forEach(function (item) {
          let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
          if (item.querySelector("p").innerHTML == DoubleMoney) {
            followChip = item;
          } else if (nowMoney == base) {
            followChip = document.querySelector('#chipsBox').querySelector(".chipsimgBox")
            let text = followChip.querySelector('p').innerHTML
            followChip.querySelector('p').style.left = '0px'
            if (text >= 10) followChip.querySelector('p').style.left = '-12px'
            if (text >= 100) followChip.querySelector('p').style.left = '-25px'
            oneMoney = true
          }
          payMoney = nowMoney
          followBtn = true

        });

      let index = betCoinList.indexOf(nowMoney)
      if(isSocket) doBet(index)
      chipMove(followChip);
      if (
        follow_Txt.innerText == 
        // '跟注'
        $.i18n.prop("len_Follow")
      ) {
        document
          .querySelector("#follow")
          .setAttribute("src", "./images/flowerImage/automatic.png");
        follow_Txt.innerText = 
        // '自动跟牌'
        $.i18n.prop("len_Automatic")
      }

    } else {
      if (
        follow_Txt.innerText == 
        // '自动跟牌'
        $.i18n.prop("len_Automatic")
      ) {
        document
          .querySelector("#follow")
          .setAttribute("src", "./images/flowerImage/cancelFollow.png");
        follow_Txt.innerText = 
        // '取消跟注'
        $.i18n.prop("len_Cancel")
        determine = true;
      } else {
        document
          .querySelector("#follow")
          .setAttribute("src", "./images/flowerImage/automatic.png");
        follow_Txt.innerText = 
        // '自动跟牌'
        $.i18n.prop("len_Automatic")
        determine = false;
      }
    }

  });

  // ==========================發牌動畫==========================
  totalMoney.innerHTML = initMoney;

  function startFun() {

    playVoice('licensing')
    let start = document.querySelector(".start");
    let startPosition = getPosition(start);

    for (let i = 0; i < playerLen; i++) {
      let clone = start.cloneNode(true);
      document.querySelector(".startbox").appendChild(clone);
    }

    let positionAry = [];
    document.querySelectorAll(".playerPoker").forEach(function (item) {
      let itemPosition = getPosition(item);
      positionAry.push(itemPosition);
    });

    let newpositionAry = [];

    for (let i = 0; i < playerLen + 1; i++) {
      let newPosition = positionFun(startPosition, positionAry[i]);
      newpositionAry.push(newPosition);
    }

    document
      .querySelector(".startbox")
      .querySelectorAll(".start")
      .forEach(function (item, index) {
        item.style.transform = `translate(${newpositionAry[index].x}px,${newpositionAry[index].y}px)`;
      });

    document
      .querySelector(".startbox")
      .querySelectorAll(".pokerImg")
      .forEach(function (item, index) {
        let deg = 0;

        function degFun() {
          let degInterval = setTimeout(function () {
            deg += 45;
            item.style.transform = `rotate(${deg}deg)`;
            degFun();
          }, 100);
          if (deg >= 360) {
            clearTimeout(degInterval);
            eye.style.display = "block";
            document.querySelectorAll(".playerPoker").forEach(function (item) {
              item.style.opacity = "1";
            });
          }
        }
        let promise2 = new Promise(function (resolve, reject) {
          setTimeout(degFun(), 1000);
          resolve("");
        });
        promise2.then(function () {
          setTimeout(function () {
            document.querySelectorAll(".start").forEach(function (item) {
              item.style.display = "none";
            });
          }, 1300);
        });
      });

    let desktopPosition = getPosition(chipsDesktop);
    let desktopWidth = chipsDesktop.offsetWidth;
    let desktopHeight = chipsDesktop.offsetHeight;
    let desktopWidth2 = desktopPosition.x + desktopWidth;
    let desktopHeight2 = desktopPosition.y + desktopHeight / 2;
    let desktopPosition2 = {
      x: desktopWidth2,
      y: desktopHeight2
    };

    let randomchipsX = randomFun(desktopPosition.x, desktopPosition2.x);
    let randomchipsY = randomFun(desktopPosition.y, desktopPosition2.y);

    let randomchips = {
      x: randomchipsX,
      y: randomchipsY
    };

    let chipsimgBox1Position = getPosition(chipsimgBox1);
    let move = positionFun(chipsimgBox1Position, randomchips);
    let clone = chipsimgBox1.cloneNode(true);
    let moveItem = chipsWarp.appendChild(clone);
    moveItem.classList.add('moveChips3')
    clone.querySelector("p").innerText = base;
    clone.querySelector('p').style.left = '0px'
    if (base >= 10) clone.querySelector('p').style.left = '-12px'
    let playerChipAry = [];
    document.querySelectorAll(".createBox").forEach(function (item) {
      let playerChip = item.querySelector(".chipsimgBox");
      playerChip.querySelector("p").innerText = base;
      let playerChipPosition = getPosition(playerChip);
      playerChipAry.push(playerChipPosition);
    });

    let playerChipAry2 = [];
    let Len = document.querySelectorAll(".createBox").length;
    let randomAry = [];

    for (let i = 0; i < Len; i++) {
      let randomchips2X = randomFun(desktopPosition.x, desktopPosition2.x);
      let randomchips2Y = randomFun(desktopPosition.y, desktopPosition2.y);

      let randomchips2 = {
        x: randomchips2X,
        y: randomchips2Y
      };
      randomAry.push(randomchips2);
    }
    for (let i = 0; i < Len; i++) {
      let newPosition2 = positionFun(playerChipAry[i], randomAry[i]);
      playerChipAry2.push(newPosition2);
    }
    let movePromise = new Promise(function (resolve, reject) {
      moveItem.style.position = "absolute";
      let moveItemPosition = getPosition(moveItem);
      let x = -(moveItemPosition.x - chipsimgBox1Position.x);
      let y = -(moveItemPosition.y - chipsimgBox1Position.y);
      moveItem.style.transform = `translate(${x + 100}px, ${y}px)`;
      playVoice('chip')
      let movePosition = {
        x: x,
        y: y
      };
      resolve(movePosition);
    });

    movePromise.then(function (result) {
      let clone3Ary = [];
      let clone4Ary = [];
      setTimeout(function () {
        moveItem.style.transition = ".2s";
        moveItem.style.transform = `translate(${move.x + result.x}px, ${move.y +
          result.y}px)`;
        playVoice('chip')
        document.querySelectorAll(".createBox").forEach(function (item, index) {
          let playerChip = item.querySelector(".chipsimgBox");
          let clone3 = playerChip.cloneNode(true);

          chipsDesktop.appendChild(clone3);
          playerChip.style.transition = ".2s";
          playerChip.style.transform = `translate(${
            playerChipAry2[index].x
          }px, ${playerChipAry2[index].y}px)`;
          playerChip.style.visibility = "hidden";

          let clonePosition = positionFun(
            getPosition(clone3),
            getPosition(playerChip)
          );
          clone3Ary.push(clonePosition);
          let aa = clone3Ary[index].x + playerChipAry2[index].x;
          let bb = clone3Ary[index].y + playerChipAry2[index].y;
          let cc = {
            x: aa,
            y: bb
          };
          clone4Ary.push(cc);
          clone3.style.transition = ".2s";
          clone3.style.transform = `translate(${clone4Ary[index].x}px, ${
            clone4Ary[index].y
          }px)`;
          clone3.classList.add('moveChips3')
        });
      }, 100);
    });

    if (Number(UserMoney.querySelector(".totalSpan").innerHTML) !== 0) {
      UserMoney.querySelector(".totalSpan").innerHTML = Number(UserMoney.querySelector(".totalSpan").innerHTML) - base;
    } else {
      let totalSpan2 = $('#UserMoney2').find('.totalSpan2').text()
      $('#UserMoney2').find('.totalSpan2').text(totalSpan2 - base)
    }

    document.querySelectorAll(".player").forEach(function (item) {
      item.querySelector(".totalSpan").innerHTML =
        Number(item.querySelector(".totalSpan").innerHTML) - base;
    });
    totalMoney.innerHTML = base * 5
    let imgAry = imgFun(1, 32, 5)
    for (let i = 0; i < 5; i++) {
      $('#item' + i).find('.infoLeft img').attr('src', `./images/Headshot/${imgAry[i]}.jpg`)
    }
    nowMoney = base
    initNiuMenu()
  }
  startFun();

  // ===================User產生籌碼========================
  chipsimgBox.forEach(function (item, i) {

    item.addEventListener("click", function () {
      playVoice('click')
      let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
      if (Number(this.querySelector("p").innerText) < DoubleMoney) {
        return false;
      }
      let payMoney
      if (Double) {
        payMoney = Number(this.querySelector("p").innerText) / 2
      } else {
        payMoney = Number(this.querySelector("p").innerText)
      }
      // console.log('payMoney', payMoney)
      clearTimeout(widthTimeout);
      $('#userInformation').removeClass('userLeftboder')
      let index = betCoinList.indexOf(payMoney)
      if(isSocket)  doBet(index + 1)
      nowMoney = payMoney
      chipMove(this);

    });
  });
  // ================User亮牌==========================
  eye.addEventListener("click", function () {

    if (isUser) {
      playVoice('click')
      playVoice('flower_voice_0')
      isShow = true
      Double = true
      if (isShow) {
        document.querySelector('.chipsWarp').querySelectorAll('.chipsimgBox').forEach(function (item) {
          let text = item.querySelector('p').innerHTML
          text = text * 2
          item.querySelector('p').innerText = text
          if (text >= 10) {
            item.querySelector('p').style.left = '-12px'
          }
          if (text >= 100) {
            item.querySelector('p').style.left = '-25px'
          }
        })
        isShow = false
        oneMoney = false
      }
      if(isSocket) {
        doWatchCard()
      }else{
        noSockect({
            type:'cardContent',
            card:{
              cards:[1,2,3],
              type:'test'
            }
        })
      }

      playVoice('flop')
      this.style.display = "none";
      Poker.style.display = "none";
      let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
      document.querySelector('#RatioMoney').innerText = DoubleMoney
      follow_Txt.innerText = 
      // '跟注 : ' + DoubleMoney
      $.i18n.prop("len_Follow") + ' : ' +DoubleMoney

    }

  });
  // ===================User棄牌======================
  document.querySelector("#FoldNav").addEventListener("click", function () {
    console.log('FoldNav')
    if (isUser) {
      playVoice('click')
      playVoice('flower_voice_1')
      // doGiveUp()
      playVoice('flop')
      $('#userInformation').removeClass('userLeftboder')
      Poker.style.display = "none";
      document.querySelector("#UserFlod").style.display = "block";
      document.querySelector("#progress4").style.display = "none";
      $('#showPoker').find('.FlodPng').show()
      $('#box').find('nav').hide()
      $('#item4').css('bottom', '90px')
    }

  });
  // ===================User比牌======================================
  document.querySelector("#Ratio").addEventListener("click", function () {

    if (isUser) {
      playVoice('click')

      document.querySelectorAll('.imgBox').forEach(function (item) {
        item.classList.add('disabled')
      })
      document.querySelector('#compare').style.opacity = '1'
      document.querySelector('#compare').style.height = '100%'
      document.querySelector('#compare').style.zIndex = '12'
      document.querySelector('.vs').style.opacity = '0'
      if (boderflag) {
        boderflag = false;
        document.querySelectorAll(".player").forEach(function (item, index) {
          item.classList.add("boderClass");
          item.querySelector('.addChips').style.opacity = '0'
          if (item.querySelector('.poker').classList.contains("Fold")) {
            item.classList.remove("boderClass");
            item.querySelector('.addChips').style.opacity = '1'
          }
          item.querySelectorAll('.poker').forEach(function (a) {
            if (a.classList.contains("losePoker")) {
              item.classList.remove("boderClass");
              item.querySelector('.addChips').style.opacity = '1'
            }
          })
          if (playerLen === 1) {
            if (item.classList.contains("boderClass")) {
              toCompare(item)
            }
          }

          item.addEventListener("click", function (item) {
            playVoice('click')
            if (this.classList.contains("boderClass")) {
              toCompare(this)
            }
          });

          function toCompare(el) {
            document.querySelector('#compare').style.height = '50%'
            let name = el.id;
            let number = name.replace(/item/, "");
            // doCompare(number)
            clearTimeout(widthTimeout);
            $('#userInformation').removeClass('userLeftboder')
            document.querySelectorAll(".item").forEach(function (item) {
              item.classList.remove("boderClass");
            });
            boderflag = true
            let followChip;
            document
              .querySelector(".chipsBoxWarp")
              .querySelectorAll(".chipsimgBox")
              .forEach(function (item) {
                let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
                if (item.querySelector("p").innerHTML == DoubleMoney) {
                  followChip = item;
                } else {
                  followChip = document.querySelector('#chipsBox').querySelector(".chipsimgBox")
                  let text = followChip.querySelector('p').innerHTML
                  followChip.querySelector('p').style.left = '0px'
                  if (text >= 10) followChip.querySelector('p').style.left = '-12px'
                  if (text >= 100) followChip.querySelector('p').style.left = '-25px'
                }

                oneMoney = true
              });
            chipMove(followChip);
          }
        });

      }
    }
  });
  i18nFun()


  var res ={
    game,
    type,
    players,
    user
  }
  noSockect(res)
  var remain = 20
  // var time = getRandom(5,10) * 1000
  var time = 5000
  var turns = 0
  var player = 0
  var playerAry = [0,1,2,3,4]
  var outAry =[]
  //first
  setTimeout(()=>{
    type = "active"
    res ={
      player,
      turns,
      type
    }
    noSockect(res)
    setTimeout(()=>{
      testAction()
    },1000)
  },1000)



  function actionFn(type){
    console.log({player})
    let random = randomFun(1,5)
    let action = '' || type
    console.log({random})
    switch (random) {
      case 1: action = 'watchCard'  
            noSockect({
              type : action,
              id: player
            })
            actionFn()
        break;
      case 2: action = 'giveUp'
            noSockect({
              type : action,
              id: player
            })
            outAry.push(player)
            turns = turns + 1
            player = player + 1
            console.log(outAry)
          //  if(outAry.includes(player)) {
          //    console.log(outAry)
          //    console.log(player)
          //  }
            // remain = remain - 1
            setTimeout(()=>{
              noSockect({
                  player,
                  turns,
                  type:'active'
              })
            },1000)
        
        break;
      case 3: action = 'followBet'
            noSockect({
              type : action,
              id: player,
              coin:'1',
              remain:'100000'
            })
            turns = turns + 1
            player = player + 1
            // remain = remain - 1
            setTimeout(()=>{
              noSockect({
                  player,
                  turns,
                  type:'active'
              })
            },1000)
        
        break;
      case 4: action = 'addBet'
            noSockect({
              type : action,
              id: player,
              coin:'1',
              remain:'100000'
            })
            turns = turns + 1
            player = player + 1
            // remain = remain - 1
            setTimeout(()=>{
              noSockect({
                  player,
                  turns,
                  type:'active'
              })
            },1000)
        
        break;
      case 5: action = 'compare'
            noSockect({
              type : action,
              id: player,
              data:{
                loser:player,
                winer:4,
                loserCard:{
                  type:'test',
                  cards:[1,2,3]
                }
              }
            })
            outAry.push(player)
            console.log(outAry)
            turns = turns + 1
            player = player + 1
            // remain = remain - 1
            setTimeout(()=>{
              noSockect({
                  player,
                  turns,
                  type:'active'
              })
            },2000)
              
        break;   
    }
  }

  function testAction(){
    if(player === 4) return
    actionFn()
    setTimeout(testAction,time)
  }

}
    // turns = turns + 1
    // player = player + 1
    // if(player === 5) player = 0
    // remain = remain - 1
    // if(remain === 0) {
    //   clearInterval(gameInterval)
    //   console.log('遊戲結束')
    // }

