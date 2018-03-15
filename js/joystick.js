var Joystick = (function (Characters,Device) {

    var inputJ = function(){
        Device.setInput(1);
    }
    var jMira = function(){
        mira =game.add.sprite(game.world.centerX,200,"aim");
         game.physics.arcade.enable(mira);
         mira.body.collideWorldBounds = true;
         mira.alpha = 0;
         
       $("#body").css( 'cursor', 'none' );
    };
  
    var snipeJ = function(){
      this.vel=10;
   
      if (pad1.connected){
            mira.alpha = 1;
            var rightStickX = pad1.axis(Phaser.Gamepad.PS3XC_STICK_RIGHT_X);
            var rightStickY = pad1.axis(Phaser.Gamepad.AXIS_5);
            if (rightStickX)
            {
               mira.x += rightStickX * this.vel;
            }
            if (rightStickY)
            {
                mira.y += rightStickY * this.vel;
            }
      }  
    };

    var movementsJoystick = function () {
      Characters.moveRobot(false,false,false,false,false,true);
      
      if ((pad1.isDown(Phaser.Gamepad.PS3XC_DPAD_LEFT) < -0.1) || (pad1.axis(Phaser.Gamepad.PS3XC_STICK_LEFT_X) < -0.1)) {  
        Characters.moveRobot(true,false,false,false,false,false);
      }
      else if ((pad1.isDown(Phaser.Gamepad.PS3XC_DPAD_RIGHT)  > 0.1) || (pad1.axis(Phaser.Gamepad.PS3XC_STICK_LEFT_X) > 0.1)){
        Characters.moveRobot(false,true,false,false,false,false); 
      }
      if (pad1.isDown(Phaser.Gamepad.PS3XC_L1)){
         Characters.moveRobot(false,false,true,false,false,false);
      }

      if ((pad1.justPressed(Phaser.Gamepad.PS3XC_R1))){
          Characters.moveRobot(false,false,false,true,mira.x,false);
      }
    };

    return {
      controlJ:inputJ,
      addJMira:jMira,
      aimJ:snipeJ,
      cbControls:movementsJoystick
    };

})(Characters,Device);