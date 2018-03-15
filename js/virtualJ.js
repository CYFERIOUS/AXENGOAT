var VirtualJ = (function (Characters,Device,Joystick) {

  var inputV = function(){
      Device.setInput(2);
  }

  var registerVJ = function(){
        game.vjoy = game.plugins.add(Phaser.Plugin.VJoy);
        game.vjoy.inputEnable(0, 0, 1200, 720);
        Joystick.addJMira();
        mira.alpha = 1;
  }
 

 var preloadVJ = function(){
        game.load.image('vjoy_base', 'images/base.png');
        game.load.image('vjoy_body', 'images/body.png');
        game.load.image('vjoy_cap', 'images/cap.png');
 }
  
    

    var movementsVJ = function () {
        this.vel=10;
        var cursors = game.vjoy.cursors;
        if (cursors.left) {
          mira.x -= this.vel;
        } else if (cursors.right) {
          mira.x +=  this.vel;
        }
        if (cursors.up) {
          mira.y -= this.vel;
        } else if (cursors.down) {
          mira.y += this.vel;
        }

    };

    return {
      controlV:inputV,
      addVJ:registerVJ,
      preVJimg:preloadVJ,
      vjControls:movementsVJ
    };

})(Characters,Device,Joystick);