var ModuleGame = (function () {
 
  var game = new Phaser.Game(950, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
   var jumpButton;
  var jumpTimer = 0;
  var cursors;

function preload() {
    game.load.spritesheet('robot', 'images/robot.png', 80, 111);
    game.load.image('casita', 'images/casita.png');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.time.desiredFps = 30;
    game.physics.arcade.gravity.y = 250;
 
}



function create() {
      
     
      this.speed=4;
      this.robot=game.add.sprite(game.world.centerX,330,"robot");
      this.robot.anchor.set(0.5,0.5);
      this.robot.animations.add('idle', [0,1,2,3,4,5,6,7,8,9], 12,true);
      this.robot.animations.add('run', [10,11,12,13,14,15,16,17], 12,true);
      //this.robot.animations.play('idle');
      //var c = game.add.sprite(game.world.centerX-256,210, 'casita');
      
     
      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

       game.physics.enable(this.robot, Phaser.Physics.ARCADE);
       this.robot.body.bounce.y = 0.2;
      this.robot.body.collideWorldBounds = true;

}

function update() {


   if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.robot.x-=this.speed;
        this.robot.play("run");
        this.robot.scale.x=-1;
        if(this.robot.x < 256){
            this.robot.x = 256;
        }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.robot.x+=this.speed;
        this.robot.play("run");
        this.robot.scale.x=1;
        if(this.robot.x > 710){
          this.robot.x = 710;
        }
       
    }else{
      this.robot.play('idle');
    }
    if (jumpButton.isDown && this.robot.body.onFloor() && game.time.now > jumpTimer)
    {
        this.robot.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }

}

function render() {
    //game.debug.spriteInfo(s, 20, 32);
     game.debug.text(game.time.suggestedFps, 32, 32);

}
 
 
   var publicMethod = function () {
      render();
      update();
  };
  
  return {
    publicMethod: publicMethod
  };

})();



var main = function(){
  ModuleGame.publicMethod();
}


  


