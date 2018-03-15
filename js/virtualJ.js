var VirtualJ = (function (Characters,Device,Joystick) {

  var inputV = function(){
      Device.setInput(2);
  }

   var preloadVJ = function(){

        game.load.atlas('arcade', '../bower_components/vj/examples/assets/virtualjoystick/skins/arcade-joystick.png', '../bower_components/vj/examples/assets/virtualjoystick/skins/arcade-joystick.json');
   }
  

    var createVJ = function(){
        pad = game.plugins.add(Phaser.VirtualJoystick);
      

        stick1 = pad.addStick(120, 600, 200, 'arcade');
        stick2 = pad.addStick(1080, 600, 200, 'arcade');
        //vjPad.stick.alignBottomLeft();

        buttonA = pad.addButton(120, 400, 'arcade', 'button1-up', 'button1-down');
        //vjPad.buttonA.onDown.add(this.pressButtonA, this);

        buttonB = pad.addButton(1080, 400, 'arcade', 'button2-up', 'button2-down');
        //vjPad.buttonB.onDown.add(this.pressButtonB, this);
        

        Joystick.addJMira();
        mira.alpha = 1;
  }
    

    var movementsVJ = function () {
        // this.vel=10;
        // var cursors = game.vjoy.cursors;
        // if (cursors.left) {
        //   mira.x -= this.vel;
        // } else if (cursors.right) {
        //   mira.x +=  this.vel;
        // }
        // if (cursors.up) {
        //   mira.y -= this.vel;
        // } else if (cursors.down) {
        //   mira.y += this.vel;
        // }

    };

    return {
      controlV:inputV,
      preVJimg:preloadVJ,
      addVJ:createVJ,
      vjControls:movementsVJ
    };

})(Characters,Device,Joystick);