var VirtualJ = (function (Characters,Device,Joystick) {

  var pad; 

  var inputVJ = function(){
      Device.setInput(2);
  }

   var preloadVJ = function(){

        game.load.atlas('arcade', 'bower_components/vj/examples/assets/virtualjoystick/skins/arcade-joystick.png', 'bower_components/vj/examples/assets/virtualjoystick/skins/arcade-joystick.json');
   }
  

    var createVJ = function(){

          pad = game.plugins.add(Phaser.VirtualJoystick);
          game.physics.startSystem(Phaser.Physics.ARCADE);
          game.physics.arcade.enable(mira);

          stick1 = pad.addStick(120, 600, 200, 'arcade');
          stick2 = pad.addStick(1080, 600, 200, 'arcade');

          buttonA = pad.addButton(120, 400, 'arcade', 'button1-up', 'button1-down');
          //buttonA.onDown.add(this.pressButtonA, this);

          buttonB = pad.addButton(1080, 400, 'arcade', 'button2-up', 'button2-down');
          //buttonB.onDown.add(pressButtonB);
          
          Joystick.addJMira();
          mira.alpha = 1;
        
        
  }

  var destroyVJ = function(){
      if(pad){
        pad.destroy();
      }
  }



    var movementsVJ = function () {

       var maxSpeed = 600;

       var stickOn = false;

       if (stick1.isDown){
            stickOn = true;
            var moveX = stick1.forceX * maxSpeed;
            mira.y = robot.y-100; 
            if(moveX>=0){
              Characters.moveRobot("moveRight");
              mira.x = robot.x+100;
            }else if(moveX<=0){
              Characters.moveRobot("moveLeft");
              mira.x = robot.x-200;
            }
        }else{
              Characters.moveRobot("idleEst");
              stickOn = false;
        }
        if (stick2.isDown){
            stickOn = true;
            game.physics.arcade.velocityFromRotation(stick2.rotation, stick2.force * maxSpeed, mira.body.velocity);
        }
        else{
            mira.body.velocity.set(0);
        }
        if(buttonA.isDown){
            if(game.input.activePointer.duration<=3000 || stickOn){
              Characters.moveRobot("turboEst");
            }
        }
         if(buttonB.isDown){
            Characters.moveRobot("jumpEst");
        }

    };

    

    return {
      controlVJ:inputVJ,
      preVJimg:preloadVJ,
      addVJ:createVJ,
      vjControls:movementsVJ,
      vjDestroy:destroyVJ
    };

})(Characters,Device,Joystick);