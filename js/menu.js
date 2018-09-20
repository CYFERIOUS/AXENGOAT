  var CMenu = (function (Texto) {

    var menuChar1,menuChar1over, menuChar2, menuChar3, menuChar4, backstage;
    var instructionsK, instructionsJ, instructionsVJ ;
    var robot = null;
   
    var preloadInstructions = function(){
        game.load.image('background', 'images/backMenu.png');
        game.load.image('instructionsK', 'images/instructionsK.png');
         game.load.image('instructionsJ', 'images/instructionsJ.png');
          game.load.image('instructionsVJ', 'images/instructionsVJ.png');
       
    }

    var preload = function () {
        game.load.image('dad', 'images/dad.png');
        game.load.image('dadOver', 'images/dadOver.png');
        game.load.image('mom', 'images/mom.png');
        game.load.image('momOver', 'images/momOver.png');
        game.load.image('son', 'images/son.png');
        game.load.image('sonOver', 'images/sonOver.png');
        game.load.image('daughter', 'images/daughter.png');
        game.load.image('daughterOver', 'images/daughterOver.png');


        preloadInstructions();

    };



    var create = function () {

   // bmpText = game.add.bitmapText(10, 100, 'carrier_command','Drag me around !',34);

     backstage =game.add.sprite(0,0,"background");
      
      menuChar1over =game.add.sprite(60,15,"dadOver");
      menuChar1 =game.add.sprite(130,150,"dad");
      menuChar2over =game.add.sprite(350,15,"momOver");
      menuChar2 =game.add.sprite(380,150,"mom");
      menuChar3over =game.add.sprite(550,15,"sonOver");
      menuChar3 =game.add.sprite(620,150,"son");
      menuChar4over =game.add.sprite(830,15,"daughterOver");
      menuChar4 =game.add.sprite(855,150,"daughter");
     
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
      game.state.start("play",true,true);
  
    };

    var returnChar = function(){
      return robot;
    }

    var overChar = function (){
      
      
        if (menuChar1.input.pointerOver())
        {
          menuChar1.alpha = 0;
          menuChar1over.alpha = 1;
        }
        else
        {
          menuChar1.alpha = 1;
          menuChar1over.alpha = 0;
        }

        if (menuChar2.input.pointerOver())
        {
          menuChar2.alpha = 0;
          menuChar2over.alpha = 1;
        }
        else
        {
          menuChar2.alpha = 1;
          menuChar2over.alpha = 0;
        }

        if (menuChar3.input.pointerOver())
        {
          menuChar3.alpha = 0;
          menuChar3over.alpha = 1;
        }
        else
        {
          menuChar3.alpha = 1;
          menuChar3over.alpha = 0;
        }

        if (menuChar4.input.pointerOver())
        {
          menuChar4.alpha = 0;
          menuChar4over.alpha = 1;
        }
        else
        {
          menuChar4.alpha = 1;
          menuChar4over.alpha = 0;
        }
    };

    var validateInput = function(){

      var gamePad = game.input.gamepad.start();
      var pad1 = game.input.gamepad.pad1;
      var centroid = game.world.centerX - 250;
      if (game.input.gamepad.supported && game.input.gamepad.active && pad1.connected){
       vj = false;
       instructionsJ =game.add.sprite(centroid,540,"instructionsJ");
      }else if(vj){
        instructionsVJ =game.add.sprite(centroid,540,"instructionsVJ");
      }else{
        vj = false;
        instructionsK =game.add.sprite(centroid,540,"instructionsK");
      }
    }

  
    return {
      preloadMenu: preload,
      createMenu: create,
      returnChar: returnChar,
      overDad:overChar,
      instructions:validateInput
    };

  })(Texto);


