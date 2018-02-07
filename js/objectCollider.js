var CollideManager = (function () {

    var generalCollide = function () {
      var hitPlatform1 = game.physics.arcade.collide(robot, platforms);
      var hitPlatform2 = game.physics.arcade.collide(dog, platforms);
    };

    var collideStage1 = function (){
      var hitPlatform3 = game.physics.arcade.collide(emitter1, platforms,Platform.collideBlockLeft);
      var hitPlatform4 = game.physics.arcade.collide(emitter2, platforms,Platform.collideBlockRight);

      var hitPlatform5 = game.physics.arcade.collide(emitter1, robot, Characters.lColliding);
      var hitPlatform6 = game.physics.arcade.collide(emitter2, robot, Characters.rColliding);
      var hitPlatform7 = game.physics.arcade.collide(peresozin, platforms);
      var hitPlatform8 = game.physics.arcade.collide(sickBoy, platforms);

      var hitPlatform9 = game.physics.arcade.collide(emitter1, emitter2);
      var hitPlatform10 = game.physics.arcade.collide(dog, emitter1);
      var hitPlatform11 = game.physics.arcade.collide(dog, emitter2);
    };

    var collideStage2 = function (){
      

      var hitPlatform12 = game.physics.arcade.collide(emitter1, platforms,Platform.collideBlockLeft);
      var hitPlatform13 = game.physics.arcade.collide(emitter2, platforms,Platform.collideBlockRight);
      var hitPlatform14 = game.physics.arcade.collide(emitter3, platforms,Platform.collideBlockLeft);
      var hitPlatform15 = game.physics.arcade.collide(emitter4, platforms,Platform.collideBlockRight);

      var hitPlatform16 = game.physics.arcade.collide(emitter1, robot, Characters.lColliding);
      var hitPlatform17 = game.physics.arcade.collide(emitter2, robot, Characters.rColliding);
      var hitPlatform18 = game.physics.arcade.collide(emitter3, robot, Characters.lColliding);
      var hitPlatform19 = game.physics.arcade.collide(emitter4, robot, Characters.rColliding);
      var hitPlatform20 = game.physics.arcade.collide(shiquilin, platforms);
      var hitPlatform21 = game.physics.arcade.collide(vaguinho, platforms);

      var hitPlatform22 = game.physics.arcade.collide(emitter1, emitter2);
      var hitPlatform23 = game.physics.arcade.collide(emitter3, emitter4);
      var hitPlatform24 = game.physics.arcade.collide(emitter2, emitter4);
      var hitPlatform25 = game.physics.arcade.collide(emitter3, emitter2);
      var hitPlatform26 = game.physics.arcade.collide(emitter4, emitter1);
      var hitPlatform27 = game.physics.arcade.collide(emitter3, emitter1);

      var hitPlatform28 = game.physics.arcade.collide(dog, emitter3);
      var hitPlatform29 = game.physics.arcade.collide(dog, emitter4);
    };

    var collideStage3 = function(){

      
      var hitPlatform30 = game.physics.arcade.collide(emitter1, platforms,Platform.collideBlockRight);
      var hitPlatform31 = game.physics.arcade.collide(emitter2, platforms,Platform.collideBlockRight);
      var hitPlatform32 = game.physics.arcade.collide(emitter3, platforms,Platform.collideBlockRight);
      var hitPlatform33 = game.physics.arcade.collide(emitter4, platforms,Platform.collideBlockRight);
      var hitPlatform34 = game.physics.arcade.collide(emitter5, platforms,Platform.collideBlockRight);
      
      var hitPlatform35 = game.physics.arcade.collide(emitter1, robot, Characters.lColliding);
      var hitPlatform36 = game.physics.arcade.collide(emitter2, robot, Characters.rColliding);
      var hitPlatform37 = game.physics.arcade.collide(emitter3, robot, Characters.lColliding);
      var hitPlatform38 = game.physics.arcade.collide(emitter4, robot, Characters.rColliding);
      var hitPlatform39 = game.physics.arcade.collide(emitter5, robot, Characters.rColliding);
      var hitPlatform40 = game.physics.arcade.collide(bigBoss, platforms);

      var hitPlatform41 = game.physics.arcade.collide(dog, emitter1);
      var hitPlatform42 = game.physics.arcade.collide(dog, emitter2);
      var hitPlatform43 = game.physics.arcade.collide(dog, emitter3);
      var hitPlatform44 = game.physics.arcade.collide(dog, emitter4);
      var hitPlatform45 = game.physics.arcade.collide(dog, emitter5);


      
    };



    return {
      general:generalCollide,
      stageOne:collideStage1,
      stageTwo:collideStage2,
      stageThree:collideStage3,
      
    };

  })();
 