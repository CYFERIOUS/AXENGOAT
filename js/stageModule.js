var ModuleTest = (function(){

   var stage;
    var canvas = document.getElementById('demoCanvas');

  function init(){
    alert("nene");
     stage = new createjs.Stage("demoCanvas");
      square = new createjs.Shape();
    square.graphics.beginFill("DeepSkyBlue").drawRoundRect(0, 0, 512, 512, 0);
    square.x =  (1200-512)/2;
    square.y =  (800-512);
    square.name = "square";
    stage.addChild(square);
 var casita = new createjs.Bitmap("../images/casita.png");
        casita.x = square.x;
        casita.y = square.y;
        stage.addChild(casita);

    fondo = new createjs.Bitmap("../images/landScape.png");
    fondo.x = 200;
    fondo.y = 800-256;
    stage.addChild(fondo); 
  }
  var publicMethod = function(){
    init();
    stage.update();
  }
  return{
      publicMethod:publicMethod
  }

})();



  


