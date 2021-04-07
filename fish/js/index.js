const clientWidth = document.body.clientWidth
const clientHeight = document.body.clientHeight
const app = document.querySelector('#app')
let canvas
const config = {
    type: Phaser.AUTO,
    width: app.offsetWidth || clientWidth,
    height: app.offsetHeight || clientHeight,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            },
            debug: false
        },
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    scene: {
        preload: preload,
        create: create,
        update: update,
        resize: resize,

    }
}

const game = new Phaser.Game(config)