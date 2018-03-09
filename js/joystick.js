var Joystick = (function (Characters,Device) {

  var inputJ = function(){
      Device.setInput(1);
  }
 
  
   var snipeJ = function(){

      $("#body").css( 'cursor', 'none' );
      mira =game.add.sprite(game.world.centerX,200,"aim");
          if (pad1.connected){
        game.input.gamepad.pad1.addCallbacks(this, {
          onConnect: function(padIndex){
              console.log('Last activity all pads: Connected with pad index '+padIndex);
          },
          onDisconnect: function(padIndex){
              console.log('Last activity all pads: Disconnected with pad index '+padIndex);
          },
          onDown: function(buttonCode, value, padIndex){
              console.log('Last activity all pads: Pad index '+padIndex+' buttonCode: '+buttonCode+' | value: '+value);
              
          },
          onUp: function(buttonCode, value, padIndex){
             console.log('Last activity all pads: Pad index '+padIndex+' buttonCode: '+buttonCode+' | value: '+value);
          },
          onAxis: function(pad, axis, value) {

            console.log('Last activity all pads: Pad index '+pad.index+': axis '+axis+': '+value);

             if(axis == 0 && value ==1){
                Characters.moveRobot(false,true,false,false,false,false);   
             }

             if(axis == 0 && value ==-1){
                Characters.moveRobot(true,false,false,false,false,false);
             }
            
              
          },
          onFloat: function(buttonCode, value, padIndex) {
              console.log('Last activity all pads: Pad index '+padIndex+' buttonCode: '+buttonCode+' | value (float): '+value);
          },
        });
      }
       
    };

    var movementsJoystick = function () {
      Characters.moveRobot(false,false,false,false,false,true);
      
      if ((pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) < -0.1) || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)) {  
        Characters.moveRobot(true,false,false,false,false,false);
      }
      else if ((pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT)  > 0.1) || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)){
        Characters.moveRobot(false,true,false,false,false,false); 
      }
      if (pad1.justPressed(Phaser.Gamepad.XBOX360_A) && game.time.now > jumpTimer){
         Characters.moveRobot(false,false,true,false,false,false);
      }

      if ((pad1.justPressed(Phaser.Gamepad.XBOX360_B))){
          Characters.moveRobot(false,false,false,true,game.input.mousePointer.x,false);
      }
      // if (game.input.mousePointer.isUp){
      //    this.robot.body.velocity.x = 0;
      // }

    };

    return {
      controlJ:inputJ,
      aimJ:snipeJ,
      cbControls:  movementsJoystick
    };

})(Characters,Device);