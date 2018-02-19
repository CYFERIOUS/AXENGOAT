  var stageOne, stageTwo, stageThree;
  var jumpButton;
  var jumpTimer = 0;
  var platforms;
  var emitter1, emitter2, emitter3, emitter4, emitter5;
  var ground, house;
  var speed, robot, dog, mira;
  var stageSelector = 1;

   var  loadGlobal = function(){
        Stage.loadStage(stageSelector);
    }
  

var Zgame = (function (Texto, BarLife, Characters, Emittor, Enemies, Platform, CMenu, CollideManager,TimerObject, Home, Stage, Dog) {

    function preload(){
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.time.desiredFps = 30;  
      Emittor.preloading();
      Platform.preloadPlatforms();
      Home.setHouse();
      Characters.createCharacters();
      Enemies.addEnemies();
      Texto.precharge();
      Dog.loadDog();
     
    }
    function create(){

      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      Stage.initStages();
      Characters.mira();
      loadGlobal();
     
      
      Texto.creatingText();
      TimerObject.createTimer();

      //TimerObject.endTimer();
      TimerObject.formatTime();
    }

    function update() {
      
      CollideManager.general();
      Characters.moveCharacters();
      Platform.blockUpdater();
      Dog.moveDog(stageSelector);
      

    

      if(stageSelector == 1){
        Texto.updateC("stage 1");
        Platform.activeEmissionLevel1();
        CollideManager.stageOne();
        emitter1.y  = sickBoy.body.y;
        emitter2.y  = peresozin.body.y;
      }
      if(stageSelector == 2){
        Texto.updateC("stage 2");
        Platform.activeEmissionLevel2();
        CollideManager.stageTwo();
        emitter1.y  = shiquilin.body.y;
        emitter2.y  = vaguinho.body.y;
        emitter3.y = shiquilin.body.y;
        emitter4.y = vaguinho.body.y;
      }
       if(stageSelector == 3){
       
          Texto.updateC("stage 3");
          Platform.activeEmissionLevel3();
          CollideManager.stageThree();
          emitter1.y  = bigBoss.body.y;
          emitter2.y  = bigBoss.body.y;
          emitter3.y  = bigBoss.body.y;
          emitter4.y  = bigBoss.body.y;
          emitter5.y  = bigBoss.body.y;
          
          
      }    
    }
    function render() {
     TimerObject.renderTimer();
     
    }
    
    return {
     preload:preload,
     create:create,
     update:update,
     render:render
      
    };

})(Texto, BarLife, Characters, Emittor, Enemies, Platform,CMenu,CollideManager,TimerObject,Home, Stage,Dog);
