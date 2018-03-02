var Device = (function () {

   var loadInput = function(){
      game.load.spritesheet('controller-indicator', 'images/inputState.png', 32,32);
  };

  var showInput = function(state){
       indicator = game.add.sprite(600,688, 'controller-indicator');
      indicator.animations.frame = state;
  };


    return {
      preloadInput:loadInput,
      setInput: showInput,
    };

})();