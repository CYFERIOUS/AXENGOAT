var CollideManager = (function () {

    var generalCollide = function () {
      var hitPlatform = game.physics.arcade.collide(robot, platforms);
      var hitPlatform1 = game.physics.arcade.collide(emitter1, platforms,Stage.collideBlockLeft);
      var hitPlatform2 = game.physics.arcade.collide(emitter2, platforms,Stage.collideBlockRight);
      var hitPlatform3 = game.physics.arcade.collide(emitter1, robot, Characters.lColliding);
      var hitPlatform4 = game.physics.arcade.collide(emitter2, robot, Characters.rColliding);
      var hitPlatform5 = game.physics.arcade.collide(emitter3, platforms,Stage.collideBlockLeft);
      var hitPlatform6 = game.physics.arcade.collide(emitter4, platforms,Stage.collideBlockRight);
      var hitPlatform7 = game.physics.arcade.collide(emitter3, robot, Characters.lColliding);
      var hitPlatform8 = game.physics.arcade.collide(emitter4, robot, Characters.rColliding);
      var hitPlatform9 = game.physics.arcade.collide(emitter5, platforms,Stage.collideBlockRight);
      var hitPlatform10 = game.physics.arcade.collide(emitter5, robot, Characters.rColliding);
      
      var hitPlatform11 = game.physics.arcade.collide(emitter1, emitter2);
      var hitPlatform12 = game.physics.arcade.collide(emitter3, emitter4);
      var hitPlatform13 = game.physics.arcade.collide(emitter4, emitter5);

      var hitPlatform14 = game.physics.arcade.collide(emitter2, emitter4);
      var hitPlatform15 = game.physics.arcade.collide(emitter2, emitter5);

      var hitPlatform16 = game.physics.arcade.collide(emitter3, emitter1);
      var hitPlatform17 = game.physics.arcade.collide(emitter3, emitter2);
      var hitPlatform18 = game.physics.arcade.collide(emitter3, emitter5);

      var hitPlatform19 = game.physics.arcade.collide(emitter4, emitter1);

      var hitPlatform20 = game.physics.arcade.collide(emitter5, emitter1);
      

    };

    var collideStage1 = function (){
      var hitPlatform21 = game.physics.arcade.collide(peresozin, platforms);
      var hitPlatform22 = game.physics.arcade.collide(sickBoy, platforms);
    };

    var collideStage2 = function (){
      var hitPlatform23 = game.physics.arcade.collide(shiquilin, platforms);
      var hitPlatform24 = game.physics.arcade.collide(vaguinho, platforms);
    };

    var collideStage3 = function(){
      var hitPlatform25 = game.physics.arcade.collide(bigBoss, platforms);
    };



    return {
      general:generalCollide,
      stageOne:collideStage1,
      stageTwo:collideStage2,
      stageThree:collideStage3,
      
    };

  })();
 