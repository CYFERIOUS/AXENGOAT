  var Characters = (function (Emittor) {




    var preloadImagesCharacters = function () {
        game.load.spritesheet('dad', 'images/robot1.png', 80, 111);
        game.load.spritesheet('mom', 'images/robot2.png', 80, 111);
        game.load.spritesheet('son', 'images/robot3.png', 80, 111);
        game.load.spritesheet('daughter', 'images/robot4.png', 80, 111);
        game.load.spritesheet('aim', 'images/aim.png', 100, 100);
        game.load.spritesheet('power', 'images/aim.png', 100, 100);
    };

    var mainCharacter = function (bot) {

      this.speed=10;
      this.robot=game.add.sprite(game.world.centerX,130,bot);
      game.physics.arcade.enable(this.robot);
      this.robot.anchor.set(0.8,0.8);
      this.robot.animations.add('idle', [0,1,2,3,4,5,6,7,8,9], 12,true);
      this.robot.animations.add('run', [10,11,12,13,14,15,16], 12,true);
      this.robot.animations.add('turbo', [20,21,22,23,24,25,26,27,28], 12,true);
      this.robot.animations.play('idle',[0,1,2,3],12,true); 
      this.robot.body.collideWorldBounds = true;
      this.robot.body.bounce.y = 0.2;
      this.robot.body.gravity.y = 400;
      this.robot.z = 5;
      return this.robot;
    };


    var snipe = function(point){
      $( "#body" ).mousedown(function() {
            $("#body").css( 'cursor', 'url(images/aim.png)50 50, auto' );
        }).mouseup(function(){
            $("#body").css( 'cursor', 'cell' );
      });
    };

    var movements = function () {
      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)){
        this.robot.x-=this.speed;
        this.robot.body.checkCollision.left = true;
        this.robot.play("run");
        this.robot.scale.x=-1;
      
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D)){
        this.robot.x+=this.speed;
        this.robot.body.checkCollision.right = true;
        this.robot.play("run");
        this.robot.scale.x=1;


      }else{
        this.robot.play('idle');
      }
      if (jumpButton.isDown  && game.time.now > jumpTimer){
        this.robot.animations.play('run',12,true);
        this.robot.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
      }
      if (game.input.mousePointer.isDown){
        this.robot.animations.play("turbo");
        game.physics.arcade.moveToPointer(this.robot, 700);
          if(game.input.mousePointer.x>=600){
            this.robot.scale.x=1;
          }else{
            this.robot.scale.x=-1;
          }
         
      }
      if (game.input.mousePointer.isUp){
         this.robot.body.velocity.x = 0;
      }
      
    };

    
    var collideLeft = function(){
      if(robot.body.touching.left){
        emitter1.forEachAlive(function(particle){
          particle.body.acceleration.x = -80;
          particle.body.acceleration.y = 30;
      
        }); 
      }
       
       //this.robot.body.velocity.x = 0;
    };
    var collideRight = function(){
       if(robot.body.touching.right){
          emitter2.forEachAlive(function(particle){
            particle.body.acceleration.x = 80;
            particle.body.acceleration.y = 30;
            
          });
       }
      
     //this.robot.body.velocity.x = 0;
    };
   
   

    
    return {
      createCharacters: preloadImagesCharacters,
      setMainCharacter: mainCharacter,
      moveCharacters: movements,
      lColliding: collideLeft,
      rColliding: collideRight,
      mira:snipe
      
    };

  })(Emittor);