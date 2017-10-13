var game = new Phaser.Game(1200, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

  var jumpButton;
  var jumpTimer = 0;
  var cursors;
  var platforms;
  var emitter1, emitter2;
  var particula;
  var ground;
  var blockContainerRight = new Array(); 
  var blockContainerLeft = new Array();
  var ledge1, ledge2, ledge3, ledge4;
  var speed, robot, peresozin, sickBoy;
  var houseLife;
  var stageSelector = 1;
  var vaguinho;
  var shiquilin;
  var bigBoss;
  


 function preload() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.time.desiredFps = 30;  
    Emittor.preloading();
    Stage.preloadPlatforms();
    Stage.setHouse();
    Characters.createCharacters();
    Enemies.addEnemies();
    Texto.precharge();
    
}



function create() {

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    HomeLevel("casita1");
    robot = Characters.setMainCharacter();
    peresozin = Enemies.addPeresozin();
    sickBoy = Enemies.addSickBoy();
    emitter1 = Emittor.emitor(100,100,300,"izquierda",0.5);
    emitter2 = Emittor.emitor(game.world.width-63,100,-300,"derecha",0.5);
    Stage.groupPlatforms();
    Stage.createPlatforms(14, game.world.width);
    Stage.createPlatforms(14, 0);
    BarLife.lifeBar(game.world.width);
    BarLife.initLife();
    Texto.creatingText();
}


function update() {

  
  var hitPlatform = game.physics.arcade.collide(robot, platforms);
  var hitPlatform2 = game.physics.arcade.collide(peresozin, platforms);
  var hitPlatform3 = game.physics.arcade.collide(sickBoy, platforms);
  var hitPlatform4 = game.physics.arcade.collide(shiquilin, platforms);
  var hitPlatform5 = game.physics.arcade.collide(vaguinho, platforms);
  var hitPlatform6 = game.physics.arcade.collide(bigBoss, platforms);
  var hitPlatform7 = game.physics.arcade.collide(emitter1, platforms,Stage.collideBlockLeft);
  var hitPlatform8 = game.physics.arcade.collide(emitter2, platforms,Stage.collideBlockRight);
  var hitPlatform9 = game.physics.arcade.collide(emitter1, robot, Characters.lColliding);
  var hitPlatform10 = game.physics.arcade.collide(emitter2, robot, Characters.rColliding);
  var hitPlatform11 = game.physics.arcade.collide(emitter1, emitter2);
  
  Characters.moveCharacters();
  Stage.setStage();
  
  if(stageSelector == 1){
    emitter1.y  = sickBoy.body.y;
    emitter2.y  = peresozin.body.y;
  }
  if(stageSelector == 2){
    emitter1.y  = shiquilin.body.y;
    emitter2.y  = vaguinho.body.y;
  }
   if(stageSelector == 3){
      emitter2.y  = bigBoss.body.y;
  }

}

function HomeLevel(house){
   Stage.houseAdder(house);
}

function render() {
     //game.debug.text(game.time.suggestedFps, 32, 32);
}
 

$( document ).ready(function() {
    var main = function(){
        render();
        update();
    }
});

  


