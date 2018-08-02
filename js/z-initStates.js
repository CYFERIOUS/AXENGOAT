
  var Init = {};
  Init.Main = function(game){};
  Init.Main.prototype = {

    preload: function(){
      StageManager.preload();
    },
    create: function(){
      StageManager.addSplashIntro();
      game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
      game.input.onDown.add(gofull, this);
    },
    update: function(){
      
    },
    render: function(){
       
    }
  }

  

   

  var Story = {};
  Story.Main = function(game){};
  Story.Main.prototype = {

    preload: function(){
      StageManager.preload();
    },
    create: function(){
       StageManager.addSplashComic();

   

    },
    update: function(){
      
    },
    render: function(){
       
    }
  }

  var Menu = {};
  Menu.Main = function(game){};
  Menu.Main.prototype = {

    preload: function(){
      CMenu.preloadMenu();
    },
    create: function(){
      CMenu.createMenu();
    },
    update: function(){
      CMenu.instructions();
      CMenu.overDad();
    },
    render: function(){
       
    }
  }

  var Play = {};
  Play.Main = function(game){};
  Play.Main.prototype = {

    preload: function(){
      Zgame.preload();
    },
    create: function(){
      Zgame.create();
    },
    update: function(){
       Zgame.update();
    },
    render: function(){
       Zgame.render();
    }
  }

  var Loose = {};
  Loose.Main = function(game){};
  Loose.Main.prototype = {

    preload: function(){
       StageManager.preload();
    },
    create: function(){
      StageManager.addSplashLoose();
      
      
    },
    update: function(){
       
    },
    render: function(){
       
    }
  }

  var Win = {};
  Win.Main = function(game){};
  Win.Main.prototype = {

    preload: function(){
      StageManager.preload();
    },
    create: function(){
      StageManager.addSplashWin();
      
    },
    update: function(){
       
    },
    render: function(){
       
    }
  }

  var Credit = {};
  Credit.Main = function(game){};
  Credit.Main.prototype = {

    preload: function(){
     
    },
    create: function(){
          StageManager.addSplashCredits();
     
    },
    update: function(){
      
    },
    render: function(){
       
    }
  }


function gofull() {
    if (game.scale.isFullScreen){
        game.scale.startFullScreen(true);

    }
    else{
        game.scale.startFullScreen(false);
    }
  } 
   