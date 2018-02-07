var Dog = (function () {
 
    var preloadImagesDog = function () {
  
        game.load.spritesheet('bruno', 'images/doggy.png', 50, 99);
       
    };

    var dog = function () {
      this.dog=game.add.sprite(300,600,"bruno");
      this.dog.animations.add('attack1', [1,2,3,4,5,6,7,8,9,10], 6,true);
      this.dog.animations.play('attack1',true); 
      this.dog.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.dog);
      this.dog.body.collideWorldBounds = true;
      this.dog.body.bounce.y = 0.2;
      this.dog.body.gravity.y = 400;
       
      return this.dog;
    };



    var dogMove  = function(stage){
       
         if(stage == 1 || stage == 2 ){
            
            if(this.dog.body.x < 310){
              this.dog.scale.x=-1;
              game.physics.arcade.moveToXY(this.dog, 910, 900, 100 );
              
            }
            if(this.dog.body.x > 900){
              this.dog.scale.x=1;
              game.physics.arcade.moveToXY(this.dog, 310, 900, 100 );
              
            }
        }

        if(stage == 3){

               if(this.dog.body.x < 310){
              this.dog.scale.x=-1;
              game.physics.arcade.moveToXY(this.dog, 500, 900, 100 );
              
            }
            if(this.dog.body.x > 490){
              this.dog.scale.x=1;
              game.physics.arcade.moveToXY(this.dog, 10, 900, 100 );
              
            }
        }
      
    };


    return {
      loadDog: preloadImagesDog,
      addDog: dog,
      moveDog:dogMove
      
    };

  })();