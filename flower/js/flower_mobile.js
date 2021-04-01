var chipsBoxFlag = true
var center = document.querySelector('#center')
var userPoker = document.querySelector('#userPoker')
var positionAry = []
var startAry = []
var startPosition
var pokerImg = document.querySelector('#pokerImg')
var userImg = document.querySelector('#userImg')
var createBox = document.querySelector('#createBox0')
var chipsimgBox1 = document.querySelector("#chipsimgBox1");
var chipsimgBoxLen = document.querySelectorAll(".chipsimgBox").length;
var chipsWarp = document.querySelector(".chipsWarp");
var chipsCenter = document.querySelector(".chipsCenter");
var compareTop = document.querySelector('#compareTop')
var topInfo = document.querySelector('#topInfo')
var topPoker = document.querySelector('#topPoker')
var compareBottom = document.querySelector('#compareBottom')
var bottomInfo = document.querySelector('#bottomInfo')
var bottomPoker = document.querySelector('#bottomPoker')
var topImg = document.querySelector('#topImg')
var compareCenter = document.querySelector('.compareCenter')
var pokerImg1 = document.querySelector('#pokerImg1')
var pokerImg2 = document.querySelector('#pokerImg2')
var userImg1 = document.querySelector('#userImg1')
var userImg2 = document.querySelector('#userImg2')
var userInfo = document.querySelector('#userInfo')
var widthTimeout
var zIndex = 1
var userTotal = 0
var totalMoney = document.querySelector("#totalMoney");
var Double = false
var isUser = false
var isShow = false
var oneMoney = false
var userCompare = false
var determine = false
var players = document.querySelectorAll('.player').length


function randomFun(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

function init() {
    for (let i = 0; i < 14; i++) {
        let clone = center.querySelector('.pokerImg').cloneNode(true);
        center.querySelector('.pokerImgWarp').appendChild(clone);
    }

    for (let i = 0; i < 4; i++) {
        document.querySelector('#item' + i).querySelectorAll('.pokerImg').forEach(function (item) {
            positionAry.push(getPosition(item))
        })
    }
    userPoker.querySelectorAll('.pokerImg').forEach(function (item) {
        positionAry.push(getPosition(item))
    })
    startPosition = getPosition(center.querySelector('.pokerImg'))
    for (let i = 0; i < 15; i++) {
        startAry.push(positionFun(startPosition, positionAry[i]))
    }
    for (let i = 2; i >= 0; i--) {
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

        for (let i = 0; i < chipsimgBoxLen; i++) {
            let num = i + 1;
            let clone3 = document
                .querySelector("#chipsimgBox" + num)
                .cloneNode(true);
            item.querySelector(".chips").appendChild(clone3);
            clone3.style.position = "absolute";
            clone3.style.top = "0";
            clone3.style.left = "0";
            clone3.style.width = '30px';
            clone3.style.height = '30px';
            clone3.style.visibility = "hidden";
        }
    });
    document.querySelectorAll(".progress").forEach(function (item, index) {
        let idName = "progress" + Number(index);
        item.setAttribute("id", idName);
        item.style.display = 'none';
    });
    document.querySelectorAll(".progress-bar").forEach(function (item, index) {
        let idName = "progressbar" + Number(index);
        item.setAttribute("id", idName);
        item.setAttribute("style", 'height:100%');
    });

}

function create() {
    let ary = []
    for (let i = 0; i < 4; i++) {

        let Position = document.querySelector('#item' + i).querySelector('.pokerImgWarp')
        let width = document.querySelector('#item0').querySelector('.pokerImgWarp').offsetWidth
        let height = document.querySelector('#item0').querySelector('.pokerImgWarp').offsetHeight

        ary.push(getPosition(Position))
        $('#createBox' + i).css({
            'position': 'absolute',
            'top': ary[i].y - 60,
            'left': ary[i].x,
            'width': width,
            'height': height
        })
    }
}

function brightness(i) {
    $('#item' + i).find('.pokerImg').css('filter', 'brightness(0.5)')
}

function aiFlod(i) {

    $('#item' + i).find('.Flod').css('width', '25%')
    $('#item' + i).find('.pokerImg').addClass('FoldPokerImg')
    $('#item' + i).find('.Flod').show()
    $('#item' + i).addClass('FlodPoker')
    if (i >= 2) {
        $('#item' + i).find('.Flod').css('height', '40%')
        $('#item' + i).find('.pokerImg').css('top', '15%')
    } else {
        $('#item' + i).find('.Flod').css('height', '65%')
        $('#item' + i).find('.pokerImg').css('top', '0%')
    }
    players -= 1
    playVoice('flower_voice_1')
}

function aiWatch(i) {
    let show = i >= 2 ? 'showdown2' : 'showdown'
    if (i >= 2) $('#item' + i).find('.eye').css('height', '30%')
    $('#item' + i).find('.pokerImgWarp').addClass(show)
    $('#item' + i).addClass('Watch')
    $('#item' + i).find('.eye').show()
    setTimeout(function () {
        $('#item' + i).find('.eye').css('top', '-100%')
    }, 1000)
    setTimeout(function () {
        $('#item' + i).find('.eye').css('opacity', '0')
    }, 1500)
    playVoice('flower_voice_0')
}

function aiPay(i, pay, remain) {
    zIndex += 1
    clearTimeout(widthTimeout)
    let Watch = false
    if ($("#item" + i).hasClass('Watch')) {
        pay = pay / 2
        Watch = true
    }
    pay < base + 1 ? nowMoney = base : nowMoney = pay

    let cloneChip
    document.querySelector('#createBox' + i).querySelector('.chips').querySelectorAll('.chipsimgBox').forEach(function (item) {
        if (Number(item.querySelector('p').innerHTML) == pay) {
            cloneChip = item
        } else if (pay == base) {
            cloneChip = document.querySelector('#createBox' + i).querySelector('.chips').querySelector(".chipsimgBox")
        }
    })

    let clone = cloneChip.cloneNode(true);
    if (pay == base) clone.querySelector('p').innerText = base
    let bet
    if (Watch) {
        bet = Number(clone.querySelector('p').innerText) * 2
    } else {
        bet = Number(clone.querySelector('p').innerText)
    }
    clone.querySelector('p').innerText = bet

    let moveItem = document.querySelector('#createBox' + i).querySelector('.chips2').appendChild(clone);
    let centerWidth = document.querySelector('#center').offsetWidth
    let centerHeight = document.querySelector('#center').offsetHeight
    let clonePosition = getPosition(moveItem)
    let centerPosition = getPosition(center)
    let rangeX = centerPosition.x + centerWidth / 4 * 3
    let rangeY = centerPosition.y + centerHeight / 4 * 3
    let range = {
        x: rangeX,
        y: rangeY
    };
    let randomX = randomFun(centerPosition.x, range.x)
    let randomY = randomFun(centerPosition.y, range.y)
    let random = {
        x: randomX,
        y: randomY
    };
    let move = positionFun(clonePosition, random);
    moveItem.style.zIndex = `3`;
    moveItem.style.transition = `.5s`;
    moveItem.style.visibility = `visible`;
    moveItem.style.transform = `translate(${move.x}px, ${move.y}px)`;
    moveItem.classList.add('moveChips')
    moveItem.style.zIndex = zIndex
    playVoice('chip')
    let total = Number(document.querySelector('#item' + i).querySelector('.money').innerText)
    let aiPayMoney = clone.querySelector('p').innerHTML
    total += Number(aiPayMoney)
    document.querySelector('#item' + i).querySelector('.money').innerText = total
    let ALLMoney = Number(document.querySelector('#totalMoney').innerText)
    ALLMoney += Number(aiPayMoney)
    let aiMoney = document.querySelector('#item' + i).querySelector('.totalSpan').innerText
    aiMoney = Number(aiMoney) - Number(aiPayMoney)
    document.querySelector('#item' + i).querySelector('.totalSpan').innerText = remain - base
    document.querySelector('#totalMoney').innerText = ALLMoney

}

function aiLose(i) {
    $('#item' + i).find('.pokerImg').attr('src', './images/flowerImage/Poker/1.png')
    $('#item' + i).find('.aiLose').show()
    $('#item' + i).find('.pokerCenter').show()
    $('#item' + i).addClass('LosePoker')
    brightness(i)
}

function aiRatio(a, win, lose, loserCards, loserCardText) {
    playVoice('flower_voice_3')
    playVoice('collision')
    let imgWidth = pokerImg.offsetWidth
    let imgHeight = pokerImg.offsetHeight
    let userImgWidth = userImg.offsetWidth
    let userImgHeight = userImg.offsetHeight
    $('#compare').css({
        'opacity': '1',
        'z-index': '50'
    })
    let b = a == win ? lose : win //被比牌的玩家
    let aInfo = document.querySelector('#item' + a).querySelector('.information')
    let aPoker = document.querySelector('#item' + a).querySelector('.pokerImgWarp')
    let aInfoP = getPosition(aInfo)
    let aPokerP = getPosition(aPoker)
    let top1Move = positionFun(aInfoP, getPosition(topInfo))
    let top2Move = positionFun(aPokerP, getPosition(topPoker))
    let aWidth = aPoker.offsetWidth
    let aHeight = aPoker.offsetHeight

    aPoker.parentElement.style.zIndex = '51'
    aInfo.style.zIndex = '51'
    aPoker.style.width = topPoker.offsetWidth + 'px'
    aPoker.style.height = topPoker.offsetHeight + 'px'
    aInfo.classList.add('addBorder')
    let bInfo = document.querySelector('#item' + b).querySelector('.information')
    let bPoker = document.querySelector('#item' + b).querySelector('.pokerImgWarp')
    let bInfoP = getPosition(bInfo)
    let bPokerP = getPosition(bPoker)
    let bottom1Move = positionFun(bInfoP, getPosition(bottomInfo))
    let bottom2Move = positionFun(bPokerP, getPosition(bottomPoker))
    let bWidth = bPoker.offsetWidth
    let bHeight = bPoker.offsetHeight

    bPoker.parentElement.style.zIndex = '51'
    bInfo.style.zIndex = '51'
    bPoker.style.width = topPoker.offsetWidth + 'px'
    bPoker.style.height = topPoker.offsetHeight + 'px'
    bInfo.classList.add('addBorder')
    if (a == 4 || b == 4) {
        document.querySelector('#userPoker').querySelector('.pokerBox').style.top = 'unset'
        document.querySelector('.userPlayer').style.overflow = 'unset'
    }
    let overstep = userInfo.offsetWidth - bottomInfo.offsetWidth
    let cardsAry = []
    let sortAry = CardsSort(loserCards)
    sortAry.forEach(function (item) {
        cardsAry.push(item.card)
    })

    setTimeout(function () {

        aInfo.style.transform = `translate(${top1Move.x}px, ${top1Move.y}px)`
        aPoker.style.transform = `translate(${top2Move.x}px, ${top2Move.y}px)`
        if (b == 4) {
            bInfo.style.transform = `translate(${bottom1Move.x-overstep-5}px, ${bottom1Move.y}px)`
        } else {
            bInfo.style.transform = `translate(${bottom1Move.x}px, ${bottom1Move.y}px)`
        }
        bPoker.style.transform = `translate(${bottom2Move.x}px, ${bottom2Move.y}px)`
        aPoker.querySelectorAll('.pokerImg').forEach(function (item, index) {
            pokerCss(item, index)

        })
        bPoker.querySelectorAll('.pokerImg').forEach(function (item, index) {
            pokerCss(item, index)

        })

        function pokerCss(item, index) {
            item.style.width = topImg.offsetWidth + 'px'
            item.style.height = topImg.offsetHeight + 'px'
            item.style.transition = '.5s'
            if (index == 1) item.style.left = '25%'
            if (index == 2) item.style.left = '50%'

        }
    }, 500)
    setTimeout(function () {
        compareCenter.style.visibility = 'visible'
        aPoker.style.transition = '.1s'
        bPoker.style.transition = '.1s'
    }, 1000)
    setTimeout(function () {
        aPoker.style.transform = `translate(${top2Move.x}px, ${top2Move.y+-20}px)`
        bPoker.style.transform = `translate(${bottom2Move.x}px, ${bottom2Move.y+20}px)`
    }, 1200)
    setTimeout(function () {
        aPoker.style.transform = `translate(${top2Move.x}px, ${top2Move.y+100}px)`
        bPoker.style.transform = `translate(${bottom2Move.x}px, ${bottom2Move.y-100}px)`
    }, 1400)
    setTimeout(function () {
        aPoker.style.transform = `translate(${top2Move.x}px, ${top2Move.y}px)`
        bPoker.style.transform = `translate(${bottom2Move.x}px, ${bottom2Move.y}px)`
    }, 1600)
    setTimeout(function () {
        compareCenter.querySelectorAll('span').forEach(function (item) {
            item.style.fontSize = '6rem'
        })
        playVoice('flop')

    }, 1800)
    setTimeout(function () {
        playVoice('defeat')
    }, 2500)
    let loseItem = document.querySelector('#item' + lose).querySelector('.pokerImgWarp')
    if (!loseItem.classList.contains('userShow')) {
        setTimeout(function () {
            loseItem.querySelectorAll('.pokerImg').forEach(function (item, index) {
                item.style.transform = `rotateY(-85deg)`
                if (lose !== 4) item.style.top = `0`


            })
        }, 2000)
        setTimeout(function () {
            loseItem.querySelectorAll('.pokerImg').forEach(function (item, index) {
                item.style.transition = 'unset'
                item.setAttribute('src', `./images/flowerImage/Poker/${cardsAry[index]}.png`)
                item.style.transform = `rotateY(-85deg)`

            })
        }, 2300)

        setTimeout(function () {
            loseItem.querySelectorAll('.pokerImg').forEach(function (item, index) {
                item.style.transition = '.5s'
                item.setAttribute('src', `./images/flowerImage/Poker/${cardsAry[index]}.png`)
                item.style.transform = `rotateY(0deg)`
            })

        }, 2500)

    }
    setTimeout(function () {
        $('#item' + lose).find('.cross1').css({
            'opacity': '1',
        })
        $('#item' + lose).find('.svg1').attr('fill', '#D0021B')
    }, 3000)
    setTimeout(function () {
        $('#item' + lose).find('.cross2').css({
            'opacity': '1',
        })
        $('#item' + lose).find('.svg2').attr('fill', '#D0021B')
        aPoker.style.transition = '1s'
        bPoker.style.transition = '1s'
        compareCenter.style.visibility = 'hidden'
        playVoice('Fork')
    }, 3300)

    setTimeout(function () {
        $('#item' + lose).find('.cross').css({
            'opacity': '0',
        })
        $('#item' + lose).find('.svg1').attr('fill', '#fff')
        $('#item' + lose).find('.svg2').attr('fill', '#fff')

        aPoker.style.width = aWidth + 'px'
        aPoker.style.height = aHeight + 'px'
        bPoker.style.width = bWidth + 'px'
        bPoker.style.height = bHeight + 'px'
        aPoker.style.transform = `translate(0px, 0px)`
        aInfo.style.transform = `translate(0px, 0px)`
        bInfo.style.transform = `translate(0px, 0px)`
        bPoker.style.transform = `translate(0px, 0px)`
        aPoker.parentElement.style.zIndex = '0'
        aInfo.style.zIndex = '1'
        bPoker.parentElement.style.zIndex = '0'
        bInfo.style.zIndex = '1'
        document.querySelectorAll('.navBtn').forEach(function (item) {
            item.classList.remove('disabled')
        })
        if (aPoker.classList.contains('showdown2') && lose !== a) {
            aPoker.parentNode.style.paddingTop = '10px'
        }
        if (bPoker.classList.contains('showdown2') && lose !== b) {
            bPoker.parentNode.style.paddingTop = '10px'
        }
        if (lose !== 4) {
            loseItem.querySelector('.pokerTxt').style.display = 'block'
            loseItem.querySelector('.pokerTxt').querySelector('span').innerText = i18nTxtFn(loserCardText, lose)
            // loseItem.querySelector('.pokerTxt').querySelector('span').innerText = loserCardText
            // loserCardText
            loseItem.classList.add('LosePoker')
            loseItem.querySelectorAll('.pokerImg').forEach(function (item) {
                item.style.transition = '.5s'
                item.style.top = '0'
                item.style.transform = `rotate(0)`
            })
            players -= 1
        } else {
            if (!loseItem.classList.contains('userShow')) {
                loseItem.querySelectorAll('.pokerImg').forEach(function (item, index) {
                    if (index == 0) {
                        item.style.transform = 'rotate(-15deg)'
                    }
                    if (index == 1) {
                        item.style.top = '-5%'
                    }
                    if (index == 2) {
                        item.style.transform = 'rotate(10deg)'
                        item.style.top = '3%'
                        item.style.left = '50%'
                    }
                })
            }

        }
        document.querySelectorAll('.player').forEach(function (item) {
            item.querySelector('.addChips').style.visibility = 'visible'
        })
        aPoker.querySelectorAll('.pokerImg').forEach(function (item, index) {
            let W
            let H
            if (a !== 4) {
                W = imgWidth
                H = imgHeight
            } else {
                w = userImgWidth
                H = userImgHeight

                if (index == 1) item.style.left = '22%'
                if (index == 2) item.style.left = '44%'
            }
            item.style.width = W + 'px'
            item.style.height = H + 'px'

        })
        bPoker.querySelectorAll('.pokerImg').forEach(function (item, index) {
            let W
            let H
            if (b !== 4) {
                W = imgWidth
                H = imgHeight
            } else {
                w = userImgWidth
                H = userImgHeight
                if (index == 1) item.style.left = '22%'
                if (index == 2) item.style.left = '44%'
            }
            item.style.width = W + 'px'
            item.style.height = H + 'px'
        })
        $('#compare').css({
            'opacity': '0',
            'z-index': '-1'
        })

    }, 3800)

    setTimeout(function () {

        loseItem.querySelector('.Lose').style.opacity = '1'
        loseItem.querySelector('.Lose').style.bottom = '20%'
        loseItem.querySelector('.Lose').style.transform = 'scale(1)'
        loseItem.querySelector('.Lose').style.zIndex = '1'
        if (lose !== 4) {
            loseItem.querySelector('.Lose').style.bottom = '30%'
        } else {
            loseItem.querySelector('.Lose').style.bottom = '50%'
        }


    }, 4500)
    setTimeout(function () {

        if (lose !== 4) {
            loseItem.querySelector('.Lose').style.width = '30%'
            loseItem.querySelector('.Lose').style.height = '50%'
            if (lose < 2) {
                loseItem.querySelector('.Lose').style.bottom = '-10%'
            } else {
                loseItem.querySelector('.Lose').style.bottom = '-30%'
            }


        } else {
            loseItem.querySelector('.Lose').style.width = '35%'
            loseItem.querySelector('.Lose').style.height = '40%'
            loseItem.querySelector('.Lose').style.top = '-40%'
            loseItem.querySelector('.Lose').style.right = '5px'

            userShow()
            showPokerFun(cardsAry, loserCardText)
            $('#box nav').hide()
            setTimeout(function () {
                loseItem.querySelector('.Lose').style.display = 'none'
                $('#userLose').show()
            }, 500)

        }
        if (lose == 0 || lose == 2) {
            loseItem.querySelector('.Lose').style.left = '-15%'
            loseItem.querySelector('.Lose').style.transform = 'rotate(-15deg)'
        }
        if (lose == 1 || lose == 3) {
            loseItem.querySelector('.Lose').style.right = '-15%'
            loseItem.querySelector('.Lose').style.transform = 'rotate(15deg)'
        }

        brightness(lose)

        if (a == 4 || b == 4) {
            document.querySelector('#userPoker').querySelector('.pokerBox').style.top = '30%'
            document.querySelector('.userPlayer').style.overflow = 'hidden'
        }
        compareCenter.querySelectorAll('span').forEach(function (item) {
            item.style.fontSize = '4rem'
        })
        aInfo.classList.remove('addBorder')
        bInfo.classList.remove('addBorder')
    }, 5800)
}

function endFun(endAry, winer, userTxt, userCard) {
    clearTimeout(widthTimeout)
    let winerItme = document.querySelector('#item' + winer).querySelector('.pokerImgWarp')
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
    playVoice('collect_chips')
    let newEndAry = []
    let cardsAry = [];
    endAry.forEach((card) => {
        newEndAry.push(card.cards)
    })
    let sortAry = analysisCardFlower(newEndAry)

    for (let i = 0; i < 5; i++) {
        cardsAry[i] = []
        sortAry[i].forEach(item => {
            cardsAry[i].push(item.card)

        })
        document.querySelector("#progress" + i).style.display = "none";
    }


    for (let i = 0; i < endAry.length; i++) {
        if (!document.querySelector('#item' + i).classList.contains('FlodPoker')) {
            if (i === winer) {
                if (winer === 4) {
                    playVoice('win')
                    showPokerFun(cardsAry[4], userTxt)
                    document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelector('.winTxt').style.right = '28px'
                    document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelector('.winTxt').style.top = '-40px'
                    document.querySelector('#item' + i).querySelector('.eyeBox').style.display = 'none'
                } else {
                    playVoice('lose')
                    document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelector('.pokerTxt').style.display = 'block'
                    document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelector('.pokerTxt').querySelector('span').innerText = i18nTxtFn(endAry[i].type, i)
                    // endAry[i].type
                    if (winer == 2) {
                        document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelector('.winTxt').style.right = '25px'
                    }
                    if (winer == 3) {
                        document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelector('.winTxt').style.left = '10px'
                    }
                }

                document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelector('.winTxt').style.display = 'block'
                document.querySelector('#item' + i).querySelector('.pokerImgWarp').classList.add('winBoder')
                document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelectorAll('.pokerImg').forEach(function (item) {
                    item.style.top = '0'
                    item.style.transform = `rotateY(0)`
                })
                $('#box nav').hide()
            }

            document.querySelector('#item' + i).querySelector('.pokerImgWarp').querySelectorAll('.pokerImg').forEach(function (item, index) {
                item.setAttribute('src', `./images/flowerImage/Poker/${cardsAry[i][index]}.png`)
            })
        }
    }


    setTimeout(function () {
        function moveChips(el, Ary) {
            let width = document.querySelector('#item' + winer).querySelector('.pokerImgWarp').offsetWidth / 3
            let height = document.querySelector('#item' + winer).querySelector('.pokerImgWarp').offsetHeight / 3
            document.querySelectorAll(el).forEach(function (item, index) {
                item.style.transition = '1s'
                item.style.zIndex = '55'
                item.style.transform = `translate(${Ary[index].x+width}px, ${Ary[index].y+height}px)`
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
    }, 1000)

    for (let i = 0; i < endAry.length; i++) {
        if (i !== winer) {

            let loseMoney = $("#item" + i).find('.money').text()

            $("#item" + i).find('.loseMoney').text('-' + loseMoney)
            $("#item" + i).find('.loseMoney').css({
                'visibility': 'visible',
            })
        } else {

            let winMoney = Number($('#totalMoney').text()) - Number($("#item" + winer).find('.money').text())
            $("#item" + winer).find('.loseMoney').text('+' + winMoney)
            $("#item" + winer).find('.loseMoney').css({
                'visibility': 'visible',
                'color': 'rgb(133, 255, 0)'
            })
            let winerMoney = $("#item" + winer).find('.totalSpan').text()
            let total = Number(winerMoney) + Number(winMoney) + Number($("#item" + winer).find('.money').text())
            $("#item" + winer).find('.totalSpan').text(total)
        }
    }

}

//遊戲順序
function actionPlayer(actionId) {
    clearTimeout(widthTimeout)
    if (actionId !== 4) {

        $('#FoldNav').css('filter', 'brightness(0.5)')
        $('#raise').css('filter', 'brightness(0.5)')
        $('#Ratio').css('filter', 'brightness(0.5)')
        $('#eyeImg').css('filter', 'brightness(0.5)')
        isUser = false

        if ($('#Follow >span').text() !==  $.i18n.prop("len_Cancel")) {
            $('#Follow >span').text( $.i18n.prop("len_Automatic"))
            $('#Follow span').css({
                'margin-left': '0'
            })
        }
    }
    let player = actionId
    let index = actionId
    document.querySelector("#progress" + player).style.display = "block";
    document
        .querySelector("#progressbar" + index)
        .setAttribute("style", `width: ${100}%;height: 100%`);
    let width = 100
    changeWidthFun(index, width, actionId)
}

function changeWidthFun(index, width, actionId) {
    widthTimeout = setTimeout(function () {
        width -= 1;
        // console.log(width)
        document
            .querySelector("#progressbar" + index)
            .setAttribute("style", `width: ${width}%;height: 100%`);
        if (width <= 0) {
            if (actionId == 4) {
                let cloneChip
                let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
                chipsWarp.querySelector('.chipsBox').querySelectorAll('.chipsimgBox').forEach(function (item) {
                    if (item.querySelector('p').innerHTML == DoubleMoney) {
                        cloneChip = item
                    } else if (nowMoney == base) {
                        cloneChip = document.querySelector('#chipsBox').querySelector(".chipsimgBox")
                        oneMoney = true
                    }
                })
                $('#compare').css({
                    'opacity': '0',
                    'z-index': '-1'
                })
                document.querySelectorAll(".player").forEach(function (item) {
                    item.classList.remove('borderClass')
                })
                chipMove(cloneChip)
                document.querySelectorAll('.navBtn').forEach(function (item) {
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

function showPokerFun(showCards, CardText) {
    let userPoker = document.querySelector('#userPoker').querySelector('.pokerBox')
    userPoker.querySelectorAll(".pokerImg").forEach(function (item, index) {
        item.setAttribute('src', `./images/flowerImage/Poker/${showCards[index]}.png`)
    });
    document.querySelector("#pokerTxt").style.display = 'block'
    document.querySelector("#pokerTxt").style.zIndex = '9'
    document.querySelector("#pokerTxt").innerText = i18nTxtFn(CardText, 4)
    //  CardText;
}

function UserPlayerFun() {
    isUser = true
    $('#FoldNav').css('filter', 'unset')
    $('#raise').css('filter', 'unset')
    $('#Ratio').css('filter', 'unset')
    $('#eyeImg').css('filter', 'unset')
    let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
    document.querySelector('#RatioMoney').innerText = DoubleMoney
    if (!determine) {
        $('#Follow >span').text($.i18n.prop("len_Follow") +':' + DoubleMoney)
        $('#Follow >span').css({
            // 'margin-left': '5%',
            'font-size:': '14px'
        })
    } else {
        let cloneChip
        chipsWarp.querySelector('.chipsBox').querySelectorAll('.chipsimgBox').forEach(function (item) {
            if (item.querySelector('p').innerHTML == DoubleMoney) {
                cloneChip = item
            } else if (nowMoney == base) {
                cloneChip = document.querySelector('#chipsBox').querySelector(".chipsimgBox")
                oneMoney = true
            }
        })
        setTimeout(function () {
            chipMove(cloneChip)
        }, 500)

    }

}

function startFun() {
    let imgWidth = pokerImg.offsetWidth
    let imgHeight = pokerImg.offsetHeight
    let userImgWidth = userImg.offsetWidth
    let userImgHeight = userImg.offsetHeight
    let promise = new Promise(function (resolve, reject) {
        center.querySelectorAll('.pokerImg').forEach(function (item, index) {
            let move = 0
            let Interval = setInterval(function () {
                if (index == move) {
                    item.style.transform = `translate(${startAry[index].x}px,${startAry[index].y}px)`
                    item.style.width = imgWidth + 'px'
                    item.style.height = imgHeight + 'px'
                }
                if (index >= 12 && move >= 12) {
                    item.style.width = userImgWidth + 'px'
                    item.style.height = userImgHeight + 'px'
                }
                move++
                if (move >= 15) {
                    clearInterval(Interval)
                    setTimeout(function () {
                        for (let i = 0; i < 4; i++) {
                            $('#item' + i).find('.pokerBox').css('visibility', 'visible')
                        }
                        $('#userPoker').css('visibility', 'visible')
                    }, 1000)
                    setTimeout(function () {
                        item.style.display = 'none'

                    }, 1200)
                }
            }, 50)
        })
        resolve()
    })

    promise.then(function () {
        setTimeout(function () {
            startMove()

        }, 1200)
    })
    let imgAry = imgFun(1, 32, 5)

    for (let i = 0; i < 5; i++) {
        $('#item' + i).find('.photo img').attr('src', `./images/Headshot/${imgAry[i]}.jpg`)

    }
    document.querySelectorAll(".player").forEach(function (item) {
        item.querySelector(".totalSpan").innerHTML =
            Number(item.querySelector(".totalSpan").innerHTML) - base;
    });
    let totalSpan = Number(document.querySelector("#item4").querySelector('.totalSpan').innerText)

    if (totalSpan !== 0) {
        totalSpan = totalSpan - base
        document.querySelector("#item4").querySelector('.totalSpan').innerText = totalSpan
    } else {
        let totalSpan2 = Number(document.querySelector("#item4").querySelector('.totalSpan2').innerText)
        totalSpan2 = totalSpan2 - base
        document.querySelector("#item4").querySelector('.totalSpan2').innerText = totalSpan2
    }


    document.querySelector("#item4").querySelector('.money').innerHTML = base
    document.querySelector("#RatioMoney").innerText = base
    $('#Follow >span').text( $.i18n.prop("len_Follow")+':' + base)
    totalMoney.innerHTML = base * 5
    nowMoney = base
    initNiuMenu()
}

function startMove() {
    playVoice('licensing')
    let centerWidth = document.querySelector('#center').offsetWidth
    let centerHeight = document.querySelector('#center').offsetHeight
    let centerPosition = getPosition(center)
    let rangeX = centerPosition.x + centerWidth / 4 * 3
    let rangeY = centerPosition.y + centerHeight / 4 * 3
    let range = {
        x: rangeX,
        y: rangeY
    };
    let randomX = randomFun(centerPosition.x, range.x)
    let randomY = randomFun(centerPosition.y, range.y)
    let random = {
        x: randomX,
        y: randomY
    };
    let clone = chipsimgBox1.cloneNode(true);
    let moveItem = chipsCenter.appendChild(clone);
    let chipsimgBox1Position = getPosition(moveItem);
    let move = positionFun(chipsimgBox1Position, random);
    moveItem.querySelector('p').innerText = base;
    moveItem.style.transition = '0.5s'
    clone.classList.add('moveChips2')
    setTimeout(function () {
        moveItem.style.visibility = 'visible'
        moveItem.style.transform = `translate(${move.x}px, ${move.y}px)`;
        playVoice('chip')
    }, 500)

    let playerChipAry = [];
    document.querySelectorAll(".createBox").forEach(function (item) {
        let playerChip = item.querySelector(".chipsimgBox");
        let playerChipPosition = getPosition(playerChip);
        playerChipAry.push(playerChipPosition);
    });

    let playerChipAry2 = [];
    let Len = document.querySelectorAll(".createBox").length;
    let randomAry = [];
    for (let i = 0; i < Len; i++) {
        let randomchips2X = randomFun(centerPosition.x, range.x);
        let randomchips2Y = randomFun(centerPosition.y, range.y);

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

    document.querySelectorAll(".createBox").forEach(function (item, index) {
        let clone = item.querySelector('.chipsimgBox').cloneNode(true);
        item.querySelector('.chips2').appendChild(clone);
        clone.querySelector('p').innerText = base;
        clone.style.transition = '0.5s'
        clone.classList.add('moveChips3')
        setTimeout(function () {
            clone.style.visibility = 'visible'
            clone.style.transform = `translate(${playerChipAry2[index].x}px, ${playerChipAry2[index].y}px)`;
            playVoice('chip')
        }, 500)
    });

}

function userShow() {
    $('#eyeImg').hide()
    $('#pokerTxt').show()
    $('#userPoker').addClass('unfold')
    $('#userPoker').find('.pokerImgWarp').addClass('userShow')
}

function chipMove(el) {
    clearTimeout(widthTimeout)
    zIndex++
    let centerWidth = document.querySelector('#center').offsetWidth
    let centerHeight = document.querySelector('#center').offsetHeight
    let centerPosition = getPosition(center)
    let rangeX = centerPosition.x + centerWidth / 4 * 3
    let rangeY = centerPosition.y + centerHeight / 4 * 3
    let range = {
        x: rangeX,
        y: rangeY
    };
    let clone = el.cloneNode(true);
    let moveItem = chipsCenter.appendChild(clone);
    let clonePosition = getPosition(moveItem)

    let randomX = randomFun(centerPosition.x, range.x)
    let randomY = randomFun(centerPosition.y, range.y)
    let random = {
        x: randomX,
        y: randomY
    };
    let move = positionFun(clonePosition, random);

    let coin = Number(moveItem.querySelector('p').innerHTML)
    let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney

    if (Double) {
        nowMoney = coin / 2
    } else {
        nowMoney = coin
    }
    if (oneMoney) {
        moveItem.querySelector("p").innerHTML = DoubleMoney
        nowMoney = base
        if (!Double) {
            coin = base
        } else {
            coin = base * 2
        }
    }
    if (nowMoney > base) oneMoney = false

    moveItem.style.transition = `.5s`;
    moveItem.style.visibility = `visible`;
    moveItem.style.transform = `translate(${move.x}px, ${move.y}px)`;
    moveItem.style.zIndex = zIndex
    moveItem.classList.add('moveChips2')
    playVoice('chip')

    let index = betCoinList.indexOf(nowMoney)

    if (!userCompare) doBet(index + 1)
    $('#chipsBox').css('visibility', "hidden")
    $('#box nav').show()
    let total = Number(document.querySelector("#item4").querySelector('.money').innerText)
    total += coin
    document.querySelector("#item4").querySelector('.money').innerText = total
    let totalSpan = Number(document.querySelector("#item4").querySelector('.totalSpan').innerText)
    totalSpan = totalSpan - coin
    // document.querySelector("#item4").querySelector('.totalSpan').innerText = totalSpan
    let ALLMoney = Number(document.querySelector('#totalMoney').innerText)
    ALLMoney += coin
    document.querySelector('#totalMoney').innerText = ALLMoney
    isUser = false
}

function flower() {
    $('#raise').on('click', function (e) {
        if (isUser) {
            playVoice('click')
            let index = betCoinList.indexOf(nowMoney)
            for (let i = 0; i < index - 1; i++) {
                document
                    .querySelector("#chipsBox").querySelector('.chipsBoxWarp')
                    .getElementsByClassName("chipsimgBox")[i].querySelector("p").style.color = "#aaa";
            }
            $('#box nav').hide()
            $('#chipsBox').css('visibility', "visible")
            e.stopPropagation();

        }
    })
    $('#chipsBox .chipsimgBox').on('click', function () {
        if (isUser) {
            playVoice('click')
            let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
            if (Number(this.querySelector("p").innerText) < DoubleMoney) {
                return false;
            }
            oneMoney = false
            chipMove(this)
        }

    })
    $('#chipsBox').on('click', function (e) {
        chipsBoxFlag = false;
    }, false)
    $('#box').on('click', function (e) {
        if (chipsBoxFlag === true) {
            if ($('#chipsBox').css('visibility') == "visible") {
                $('#chipsBox').css('visibility', 'hidden')
                $('#box nav').show()
                e.stopPropagation();
            }
        }
        chipsBoxFlag = true;
    })
    $('#FoldNav').on('click', function () {
        if (isUser) {
            playVoice('click')
            playVoice('flower_voice_1')
            userShow()
            $('#box nav').hide()
            $('#userFlod').show()
            playVoice('flop')
            brightness(4)
            doGiveUp()
            isUser = false
        }

    })
    $('#eyeImg').on('click', function () {
        if (isUser) {
            playVoice('click')
            playVoice('flower_voice_0')
            Double = true
            oneMoney = false
            idShow = true
            userShow()
            doWatchCard()
            playVoice('flop')
            document.querySelector('#chipsBox').querySelector('.chipsBoxWarp').querySelectorAll('.chipsimgBox').forEach(function (item) {
                let text = Number(item.querySelector('p').innerHTML)
                text = text * 2
                item.querySelector('p').innerHTML = text
            })
            let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
            document.querySelector('#RatioMoney').innerText = DoubleMoney
            $('#Follow >span').text($.i18n.prop("len_Follow")+':' + DoubleMoney)

        }
    })


    $('#Ratio').on('click', function () {

        if (isUser) {
            playVoice('click')
            document.querySelectorAll('.navBtn').forEach(function (item) {
                item.classList.add('disabled')
            })
            $('#compare').css({
                'opacity': '1',
                'z-index': '50'
            })
            let number
            document.querySelectorAll('.player').forEach(function (item) {
                item.classList.add('borderClass')
                item.querySelector('.addChips').style.visibility = 'hidden'

                if (item.querySelector('.pokerImgWarp ').classList.contains('LosePoker')) {
                    item.classList.remove("borderClass");
                    item.querySelector('.addChips').style.visibility = 'visible'

                }
                if (item.classList.contains('FlodPoker')) {
                    item.classList.remove("borderClass");
                    item.querySelector('.addChips').style.visibility = 'visible'

                }
                if (players === 1) {
                    if (item.classList.contains("borderClass")) {
                        toCompare(item)
                    }
                }
                item.addEventListener('click', function () {
                    playVoice('click')
                    if (this.classList.contains("borderClass")) {
                        toCompare(this)
                    }
                })

                function toCompare(el) {

                    let name = el.id;
                    number = name.replace(/item/, "");
                    document.querySelectorAll(".player").forEach(function (all) {
                        all.classList.remove("borderClass");
                    });
                    let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
                    chipsWarp.querySelector('.chipsBox').querySelectorAll('.chipsimgBox').forEach(function (item) {
                        if (item.querySelector('p').innerHTML == DoubleMoney) {
                            cloneChip = item
                        } else if (nowMoney == base) {
                            cloneChip = document.querySelector('#chipsBox').querySelector(".chipsimgBox")
                            oneMoney = true
                        }
                    })
                    userCompare = true
                    doCompare(number)
                }
            })
            isUser = false
        }

    })

    $('#Follow').on('click', function () {
        playVoice('click')
        if (isUser) {

            let cloneChip
            let DoubleMoney = Double == true ? nowMoney * 2 : nowMoney
            chipsWarp.querySelector('.chipsBox').querySelectorAll('.chipsimgBox').forEach(function (item) {
                if (item.querySelector('p').innerHTML == DoubleMoney) {
                    cloneChip = item
                } else if (nowMoney == base) {
                    cloneChip = document.querySelector('#chipsBox').querySelector(".chipsimgBox")
                    oneMoney = true
                }
            })
            chipMove(cloneChip)
            if ($('#Follow >span').text() ==  $.i18n.prop("len_Follow")) {
                $('#Follow >span').text( $.i18n.prop("len_Automatic"))
                $('#Follow >span').css({
                    'margin-left': '0'
                })
            }
        } else {
            if ($('#Follow >span').text() ==  $.i18n.prop("len_Automatic")) {
                $('#Follow >span').text( $.i18n.prop("len_Cancel"))

                determine = true;
            } else {
                $('#Follow >span').text( $.i18n.prop("len_Automatic"))
                determine = false;
            }
        }

    })
    i18nFun()
}