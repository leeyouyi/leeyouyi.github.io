
    var audioList = [
        ['bgm', 'candyBgm.mp3'],
        ['button01a', 'button01a.mp3'], //點擊糖果
        ['button02a', 'button02a.mp3'], //點擊巧克力
        ['button03a', 'button03a.mp3'], //點擊加
        ['button04a', 'button04a.mp3'], //點擊減
        ['coin05', 'coin05.mp3'], //確認下注
        ['flow', 'flow.mp3'], //水管流水
        ['slowflow', 'slowflow.mp3'], //水管流水
        ['pickup04', 'pickup04.mp3'], //巧克力閃爍
        ['powerdown07', 'powerdown07.mp3'], //猜錯
        ['surprise', 'surprise.mp3'], //遮罩消失
        ['time', 'time.mp3'], //倒數
        ['win', 'win.mp3'], //猜對
    
    ]
    var voice = false
    var audioReady = false
    // var voiceFlag = false
    // console.log(audioList)
    // document.addEventListener('click',()=>{
    //     voiceFlag = true
    //  })
    for (let i = 0; i < audioList.length; i++) {
        let audio = document.createElement('audio')
        audio.setAttribute('class', audioList[i][0])
        box.appendChild(audio)
    }
   
    function playVoice(buffer) {
    
        // if(!voiceFlag) return
        // console.log(voice)
        if (!voice) return;
        let audio = document.querySelector(`.${buffer}`);
        try {
            if(buffer === 'pickup04'){
                audio.volume = 0.1
            }else{
                audio.volume = 1
            }  
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
            audio.src = `./music/candy/${item[1]}`;
            audio.preload = "auto";
            if (item[0] === 'bgm') {
                audio.loop = true;
                audio.volume = 1
                audioReady = true;
                resolved(true)
                if (resolved !== undefined) resolved(true);
            }
        });
    }
    // 切換聲音狀態 clickVoice(o)
    function clickVoice(target) {
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

    var promise = new Promise(resolve => {
        // console.log(resolve)
            loadAudio(resolve)
           
        })
        .then(res => {
            // console.log('test', res)
            if (localStorage.voice == 'true') voice = true;
            if (voice) playVoice('bgm');
        }).catch(error => {
            console.log(error);
        });
    
        /**選單案紐 */
    // function initNiuMenu() {
    
    //     const iconDOM = $("#info");
    //     const guide = GameplayGuide.init("candy");
    //     const initMenu = GameInfoMenu.init(iconDOM, "sound", "help")
    //         .setEvent("help", () => {
    //             guide.hasClick()
    //         })
    //     initMenu.setEvent("help", () => { })
    //         .setEvent("sound", (e, o) => {
    //             clickVoice(o);
    //         })
    //         .setEvent("menu", () => {  })
    //         .setEvent("shadow", () => {  initMenu._deleteMenu(); guide._deleteDOM() });
    // };

