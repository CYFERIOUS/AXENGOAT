var StageManager = (function () {

    var preloadImages = function(){
      game.load.image('intro', 'images/splash-intro.jpg');
      game.load.image('winner', 'images/splash-win.jpg');
      game.load.image('looser', 'images/splash-loose.jpg');
    };
    var addSplashIntro = function(){
      var s = game.add.sprite(0, 0, 'intro');
      s.inputEnabled = true;
      s.events.onInputDown.add(loadMenu, this);
    };
    function loadMenu(){
         game.state.start("menu");
    }
    var addSplashWin = function(){
      var w = game.add.sprite(0, 0, 'winner');
    };
    var addSplashLoose = function(){
      var w = game.add.sprite(0, 0, 'looser');
    };

    return {
      preload: preloadImages,
      addSplashIntro:addSplashIntro,
      addSplashWin:addSplashWin,
      addSplashLoose:addSplashLoose
    };

})();

