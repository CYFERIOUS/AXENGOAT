  var Enemies = (function () {

    var peresozin, sickBoy;
    var vaguinho;
    var shiquilin;
    var bigBoss;
    
    var preloadImagesCharacters = function () {
  
        game.load.spritesheet('enemy1', 'images/peresozin.png', 189, 189);
        game.load.spritesheet('enemy2', 'images/sinSalud.png', 189, 189);
        game.load.spritesheet('enemy3', 'images/vaguinho.png', 0, 0);
        game.load.spritesheet('enemy4', 'images/shiquilin.png', 0, 0);
        game.load.spritesheet('enemy5', 'images/bigboss.png', 0, 0);
       
    };

    var peresozin = function () {
      this.peresozin=game.add.sprite(game.world.width-50,100,"enemy1");
      this.peresozin.animations.add('attack1', [1,2,3,4,5,6,7,8,9,10,11,12], 6,true);
      this.peresozin.animations.play('attack1',[1,2,3,4,5,6,7,8,9,10,11,12],6,true); 
      this.peresozin.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.peresozin);
      this.peresozin.body.bounce.y = 0.2;
      this.peresozin.body.gravity.y = 400;
      return this.peresozin;
    };

     var sickBoy = function () {
      this.sickBoy=game.add.sprite(45,100,"enemy2");
      this.sickBoy.animations.add('attack2', [1,2,3,4,5,6,7,8,9,10,11,12], 6,true);
      this.sickBoy.animations.play('attack2',[1,2,3,4,5,6,7,8,9,10,11,12],6,true); 
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
    var destroyVaguinho = function () {
      this.vaguinho.destroy();
    };

     var destroyShiquilin = function () {
       this.shiquilin.destroy();
    };

    var bigBoss = function () {
      this.bigBoss=game.add.sprite(game.world.width-80,130,"enemy5");
      this.bigBoss.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.bigBoss);
      this.bigBoss.body.bounce.y = 0.2;
      this.bigBoss.body.gravity.y = 400;
      return this.bigBoss;
    };
    var killEnemies = function(stage){
      if(stage == 2){
        destroyPeresozin();
        destroySickBoy();
      }
      if(stage == 3){
        destroyVaguinho();
        destroyShiquilin();
      }

    }
    return {
      addEnemies: preloadImagesCharacters,
      addPeresozin: peresozin,
      addSickBoy: sickBoy,
      addVaguinho: vaguinho,
      addShiquilin: shiquilin,
      addBigBoss: bigBoss,
      enemyKiller: killEnemies
    };

  })();