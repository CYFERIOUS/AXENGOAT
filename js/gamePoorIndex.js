var ModuleGame = (function () {
 
  var game = new Phaser.Game(950, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
   var jumpButton;
  var jumpTimer = 0;
  var cursors;
  var platforms;


function preload() {
    game.load.spritesheet('robot', 'images/papa.png', 80, 111);
    game.load.image('ground', 'images/platform.png');
    game.load.image('casita', 'images/casita.png');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.time.desiredFps = 30;
    

 
}



function create() {
      
     
      this.speed=4;
      this.robot=game.add.sprite(game.world.centerX,130,"robot");
      this.robot.anchor.set(0.5,0.5);
      this.robot.animations.add('idle', [0,1,2,3,4,5,6,7,8,9], 12,true);
      this.robot.animations.add('run', [10,11,12,13,14,15,16,17], 12,true);
      this.robot.animations.play('idle');
      game.physics.arcade.enable(this.robot);

      //  Player physics properties. Give the little guy a slight bounce.
      this.robot.body.bounce.y = 0.2;
      this.robot.body.gravity.y = 400;
     
      
      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

       game.physics.enable(this.robot, Phaser.Physics.ARCADE);
       this.robot.body.bounce.y = 0.2;
      this.robot.body.collideWorldBounds = true;

      //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 32, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    //ground.scale.setTo(2, 2);
    ground.scale.x = 800;

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;


    ledge1 = platforms.create(game.world.centerX-226, 350, 'ground');
    ledge1.body.immovable = true;

    ledge2 = platforms.create(150, 500, 'ground');
    ledge2.width = 650;
    ledge2.body.immovable = true;



     var c = game.add.sprite(game.world.centerX-256,210-32, 'casita');

}


function update() {

  var hitPlatform = game.physics.arcade.collide(this.robot, platforms);

   if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.robot.x-=this.speed;
        this.robot.play("run");
        this.robot.scale.x=-1;
       
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.robot.x+=this.speed;
        this.robot.play("run");
        this.robot.scale.x=1;
       
       
    }else{
      this.robot.play('idle');
    }
    if (jumpButton.isDown  && game.time.now > jumpTimer)
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


  


