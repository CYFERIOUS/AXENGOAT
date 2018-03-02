var Keyboard = (function (Characters,Audios) {

    var inputK = function(){
      cursors = game.input.keyboard.createCursorKeys();
      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    var movementsKeyboard = function () {
       
      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        Characters.moveRobot(true,false,false,false,false,false);
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D)){
        Characters.moveRobot(false,true,false,false,false,false);
      }
      if ((jumpButton.isDown  && game.time.now > jumpTimer)){
        Characters.moveRobot(false,false,true,false,false,false);
      }
      if (game.input.mousePointer.isDown){
        Characters.moveRobot(false,false,false,true,game.input.mousePointer.x,false);       
      }
      if (game.input.mousePointer.isUp){
          Characters.moveRobot(false,false,false,false,false,true);
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