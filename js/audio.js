  var Audios = (function () {

   var music;
   var hithouse;
    
    var preload = function () {
        game.load.audio('boden', ['../sounds/hitHouse.mp3', '../sounds/hitHouse.ogg']);

    };



    var create = function () {

    //  music = game.sound.play('boden');

    
    };

    hitHouse = function(){
      hithouse = game.sound.play('boden');
    }

    
  
  
    return {
      preloadAudio: preload,
      createMenu: create,
      hitSound:hitHouse
    };

  })();


