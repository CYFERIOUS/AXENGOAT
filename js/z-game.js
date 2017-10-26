
  var jumpButton;
  var jumpTimer = 0;
  var platforms;
  var emitter1, emitter2, emitter3, emitter4, emitter5 ;
  var ground;
  var speed, robot;
  var stageSelector = 1;
  

var Zgame = (function (Texto, BarLife, Characters, Emittor, Enemies, Stage, CMenu, CollideManager) {

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
      
      CollideManager.general();
      Characters.moveCharacters();
      Stage.setStage();
  
      if(stageSelector == 1){
        Texto.updateC("stage 1");
        Stage.activeEmissionLevel1();
        CollideManager.stageOne();
        emitter1.y  = sickBoy.body.y;
        emitter2.y  = peresozin.body.y;
        
      }
      if(stageSelector == 2){
        Texto.updateC("stage 2");
        Stage.activeEmissionLevel2();
        CollideManager.stageTwo();
        emitter1.y  = shiquilin.body.y;
        emitter2.y  = vaguinho.body.y;
        emitter3.y = shiquilin.body.y;
        emitter4.y = vaguinho.body.y;
        
      }
       if(stageSelector == 3){
          Texto.updateC("stage 3");
          Stage.activeEmissionLevel3();
          CollideManager.stageThree();
          emitter1.x  = game.world.width-63;
          emitter3.x  = game.world.width-63;
          emitter1.y  = bigBoss.body.y;
          emitter2.y  = bigBoss.body.y;
          emitter3.y  = bigBoss.body.y;
          emitter4.y  = bigBoss.body.y;
          emitter5.y  = bigBoss.body.y;

          
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

})(Texto, BarLife, Characters, Emittor, Enemies, Stage,CMenu,CollideManager);
