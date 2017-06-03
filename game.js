console.clear();

var game = new Phaser.Game({
  // antialias:   true,
  // enableDebug: true,
   height:      320,
  // renderer:    Phaser.AUTO,
  // resolution:  1,
  // scaleMode:   Phaser.ScaleManager.NO_SCALE,
  // transparent: false,
   width:       480,
  state: {

    init: function() {

    },

    preload: function() {
      // See <https://github.com/samme/phaser-examples-assets>
      this.load.baseURL = 'https://cdn.jsdelivr.net/gh/samme/phaser-examples-assets@v1.0.0/';
      this.load.crossOrigin = 'anonymous';
      this.load.image('dude', 'sprites/phaser-dude.png');
      this.load.image('ball','https://raw.githubusercontent.com/dwiperdana/phaser-tutorials/master/01/asset/ballGrey.png')
    },

    create: function() {
      var sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'ball');
      // this.physics.enable(sprite);
    },

    update: function() {

    },

    render: function() {
      // var debug = this.game.debug;
      this.renderLegend(10, 310);
    },

    shutdown: function() {

    },

    renderLegend: function(x, y) {
      var debug = this.game.debug;
      debug.text([
        'Phaser', Phaser.VERSION,
        ['AUTO', 'CANVAS', 'WEBGL', 'HEADLESS', 'WEBGL_MULTI'][game.renderType],
        // navigator.userAgent,
      ].join(' '), x, y, 'white', debug.font);
    }

  }
});
