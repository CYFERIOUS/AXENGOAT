var ModuleGame = (function () {

  var game = new Phaser.Game(950, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.atlasJSONHash('bot', 'images/running_bot.png', 'images/running_bot.json');
    game.load.image('casita', 'images/casita.png');

}

var s;

function create() {

    s = game.add.sprite(game.world.centerX, game.world.centerY, 'bot');
    s.anchor.setTo(0.5, 0.5);
    s.scale.setTo(2, 2);

     var c = game.add.sprite(game.world.centerX-256,210, 'casita');

    s.animations.add('run');
    s.animations.play('run', 10, true);

}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        s.x -= 4;
        if(s.x < 200){
            s.x=200;
        }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        s.x += 4;
        if(s.x > 600){
            s.x=600;
        }
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        s.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        s.y += 4;
    }

}

function render() {
    game.debug.spriteInfo(s, 20, 32);

}
 
 
   var publicMethod = function () {
    
      render();
  };
  
  return {
    publicMethod: publicMethod
  };

})();



var main = function(){
  ModuleGame.publicMethod();
}


  


