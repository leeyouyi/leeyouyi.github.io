const spritLength = [15, 30, 30, 30, 30, 45, 45, 45, 45, 45, 45, 75, 120]

function fishFun(self) {

    let obj = self.anims.anims.entries
    for (const key in obj) {

        if (key.slice(0, 4) === 'swim') {
            // console.log(key);
            // self.anims.remove(key)
        }

        if (key.slice(0, 3) === 'Die') {
            // console.log(key);
            self.anims.remove(key)
        }
    }

    let fishRandom = Phaser.Math.Between(1, 13)
    // let fishRandom = 12
    let fishRandom2 = Phaser.Math.Between(1, 10)
    let fishEnd = fishRandom > 5 ? 7 : 3

    if (fishRandom === 1) fishEnd = 15
    if (fishRandom > 1 && fishRandom <= 5) fishEnd = 30
    if (fishRandom > 5 && fishRandom <= 11) fishEnd = 45
    // if (fishRandom === 12 || fishRandom === 13) return false
    if (fishRandom === 12) fishEnd = 38
    if (fishRandom === 13) fishEnd = 30
    self.anims.create({
        key: 'swim' + fishRandom + fishRandom2,
        frames: self.anims.generateFrameNumbers('fish' + fishRandom, {
            start: 0,
            end: fishEnd - 1
        }),
        frameRate: 20,
        repeat: -1
    });
    fishRandomFn(self, fishRandom, fishRandom2, obj)
}

function fishRandomFn(self, fishRandom, fishRandom2, obj) {

    let fishLength = Phaser.Math.Between(1, 5)
    let random = Phaser.Math.Between(0, 10)
    self.direction = random <= 5 ? self.width + 50 : -50
    for (let i = 0; i < fishLength; i++) {

        let startX = random <= 5 ? Phaser.Math.Between(-500, 0) : Phaser.Math.Between(self.width, self.width + 100)
        let endX = random <= 5 ? Phaser.Math.Between(self.width + 100, self.width + 200) : Phaser.Math.Between(-200, -300)
        let flip = random <= 5 ? false : true
        self.fish = self.physics.add.sprite(startX, Phaser.Math.Between(50, self.height - 100), 'fish' + fishRandom).setScale(.8);
        self.tween = self.tweens.add({
            targets: self.fish,
            props: {
                x: {
                    value: endX,
                    duration: Phaser.Math.Between(15000, 20000),
                    flipX: true
                },
                y: {
                    value: Phaser.Math.Between(50, self.height - 100),
                    duration: 8000,
                },
            },
            ease: 'Sinusoidal',
        });

        let w = Math.round(self.fish.width * 0.8)
        let h = Math.round(self.fish.height * 0.8)
        self.fish.setSize(w, h, true)
        self.fish.vitality = fishRandom
        self.fish.score = fishRandom
        self.fish.flipX = flip
        self.fish.fishRandom = fishRandom
        self.fish.animation = 'swim' + fishRandom + fishRandom2
        // for (const key in obj) {
        //     if (key.slice(0, 4) === 'swim') {
        //         // console.log(key)
        //         self.fish.animation = key
        //     }
        // }
        self.fish.play(self.fish.animation);
        self.fish.setBounce(0.2);
        self.fishAry.push(self.fish)
        self.tweenAry.push(self.tween)


    }

}

function makeFishFun(self) {
    --self.makeFish;

    if (self.makeFish === 0) {
        self.makeFish = self.physics.world.fps * 3;
        fishFun(self);
    }
}

function splice(self, fish) {

    let index = self.fishAry.indexOf(fish)
    self.tweenAry[index].pause(true)
    self.fishAry.splice(index, 1)
    self.tweenAry.splice(index, 1)
    fish.disableBody(true, true);

}