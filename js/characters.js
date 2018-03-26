  var Characters = (function (Emittor,Audios) {

    var jumpTimer = 0;

    var preloadImagesCharacters = function () {
        game.load.spritesheet('dad', 'images/robot1.png', 80, 111);
        game.load.spritesheet('mom', 'images/robot2.png', 80, 111);
        game.load.spritesheet('son', 'images/robot3.png', 80, 111);
        game.load.spritesheet('daughter', 'images/robot4.png', 80, 111);
        game.load.spritesheet('aim', 'images/aim.png', 100, 100);
    };

    var mainCharacter = function (bot) {
      
      this.speed=10;

      this.robot=game.add.sprite(game.world.centerX,130,bot);
      game.physics.arcade.enable(this.robot);
      this.robot.anchor.set(0.8,0.8);
      this.robot.animations.add('idle', [0,1,2,3], 12,true);
      this.robot.animations.add('run', [10,11,12,13,14,15,16], 12,true);
      this.robot.animations.add('turbo', [20], 4,true);
      this.robot.animations.play('idle'); 
      this.robot.body.collideWorldBounds = true;
      this.robot.body.bounce.y = 0.2;
      this.robot.body.gravity.y = 400;
      this.robot.z = 5;
      return this.robot;
    };

    var moveCharacter = function(a,b,c,d,e,f){

      this.speed=10;

      
      if (a) {
        this.robot.x-=this.speed;
        this.robot.body.checkCollision.left = true;
        collideLeft();
        this.robot.body.enable = true;
        this.robot.play("run");
        this.robot.scale.x=-1;
      
      }
      else if (b){
        this.robot.x+=this.speed;
        this.robot.body.checkCollision.right = true;
        collideRight();
        this.robot.body.enable = true;
        this.robot.play("run");
        this.robot.scale.x=1;


      }else{
       this.robot.animations.play('idle'); 
      }
      if (c && game.time.now > jumpTimer){
          this.robot.animations.play('run');
          this.robot.body.velocity.y = -250;
          this.jumpTimer = game.time.now + 750;
      }
      if (d){
          this.robot.animations.play("turbo");
          Audios.turboAdd();
          turboCross(false,false);
          setTimeout(function(){ 
            turboCross(true,true);
          }, 3000);
          if (pad1.connected){
              game.physics.arcade.moveToXY(this.robot,mira.x, mira.y,700);
          }else if(vj == true){
              game.physics.arcade.moveToXY(this.robot,mira.x, mira.y,700);
          }else{
              game.physics.arcade.moveToPointer(this.robot, 700);
          }
          if(e>=600){
            this.robot.scale.x=1;
          }else{
           
            this.robot.scale.x=-1;
          }
        
      }else if (f){
        this.robot.animations.play("idle");
        this.robot.body.velocity.x = 0;
        turboCross(true,true);

      }


    };


    var collideLeft = function(){
      if(robot.body.touching.left){
        Audios.robotHit();
        emitter1.forEachAlive(function(particle){
          particle.body.acceleration.x = -80;
          particle.body.acceleration.y = 30;
          particle.body.velocity.x = -80;
          robot.body.velocity.x = -80;
      
        }); 
      }
       
    };
    var collideRight = function(){
       if(robot.body.touching.right){
          Audios.robotHit();
          emitter2.forEachAlive(function(particle){

            particle.body.acceleration.x = 80;
            particle.body.acceleration.y = 30;
            particle.body.velocity.x = 80;
            robot.body.velocity.x = 80;
            
          });
       }
      
    };
       
    return {
      createCharacters: preloadImagesCharacters,
      setMainCharacter: mainCharacter,
      moveRobot:moveCharacter,
      lColliding: collideLeft,
      rColliding: collideRight,  
    };

  })(Emittor,Audios);