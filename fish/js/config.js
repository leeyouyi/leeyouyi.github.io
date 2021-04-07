const clientWidth = document.body.clientWidth
const clientHeight = document.body.clientHeight
const app = document.querySelector('#app')
const config = {
    type: Phaser.AUTO,
    width: app.offsetWidth || clientWidth,
    height: app.offsetHeight || clientHeight,
    backgroundColor: "#000c1f",
    parent: "app",
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
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [startGame, playGame]
}

const game = new Phaser.Game(config)
game.scene.start('startGame');