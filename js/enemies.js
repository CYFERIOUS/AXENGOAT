  var Enemies = (function () {


    var preloadImagesCharacters = function () {
  
        game.load.spritesheet('enemy1', 'images/peresozin.png', 0, 0);
        game.load.spritesheet('enemy2', 'images/sinSalud.png', 0, 0);
        game.load.spritesheet('enemy3', 'images/vaguinho.png', 0, 0);
        game.load.spritesheet('enemy4', 'images/shiquilin.png', 0, 0);
        game.load.spritesheet('enemy5', 'images/bigboss.png', 0, 0);
       
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
    var destroyPeresozin = function () {
      this.peresozin.destroy();
    };

     var destroySickBoy = function () {
       this.sickBoy.destroy();
    };

     var vaguinho = function () {
      this.vaguinho=game.add.sprite(game.world.width-80,130,"enemy3");
      this.vaguinho.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.vaguinho);
      this.vaguinho.body.bounce.y = 0.2;
      this.vaguinho.body.gravity.y = 400;
      return this.vaguinho;
    };

     var shiquilin = function () {
      this.shiquilin=game.add.sprite(50,130,"enemy4");
      this.shiquilin.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.shiquilin);
      this.shiquilin.body.bounce.y = 0.2;
      this.shiquilin.body.gravity.y = 400;
      return this.shiquilin;
    };
    
    return {
      addEnemies: preloadImagesCharacters,
      addPeresozin: peresozin,
      addSickBoy: sickBoy,
      removePeresozin: destroyPeresozin,
      removeSickBoy: destroySickBoy,
      addVaguinho: vaguinho,
      addShiquilin: shiquilin,
    };

  })();