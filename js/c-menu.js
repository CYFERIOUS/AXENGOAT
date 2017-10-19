  var CMenu = (function () {

    var menuChar;

    var preload = function () {
        game.load.spritesheet('menu', 'images/choose.png', 80, 111);
    };

    var create = function () {
      0;
      menuChar =game.add.sprite(game.world.centerX,130,"menu");
    
    };

  
    return {
      preloadMenu: preload,
      createMenu: create,
    };

  })();