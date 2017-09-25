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



function preload() {
    game.load.spritesheet('robot', 'images/papa.png', 80, 111);
    game.load.spritesheet('enemy1', 'images/peresozin.png', 0, 0);
    game.load.spritesheet('enemy2', 'images/sinSalud.png', 0, 0);
    game.load.image('ground', 'images/platform.png');
    
    game.load.image('piso0', 'images/platform.png');
    game.load.image('piso1', 'images/platform.png');
    game.load.image('piso2', 'images/platform.png');

    game.load.image('casita', 'images/casita.png');
    game.load.image('particle', 'images/partucula.png');
    
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.time.desiredFps = 30;
}

function randomNumber(){
  return Math.random();
}


function platformsEnemies(tiles, pos){
    var enemiesFloor = 80;
    var placeX = pos == 0 ? 0 : (pos-enemiesFloor);
    
      for(var i = 0; i<tiles; i++){
        ledge3 = platforms.create( placeX, 200+(35*i), 'ground');
        
        ledge3.width = enemiesFloor;
        ledge3.body.immovable = true;
        if (placeX == 0) {
          ledge3.name = 'pila' + i;
          blockContainerLeft.push(ledge3);
        }else{
          ledge3.name = 'pola' + i;
          blockContainerRight.push(ledge3);
        }
      }
      

}



function createEmitter(){
    emitter = game.add.emitter(100, 100, 1);
    emitter.makeParticles(['particle']);
    emitter.start(false, 20000, 20);
    emitter.setYSpeed(-100, 20);
    emitter.setXSpeed(300, 20);
    game.physics.arcade.enable(emitter);
    emitter.bounce.setTo(0.5, 0.5);
    emitter.setAll("body.collideWorldBounds", true);

}


function create() {

      this.speed=4;
      this.robot=game.add.sprite(game.world.centerX,130,"robot");
      this.robot.anchor.set(0.5,0.5);
      this.robot.animations.add('idle', [0,1,2,3,4,5,6,7,8,9], 12,true);
      this.robot.animations.add('run', [10,11,12,13,14,15,16,17], 12,true);
      this.robot.animations.play('idle');
      game.physics.arcade.enable(this.robot);
      this.robot.body.bounce.y = 0.2;
      this.robot.body.gravity.y = 400;

      this.peresozin=game.add.sprite(game.world.width-80,130,"enemy1");
      this.peresozin.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.peresozin);
      this.peresozin.body.bounce.y = 0.2;
      this.peresozin.body.gravity.y = 400;

      this.sickBoy=game.add.sprite(50,130,"enemy2");
      this.sickBoy.anchor.set(0.5,0.5);
      game.physics.arcade.enable(this.sickBoy);
      this.sickBoy.body.bounce.y = 0.2;
      this.sickBoy.body.gravity.y = 400;

     //var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
     //console.log(randomNumberBetween0and19);
      
      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

      //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 32, 'ground');
    ground.name = "piso0";
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    //ground.scale.setTo(2, 2);
    ground.scale.x = 800;

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    var houseFloor2 = 400;
    ledge2 = platforms.create(game.world.centerX-(houseFloor2/2), 350, 'piso2');
    ledge2.width = houseFloor2;
    ledge2.name = "piso2";
    ledge2.body.immovable = true;


    var houseFloor1 = 650;
    ledge1 = platforms.create(game.world.centerX-(houseFloor1/2), 475, 'piso1');
    ledge1.width = houseFloor1;
    ledge1.name = "piso1";
    ledge1.body.immovable = true;

    platformsEnemies(14, game.world.width);
    platformsEnemies(14, 0);

    
    createEmitter();

    var c = game.add.sprite(game.world.centerX-300,210-32, 'casita');

    


}

function applyGravityRight(numba){
  var iRight = 0;
 
  while(iRight < numba ){
    blockContainerRight[iRight].body.y = ((blockContainerRight[iRight].body.y+2) + blockContainerRight[iRight].height);
    iRight++;
  }
  
  blockContainerRight.splice(numba, 1); 
 }

function applyGravityLeft(numba){
    var iLeft = 0;

    while(iLeft < numba ){
      blockContainerLeft[iLeft].body.y = ((blockContainerLeft[iLeft].body.y+2) + blockContainerLeft[iLeft].height);
      iLeft++;
    }
    
    blockContainerLeft.splice(numba, 1);
}

function destroyParticle(){
   emitter.forEachAlive(function(particle){
      particle.kill();

   });
}



function update() {

  var hitPlatform = game.physics.arcade.collide(this.robot, platforms);
  var hitPlatform2 = game.physics.arcade.collide(this.peresozin, platforms);
  var hitPlatform3 = game.physics.arcade.collide(this.sickBoy, platforms);
  var hitPlatform4 = game.physics.arcade.collide(emitter, platforms,hitBlock);
  var hitPlatform6 = game.physics.arcade.collide(emitter, this.robot);
 
  if (hitPlatform6 == true){
       this.robot.body.velocity.setTo(0, 0);
       emitter.bounce.setTo(1, 1);      
  }
 

   if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.robot.x-=this.speed;
        this.robot.play("run");
        this.robot.scale.x=-1;
       
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.robot.x+=this.speed;
        this.robot.play("run");
        this.robot.scale.x=1;
       
       
    }else{
      this.robot.play('idle');
    }
    if (jumpButton.isDown  && game.time.now > jumpTimer)
    {
        this.robot.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }

}

function hitBlock(emitter,platforms){
  if(platforms.name != "piso0" && platforms.name != "piso1" && platforms.name != "piso2" ){
    
      var str = platforms.name;
      var word = str.slice(0, 4);
      var numba;
      if(word == "pola"){
        numba = blockContainerRight.indexOf(platforms);
        platforms.destroy();
        applyGravityRight(numba);
        destroyParticle();
        
      }
      if(word == "pila"){
        numba = blockContainerLeft.indexOf(platforms);
        platforms.destroy();
        applyGravityLeft(numba);
        destroyParticle();
      }
  
  }
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

  


