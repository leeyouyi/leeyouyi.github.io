function numberFun(self) {
    self.number.frame = []
    self.number.ary = []
    var x = self.center - 60
    for (let i = 0; i < 6; i++) {

        self.number.frame[i] = self.anims.create({
            key: 'number' + i,
            frames: self.anims.generateFrameNumbers('number_black', {
                start: 0,
                end: 0
            }),
        });

        self.number.ary[i] = self.physics.add.sprite(x, game.config.height - 45, 'number_black').setOrigin(0, 0)
        x += 20
        self.number.ary[i].play('number' + i)
    }

}

function changeNum(self) {

    self.count += 1

    if (self.count === 10) {
        self.count = 0
        self.ten += 1
        if (self.ten === 10) {
            self.ten = 0
            self.hundreds += 1
            if (self.hundreds === 10) {
                self.hundreds = 0
                self.thousands += 1
                if (self.thousands === 10) {
                    self.thousands = 0
                    self.tenThousand += 1
                    if (self.tenThousand === 10) {
                        self.tenThousand = 0
                        self.million += 1
                        if (self.million === 10) {
                            self.million = 0
                        }
                        cutNumber(self, self.num - 5, self.million)
                    }
                    cutNumber(self, self.num - 4, self.tenThousand)
                }
                cutNumber(self, self.num - 3, self.thousands)
            }
            cutNumber(self, self.num - 2, self.hundreds)
        }
        cutNumber(self, self.num - 1, self.ten)
    }

    cutNumber(self, self.num, self.count)



}

function cutNumber(self, num, i) {

    self.number.ary[num].disableBody(true, true)

    self.number.num[num] = self.anims.create({
        key: 'num' + num,
        frames: self.anims.generateFrameNumbers('number_black', {
            start: i,
            end: i
        }),
    });
    self.number.ary[num] = self.physics.add.sprite(self.number.ary[num].x, self.number.ary[num].y, 'number_black').setOrigin(0, 0)
    self.number.ary[num].play('num' + i)
}