var game = new Phaser.Game(1200, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

  var jumpButton;
  var jumpTimer = 0;
  var cursors;
  var platforms;
  var emitter;
  var particula;
  var ground;
  var blockContainerRight = new Array(); 
  var blockContainerLeft = new Array();
  var ledge1, ledge2, ledge3, ledge4;
  var emmiter1pos;
  var speed, robot, peresozin, sickBoy;

 function preload() {

    game.physics.startSystem(Phaser.Physics.P2JS);
    game.time.desiredFps = 30;  

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

    Stage.groupPlatforms();
    Stage.createPlatforms(14, game.world.width);
    Stage.createPlatforms(14, 0);
    Stage.houseAdder();
    Emittor.emitor();

}




function update() {
  
  var hitPlatform = game.physics.arcade.collide(robot, platforms);
  var hitPlatform2 = game.physics.arcade.collide(peresozin, platforms);
  var hitPlatform3 = game.physics.arcade.collide(sickBoy, platforms);
  var hitPlatform4 = game.physics.arcade.collide(emitter, platforms,Stage.collideBlock);
  var hitPlatform6 = game.physics.arcade.collide(emitter, robot);

  if (hitPlatform6 == true){
       robot.body.velocity.setTo(0, 0);
       emitter.bounce.setTo(1, 1);  
  }

    Characters.moveCharacters();
    emitter.y  = sickBoy.body.y; 
   

}

function render() {
    //game.debug.spriteInfo(s, 20, 32);
     game.debug.text(game.time.suggestedFps, 32, 32);
}
 

$( document ).ready(function() {
    var main = function(){
        render();
        update();
    }
});

  


