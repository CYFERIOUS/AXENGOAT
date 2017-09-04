var ModuleGame = (function () {

  var game = new Phaser.Game(950, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.spritesheet('robot', 'images/robot.png', 80, 111);
    game.load.image('casita', 'images/casita.png');

}

var s;

function create() {

      this.speed=2;
       this.robot=game.add.sprite(game.world.centerX,330,"robot");
       this.robot.anchor.set(0.5,0.5);
       this.robot.animations.add('idle', [0,1,2,3,4,5,6,7,8,9], 12,true);
       this.robot.animations.add('run', [10,11,12,13,14,15,16,17], 12,true);
       this.robot.animations.play('idle');

     var c = game.add.sprite(game.world.centerX-256,210, 'casita');

    //s.animations.add('run');
    //s.animations.play('run', 10, true);

}

function update() {

   if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.robot.x-=this.speed;
        this.robot.play("run");
        this.robot.scale.x=-1;
        if(this.robot.x < 256){
            this.robot.x = 256;
        }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.robot.x+=this.speed;
        this.robot.play("run");
        this.robot.scale.x=1;
        if(this.robot.x > 710){
          this.robot.x = 710;
        }
       
    }else{
      this.robot.play('idle');
    }

}

function render() {
    //game.debug.spriteInfo(s, 20, 32);

}
 
 
   var publicMethod = function () {
      render();
      update();
  };
  
  return {
    publicMethod: publicMethod
  };

})();



var main = function(){
  ModuleGame.publicMethod();
}


  


