var Keyboard = (function (Characters,Device) {

    var inputK = function(){
      Device.setInput(0);
    }

    var movementsKeyboard = function () {
       
      if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)) {
       
         Characters.moveRobot("moveLeft");
      }
      else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D)){
       Characters.moveRobot("moveRight");
      }else if (game.input.activePointer.isDown){
        if(game.input.activePointer.duration<=1000){
         Characters.moveRobot("turboEst");
        }
      }else{
        Characters.moveRobot("idleEst");
      }


      if (jumpButton.isDown){
         Characters.moveRobot("jumpEst");
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

})(Characters,Device);