  var Audios = (function () {

   var music;
   var hithouse;
   var hitrobot;
   var hitPlatform;
   var hitdog;
   var turbo;
    
    var preload = function () {
        game.load.audio('hitfloor', ['sounds/hitHouse.mp3', 'sounds/hitHouse.ogg']);
        game.load.audio('stage', ['sounds/audio3.mp3', 'sounds/audio3.ogg']);
        game.load.audio('robot', ['sounds/pop.mp3', 'sounds/pop.ogg']);
        game.load.audio('platform', ['sounds/plats.mp3', 'sounds/plats.ogg']);
        game.load.audio('gaspar', ['sounds/doggy.mp3', 'sounds/doggy.ogg']);
        game.load.audio('turbo', ['sounds/turbo.mp3', 'sounds/turbo.ogg']);
    };



    var audioStage = function () {
  
       music = game.sound.play('stage');
       music.loopFull(0.6);

    };

    hitHouse = function(){
      hithouse = game.sound.play('hitfloor');
    }

    hitRobot = function(){
      hitrobot = game.sound.play('robot');
    }

    hitPlatform = function(){
      hitplatform = game.sound.play('platform');
    }

    addTurbo = function(){
      turbo = game.sound.play('turbo');
    }

     hitDog = function(){
      hitdog = game.sound.play('gaspar');
    }


    return {
      preloadAudio: preload,
      stageAudio: audioStage,
      hitSound:hitHouse,
      robotHit:hitRobot,
      platformHit: hitPlatform,
      dogHit:hitDog,
      turboAdd:addTurbo
    };

  })();


