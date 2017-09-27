  var Enemies = (function () {


    var preloadImagesCharacters = function () {
  
        game.load.spritesheet('enemy1', 'images/peresozin.png', 0, 0);
        game.load.spritesheet('enemy2', 'images/sinSalud.png', 0, 0);
       
    };

    var peresozin = function () {
      this.peresozin=game.add.sprite(game.world.width-80,130,"enemy1");
      this.peresozin.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.peresozin);
      this.peresozin.body.bounce.y = 0.2;
      this.peresozin.body.gravity.y = 400;
      return this.peresozin;
    };

     var sickBoy = function () {
      this.sickBoy=game.add.sprite(50,130,"enemy2");
      this.sickBoy.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.sickBoy);
      this.sickBoy.body.bounce.y = 0.2;
      this.sickBoy.body.gravity.y = 400;
      return this.sickBoy;
    };
    
    return {
      addEnemies: preloadImagesCharacters,
      addPeresozin: peresozin,
      addSickBoy: sickBoy,
    };

  })();