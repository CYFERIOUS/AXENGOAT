var Stage = (function (Emittor,BarLife,Texto,Enemies,Platform,Home) {

  
  var home;

   var initStages = function(){
      home = Home.addHome();
      emitter1 = Emittor.emitor(100,100,300,60,"izquierda1",0.5);
      emitter2 = Emittor.emitor(game.world.width-63,100,(300*(-1)),60,"derecha1",0.5);
      emitter3 = Emittor.emitor(100,100,300,30,"izquierda2",0.5);
      emitter4 = Emittor.emitor(game.world.width-63,100,(400*(-1)),30,"derecha2",0.5);
      emitter5 = Emittor.emitor(game.world.width-63,100,(500*(-1)),10,"derecha3",0.5);
      robot = Characters.setMainCharacter(CMenu.returnChar());
      Platform.groupPlatforms();
      BarLife.lifeBar(game.world.width);
   }


   var loadStage1 = function(){
      
      peresozin = Enemies.addPeresozin();
      sickBoy = Enemies.addSickBoy();
      Platform.createPlatforms(14, game.world.width,80);
      Platform.createPlatforms(14, 0,80);
      BarLife.initLife();
     
  }


    var loadStage2 = function(){
      
          BarLife.initLife(); 
          Platform.createPlatforms(14,1200,80);
          Platform.createPlatforms(14,0,80);
          vaguinho = Enemies.addVaguinho();
          shiquilin = Enemies.addShiquilin();
     
    }

     var loadStage3 = function(){
          BarLife.initLife();  
          Platform.createPlatforms(14,1200,200);
          bigBoss = Enemies.addBigBoss();
          home.x = -100;
          
          
    }

    var setStage = function(stage){

      if(stage == 1){
        loadStage1();
      }
      if(stage == 2){
        loadStage2();
      }
      if(stage == 3){
        loadStage3();
      }

    }

    return {
      initStages:initStages,
      loadStage: setStage,
    };

})(Emittor, BarLife, Texto,Enemies,Platform,Home);