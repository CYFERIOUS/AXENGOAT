var Dog = (function () {

    var dog;

    
    var preloadImagesDog = function () {
  
        game.load.spritesheet('bruno', 'images/doggy.png', 50, 33);
       
    };

    var dog = function (width,height) {
      this.dog=game.add.sprite(width,height,"bruno");
      this.dog.animations.add('attack1', [1,2,3,4,5], 6,true);
      this.dog.animations.play('attack1',[1,2,3,4,5],6,true); 
      this.dog.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.dog);
      this.dog.body.collideWorldBounds = true;
      this.dog.body.bounce.y = 0.2;
      this.dog.body.gravity.y = 400;
      return this.dog;
    };

    var dogFloor = function(stage){
      if(stage == 1){
       dog(game.world.width/2,600);
      }

      if(stage == 2){
       dog(game.world.width/2,400);
      }
      if(stage == 3){
         dog(300,100);
      }

    }
    return {
      loadDog: preloadImagesDog,
      addDog: dog,
      dogLevel:dogFloor
      
    };

  })();