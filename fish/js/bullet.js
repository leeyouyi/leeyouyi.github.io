function bulletFun(bullet, fish) {

    game.anims.remove('coin2')
    var fishStart = fish.fishRandom > 5 ? 8 : 4
    var fishEnd = fish.fishRandom > 5 ? 11 : 7
    // if (fish.fishRandom === 7 || fish.fishRandom === 10) {
    //     fishStart = 6
    //     fishEnd = 9
    // }
    var vitality = Phaser.Math.Between(1, fish.vitality)


    bullet.disableBody(true, true);
    var web = this.physics.add.sprite(bullet.x, bullet.y, 'web1')
    setTimeout(function () {
        web.setScale(.8)
    }, 100)

    setTimeout(function () {
        web.disableBody(true, true);
    }, 200)



    if (vitality === fish.vitality) { // 機率
        // console.log(fish)
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
                cutNumber(self, self.num - 1, self.ten)
            }
            cutNumber(self, self.num, self.count)

        }, 1000)

    }

}

function getDegree(x1, y1, x2, y2) {
    var x = Math.abs(x1 - x2);
    var y = Math.abs(y1 - y2);
    var z = Math.sqrt(x * x + y * y);
    return Math.round((Math.asin(y / z) / Math.PI * 180));
}