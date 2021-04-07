function update() {

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
    makeFishFun(this);

    if (this.fishAry.length === 0) fishFun(this)
    if (this.fishAry.length !== 0) {

        if (this.direction > 0) {
            this.fishAry.forEach(function (fish) {
                if (fish.x > self.width + 100) {
                    splice(self, fish)
                    game.anims.remove(fish.animation)
                }
            })

        } else {
            this.fishAry.forEach(function (fish) {
                if (fish.x < -200) {
                    splice(self, fish)
                    game.anims.remove(fish.animation)
                }
            })
        }
    }
    // let pointer = this.input.activePointer;
    // if (pointer.isDown) {
    //     if (self.bulletFlag) {
    //         self.bullet = self.physics.add.sprite(self.center, game.config.height - 100, self.size);
    //         self.physics.add.overlap(self.bullet, self.fishAry, bulletFun, null, self);
    //         self.degree = getDegree(self.center, game.config.height - 100, pointer.event.clientX, pointer.event.clientY)
    //         if (pointer.worldX < self.center) {
    //             self.degree = self.degree - 90
    //         } else {
    //             self.degree = Math.abs(self.degree - 90)
    //         }
    //         let deg = self.degree

    //         self.bullet.rotation = deg / 60
    //         self.bullet.sin = Math.sin(deg * Math.PI / 180)
    //         self.bullet.cos = Math.cos(deg * Math.PI / 180)

    //         self.bullet.x = self.cannon.x + (self.bullet.body.height + 20) * self.bullet.sin;
    //         self.bullet.y = self.cannon.y - (self.bullet.body.height + 20) * self.bullet.cos;
    //         self.bulletAry.push(self.bullet)
    //         changeNum(self)
    //     }
    // }
}