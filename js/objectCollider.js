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
      var hitPlatform13 = game.physics.arcade.collide(emitter1, emitter5);
    };

    var collideStage1 = function (){
      var hitPlatform2 = game.physics.arcade.collide(peresozin, platforms);
      var hitPlatform3 = game.physics.arcade.collide(sickBoy, platforms);
    };

    var collideStage2 = function (){
      var hitPlatform4 = game.physics.arcade.collide(shiquilin, platforms);
      var hitPlatform5 = game.physics.arcade.collide(vaguinho, platforms);
    };

    var collideStage3 = function(){
      var hitPlatform6 = game.physics.arcade.collide(bigBoss, platforms);
    };



    return {
      general:generalCollide,
      stageOne:collideStage1,
      stageTwo:collideStage2,
      stageThree:collideStage3,
      
    };

  })();
 