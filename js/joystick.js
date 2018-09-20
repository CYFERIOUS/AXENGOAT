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
              }else{
                mira.y = robot.y-100; 
              }
      }  
    };

   

    var movementsJoystick = function () {
      
      if ((pad1.isDown(Phaser.Gamepad.PS3XC_DPAD_LEFT) < -0.1) || (pad1.axis(Phaser.Gamepad.PS3XC_STICK_LEFT_X) < -0.1)) {     
       Characters.moveRobot("moveLeft");
       mira.x = robot.x-200;
       
      }
      else if ((pad1.isDown(Phaser.Gamepad.PS3XC_DPAD_RIGHT)  > 0.1) || (pad1.axis(Phaser.Gamepad.PS3XC_STICK_LEFT_X) > 0.1)){
       Characters.moveRobot("moveRight");
       mira.x = robot.x+100;
    
      }else{
         Characters.moveRobot("idleEst");
      }
      if (pad1.isDown(Phaser.Gamepad.PS3XC_L1) || pad1.isDown(Phaser.Gamepad.PS3XC_L2) ){
          Characters.moveRobot("jumpEst");
      }

      if  (pad1.justPressed(Phaser.Gamepad.PS3XC_R1) || pad1.justPressed(Phaser.Gamepad.PS3XC_R2)){
          Characters.moveRobot("turboEst");
      }
    };

    return {
      controlJ:inputJ,
      addJMira:jMira,
      aimJ:snipeJ,
      cbControls:movementsJoystick
    };

})(Characters,Device);