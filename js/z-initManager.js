var StageManager = (function () {

    var preloadImages = function(){
      game.load.image('intro', 'images/splash-intro.jpg');
    };
    var addSplashIntro = function(){
      var s = game.add.sprite(0, 0, 'intro');
      s.inputEnabled = true;
      s.events.onInputDown.add(loadMenu, this);
    };
    function loadMenu(){
         game.state.start("menu");
    }

    return {
      preload: preloadImages,
      addSplash:addSplashIntro
    };

})();

