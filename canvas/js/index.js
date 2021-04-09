(function(){
    // 4096*2304
    // 1920*1080
    //2.844
    //0.3515625
    let configWith = 1440;
    let configHeight = 810;
    var config = {
        type: Phaser.AUTO,
        width: configWith,
        height: configHeight,
        parent: "canvas",
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
    var curve = [] 
    var graphics =[]
    var path =[]
    var inputAry = []
    var _this 
    var end = true
    var nextNum = 1
    var inputValue = [] //實際號碼
    var rotation = false
    var newAry= []
    var sortAry = []
    var text1
    var text2


    document.querySelector('#btn').addEventListener('click',()=>{
        location.reload()
    })
    document.querySelector('#btn2').addEventListener('click',()=>{
        for (let i = 0; i < 7; i++) {
            start(i + 1, i)
            inputValue.push(i+1)
        }
     
    })
    function getDegree(x1, y1, x2, y2) {
        var x = Math.abs(x1 - x2);
        var y = Math.abs(y1 - y2);
        var z = Math.sqrt(x * x + y * y);
        return Math.round((Math.asin(y / z) / Math.PI * 180));
    }

    function preload ()
    {
        
        this.load.image('Panel', './assets/Panel.png')

        for (let i = 1; i <= 49; i++) {
            let num = i < 10 ?  '0' + i :  ''+ i
            this.load.image(`ball${i}`, `./assets/Ball/${num}.png`)
        }
        
        // this.load.spritesheet('10', './assets/10.png', {
        //     frameWidth: 500,
        //     frameHeight: 500
        // });

        this.load.spritesheet('Pad', './assets/Pad.png', {
            frameWidth: 1024,
            frameHeight: 576
        });
        this.load.spritesheet('fish1', './assets/fish1.png', {
            frameWidth: 120,
            frameHeight: 100
        });

        this.load.spritesheet('No10', './assets/balls/No10.png', {
            frameWidth: 500,
            frameHeight: 500
        });

        this.load.spritesheet('No16', './assets/balls/No16.png', {
            frameWidth: 500,
            frameHeight: 500
        });

        this.load.spritesheet('No22', './assets/balls/No22.png', {
            frameWidth: 500,
            frameHeight: 500
        });

        this.load.spritesheet('No40', './assets/balls/No40.png', {
            frameWidth: 500,
            frameHeight: 500
        });

        this.load.spritesheet('No44', './assets/balls/No44.png', {
            frameWidth: 500,
            frameHeight: 500
        });

        this.load.spritesheet('No45', './assets/balls/No45.png', {
            frameWidth: 500,
            frameHeight: 500
        });

        this.load.spritesheet('No49', './assets/balls/No49.png', {
            frameWidth: 500,
            frameHeight: 500
        });


    }



    function create ()
    {  

        text1 = this.add.text(10, 10, '', { fill: '#00ff00' })
        text2 = this.add.text(500, 10, '', { fill: '#00ff00' })

        _this = this
        this.num = 0
        this.ball = []
        // this.panel =  this.add.image(682 , 600, `Panel`).setScale(.35).setDepth(1)
        this.panel = this.add.sprite(0,0, 'Pad' ).setScale(1.40625).setDepth(1).setOrigin(0.0).setFrame(0)
        // this.Z = .35
        // this.Y = true
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


        // this.test=[]
        // this.test2=[]

        // this.panel2 = this.add.sprite(0,-400, 'Pad' ).setScale(1.40625).setDepth(1).setOrigin(0.0).setFrame(0)

        // this.anims.create({
        //     key: 'rotat2' ,
        //     frames: this.anims.generateFrameNumbers('Pad', {
        //         start: 0,
        //         end: 14
        //     }),
        //     frameRate: 15,
        //     // repeat: -1,

        // });
        // this.panel2.play('rotat2')
     
        // let n =0
        // let j = 0
        // for (let i = 0; i < 7; i++) {
        //     i == 6 ? j = 5  : j = 0
        //     this.test[i] = this.add.sprite(340 + n , 260 + j, 'No10' ).setScale(.25).setDepth(2)
        //     this.test2[i] = this.add.sprite(340 + n , 260 + j, 'No10' ).setScale(.25).setDepth(0)
        //     i < 5 ?  n = n + 123 : n = n  + 140
        // }

    //     this.anims.create({
    //         key: 'ball0' ,
    //         frames: this.anims.generateFrameNumbers('No10', {
    //             start: 0,
    //             end: 29
    //         }),
    //         frameRate: 30,
    //         repeat: -1
    //     });

    //    b.play('ball0')

        // b.setScale(.25, .2) 


    //    let f = this.add.sprite(200,110, 'fish1' ).setDepth(2)
    //     this.anims.create({
    //         key: 'fish' ,
    //         frames: this.anims.generateFrameNumbers('fish1', {
    //             start: 0,
    //             end: 14
    //         }),
    //         frameRate: 30,
    //         repeat: -1
    //     });

    //     f.play('fish')


        var inputBox = document.querySelector("#inputBox")
        inputBox.querySelectorAll('input').forEach((item,index)=>{
            item.addEventListener("keydown", ({key}) => {
                if (key === "Enter"){
                    // console.log('keydonw',index)
                    let value =  item.value
                    let hasValue = inputValue.indexOf(value)
                    if(value === '') return
                    if(isNaN(Number(value))) return
                    if( Number(value) <= 0  || (Number(value) > 49) ) return
                    if(hasValue !== -1) return
                    if(end && (nextNum === index + 1)){
                        // console.log(hasValue)
                        inputValue.push(value)
                        start(index + 1, value)
                        this.num = index + 1
                        nextNum = nextNum + 1
                        // console.log(inputValue)
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
 
        let no = ''
        let Offset = 0 
        switch (i) {
            case 1: no = '10'
                    Offset = -200
                break;
            case 2: no = '45'
                    Offset = 200
                
                break;
            case 3: no = '22'
                    Offset = -200
                break;
            case 4: no = '40'
                    Offset = 200
                
                break;
            case 5: no = '44'
                    Offset = -200
                
                break;
            case 6: no = '16'
                    Offset = 200
                
                break;
            case 7: no = '49'
                    Offset = 200
                break;

        }

        if(inputAry[i]){
            
            let distance = i < 7 ? (i -1)* 123.5 :  (i-1)* 123 + 18
 

            // var points = [ 100 + distance, 900, 220 + distance + Offset, 500, 300 + distance, 660  ];
            var points = [ 100 + distance, 900, 220 + distance , 500, 300 + distance, 660  ];
            var curve = new Phaser.Curves.Spline(points);

            // var startPoint = new Phaser.Math.Vector2(100 + distance, 900);
            // var controlPoint1 = new Phaser.Math.Vector2(130 + distance, 520);
            // var controlPoint2 = new Phaser.Math.Vector2(300 + distance, 450);
            // var endPoint = new Phaser.Math.Vector2(300 + distance, 600);
            // var curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);
            // _this.ball[i] = this.add.sprite(100,200, '10' ).setScale(.1);

            _this.anims.create({
                key: 'ball'+ num,
                frames: _this.anims.generateFrameNumbers(`No${no}`, {
                    start: 0,
                    end: 29
                }),
                frameRate: 30,
            });
  
            _this.ball[i] = _this.add.follower(curve, 138 + distance, 900, `No${no}`).setScale(.25).setDepth(2)
            // _this.ball[i] = _this.add.follower(curve, 138 + distance, 900, `No10`).setScale(.25).setDepth(2)
            // _this.ball[i] = _this.add.follower(curve, 100 + distance, 900, `ball${num}`).setScale(.36).setDepth(2)
            _this.ball[i].startFollow({
                duration: 1000,
                onStart:(()=>{
                    // console.log('start')
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
                    _this.ball[i].setScale(.25)
                    // _this.ball[i].setActive(false)
                    // _this.ball[i].setFrame(29).setDepth(2)

                })
            });



            // _this.ball[i] =  _this.add.image(200 + distance ,  900, `ball${num}`).setScale(.36).setDepth(2)
            // _this.tween = _this.tweens.add({
            // targets: _this.ball[i],
            // props: {
            //     x: { value: 300 + distance , duration: 1000, flipX: false },
            //     y: { value: 600, duration: 1000,  },
            // },
            //     ease: 'Power1',
            //     onStart:(()=>{
            //         console.log('start')
            //         // _this.ball[i].setScale(.90)
            //     }),
            //     onUpdate:(()=>{
            //         // let num = _this.ball[i]._scaleX
            //         // num = num -0.001
            //         // if(num <= 0.7) num = 0.7
            //         // _this.ball[i].setScale(num)
            //     }),
            //     onComplete:(()=>{

            //     })
            // })

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
                            let no = ''
                            switch (index) {
                                case 0: no = '10'
                                    
                                    break;
                                case 1: no = '16'
                                    
                                    break;
                                case 2: no = '22'
                                    
                                    break;
                                case 3: no = '40'
                                    
                                    break;
                                case 4: no = '44'
                                    
                                    break;
                                case 5: no = '45'
                                    
                                    break;
                                case 6: no = '49'
                                    
                                    break;
                    
                            }
                            // sortAry[index] =  _this.add.image( _this.ball[ index + 1].x  , _this.ball[ index + 1].y, `ball${el}`).setScale(.36).setDepth(0)
                            sortAry[index] =  _this.add.sprite( _this.ball[ index + 1].x  , _this.ball[ index + 1].y,  `No${no}`).setScale(.25).setFrame(29).setDepth(0)
                        })
                        _this.panel.play('rotat1')


                    },1000)

                },2000)
            }
        }


    }


    function update ()
    {
        // var pointer = this.input.activePointer;

        // text1.setText([
        //     'x: ' + pointer.worldX,
        //     'y: ' + pointer.worldY,
        //     // 'isDown: ' + pointer.isDown
        // ])

       
        // if(this.go){
        //     for (let i = 0; i < 7; i++) {
        //         // console.log( this.test[i])
        //         this.test[i].setPosition(this.test[i].x - this.R / 8, this.test[i].y + this.R * 5)
        //         this.test2[i].setPosition(this.test2[i].x - this.R / 8 , this.test2[i].y - this.R * 5).setDepth(0)
        //     }
        //     let r = 0
        //     r +=0.018
        //     this.R-= r

        //     if(this.R <= 0){
        //         for (let i = 0; i < 7; i++) {
        //             this.test2[i].setDepth(0)
        //             this.test[i].setDepth(0)
        //         }
        //         this.go = false
        //     }
        // }else{
        //     if(this.R >= .35){
        //         return 
        //         // for (let i = 0; i < 7; i++) {
        //         //     this.test[i].setDepth(2)
        //         // }
        //         // this.go = true
        //     }
        //     let r = 0
        //     r +=0.018
        //     this.R += r
        //     for (let i = 0; i < 7; i++) {
        //         this.test[i].setPosition(this.test[i].x  - this.R / 8, this.test[i].y - this.R * 8).setDepth(0)
        //         this.test2[i].setPosition(this.test2[i].x  - this.R / 8 , this.test2[i].y + this.R * 8.5).setDepth(2)
        //     }
   

        // }
    
        




        if(rotation){

            if(this.go){

                inputValue.forEach((el,i)=>{
                    _this.ball[i + 1].setPosition(_this.ball[i + 1].x+ this.R / 8, _this.ball[i + 1].y + this.R * 5 )
                })
                sortAry.forEach((el,i)=>{
                    el.setPosition(el.x - this.R / 8 , el.y - this.R * 5 ).setDepth(0)
                })
                
                let r = 0
                r +=0.018
                this.R-= r

                if(this.R <= 0) {
                    sortAry.forEach((el,i)=>{
                        el.setDepth(0)
                        _this.ball[i + 1].setDepth(0)
                    })
                    this.go = false
                }

            }else{
                if(this.R >= .35 ) return
                let r = 0
                r +=0.018
                this.R += r

                inputValue.forEach((el,i)=>{
                    _this.ball[i + 1].setPosition(_this.ball[i + 1].x - this.R / 8, _this.ball[i + 1].y - this.R * 8  ).setDepth(0)
                })
                sortAry.forEach((el,i)=>{
                    el.setPosition(el.x + this.R / 8, el.y + this.R * 8.5 ).setDepth(2)
                })
            }

        }


    }

    })()
