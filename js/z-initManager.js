var StageManager = (function () {

  var comico;

    var preloadImages = function(){
      game.load.audio('comico', ['sounds/gameComic.mp3', 'sounds/gameComic.ogg']);
      game.load.image('intro', 'images/splash-intro.jpg');
      game.load.image('winner', 'images/splash-win.jpg');
      game.load.image('looser', 'images/splash-loose.jpg');
      game.load.image('comic', 'images/comic-V3.jpg');
      game.load.image('creditos', 'images/creditos.jpg');
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
       setTimeout(function(){
          game.state.start("credit");
      }, 5000);
    };
    var addSplashLoose = function(){
      var loose = game.add.sprite(0, 0, 'looser');
      
      setTimeout(function(){
          game.state.start("menu",true,true);
      }, 5000);
    };
     var addSplashCredits = function(){
      var creditos = game.add.sprite(0, 0, 'creditos');
       game.input.onDown.add(gotoInvestigation, this);
    };

    var gotoInvestigation = function() {
      var url = "http://www.dane.gov.co/index.php/estadisticas-por-tema/pobreza-y-condiciones-de-vida/pobreza-y-desigualdad";
      window.open(url,"_blank");
    }

    return {
      preload: preloadImages,
      addSplashIntro:addSplashIntro,
      addSplashComic:addSplashComic,
      addSplashWin:addSplashWin,
      addSplashLoose:addSplashLoose,
      addSplashCredits:addSplashCredits
    };

})();

