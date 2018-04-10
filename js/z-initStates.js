
  var Init = {};
  Init.Main = function(game){};
  Init.Main.prototype = {

    preload: function(){
      StageManager.preload();
    },
    create: function(){
      StageManager.addSplash();
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
     
    },
    create: function(){
        alert("call");
     
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
     
      CMenu.overDad();
    },
    render: function(){
       
    }
  }

  var Preview = {};
  Preview.Main = function(game){};
  Preview.Main.prototype = {

    preload: function(){
     
    },
    create: function(){
        alert("call");
     
    },
    update: function(){
      
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
     
    },
    create: function(){
      alert("all hell break it loose");
      location.reload();
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
     
    },
    create: function(){
      alert("gano");
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
        alert("call3");
     
    },
    update: function(){
      
    },
    render: function(){
       
    }
  }

   