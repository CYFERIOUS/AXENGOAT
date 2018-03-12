var VirtualJ = (function (Characters,Device) {

  var inputV = function(){
      Device.setInput(2);
  }

  var registerVJ = function(){

        game.vjoy = game.plugins.add(Phaser.Plugin.VJoy);
        game.vjoy.inputEnable(0, 0, 1200, 720);

  }
 

 var preloadVJ = function(){
        game.load.image('vjoy_base', 'images/base.png');
        game.load.image('vjoy_body', 'images/body.png');
        game.load.image('vjoy_cap', 'images/cap.png');
 }
  
    

    var movementsVJ = function () {
        var cursors = game.vjoy.cursors;
        
        if (cursors.left) {
          game.physics.arcade.moveToXY(robot,10,0,700);
        } else if (cursors.right) {
           game.physics.arcade.moveToXY(robot,-10,0,700);
        }

        if (cursors.up) {
           game.physics.arcade.moveToXY(robot,0,10,700);
        } else if (cursors.down) {
           game.physics.arcade.moveToXY(robot,0,-10,700);
        }

    };

    return {
      controlV:inputV,
      addVJ:registerVJ,
      preVJimg:preloadVJ,
      vjControls:movementsVJ
    };

})(Characters,Device);