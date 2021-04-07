function create() {
    canvas = document.querySelector('canvas')
    app.appendChild(canvas);
    game.gameScene = this
    // this.bg = this.add.tileSprite(game.config.width / 2, game.config.height / 2, game.config.width, game.config.height, 'bg').setInteractive()
    // this.bg = this.add.image(0, 0, 'bg').setInteractive().setOrigin(0, 0).setSize(game.config.width, game.config.height)


    this.bg = this.add.image(0, 0, 'bg').setInteractive().setOrigin(0, 0).setScale(1)
    game.bg = this.bg
    // Phaser.Display.Align.In.Center(this.bg, this.add.zone(game.config.width / 2, game.config.height / 2, game.config.width, game.config.height));
    this.bottomBar = this.add.image(this.center, game.config.height - 70, 'bottomBar').setScale(.7)
    this.cannonMinus = this.add.image(this.center - 80, game.config.height - 30, 'cannonMinus').setScale(.6).setInteractive()
    this.cannonPlus = this.add.image(this.center + 80, game.config.height - 30, 'cannonPlus').setScale(.6).setInteractive()
    this.cannon = this.physics.add.sprite(this.center, game.config.height - 100, 'cannon1').setScale(0.8)
    this.world = this.physics.world
    this.scale.on('resize', resize, this);

    let self = this
    this.input.on('pointerdown', function (pointer) {

        if (!pointer.event.clientX) {
            pointer.event.clientX = pointer.event.changedTouches[0].clientX
            pointer.event.clientY = pointer.event.changedTouches[0].clientY
        }
        if (self.bulletFlag) {

            self.bullet = self.physics.add.sprite(self.center, game.config.height - 100, self.size);
            self.physics.add.overlap(self.bullet, self.fishAry, bulletFun, null, self);
            self.degree = getDegree(self.center, game.config.height - 100, pointer.event.clientX, pointer.event.clientY)
            if (pointer.worldX < self.center) {
                self.degree = self.degree - 90
            } else {
                self.degree = Math.abs(self.degree - 90)
            }
            let deg = self.degree

            self.bullet.rotation = deg / 60
            self.bullet.sin = Math.sin(deg * Math.PI / 180)
            self.bullet.cos = Math.cos(deg * Math.PI / 180)

            self.bullet.x = self.cannon.x + (self.bullet.body.height + 20) * self.bullet.sin;
            self.bullet.y = self.cannon.y - (self.bullet.body.height + 20) * self.bullet.cos;
            self.bulletAry.push(self.bullet)

            changeNum(self)
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

    numberFun(this)
    fishFun(this)
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