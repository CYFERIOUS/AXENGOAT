  var Characters = (function (Emittor) {

    var preloadImagesCharacters = function () {
        game.load.spritesheet('robot', 'images/papa.png', 80, 111);
    };

    var mainCharacter = function () {
      this.speed=10;
      this.robot=game.add.sprite(game.world.centerX,130,"robot");
      game.physics.arcade.enable(this.robot);
      this.robot.body.checkCollision.up = false;
      this.robot.anchor.set(0.5,0.5);
      this.robot.animations.add('idle', [0,1,2,3,4,5,6,7,8,9], 12,true);
      this.robot.animations.add('run', [10,11,12,13,14,15,16,17], 12,true);
      this.robot.animations.play('idle',[0,1,2,3],12,true); 
      this.robot.body.collideWorldBounds = true;
      this.robot.body.bounce.y = 0.2;
      this.robot.body.gravity.y = 400;
      return this.robot;
    };

    var movements = function () {
      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        this.robot.x-=this.speed;
        this.robot.play("run");
        this.robot.scale.x=-1;
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        this.robot.x+=this.speed;
        this.robot.play("run");
        this.robot.scale.x=1;
      }else{
        this.robot.play('idle');
      }
      if (jumpButton.isDown  && game.time.now > jumpTimer){
        this.robot.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
      }
    };

    var collideLeft = function(emitter1,robot){
      robot.body.velocity.x = 0;
      emitter1.bounce.setTo(2,1);

    };
    var collideRight = function(emitter2, robot){
      robot.body.velocity.x = 0;
     emitter2.bounce.setTo(2,1);
    };
   
    
    return {
      createCharacters: preloadImagesCharacters,
      setMainCharacter: mainCharacter,
      moveCharacters: movements,
      lColliding: collideLeft,
      rColliding: collideRight,
      
    };

  })(Emittor);