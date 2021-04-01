var audioList = [
    // ['flop', "flop.mp3"], //翻牌
    // ['chip', "sicboChip.mp3"], //丟籌碼
    // ['click', "eventClick.mp3"], //點擊
    // ['win', "winSource.mp3"], //贏家
    // ['lose', "gameOver.mp3"], //輸家

    //背景音樂 共用
    ['startMp3', 'startMp3.mp3'], //開始
    ['licensing', 'licensing.mp3'], // 發牌
    ['flop', 'showdown.mp3'], // 翻牌
    ['gold', 'gold.mp3'], // 金幣
    ['click', 'click_0.mp3'], // 點擊
    ['click_1', 'click_1.mp3'], // 開新局
    ['chip', "sicboChip.mp3"], //丟籌碼
    //背景音樂 金花

    ['bgm', 'flowerBgm2.mp3'],
    ['collision', 'collision.mp3'], // 比牌
    ['defeat', 'defeat.mp3'], // 比牌失敗
    ['Fork', 'Fork.mp3'], //敗 動態定位
    ['collect_chips', 'collect_chips.mp3'], //收籌碼
    // //語音
    ['flower_voice_0', 'flower_voice_0.mp3'], //看牌
    ['flower_voice_1', 'flower_voice_1.mp3'], //棄牌
    ['flower_voice_2', 'flower_voice_2.mp3'], //跟注
    ['flower_voice_3', 'flower_voice_3.mp3'], //比牌
    ['flower_voice_4', 'flower_voice_4.mp3'], //加注

]
var voice = false
var audioReady = false
// console.log(audioList)
for (let i = 0; i < audioList.length; i++) {
    let audio = document.createElement('audio')
    audio.setAttribute('class', audioList[i][0])
    box.appendChild(audio)
}


function playVoice(buffer) {
    if (!voice) return;
    let audio = document.querySelector(`.${buffer}`);
    try {
        audio.currentTime = 0;
        audio.play();
    } catch (error) {
        console.log(error);
    }
}

function pauseVoice(buffer) {
    document.querySelector(`.${buffer}`).pause();
}
// 載入音效

function loadAudio(resolved) {
    audioList.forEach((item, index) => {
        let audio = document.querySelector(`.${item[0]}`);
        audio.src = `./music/flower/${item[1]}`;
        audio.preload = "auto";
        if (item[0] === 'bgm') {
            audio.loop = true;
            audio.volume = 0.5;
            audioReady = true;
            if (resolved !== undefined) resolved(true);
        }
    });
}
// 切換聲音狀態 clickVoice(o)
function clickVoice(target) {
    // let  lan = $("#language").val()
    let lan =$('#language').data("lan")
    let text = ''
    if (!audioReady) return loadAudio();
    voice = !voice;
    if (voice) {
        localStorage.voice = true;
        switch (lan) {
            case 'zh-TW':
                text = "開" 
                break;
            case 'zh-CN':
                text = "开" 
                break;
            case 'en':
                text = "open" 
                break;
        }
        target.changeText('sound', text);
        playVoice('bgm')
    } else {
        localStorage.voice = false;
        switch (lan) {
            case 'zh-TW':
                text = "關" 
                break;
            case 'zh-CN':
                text = "关" 
                break;
            case 'en':
                text = "close" 
                break;
        }
        target.changeText('sound', text);
        pauseVoice('bgm')
    }
}
// 中途調整 BGM
// function bgmControl(contr) {
//     if (isIOS) {
//         if (contr == 'small') this.pauseVoice('bgm');
//         else if (contr == 'big') this.playVoice('bgm');
//     } else if (contr == 'small') $(".bgm").animate({
//         volume: 0.1
//     }, 1000);
//     else if (contr == 'big') $(".bgm").animate({
//         volume: 1
//     }, 1000);
// }

var promise = new Promise(resolve => {
        loadAudio(resolve)
    })
    .then(res => {
        // console.log('test', res)
        if (localStorage.voice == 'true') voice = true;
        if (voice) playVoice('bgm');
    }).catch(error => {
        console.log(error);
    });