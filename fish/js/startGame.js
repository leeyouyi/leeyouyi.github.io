const startGame = class startGame extends Phaser.Scene {
    constructor() {
        super("startGame");
    }
    preload() {

    }
    create() {
        this.text = this.add.text(game.config.width / 2 - 120, game.config.height / 2 - 50, 'start', {
            fontSize: '100px',
            fill: '#ff0'
        }).setInteractive()

        this.text.on('pointerdown', () => {
            this.scene.start('playGame');
        })

    }

}