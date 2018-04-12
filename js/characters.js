  var Characters = (function (Emittor,Audios) {

    var jumpTimer = 0;
    var speed = 10;

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
      this.robot.animations.add('turbo', [20,21,22,23,24,25,26,27], 12,true);
      this.robot.body.collideWorldBounds = true;
      this.robot.body.bounce.y = 0.2;
      this.robot.body.gravity.y = 400;
      this.robot.z = 5;
      return this.robot;
    };

    var validateInput = function(){
      if (pad1.connected){
          game.physics.arcade.moveToXY(this.robot,mira.x, mira.y,700);
      }else if(vj == true){
          game.physics.arcade.moveToXY(this.robot,mira.x, mira.y,700);
      }else{
         game.physics.arcade.moveToPointer(this.robot, 700);
         robotFacing();
      }
    };

    function robotFacing(){
      if(game.input.mousePointer.x > this.robot.x){
        this.robot.scale.x=1;
      }else{
        this.robot.scale.x=-1;
      }
    };

    function moveLeft(){
        this.robot.x-=speed;
        this.robot.body.checkCollision.left = true;
        collideLeft();
        this.robot.body.enable = true;
        this.robot.play("run");
        this.robot.scale.x=-1;
    };

    function moveRight(){
        this.robot.x+=speed;
        this.robot.body.checkCollision.right = true;
        collideRight();
        this.robot.body.enable = true;
        this.robot.play("run");
        this.robot.scale.x=1;
    };

    function jumpEst(){
        if(game.time.now > jumpTimer){
          this.robot.play('run');
          this.robot.body.velocity.y = -250;
          this.jumpTimer = game.time.now + 750;
        }
    };

    function turboEst(){

         this.robot.play("turbo");

          Audios.turboAdd();
          validateInput();
          turboCross(false,false);
          
          setTimeout(function(){ 
            turboCross(true,true);
          }, 3000);
          
          
    };

    function idleEst(){
        this.robot.play("idle");
        this.robot.body.velocity.x = 0;
        turboCross(true,true);
    };
    

    var moveCharacter = function(data){
      switch(data) {
        case "moveLeft":
          moveLeft();
        break;
        case "moveRight":
          moveRight();
        break;
        case "jumpEst":
          jumpEst();
        break;
        case "turboEst":
          turboEst();
        break;
        case "idleEst":
          idleEst();
        break;
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
      rColliding: collideRight
    };

  })(Emittor,Audios);