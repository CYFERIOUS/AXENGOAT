var Home = (function () {

    var house;
      var preloadingHouse = function () {
          game.load.spritesheet('casita', 'images/casita.png', 661, 373,5);
    };

    
    var addHouse = function(){
      house = game.add.sprite(game.world.centerX-330,373-32, 'casita');

      house.frame = 3;
      
      return house;

    };

    return {
     setHouse:preloadingHouse,
     addHome: addHouse,
    
    };

})();