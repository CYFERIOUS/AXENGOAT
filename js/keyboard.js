var Keyboard = (function (Characters,Audios) {

    var inputK = function(){
      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    var movementsKeyboard = function (mico) {
      
      this.speed=10;
      this.robot = mico;
    
      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        this.robot.x-=this.speed;
        this.robot.body.checkCollision.left = true;
        this.robot.play("run");
        this.robot.scale.x=-1;
      
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D)){
        this.robot.x+=this.speed;
        this.robot.body.checkCollision.right = true;
        this.robot.play("run");
        this.robot.scale.x=1;


      }else{
       this.robot.play('idle');
      }
      if ((jumpButton.isDown  && game.time.now > jumpTimer)){
        this.robot.animations.play('run',12,true);
        this.robot.body.velocity.y = -250;
        this.jumpTimer = game.time.now + 750;
      }
      if (game.input.mousePointer.isDown){
        //this.game.physics.arcade.moveToPointer(this.robot, 700);
        this.robot.animations.play("turbo");
        Audios.turboAdd();
        
        if(game.input.mousePointer.x>=600){
            this.robot.scale.x=1;
        }else{
            this.robot.scale.x=-1;
         }
         
      }
      if (game.input.mousePointer.isUp){
         this.robot.body.velocity.x = 0;
      }

    };
    var snipeK = function(){
      $( "#body" ).mousedown(function() {
            $("#body").css( 'cursor', 'url(images/aim.png)50 50, auto' );
        }).mouseup(function(){
            $("#body").css( 'cursor', 'cell' );
      });
    };
  

    return {
      controlK:inputK,
      robotK:movementsKeyboard,
      aimK: snipeK
    };

})(Characters,Audios);