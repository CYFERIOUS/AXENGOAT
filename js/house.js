var Home = (function () {

    var house;
      var preloadingHouse = function () {
        game.load.image('casita1', 'images/casita.png');
    };

    
    var addHouse = function(){
      house = game.add.sprite(game.world.centerX-330,373-32, 'casita1');
      return house;

    };

    return {
     setHouse:preloadingHouse,
     addHome: addHouse,
    
    };

})();