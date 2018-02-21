  var Audios = (function () {

   var music;
   var hithouse;
    
    var preload = function () {
        game.load.audio('boden', ['../sounds/hitHouse.mp3', '../sounds/hitHouse.ogg']);
        game.load.audio('mistery', ['../sounds/hitMistery.mp3', '../sounds/hitMistery.ogg']);
        game.load.audio('stage', ['../sounds/audio3.mp3', '../sounds/audio3.ogg']);
    };



    var audioStage = function () {

     music = game.sound.play('stage');
     

music.play();
    
    };

    hitHouse = function(){
      hithouse = game.sound.play('boden');
      //hithouse = game.sound.play('mistery');
    }

    
  
  
    return {
      preloadAudio: preload,
      stageAudio: audioStage,
      hitSound:hitHouse
    };

  })();


