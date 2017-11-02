  var CMenu = (function () {

    var menuChar1, menuChar2, menuChar3, menuChar4;
    var robot = null;
    
    var preloadInstructions = function(){
        game.load.image('move', 'images/moveInstruction.png');
        game.load.image('jump', 'images/jumpInstruction.png');
        game.load.image('turbo', 'images/turboInstruction.png');
    }

    var preload = function () {
        game.load.image('dad', 'images/dad.png');
        game.load.image('mom', 'images/mom.png');
        game.load.image('son', 'images/son.png');
        game.load.image('daughter', 'images/daughter.png');

        preloadInstructions();

    };



    var create = function () {
    
      menuChar1 =game.add.sprite(20,130,"dad");
      menuChar2 =game.add.sprite(320,130,"mom");
      menuChar3 =game.add.sprite(620,130,"son");
      menuChar4 =game.add.sprite(920,130,"daughter");

      moveInstructions =game.add.sprite(270,460,"move");
      jumpInstructions =game.add.sprite(580,460,"jump");
      turboInstructions =game.add.sprite(875,460,"turbo");
      
     
      menuChar1.inputEnabled = true;
      menuChar2.inputEnabled = true;
      menuChar3.inputEnabled = true;
      menuChar4.inputEnabled = true;

      menuChar1.name = 'dad';
      menuChar2.name = 'mom';
      menuChar3.name = 'son';
      menuChar4.name = 'daughter';
     
      
      menuChar1.events.onInputDown.add(listener, this);
      menuChar2.events.onInputDown.add(listener, this);
      menuChar3.events.onInputDown.add(listener, this);
      menuChar4.events.onInputDown.add(listener, this);
    
    };

    var  listener = function(obj){
      robot =  obj.name;
      setTimeout(function(){ game.state.start("play"); }, 3000);
  
    };

    var returnChar = function(){
      return robot;
    }

  
    return {
      preloadMenu: preload,
      createMenu: create,
      returnChar: returnChar
    };

  })();


