var Joystick = (function (Characters,Device) {

  var inputJ = function(){
      Device.setInput(1);
  }
    var jMira = function(){
        mira =game.add.sprite(game.world.centerX,200,"aim");
       $("#body").css( 'cursor', 'none' );
    
    };
  
    var snipeJ = function(){
      this.vel=10;
     
      if (pad1.connected){
        var rightStickX = pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
        var rightStickY = pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);

        console.log( "rightStickY" +  rightStickY);

        if (rightStickX)
        {
           mira.x += rightStickX * this.vel;
        }

        if (rightStickY)
        {
            mira.y += rightStickY * this.vel;
        }

        
    };
      

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
              if(axis == 5 && value == 1){
                  mira.y += 50;
              }else if(axis == 5 && value == -1){
                  mira.y -= 50;
              }
          },
          onFloat: function(buttonCode, value, padIndex) {
              console.log('Last activity all pads: Pad index '+padIndex+' buttonCode: '+buttonCode+' | value (float): '+value);
          },
        });

      
    };

    var movementsJoystick = function () {
      Characters.moveRobot(false,false,false,false,false,true);
      
      if ((pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) < -0.1) || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)) {  
        Characters.moveRobot(true,false,false,false,false,false);
      }
      else if ((pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT)  > 0.1) || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)){
        Characters.moveRobot(false,true,false,false,false,false); 
      }
      if (pad1.isDown(Phaser.Gamepad.XBOX360_A)){
         Characters.moveRobot(false,false,true,false,false,false);
      }

      if ((pad1.isDown(Phaser.Gamepad.XBOX360_B))){
          Characters.moveRobot(false,false,false,true,game.input.mousePointer.x,false);
      }
      // if (game.input.mousePointer.isUp){
      //    this.robot.body.velocity.x = 0;
      // }

    };

    return {
      controlJ:inputJ,
      addJMira:jMira,
      aimJ:snipeJ,
      cbControls:movementsJoystick
    };

})(Characters,Device);