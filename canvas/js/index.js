(function(){
    // 4096*2304
    // 1920*1080
    //2.844
    //0.3515625
    let configWith = 1440;
    let configHeight = 810;

    var backgroundColor = location.hash.replace(/#bg=/,'') || '#ff00ff'
    var config = {
        type: Phaser.AUTO,
        width: configWith,
        height: configHeight,
        parent: "canvas",
        backgroundColor: backgroundColor,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);
    var inputAry = []
    var _this 
    var end = true
    var nextNum = 1
    var inputValue = [] //實際號碼
    var rotation = false
    var newAry= []
    var sortAry = []
    var text1

    document.querySelector('#inputBg').addEventListener('keydown',(e)=>{
        if(e.key === 'Enter'){
            window.location = `#bg=${e.target.value}`
            location.reload()
        }

    })

    document.querySelector('#btn').addEventListener('click',()=>{
        location.reload()
    })

    // document.querySelector('#btn2').addEventListener('click',()=>{
    //     for (let i = 0; i < 7; i++) {
    //         start(i + 1, i)
    //         inputValue.push(i+1)
    //     }
     
    // })

    function preload ()
    {
        
        this.load.image('marksix', './assets/marksix.png')
        this.load.spritesheet('Pad', './assets/Pad.png', {
            frameWidth: 1024,
            frameHeight: 576
        });

        for (let i = 1; i <= 49; i++) {
            let num = i < 10 ?  '0' + i :  ''+ i

            this.load.spritesheet(`No${num}`, `./assets/balls/Spin/No${num}.png`, {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet(`BF${num}`, `./assets/balls/BF/BF${num}.png`, {
                frameWidth: 500,
                frameHeight: 500
            });
            this.load.spritesheet(`FB${num}`, `./assets/balls/FB/FB${num}.png`, {
                frameWidth: 500,
                frameHeight: 500
            });
        }
        
    }



    function create ()
    {  


        _this = this
        this.num = 0
        this.ball = []

        this.panel = this.add.sprite(0,0, 'Pad' ).setScale(1.40625).setDepth(1).setOrigin(0.0).setFrame(0)
        this.marksix = this.add.sprite(310,535, 'marksix' ).setScale(.8).setDepth(1).setOrigin(0.0)

        this.R = .5
        this.go = true

        this.anims.create({
            key: 'rotat1' ,
            frames: this.anims.generateFrameNumbers('Pad', {
                start: 0,
                end: 14
            }),
            frameRate: 15,
        });
        this.BFball= []
        this.FBball= []

        for (let i = 1; i <= 49; i++) {
            let num = i < 10 ?  '0' + i :  ''+ i
            this.anims.create({
                key: 'BFball'+ num ,
                frames: this.anims.generateFrameNumbers('BF'+ num, {
                    start: 0,
                    end: 14
                }),
                frameRate: 15,
            });
            this.anims.create({
                key: 'FBball'+ num ,
                frames: this.anims.generateFrameNumbers('FB'+ num, {
                    start: 0,
                    end: 14
                }),
                frameRate: 15,
            });

        }
        

        var inputBox = document.querySelector("#inputBox")
        inputBox.querySelectorAll('input').forEach((item,index)=>{
            item.addEventListener("keydown", ({key}) => {
                if (key === "Enter"){
                    // console.log('keydonw',index)

                    let value =  item.value
                    let num = Number(value) < 10 ?  '0' + value :  ''+ value
                    let hasValue = inputValue.indexOf(num)
                    if(value === '') return
                    if(isNaN(Number(value))) return
                    if( Number(value) <= 0  || (Number(value) > 49) ) return
                    if(hasValue !== -1) return
                    if(end && (nextNum === index + 1)){
                        inputValue.push(num)
                        start(index + 1, value)
                        this.num = index + 1
                        nextNum = nextNum + 1
                        document.querySelector('#numAry').innerText = inputValue
                    }
                
                } 
            })
        })


        for (let i = 0; i < 8; i++) {
            inputAry[i] = true
        }


    }
    

    function start(i,num){

         num = Number(num) < 10 ?  '0' + num :  ''+ num
 
        if(inputAry[i]){
            let Offset = 0 

            switch (i) {
                case 1: 
                        Offset = -150
                    break;
                case 2: 
                        Offset = 150
                    break;
                case 3: 
                        Offset = -150
                    break;
                case 4: 
                        Offset = 150
                    break;
                case 5: 
                        Offset = -150
                    break;
                case 6: 
                        Offset = 150
                    break;
                case 7: 
                        Offset = 150
                    break;
    
            }
    
            let distance = i < 7 ? (i -1)* 123  :  (i-1)* 123 + 18
            let s = i < 7 ? 0 : 5

            var points = [ (100 + distance), 900,( 220 + distance + Offset), 500 , (300 + distance), 658 + s ]
            var curve = new Phaser.Curves.Spline(points);

            _this.anims.create({
                key: 'ball'+ num,
                frames: _this.anims.generateFrameNumbers(`No${num}`, {
                    start: 0,
                    end: 29
                }),
                frameRate: 30,
            });
            _this.ball[i] = _this.add.follower(curve, 138 + distance, 900, `No${num}`).setScale(.27).setDepth(2)
            _this.ball[i].startFollow({
                duration: 1000,
                onStart:(()=>{
                    _this.ball[i].setScale(1)
                    _this.ball[i].play('ball'+ num)
                }),
                onUpdate:(()=>{
                    let scaleX = _this.ball[i]._scaleX
                    scaleX = scaleX -0.01
                    if(scaleX <= 0.25) scaleX = 0.25
                    _this.ball[i].setScale(scaleX)
                }),
                onComplete:(()=>{
                    _this.ball[i].setScale(.27)
                    _this.ball[i].setPosition((338 + distance),658 + s)
                    _this.FBball[i] = _this.add.sprite(_this.ball[i].x,_this.ball[i].y, `FB${num}` ).setScale(.27).setDepth(1)
                    _this.ball[i].visible =false

                })
            });

            inputAry[i] = false

            if(i === 7 ){
                setTimeout(()=>{
                     newAry = inputValue.map(item=>{     
                        return item
                    })
                    newAry.splice(6,1)
                    newAry.sort((a,b)=>{
                        return a-b
                    })
                    newAry.push(inputValue[6])
                    setTimeout(()=>{
                        rotation = true
                        newAry.forEach((el,index)=>{
                            sortAry[index] =  _this.add.sprite( _this.ball[ index + 1].x  , _this.ball[ index + 1].y,  `No${el}`).setScale(.27).setDepth(0)
                            _this.FBball[ index + 1].play('FBball'+ el)
                            sortAry[index].play('BFball'+ el)
                        })
                        _this.panel.play('rotat1')
     
                    },1000)

                },2000)
            }
        }


    }


    function update ()
    {


        if(rotation){

            if(this.go){

                inputValue.forEach((el,i)=>{
                    _this.FBball[i + 1].setPosition(_this.FBball[i + 1].x+ this.R / 8, _this.FBball[i + 1].y + this.R * 5 )
                })
                sortAry.forEach((el,i)=>{
                    el.setPosition(el.x + this.R / 8 , el.y - this.R * 5 ).setDepth(0)
                })
                
                let r = 0
                r +=0.018
                this.R-= r

                if(this.R <= 0) {
                    sortAry.forEach((el,i)=>{
                        el.setDepth(0)
                        _this.FBball[i + 1].setDepth(0)
                        // _this.FBball[i+1].visible =false
                    })
                    this.go = false
                }

            }
            else{
                if(this.R >= .35 ){
                    sortAry.forEach((el,i)=>{
                        el.setPosition(_this.ball[i+1].x, _this.ball[i+1].y )
                        if(i===6){
                            el.setPosition(_this.ball[i+1].x, _this.ball[i+1].y -8  )
                        }
                    })
                    return
                }
                let r = 0
                r +=0.018
                this.R += r

                inputValue.forEach((el,i)=>{
                    if(i===6){
                        _this.FBball[i + 1].setPosition(_this.FBball[i + 1].x - this.R / 8, _this.FBball[i + 1].y - this.R * 12  ).setDepth(0)
                    }else{
                        _this.FBball[i + 1].setPosition(_this.FBball[i + 1].x - this.R / 8, _this.FBball[i + 1].y - this.R * 8  ).setDepth(0)
                    }
                })
                sortAry.forEach((el,i)=>{
                    if(i===6){
                        el.setPosition(el.x - this.R / 8, el.y + this.R *  7 ).setDepth(2)
                    }else{
                        el.setPosition(el.x - this.R / 8, el.y + this.R * 8.5).setDepth(2)
                    }
                })
            }

        }


    }

    })()
