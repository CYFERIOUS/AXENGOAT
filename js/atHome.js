var Home = (function () {

    var house;
    var landScape;
      var preloadingHouse = function () {
          game.load.spritesheet('casita', 'images/casita.png', 659, 373,5);
          game.load.spritesheet('bckGrd', 'images/background.png', 1200, 719,2);
      

    };

    var addLandscape = function(){
        image = game.add.sprite(0,0, 'bckGrd');
        image.frame = 0;
       
      
         
    }
    
    var addHouse = function(){
      
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