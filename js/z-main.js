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

 function preload() {

    game.physics.startSystem(Phaser.Physics.P2JS);
    game.time.desiredFps = 30;  
    Emittor.preloading();
    Stage.preloadPlatforms();
    Stage.setHouse();
    Characters.createCharacters();
    Enemies.addEnemies();
    
}


function create() {

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    robot = Characters.setMainCharacter();
    peresozin = Enemies.addPeresozin();
    sickBoy = Enemies.addSickBoy();
    emitter1 = Emittor.emitor(100,100,300,"izquierda");
    emitter2 = Emittor.emitor(game.world.width-63,100,-300,"derecha");
    Stage.groupPlatforms();
    Stage.createPlatforms(14, game.world.width);
    Stage.createPlatforms(14, 0);
    Stage.houseAdder();
    

}


function update() {  
  var hitPlatform = game.physics.arcade.collide(robot, platforms);
  var hitPlatform2 = game.physics.arcade.collide(peresozin, platforms);
  var hitPlatform3 = game.physics.arcade.collide(sickBoy, platforms);
  var hitPlatform4 = game.physics.arcade.collide(emitter1, platforms,Stage.collideBlockLeft);
  var hitPlatform5 = game.physics.arcade.collide(emitter2, platforms,Stage.collideBlockRight);
  var hitPlatform6 = game.physics.arcade.collide(emitter1, robot);
  var hitPlatform7 = game.physics.arcade.collide(emitter2, robot);

  if (hitPlatform6 == true){
       robot.body.velocity.setTo(0, 0);
       emitter2.bounce.setTo(1, 1);  
  }
  if (hitPlatform7 == true){
       robot.body.velocity.setTo(0, 0);
       emitter2.bounce.setTo(1, 1);  
  }

  Characters.moveCharacters();
  emitter1.y  = sickBoy.body.y;
  emitter2.y  = peresozin.body.y;  
}




function render() {
     game.debug.text(game.time.suggestedFps, 32, 32);
}
 

$( document ).ready(function() {
    var main = function(){
        render();
        update();
    }
});

  


