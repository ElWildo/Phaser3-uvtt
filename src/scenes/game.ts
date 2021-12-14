import { Scene } from 'phaser';

export class Game extends Scene {

  controls: Phaser.Cameras.Controls.SmoothedKeyControl;

  constructor() {
    super({
      key: 'GameScene'
    });

    this.controls = null;
  }

  create(): void {
    // const image = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'image-data');
    const image = this.add.tileSprite(this.cameras.main.centerX, this.cameras.main.centerY, 1280, 1280, 'image-data');
    this.physics.world.setBounds(0, 0, image.width, image.height);
    const cursors = this.input.keyboard.createCursorKeys();
    const controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
  }

  update (time, delta): void {
      this.controls.update(delta);
  }
}
