var StageManager = (function () {

  var comico;

    var preloadImages = function(){
        game.load.audio('comico', ['sounds/hitHouse.mp3', 'sounds/hitHouse.ogg']);
      game.load.image('intro', 'images/splash-intro.jpg');
      game.load.image('winner', 'images/splash-win.jpg');
      game.load.image('looser', 'images/splash-loose.jpg');
       game.load.image('comic', 'images/comic-V3.jpg');


    };
    var addSplashIntro = function(){
      var intro = game.add.sprite(0, 0, 'intro');
      intro.inputEnabled = true;
      intro.events.onInputDown.add(addSplashComic, this);
    };
    function addSplashComic(){
    
      comico = game.sound.play('comico');
      comico.loopFull(0.6);
      var story = game.add.sprite(0, 0, 'comic');
      story.inputEnabled = true;
      story.events.onInputDown.add(loadMenu, this);

    }
    function loadMenu(){
         game.state.start("menu");
    }
    var addSplashWin = function(){
      var win = game.add.sprite(0, 0, 'winner');
    };
    var addSplashLoose = function(){
      var loose = game.add.sprite(0, 0, 'looser');
    };

    return {
      preload: preloadImages,
      addSplashIntro:addSplashIntro,
      addSplashComic:addSplashComic,
      addSplashWin:addSplashWin,
      addSplashLoose:addSplashLoose
    };

})();

