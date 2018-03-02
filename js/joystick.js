var Joystick = (function (Characters ) {

  var buttonA;
  var buttonB;
  var buttonX;
  var buttonY;

  var inputJ = function(){
      gamePad = game.input.gamepad.start();
      pad1 = game.input.gamepad.pad1;
      Joystick.setInput(0);
  }
 
  var loadInput = function(){
      game.load.spritesheet('controller-indicator', 'images/inputState.png', 32,32);
  };

  var showInput = function(state){
       indicator = game.add.sprite(600,688, 'controller-indicator');
      indicator.animations.frame = state;
  };



  var callbackWay = function(){
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
          },
          onFloat: function(buttonCode, value, padIndex) {
              console.log('Last activity all pads: Pad index '+padIndex+' buttonCode: '+buttonCode+' | value (float): '+value);
          }
        });
      }
  };
   var snipeJ = function(){

      $("#body").css( 'cursor', 'none' );
      mira =game.add.sprite(game.world.centerX,200,"aim");
       
       

    };

    var movementsJoystick = function () {

      if ((pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) < -0.1) || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)) {
        
      
      }
      else if ((pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT)  > 0.1) || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)){
       


      }
      if (pad1.justPressed(Phaser.Gamepad.XBOX360_A)  && game.time.now > jumpTimer){
 
      }
      // if ((pad1.justPressed(Phaser.Gamepad.XBOX360_B))){
      //   //game.physics.arcade.moveToPointer(this.robot, 700);
      //   this.robot.animations.play("turbo");
      //   Audios.turboAdd();
         
      // }
      // if (game.input.mousePointer.isUp){
      //    this.robot.body.velocity.x = 0;
      // }

      snipeJ();

    };

    return {
      controlJ:inputJ,
      preloadInput:loadInput,
      setInput: showInput,
      cbControls: callbackWay
    };

})(Characters);