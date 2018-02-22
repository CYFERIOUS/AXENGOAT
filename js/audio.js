  var Audios = (function () {

   var music;
   var hithouse;
   var hitrobot;
   var hitPlatform;
   var hitdog;
   var turbo;
    
    var preload = function () {
        game.load.audio('boden', ['../sounds/hitHouse.mp3', '../sounds/hitHouse.ogg']);
        game.load.audio('mistery', ['../sounds/hitMistery.mp3', '../sounds/hitMistery.ogg']);
        game.load.audio('stage', ['../sounds/audio3.mp3', '../sounds/audio3.ogg']);
        game.load.audio('robot', ['../sounds/pop.mp3', '../sounds/pop.ogg']);
        game.load.audio('platform', ['../sounds/plats.mp3', '../sounds/plats.ogg']);
        game.load.audio('gaspar', ['../sounds/doggy.mp3', '../sounds/doggy.ogg']);
        game.load.audio('turbo', ['../sounds/turbo.mp3', '../sounds/turbo.ogg']);


    };



    var audioStage = function () {
     
      //music = new Sound(game, "stage", 10, true);

    };

    hitHouse = function(){
      hithouse = game.sound.play('boden');
      //hithouse = game.sound.play('mistery');
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


