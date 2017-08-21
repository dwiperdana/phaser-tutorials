console.clear();

var ball;
var game = new Phaser.Game({
  // antialias:   true,
  // enableDebug: true,
  height: 600,
  // renderer:    Phaser.AUTO,
  // resolution:  1,
  // scaleMode:   Phaser.ScaleManager.NO_SCALE,
  // transparent: false,
  width: 800,
  parent: "game",
  state: {
    init: init,
    preload: preload,
    create: create,
    update: update,
    render: render,
    shutdown: shutdown
  }
});

function init() {
}

function preload() {
  this.load.crossOrigin = 'anonymous';
  this.load.image('ball', 'asset/ballGrey.png');
}

function create() {
  ball = this.add.sprite(this.world.centerX, this.world.centerY, 'ball');
}

function update() {
  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    ball.x -= 1;
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    ball.x += 1;
  }
}

function render() {
  renderLegend(10, 590);
}

function renderLegend(x, y) {
  var debug = this.game.debug;
  debug.text([
    'Phaser', Phaser.VERSION, ['AUTO', 'CANVAS', 'WEBGL', 'HEADLESS', 'WEBGL_MULTI'][game.renderType],
    // navigator.userAgent,
  ].join(' '), x, y, 'white', debug.font);
}

function shutdown() {

}