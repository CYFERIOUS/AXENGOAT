var Joystick = (function (Characters,Device) {

  var rightStickX;
  var rightStickY;
  var vel=10;

    var inputJ = function(){
        Device.setInput(1);
    }
    var jMira = function(){
         mira =game.add.sprite(robot.x+100,robot.y,"aim");
         game.physics.arcade.enable(mira);
         mira.body.collideWorldBounds = true;
         mira.alpha = 0;
         
       $("#body").css( 'cursor', 'none' );
    };
  
    var snipeJ = function(){
     
   
      if (pad1.connected){
            mira.alpha = 1;
            rightStickX = pad1.axis(Phaser.Gamepad.PS3XC_STICK_RIGHT_X);
            rightStickY = pad1.axis(Phaser.Gamepad.AXIS_5);
           
              if (rightStickX){
               mira.x += rightStickX * vel;
              }
              if (rightStickY){
                mira.y += rightStickY * vel;
              }
            
      }  
    };

    var movementsJoystick = function () {
      Characters.moveRobot(false,false,false,false,false,true);
      

      if(rightStickX == false || rightStickY==false){
        mira.y = robot.y-100; 
      }
     
      if ((pad1.isDown(Phaser.Gamepad.PS3XC_DPAD_LEFT) < -0.1) || (pad1.axis(Phaser.Gamepad.PS3XC_STICK_LEFT_X) < -0.1)) {  
        Characters.moveRobot(true,false,false,false,false,false);
        if(rightStickX == false || rightStickY==false){
          mira.x = robot.x-200;
        }else{
          mira.x += rightStickX * vel;
        }
      }
      else if ((pad1.isDown(Phaser.Gamepad.PS3XC_DPAD_RIGHT)  > 0.1) || (pad1.axis(Phaser.Gamepad.PS3XC_STICK_LEFT_X) > 0.1)){
        Characters.moveRobot(false,true,false,false,false,false);
        if(rightStickX == false || rightStickY==false){
          mira.x = robot.x+100;
        }else{
           mira.y += rightStickY * vel;
        }

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