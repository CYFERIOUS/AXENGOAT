
  var Init = {};
  Init.Main = function(game){};
  Init.Main.prototype = {

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
     
    },
    create: function(){
        alert("call2");
     
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

   