

var ModuleGame = (function () {

    var stage;
    var canvas = document.getElementById('demoCanvas');
    var tile_size = 1;

    var circle, circle2, square, papa, fondo;
   
    var leftArrow, rightArrow, upArrow, downArrow = false;
   
    var KEYCODE_LEFT = 37,
    KEYCODE_RIGHT = 39,
    KEYCODE_UP = 38,
    KEYCODE_DOWN = 40.
    RECT_SIZE = 100,
    SPEED = 5; 
  


  var init = function () {
    stage = new createjs.Stage("demoCanvas");
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick);
    
  

    square2 = new createjs.Shape();
    square2.graphics.beginFill("Green").drawRoundRect(0, 0, 128, 512, 0);
    square2.x =  0;
    square2.y =  300;
   
    stage.addChild(square2);

    square3 = new createjs.Shape();
    square3.graphics.beginFill("Green").drawRoundRect(0, 0, 128, 512, 0);
    square3.x =  (1200-128);
    square3.y =  300;
   
    stage.addChild(square3);

    circle = new createjs.Shape();
    circle2 = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle2.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 64);
    circle2.x = 400;
    circle2.y = 400;
    stage.addChild(circle);
    stage.addChild(circle2);

     var data = {
        images: ["../images/papaMove.png"],
        frames: {width:50, height:128},
        animations: {
            stand:0,
            run:[1,5],
            jump:[6,8,"run"]
        }
    };
    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet, "run");

    stage.addChild(animation);


    papa = new createjs.Bitmap("../images/papa.png");
    papa.y = 335;
    stage.addChild(papa);

    peresozo = new createjs.Bitmap("../images/peresozin.png");
    peresozo.y = ((800-512)-64);
    stage.addChild(peresozo);

    sinsalu = new createjs.Bitmap("../images/sinSalud.png");
    sinsalu.x = (1200-128);
    sinsalu.y = ((800-512)-64);
    stage.addChild(sinsalu);
  
   




    //stage.update();
    stage.addEventListener("stagemousemove", handleMouseMove);

    circle2.addEventListener("click", handleMouseDown);
    function handleMouseMove(event) {
        circle.x = stage.mouseX;
        circle.y = stage.mouseY;
        stage.update();
    }

      function handleMouseDown(event) {
        alert("popo");
        stage.update();
    }
    
     window.onkeyup = keyUpHandler;
     window.onkeydown = keyDownHandler;
   
  };

    function keyDownHandler(e)
  {
   switch(e.keyCode)
   {
    case KEYCODE_LEFT:  leftArrow = true; break;
    case KEYCODE_RIGHT: rightArrow = true; break;
    case KEYCODE_UP:    upArrow = true; break;
    case KEYCODE_DOWN:  downArrow = true; break;
   } 
  }
  
  function keyUpHandler(e)
  {
   switch(e.keyCode)
   {
    case KEYCODE_LEFT:  leftArrow = false; break;
    case KEYCODE_RIGHT: rightArrow = false; break;
    case KEYCODE_UP:    upArrow = false; break;
    case KEYCODE_DOWN:  downArrow = false; break;
   } 
  }
 
  
  function move()
  {
   if(leftArrow) { circle2.x -= SPEED; papa.x -= SPEED; }
   if(rightArrow) { circle2.x += SPEED; papa.x += SPEED; }


   if(circle2.x <= 400){
  
           circle2.x = 400;
            papa.x = 400-64;
           stage.update();
        }

        if(circle2.x >= 800){

          circle2.x = 800;
           papa.x = 800-64;
           stage.update();
        }
   //if(upArrow) circle2.y -= SPEED;
   //if(downArrow) circle2.y += SPEED;
  }

 
   var publicMethod = function () {
    init();
  };
  
   function tick(e){
        
        move();
        stage.update();
    }
  return {
    publicMethod: publicMethod
  };

})();



var main = function(){
  ModuleTest.publicMethod();
  ModuleGame.publicMethod();
}


  


