import 'phaser';
import Boot from './scenes/boot';
import Preload from './scenes/preload';
import { Game as GameScene } from './scenes/game';

const config: Phaser.Types.Core.GameConfig = {
  title: 'Demo Game',

  scene: [Boot, Preload, GameScene],
  backgroundColor: '#333',
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game-container',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
    max: {
      width: 1280,
      height: 720
    }
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  }
};

window.addEventListener('load', () => {
  window['game'] = new Phaser.Game(config);
});
