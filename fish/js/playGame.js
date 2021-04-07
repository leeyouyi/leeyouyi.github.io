const playGame = class palyGame extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    preload() {
        this.load.spritesheet('fish1', '../assets/new/fish1.png', {
            frameWidth: 120,
            frameHeight: 100
        });
        this.load.spritesheet('fish2', '../assets/new/fish2.png', {
            frameWidth: 130,
            frameHeight: 130
        });
        this.load.spritesheet('fish3', '../assets/new/fish3.png', {
            frameWidth: 150,
            frameHeight: 180
        });
        this.load.spritesheet('fish4', '../assets/new/fish4.png', {
            frameWidth: 180,
            frameHeight: 170
        });
        this.load.spritesheet('fish5', '../assets/new/fish5.png', {
            frameWidth: 180,
            frameHeight: 260
        });

        this.load.spritesheet('fish6', '../assets/new/fish6.png', {
            frameWidth: 250,
            frameHeight: 370
        });
        this.load.spritesheet('fish7', '../assets/new/fish7.png', {
            frameWidth: 340,
            frameHeight: 240
        });
        this.load.spritesheet('fish8', '../assets/new/fish8.png', {
            frameWidth: 270,
            frameHeight: 290
        });
        this.load.spritesheet('fish9', '../assets/new/fish9.png', {
            frameWidth: 310,
            frameHeight: 200
        });
        this.load.spritesheet('fish10', '../assets/new/fish10.png', {
            frameWidth: 200,
            frameHeight: 180
        });
        this.load.spritesheet('fish11', '../assets/new/fish11.png', {
            frameWidth: 230,
            frameHeight: 340
        });
        this.load.spritesheet('fish12', '../assets/new/fish12.png', {
            frameWidth: 600,
            frameHeight: 430
        });
        this.load.spritesheet('fish13', '../assets/new/fish13.png', {
            frameWidth: 600,
            frameHeight: 515
        });

        this.load.spritesheet('coinText', '../assets/coinText.png', {
            frameWidth: 36,
            frameHeight: 49
        }); //396      // 得分字樣
        this.load.spritesheet('number_black', '../assets/number_black.png', {
            frameWidth: 20,
            frameHeight: 24
        }); // 砲台底座分數字樣
        this.load.spritesheet('coinAni1', '../assets/coinAni1.png', {
            frameWidth: 60,
            frameHeight: 60
        }); // 錢幣 1

        this.load.spritesheet('cannon1', '../assets/new/cannon1.png', {
            frameWidth: 84,
            frameHeight: 95
        }); // 大砲 1
        this.load.spritesheet('cannon2', '../assets/new/cannon2.png', {
            frameWidth: 84,
            frameHeight: 95
        }); // 大砲 2
        this.load.spritesheet('cannon3', '../assets/new/cannon3.png', {
            frameWidth: 86,
            frameHeight: 105
        }); // 大砲 3
        this.load.spritesheet('cannon4', '../assets/new/cannon4.png', {
            frameWidth: 86,
            frameHeight: 105
        }); // 大砲 4
        this.load.spritesheet('cannon5', '../assets/new/cannon5.png', {
            frameWidth: 88,
            frameHeight: 121
        }); // 大砲 5
        this.load.spritesheet('cannon6', '../assets/new/cannon6.png', {
            frameWidth: 88,
            frameHeight: 121
        }); // 大砲 6
        this.load.spritesheet('cannon7', '../assets/new/cannon7.png', {
            frameWidth: 140,
            frameHeight: 141
        }); // 大砲 7

        this.load.spritesheet('bullet1', '../assets/new/bullet1.png', {
            frameWidth: 33,
            frameHeight: 34
        }); // 子彈 1
        this.load.spritesheet('bullet2', '../assets/new/bullet2.png', {
            frameWidth: 36,
            frameHeight: 56
        }); // 子彈 2
        this.load.spritesheet('bullet3', '../assets/new/bullet3.png', {
            frameWidth: 98,
            frameHeight: 62
        }); // 子彈 3
        this.load.spritesheet('bullet4', '../assets/new/bullet4.png', {
            frameWidth: 165,
            frameHeight: 72
        }); // 子彈 4

        this.load.spritesheet('bullet5', '../assets/bullet5.png', {
            frameWidth: 30,
            frameHeight: 34
        }); // 子彈 5
        this.load.spritesheet('bullet6', '../assets/bullet6.png', {
            frameWidth: 31,
            frameHeight: 35
        }); // 子彈 6
        this.load.spritesheet('bullet7', '../assets/bullet7.png', {
            frameWidth: 32,
            frameHeight: 38
        }); // 子彈 7
        this.load.spritesheet('bullet8', '../assets/bullet8.png', {
            frameWidth: 30,
            frameHeight: 44
        }); // 子彈 8

        this.load.spritesheet('web1', '../assets/new/web1.png', {
            frameWidth: 278,
            frameHeight: 278
        }); // 補魚網
        this.load.image('cannonPlus', '../assets/new/cannon_plus.png'); // 砲台 +
        this.load.image('cannonMinus', '../assets/new/cannon_minus.png'); // 砲台 -
        this.load.image('bottomBar', '../assets/new/bottom-bar.png'); // 砲台底座平台
        this.load.image('bg', '../assets/new/startbg.png');

        this.width = game.config.width
        this.height = game.config.height
        this.center = this.width / 2
        this.bulletFlag = false
        this.size = 'bullet1'
        this.fishAry = []
        this.tweenAry = []
        this.bulletAry = []
        this.number = {}
        this.makeFish = this.physics.world.fps * 2;
        this.count = 0
        this.num = 5
        this.ten = null
        this.hundreds = null
        this.thousands = null
        this.tenThousand = null
        this.million = null
        this.degree = 0
        this.coinAniAry = []
        this.makeFish = 0

    }
    create() {
        window.addEventListener('resize', this.resize);
        this.resize();

        game.gameScene = this
        this.bg = this.add.image(this.center, game.config.height / 2, 'bg').setInteractive()
        // this.bg = this.add.image(0, 0, 'bg').setInteractive().setOrigin(0, 0).setScale(1)

        this.bottomBar = this.add.image(this.center, game.config.height - 70, 'bottomBar').setScale(.7).setDepth(2)
        this.cannonMinus = this.add.image(this.center - 80, game.config.height - 30, 'cannonMinus').setScale(.6).setInteractive().setDepth(2)
        this.cannonPlus = this.add.image(this.center + 80, game.config.height - 30, 'cannonPlus').setScale(.6).setInteractive().setDepth(2)
        this.cannon = this.physics.add.sprite(this.center, game.config.height - 100, 'cannon1').setScale(0.8).setDepth(2)
        this.world = this.physics.world
        // this.scale.on('resize', this.resize, this);

        let self = this
        this.input.on('pointerdown', function (pointer) {

            if (!pointer.event.clientX) {
                pointer.event.clientX = pointer.event.changedTouches[0].clientX
                pointer.event.clientY = pointer.event.changedTouches[0].clientY
            }
            if (this.bulletFlag) {
                this.bullet = this.physics.add.sprite(this.center, game.config.height - 100, this.size).setDepth(2);
                this.physics.add.overlap(this.bullet, this.fishAry, this.bulletFun, null, this);
                this.degree = this.getDegree(this.center, game.config.height - 100, pointer.event.clientX, pointer.event.clientY)
                if (pointer.worldX < this.center) {
                    this.degree = this.degree - 90
                } else {
                    this.degree = Math.abs(this.degree - 90)
                }
                let deg = this.degree

                this.bullet.rotation = deg / 60
                this.bullet.sin = Math.sin(deg * Math.PI / 180)
                this.bullet.cos = Math.cos(deg * Math.PI / 180)

                this.bullet.x = this.cannon.x + (this.bullet.body.height + 20) * this.bullet.sin;
                this.bullet.y = this.cannon.y - (this.bullet.body.height + 20) * this.bullet.cos;
                this.bulletAry.push(this.bullet)

                this.changeNum()
            }

        }, this);

        this.number.num = []
        for (let i = 0; i < 10; i++) {
            this.number.num[i] = this.anims.create({
                key: 'num' + i,
                frames: this.anims.generateFrameNumbers('number_black', {
                    start: i,
                    end: i
                }),
            });
        }

        this.numberFun()
        this.fishFun()
        let bulletNum = 1
        let cannonNum = 1

        this.cannonPlus.on('pointerdown', function () {
            self.bulletFlag = false
            this.setScale(.7)
            bulletNum++
            cannonNum++
            if (cannonNum > 7) cannonNum = 1
            if (cannonNum === 1 || cannonNum === 3) bulletNum = 1
            if (cannonNum === 2 || cannonNum === 4) bulletNum = 2
            if (cannonNum === 5 || cannonNum === 6) bulletNum = 3
            if (cannonNum === 7) bulletNum = 4
            self.size = 'bullet' + bulletNum
            self.cannon.disableBody(false, true)
            self.cannon = self.physics.add.sprite(self.center, game.config.height - 100, 'cannon' + cannonNum).setScale(0.8)

        })
        this.cannonMinus.on('pointerdown', function () {
            self.bulletFlag = false
            this.setScale(.7)
            bulletNum--
            cannonNum--
            if (cannonNum < 1) cannonNum = 7
            if (cannonNum > 7) bulletNum = 1
            if (cannonNum === 1 || cannonNum === 3) bulletNum = 1
            if (cannonNum === 2 || cannonNum === 4) bulletNum = 2
            if (cannonNum === 5 || cannonNum === 6) bulletNum = 3
            if (cannonNum === 7) bulletNum = 4
            self.size = 'bullet' + bulletNum
            self.cannon.disableBody(false, true)
            self.cannon = self.physics.add.sprite(self.center, game.config.height - 100, 'cannon' + cannonNum).setScale(0.8)
        })
        this.cannonPlus.on('pointerup', function () {
            this.setScale(.6)
        });
        this.cannonMinus.on('pointerup', function () {
            this.setScale(.6)
        });

        this.bg.on('pointerdown', function () {
            self.bulletFlag = true
        })
        this.makeFish = this.physics.world.fps * 2;
    }
    update() {
        this.cannon.rotation = this.degree / 60
        let speed = 7
        this.bulletAry.forEach(function (bullet) {
            bullet.x += bullet.sin * speed
            bullet.y += -bullet.cos * speed
        })
        let self = this
        this.bulletAry.forEach(function (bullet) {
            if (bullet.y < -100 || bullet.x > game.config.width || bullet.x < -100) {
                let index = self.bulletAry.indexOf(bullet)
                self.bulletAry.splice(index, 1)
                bullet.disableBody(true, true)
            }
        })
        if (this.coinAni) {
            this.coinAniAry.forEach(function (coinAni, index) {
                if (coinAni.y > self.height - 100) {
                    coinAni.disableBody(true, true)
                    self.coinAniAry.splice(index, 1)
                }
            })
        }
        this.makeFishFun();

        if (this.fishAry.length === 0) this.fishFun()
        if (this.fishAry.length !== 0) {

            if (this.direction > 0) {
                this.fishAry.forEach(function (fish) {
                    if (fish.x > self.width + 100) {
                        self.splice(fish)
                        game.anims.remove(fish.animation)
                    }
                })

            } else {
                this.fishAry.forEach(function (fish) {
                    if (fish.x < -200) {
                        self.splice(fish)
                        game.anims.remove(fish.animation)
                    }
                })
            }
        }
    }
    resize() {

        var canvas = game.canvas
        var width = window.innerWidth
        var height = window.innerHeight
        var wratio = width / height
        var ratio = canvas.width / canvas.height;

        if (wratio < ratio) {
            canvas.style.width = width + "px";
            canvas.style.height = (width / ratio) + "px";
        } else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }
    fishFun() {
        let obj = this.anims.anims.entries
        for (const key in obj) {

            if (key.slice(0, 4) === 'swim') {
                // console.log(key);
                // this.anims.remove(key)
            }

            if (key.slice(0, 3) === 'Die') {
                // console.log(key);
                this.anims.remove(key)
            }
        }

        let fishRandom = Phaser.Math.Between(1, 13)
        let fishRandom2 = Phaser.Math.Between(1, 10)
        let fishEnd = fishRandom > 5 ? 7 : 3

        if (fishRandom === 1) fishEnd = 15
        if (fishRandom > 1 && fishRandom <= 5) fishEnd = 30
        if (fishRandom > 5 && fishRandom <= 11) fishEnd = 45
        if (fishRandom === 12) fishEnd = 38
        if (fishRandom === 13) fishEnd = 30
        // this.anims.create({
        //     key: 'swim' + fishRandom + fishRandom2,
        //     frames: this.anims.generateFrameNumbers('fish' + fishRandom, {
        //         start: 0,
        //         end: fishEnd - 1
        //     }),
        //     frameRate: Phaser.Math.Between(15, 30),
        //     repeat: -1
        // });
        this.fishRandomFn(fishRandom, fishRandom2, fishEnd)
    }
    fishRandomFn(fishRandom, fishRandom2, fishEnd) {

        let fishLength = Phaser.Math.Between(1, 5)
        let random = Phaser.Math.Between(0, 10)
        let scale = .8
        let setDepth = 0
        this.direction = random <= 5 ? this.width + 50 : -50
        if (fishRandom >= 11) fishLength = 1
        if (fishRandom >= 11) scale = 1.5
        if (fishRandom >= 11) setDepth = 1
        for (let i = 0; i < fishLength; i++) {

            let startX = random <= 5 ? Phaser.Math.Between(-500, 0) : Phaser.Math.Between(this.width, this.width + 100)
            let endX = random <= 5 ? Phaser.Math.Between(this.width + 100, this.width + 200) : Phaser.Math.Between(-200, -300)
            let flip = random <= 5 ? false : true
            this.fish = this.physics.add.sprite(startX, Phaser.Math.Between(50, this.height - 100), 'fish' + fishRandom).setScale(scale).setDepth(setDepth);
            this.tween = this.tweens.add({
                targets: this.fish,
                props: {
                    x: {
                        value: endX,
                        duration: Phaser.Math.Between(15000, 20000),
                        flipX: true
                    },
                    y: {
                        value: Phaser.Math.Between(50, this.height - 100),
                        duration: Phaser.Math.Between(10000, 15000),
                    },
                },
                ease: 'Sinusoidal',
            });
            this.anims.create({
                key: 'swim' + fishRandom + fishRandom2 + i,
                frames: this.anims.generateFrameNumbers('fish' + fishRandom, {
                    start: 0,
                    end: fishEnd - 1
                }),
                frameRate: Phaser.Math.Between(15, 40),
                repeat: -1
            });
            let w = Math.round(this.fish.width * 0.8)
            let h = Math.round(this.fish.height * 0.8)
            // if (fishRandom >= 11) {
            //     w = Math.round(this.fish.width * 0.6)
            //     h = Math.round(this.fish.height * 0.6)
            // }
            this.fish.setSize(w, h, false)
            this.fish.vitality = fishRandom
            this.fish.score = fishRandom
            this.fish.flipX = flip
            this.fish.fishRandom = fishRandom
            this.fish.animation = 'swim' + fishRandom + fishRandom2 + i
            this.fish.play(this.fish.animation);
            this.fish.setBounce(0.2);
            this.fishAry.push(this.fish)
            this.tweenAry.push(this.tween)


        }

    }
    makeFishFun() {
        --this.makeFish;
        if (this.makeFish === 0) {
            this.makeFish = this.physics.world.fps * 3;
            this.fishFun(this);
        }
    }
    splice(fish) {
        let index = this.fishAry.indexOf(fish)
        this.tweenAry[index].pause(true)
        this.fishAry.splice(index, 1)
        this.tweenAry.splice(index, 1)
        fish.disableBody(true, true);

    }
    bulletFun(bullet, fish) {
        game.anims.remove('coin2')
        var fishStart = fish.fishRandom > 5 ? 8 : 4
        var fishEnd = fish.fishRandom > 5 ? 11 : 7
        var vitality = Phaser.Math.Between(1, fish.vitality)
        bullet.disableBody(true, true);
        var web = this.physics.add.sprite(bullet.x, bullet.y, 'web1').setDepth(2)
        setTimeout(function () {
            web.setScale(.8)
        }, 100)

        setTimeout(function () {
            web.disableBody(true, true);
        }, 200)

        if (vitality === fish.vitality) { // 機率
            web.setScale(1.5)
            let index = this.fishAry.indexOf(fish)
            this.tweenAry[index].pause(true)
            this.fishAry.splice(index, 1)
            this.tweenAry.splice(index, 1)
            this.anims.create({
                key: 'Die' + fish.fishRandom,
                frames: this.anims.generateFrameNumbers('fish' + fish.fishRandom, {
                    start: fishStart,
                    end: fishEnd
                }),
                frameRate: 5,
                repeat: -1
            });
            fish.play('Die' + fish.fishRandom)
            var webX = bullet.x
            var webY = bullet.y
            var self = this
            setTimeout(function () {
                fish.disableBody(true, true);
                self.anims.remove(fish.fishRandom)
                self.anims.create({
                    key: 'coinAni1Frame',
                    frames: self.anims.generateFrameNumbers('coinAni1', {
                        start: 0,
                        end: 9
                    }),
                    frameRate: 50,
                    repeat: -1
                });

                self.coinAni = self.physics.add.sprite(webX, webY, 'coinAni1').setOrigin(0, 0).setScale(0.8)
                self.coinAni.play('coinAni1Frame')
                self.tween = self.tweens.add({
                    targets: self.coinAni,
                    props: {
                        x: {
                            value: self.center - 20,
                            duration: 1000,
                        },
                        y: {
                            value: self.height - 50,
                            duration: 1000,
                        },
                    },
                    ease: 'Sinusoidal',
                    // yoyo: true,
                    // repeat: -1,
                });
                self.coinAniAry.push(self.coinAni)
                self.anims.create({
                    key: 'coin',
                    frames: self.anims.generateFrameNumbers('coinText', {
                        start: 10,
                        end: 10
                    }),
                    frameRate: 5,
                });

                var Text = self.physics.add.sprite(webX - 20, webY - 20, 'coinText').setOrigin(0, 0)
                if (fish.vitality >= 10) {
                    self.anims.create({
                        key: 'coin2',
                        frames: self.anims.generateFrameNumbers('coinText', {
                            start: 1,
                            end: 1
                        }),
                    });
                    self.anims.create({
                        key: 'coin3',
                        frames: self.anims.generateFrameNumbers('coinText', {
                            start: 0,
                            end: 0
                        }),
                    });
                    var Text3 = self.physics.add.sprite(webX + 50, webY - 20, 'coinText').setOrigin(0, 0)
                    Text3.play('coin3')
                } else {
                    self.anims.create({
                        key: 'coin2',
                        frames: self.anims.generateFrameNumbers('coinText', {
                            start: fish.vitality,
                            end: fish.vitality
                        }),
                    });
                }
                var Text2 = self.physics.add.sprite(webX + 20, webY - 20, 'coinText').setOrigin(0, 0)
                Text2.play('coin2')
                Text.play('coin')
                self.tween = self.tweens.add({
                    targets: Text,
                    props: {
                        x: {
                            value: webX - 20,
                            duration: 500,
                        },
                        y: {
                            value: webY - 50,
                            duration: 500,
                        },
                    },
                    ease: 'Sinusoidal',
                });
                self.tween = self.tweens.add({
                    targets: Text2,
                    props: {
                        x: {
                            value: webX + 20,
                            duration: 500,
                        },
                        y: {
                            value: webY - 50,
                            duration: 500,
                        },
                    },
                    ease: 'Sinusoidal',
                });
                if (fish.vitality >= 10) {
                    self.tween = self.tweens.add({
                        targets: Text3,
                        props: {
                            x: {
                                value: webX + 50,
                                duration: 500,
                            },
                            y: {
                                value: webY - 50,
                                duration: 500,
                            },
                        },
                        ease: 'Sinusoidal',
                    });
                }
                setTimeout(function () {
                    Text.disableBody(true, true);
                    Text2.disableBody(true, true);
                    if (fish.vitality >= 10) Text3.disableBody(true, true);
                }, 800)


                var nowNum = 9 - self.count
                var add = nowNum + fish.vitality
                var add1 = parseInt(add % 10)
                var add2 = parseInt(add % 100 / 10)
                self.count = Math.abs(9 - add1)
                if (add2 > 0) {
                    self.ten -= 1
                    if (self.ten < 0) {
                        self.ten = 0
                        self.count = 0
                    }
                    self.cutNumber(self.num - 1, self.ten)
                }
                self.cutNumber(self.num, self.count)

            }, 1000)

        }

    }
    getDegree(x1, y1, x2, y2) {
        var x = Math.abs(x1 - x2);
        var y = Math.abs(y1 - y2);
        var z = Math.sqrt(x * x + y * y);
        return Math.round((Math.asin(y / z) / Math.PI * 180));
    }
    numberFun() {
        this.number.frame = []
        this.number.ary = []
        var x = this.center - 60
        for (let i = 0; i < 6; i++) {

            this.number.frame[i] = this.anims.create({
                key: 'number' + i,
                frames: this.anims.generateFrameNumbers('number_black', {
                    start: 0,
                    end: 0
                }),
            });

            this.number.ary[i] = this.physics.add.sprite(x, game.config.height - 45, 'number_black').setOrigin(0, 0).setDepth(2)
            x += 20
            this.number.ary[i].play('number' + i)
        }

    }
    changeNum() {
        this.count += 1
        if (this.count === 10) {
            this.count = 0
            this.ten += 1
            if (this.ten === 10) {
                this.ten = 0
                this.hundreds += 1
                if (this.hundreds === 10) {
                    this.hundreds = 0
                    this.thousands += 1
                    if (this.thousands === 10) {
                        this.thousands = 0
                        this.tenThousand += 1
                        if (this.tenThousand === 10) {
                            this.tenThousand = 0
                            this.million += 1
                            if (this.million === 10) {
                                this.million = 0
                            }
                            this.cutNumber(this.num - 5, this.million)
                        }
                        this.cutNumber(this.num - 4, this.tenThousand)
                    }
                    this.cutNumber(this.num - 3, this.thousands)
                }
                this.cutNumber(this.num - 2, this.hundreds)
            }
            this.cutNumber(this.num - 1, this.ten)
        }
        this.cutNumber(this.num, this.count)
    }
    cutNumber(num, i) {
        this.number.ary[num].disableBody(true, true)
        this.number.num[num] = this.anims.create({
            key: 'num' + num,
            frames: this.anims.generateFrameNumbers('number_black', {
                start: i,
                end: i
            }),
        });
        this.number.ary[num] = this.physics.add.sprite(this.number.ary[num].x, this.number.ary[num].y, 'number_black').setOrigin(0, 0).setDepth(2)
        this.number.ary[num].play('num' + i)
    }
}