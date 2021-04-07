function preload() {

    this.load.spritesheet('fish1', '/fish/assets/new/fish1.png', {
        frameWidth: 120,
        frameHeight: 100
    });
    this.load.spritesheet('fish2', '/fish/assets/new/fish2.png', {
        frameWidth: 130,
        frameHeight: 130
    });
    this.load.spritesheet('fish3', '/fish/assets/new/fish3.png', {
        frameWidth: 150,
        frameHeight: 180
    });
    this.load.spritesheet('fish4', '/fish/assets/new/fish4.png', {
        frameWidth: 180,
        frameHeight: 170
    });
    this.load.spritesheet('fish5', '/fish/assets/new/fish5.png', {
        frameWidth: 180,
        frameHeight: 260
    });

    this.load.spritesheet('fish6', '/fish/assets/new/fish6.png', {
        frameWidth: 250,
        frameHeight: 370
    });
    this.load.spritesheet('fish7', '/fish/assets/new/fish7.png', {
        frameWidth: 340,
        frameHeight: 240
    });
    this.load.spritesheet('fish8', '/fish/assets/new/fish8.png', {
        frameWidth: 270,
        frameHeight: 290
    });
    this.load.spritesheet('fish9', '/fish/assets/new/fish9.png', {
        frameWidth: 310,
        frameHeight: 200
    });
    this.load.spritesheet('fish10', '/fish/assets/new/fish10.png', {
        frameWidth: 200,
        frameHeight: 180
    });
    this.load.spritesheet('fish11', '/fish/assets/new/fish11.png', {
        frameWidth: 230,
        frameHeight: 340
    });
    this.load.spritesheet('fish12', '/fish/assets/new/fish12.png', {
        frameWidth: 600,
        frameHeight: 430
    });
    this.load.spritesheet('fish13', '/fish/assets/new/fish13.png', {
        frameWidth: 600,
        frameHeight: 515
    });

    this.load.spritesheet('coinText', '/fish/assets/coinText.png', {
        frameWidth: 36,
        frameHeight: 49
    }); //396      // 得分字樣
    this.load.spritesheet('number_black', '/fish/assets/number_black.png', {
        frameWidth: 20,
        frameHeight: 24
    }); // 砲台底座分數字樣
    this.load.spritesheet('coinAni1', '/fish/assets/coinAni1.png', {
        frameWidth: 60,
        frameHeight: 60
    }); // 錢幣 1

    this.load.spritesheet('cannon1', '/fish/assets/new/cannon1.png', {
        frameWidth: 84,
        frameHeight: 95
    }); // 大砲 1
    this.load.spritesheet('cannon2', '/fish/assets/new/cannon2.png', {
        frameWidth: 84,
        frameHeight: 95
    }); // 大砲 2
    this.load.spritesheet('cannon3', '/fish/assets/new/cannon3.png', {
        frameWidth: 86,
        frameHeight: 105
    }); // 大砲 3
    this.load.spritesheet('cannon4', '/fish/assets/new/cannon4.png', {
        frameWidth: 86,
        frameHeight: 105
    }); // 大砲 4
    this.load.spritesheet('cannon5', '/fish/assets/new/cannon5.png', {
        frameWidth: 88,
        frameHeight: 121
    }); // 大砲 5
    this.load.spritesheet('cannon6', '/fish/assets/new/cannon6.png', {
        frameWidth: 88,
        frameHeight: 121
    }); // 大砲 6
    this.load.spritesheet('cannon7', '/fish/assets/new/cannon7.png', {
        frameWidth: 140,
        frameHeight: 141
    }); // 大砲 7

    this.load.spritesheet('bullet1', '/fish/assets/new/bullet1.png', {
        frameWidth: 33,
        frameHeight: 34
    }); // 子彈 1
    this.load.spritesheet('bullet2', '/fish/assets/new/bullet2.png', {
        frameWidth: 36,
        frameHeight: 56
    }); // 子彈 2
    this.load.spritesheet('bullet3', '/fish/assets/new/bullet3.png', {
        frameWidth: 98,
        frameHeight: 62
    }); // 子彈 3
    this.load.spritesheet('bullet4', '/fish/assets/new/bullet4.png', {
        frameWidth: 165,
        frameHeight: 72
    }); // 子彈 4

    this.load.spritesheet('bullet5', '/fish/assets/bullet5.png', {
        frameWidth: 30,
        frameHeight: 34
    }); // 子彈 5
    this.load.spritesheet('bullet6', '/fish/assets/bullet6.png', {
        frameWidth: 31,
        frameHeight: 35
    }); // 子彈 6
    this.load.spritesheet('bullet7', '/fish/assets/bullet7.png', {
        frameWidth: 32,
        frameHeight: 38
    }); // 子彈 7
    this.load.spritesheet('bullet8', '/fish/assets/bullet8.png', {
        frameWidth: 30,
        frameHeight: 44
    }); // 子彈 8

    this.load.spritesheet('web1', '/fish/assets/new/web1.png', {
        frameWidth: 278,
        frameHeight: 278
    }); // 補魚網
    this.load.image('cannonPlus', '/fish/assets/new/cannon_plus.png'); // 砲台 +
    this.load.image('cannonMinus', '/fish/assets/new/cannon_minus.png'); // 砲台 -
    this.load.image('bottomBar', '/fish/assets/new/bottom-bar.png'); // 砲台底座平台
    this.load.image('bg', '/fish/assets/new/startbg.png');


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