  var stageOne, stageTwo, stageThree;
  var jumpButton;
  var platforms;
  var emitter1, emitter2, emitter3, emitter4, emitter5;
  var ground, house;
  var speed, robot, dog, mira, pad1, cursors, gamePad, indicator;
  var stageSelector = 1;
  var vj = false;
  var pad,stick1,stick2,buttonL,buttonR;
  var background;

  var scaleRatio = window.devicePixelRatio / 3;


   var  loadGlobal = function(){
        Stage.loadStage(stageSelector);
    };

    // if(window.innerWidth <=1200 || window.innerWidth <= 950 && window.innerHeight <= 768 || window.innerHeight <= 720){
    //   vj = true;
    // }
  

var Zgame = (function (Texto, BarLife, Characters, Emittor, Enemies, Platform, CMenu, CollideManager,TimerObject, Home, Stage, Dog, Audios, Joystick,Keyboard,Device,VirtualJ) {

    function preload(){
      game.physics.startSystem(Phaser.Physics.P2JS);
      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.time.desiredFps = 30;  
      Emittor.preloading();
      Platform.preloadPlatforms();
      Home.setHouse();
      Characters.createCharacters();
      Enemies.addEnemies();
      Texto.precharge();
      Dog.loadDog();
      Audios.preloadAudio();
      Device.preloadInput();
      VirtualJ.preVJimg();
    }


    function create(){

      Stage.initStages();
      loadGlobal();
      Audios.stageAudio();
      Joystick.addJMira();
      
      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      
      gamePad = game.input.gamepad.start();
      pad1 = game.input.gamepad.pad1;

      TimerObject.createTimer();

      //TimerObject.endTimer();
      TimerObject.formatTime();
      if (vj){
        VirtualJ.vjDestroy();
        VirtualJ.addVJ();
      }
      
      
    }


    function update() {


      CollideManager.general();
      
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
          background.frame = 1;
          Texto.updateC("stage 3");
          Platform.activeEmissionLevel3();
          CollideManager.stageThree();
          emitter1.y  = bigBoss.body.y;
          emitter2.y  = bigBoss.body.y;
          emitter3.y  = bigBoss.body.y;
          emitter4.y  = bigBoss.body.y;
          emitter5.y  = bigBoss.body.y;
      }
      
      if (game.input.gamepad.supported && game.input.gamepad.active && pad1.connected){
        Joystick.controlJ();
        Joystick.cbControls();
        Joystick.aimJ();
      }else if (vj){
        VirtualJ.vjControls();
        VirtualJ.controlVJ();
      }else{
        Keyboard.controlK();
        Keyboard.robotK();
        Keyboard.aimK();
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

})(Texto, BarLife, Characters, Emittor, Enemies, Platform,CMenu,CollideManager,TimerObject,Home, Stage, Dog, Audios,Joystick,Keyboard,Device,VirtualJ);
