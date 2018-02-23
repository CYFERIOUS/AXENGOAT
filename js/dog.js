var Dog = (function (Emittor,Audios) {
 
    var preloadImagesDog = function () {
  
        game.load.spritesheet('bruno', 'images/doggy.png', 50, 99);
       
    };

    var dogo = function () {
      this.dog=game.add.sprite(300,600,"bruno");
      this.dog.animations.add('attack1', [1,2,3,4,5,6,7,8,9,10], 6,true);
      this.dog.animations.play('attack1',true); 
      this.dog.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.dog);
      this.dog.body.collideWorldBounds = true;
      this.dog.body.checkCollision.left = true;
      this.dog.body.checkCollision.right = true;
      this.dog.body.bounce.y = 0.2;
      this.dog.body.gravity.y = 400;
       
      return this.dog;
    };

    var dogReject = function(){
        if(dog.body.touching.left){
          Audios.dogHit();
          emitter1.forEachAlive(function(particle){
            particle.body.acceleration.x = -280;
            particle.body.acceleration.y = 30;
          }); 
        }
      if(dog.body.touching.right){
            Audios.dogHit();
            emitter2.forEachAlive(function(particle){
            particle.body.acceleration.x = 280;
            particle.body.acceleration.y = 30;
          });
       }
    }



    var dogMove  = function(stage){
         if(stage == 1 || stage == 2 ){
            
            if(dog.body.x < 310){
              dog.scale.x=-1;
              game.physics.arcade.moveToXY(dog, 910, 900, 100 );
              
            }
            if(dog.body.x > 900){
              dog.scale.x=1;
              game.physics.arcade.moveToXY(dog, 310, 900, 100 );
              
            }
        }

        if(stage == 3){

               if(dog.body.x < 310){
              dog.scale.x=-1;
              game.physics.arcade.moveToXY(dog, 500, 900, 100 );
              
            }
            if(dog.body.x > 490){
              dog.scale.x=1;
              game.physics.arcade.moveToXY(dog, 10, 900, 100 );
              
            }
        }
    };


    return {
      loadDog: preloadImagesDog,
      addDog: dogo,
      moveDog:dogMove,
      dogBounce:dogReject
      
    };

  })(Emittor,Audios);