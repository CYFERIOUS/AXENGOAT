var Home = (function () {

    var house;
    var landScape;
      var preloadingHouse = function () {
          game.load.spritesheet('casita', 'images/casita.png', 659, 373,5);
          game.load.image('fondo1', 'images/fondo1.png');
          game.load.image('fondo3', 'images/fondo3.png');

    };

    var addLandscape = function(){
        if(stageSelector == 1 || stageSelector ==2){
         var image = game.add.image(0, 0, 'fondo1');
        }else{
          var image = game.add.image(0, 0, 'fondo3');
        }
    }
    
    var addHouse = function(){
      addLandscape();
      house = game.add.sprite(game.world.centerX-330,373-32, 'casita');
      house.frame = 0;
      return house;

    };

    var changeHouse = function(frame){
      house.frame = frame;
    }

    return {
     setHouse:preloadingHouse,
     addLand: addLandscape,
     addHome: addHouse,
     change: changeHouse,
    };

})();