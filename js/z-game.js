
  var jumpButton;
  var jumpTimer = 0;
  var platforms;
  var emitter1, emitter2, emitter3, emitter4, emitter5 ;
  var ground;
  var speed, robot;
  var stageSelector = 1;
  

var Zgame = (function (Texto, BarLife, Characters, Emittor, Enemies, Stage, CMenu) {

    function preload(){
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.time.desiredFps = 30;  
      Emittor.preloading();
      Stage.preloadPlatforms();
      Stage.setHouse();
      Characters.createCharacters();
      Enemies.addEnemies();
      Texto.precharge();
    }
    function create(){
      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      Stage.houseAdder();
      robot = Characters.setMainCharacter(CMenu.returnChar());
      peresozin = Enemies.addPeresozin();
      sickBoy = Enemies.addSickBoy();
      emitter1 = Emittor.emitor(100,100,300,"izquierda",0.5);
      emitter2 = Emittor.emitor(game.world.width-63,100,-300,"derecha",0.5);
      emitter3 = Emittor.emitor(100,100,300,"izquierda",0.5);
      emitter4 = Emittor.emitor(game.world.width-63,100,-300,"derecha",0.5);
      emitter5 = Emittor.emitor(game.world.width-63,100,-300,"derecha",0.5);
      Stage.groupPlatforms();
      Stage.createPlatforms(14, game.world.width);
      Stage.createPlatforms(14, 0);
      BarLife.lifeBar(game.world.width);
      BarLife.initLife();
      Texto.creatingText();
    }

    function update() {
      var hitPlatform = game.physics.arcade.collide(robot, platforms);
      var hitPlatform7 = game.physics.arcade.collide(emitter1, platforms,Stage.collideBlockLeft);
      var hitPlatform8 = game.physics.arcade.collide(emitter2, platforms,Stage.collideBlockRight);
      var hitPlatform9 = game.physics.arcade.collide(emitter1, robot, Characters.lColliding);
      var hitPlatform10 = game.physics.arcade.collide(emitter2, robot, Characters.rColliding);
      
      var hitPlatform11 = game.physics.arcade.collide(emitter3, platforms,Stage.collideBlockLeft);
      var hitPlatform12 = game.physics.arcade.collide(emitter4, platforms,Stage.collideBlockRight);
      var hitPlatform13 = game.physics.arcade.collide(emitter3, robot, Characters.lColliding);
      var hitPlatform14 = game.physics.arcade.collide(emitter4, robot, Characters.rColliding);

      var hitPlatform15 = game.physics.arcade.collide(emitter5, platforms,Stage.collideBlockRight);
      var hitPlatform16 = game.physics.arcade.collide(emitter5, robot, Characters.rColliding);


      var hitPlatform17 = game.physics.arcade.collide(emitter1, emitter2);
      var hitPlatform18 = game.physics.arcade.collide(emitter3, emitter4);
      var hitPlatform19 = game.physics.arcade.collide(emitter1, emitter5);
  
      Characters.moveCharacters();
      Stage.setStage();
  
      if(stageSelector == 1){
        emitter3.on = false;
        emitter4.on = false;
        emitter5.on = false;
        emitter1.y  = sickBoy.body.y;
        emitter2.y  = peresozin.body.y;
        var hitPlatform2 = game.physics.arcade.collide(peresozin, platforms);
        var hitPlatform3 = game.physics.arcade.collide(sickBoy, platforms);
      }
      if(stageSelector == 2){
        emitter1.on = true;
        emitter2.on = true;
        emitter3.on = true;
        emitter4.on = true;
        emitter5.on = false;
        emitter1.y  = shiquilin.body.y;
        emitter2.y  = vaguinho.body.y;
        emitter3.y = shiquilin.body.y;
        emitter4.y = vaguinho.body.y;
        var hitPlatform4 = game.physics.arcade.collide(shiquilin, platforms);
        var hitPlatform5 = game.physics.arcade.collide(vaguinho, platforms);
      }
       if(stageSelector == 3){
          emitter1.on = true;
          emitter2.on = true;
          emitter3.on = true;
          emitter4.on = true;
          emitter5.on = true;
          
          emitter1.x  = game.world.width-63;
          emitter3.x  = game.world.width-63;
       
          emitter1.y  = bigBoss.body.y;
          emitter2.y  = bigBoss.body.y;
          emitter3.y  = bigBoss.body.y;
          emitter4.y  = bigBoss.body.y;
          emitter5.y  = bigBoss.body.y;

          var hitPlatform6 = game.physics.arcade.collide(bigBoss, platforms);
      }    
    }
    function render() {
        //game.debug.text(game.time.suggestedFps, 32, 32);
    }
    
    return {
     preload:preload,
     create:create,
     update:update,
     render:render
      
    };

})(Texto, BarLife, Characters, Emittor, Enemies, Stage,CMenu);
