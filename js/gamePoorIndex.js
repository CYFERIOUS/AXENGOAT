var ModuleGame = (function () {

    var stage, moveRectangle;
    var canvas = document.getElementById('demoCanvas');
    var stage;
    var tile_size = 1;

    var circle, circle2, square;
   
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
    
    circle = new createjs.Shape();
    circle2 = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle2.graphics.beginFill("Black").drawCircle(0, 0, 50);
    circle2.x = 550;
    circle2.y = 450;
    stage.addChild(circle);
    stage.addChild(circle2);
    
     square = new createjs.Shape();
        square.graphics.beginFill("#000").drawRoundRect(300, 400, 400, 300, 0);
        square.x =  200/2;
        square.y =  200/2;
        square.name = "square";
        stage.addChild(square);

        var bitmap = new createjs.Bitmap("../images/crate.jpg");
         stage.addChild(bitmap);

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
   if(leftArrow) circle2.x -= SPEED;
   if(rightArrow) circle2.x += SPEED;
   if(circle2.x <= 400){
  
           circle2.x = 400;
           stage.update();
        }

        if(circle2.x >= 800){

          circle2.x = 800;
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



  


