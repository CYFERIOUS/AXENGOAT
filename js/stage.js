var Stage = (function (Emittor,BarLife,Texto,Enemies,Platform,Home,Dog,Joystick,Keyboard) {

  
  var home;
 
   var initStages = function(){

      home = Home.addHome();
      function radioactivity(emitorA,emitorB,emitorC,emitorD,emitorE){
          emitter1 = Emittor.emitor(100,100,300,30,"izquierda1",0.5,emitorA);
          emitter2 = Emittor.emitor(game.world.width-63,100,-300,30,"derecha1",0.5,emitorB);
          emitter3 = Emittor.emitor(100,100,300,20,"izquierda2",0.5,emitorC);
          emitter4 = Emittor.emitor(game.world.width-63,100,-400,20,"derecha2",0.5,emitorD);
          emitter5 = Emittor.emitor(game.world.width-63,100,-500,10,"derecha3",0.5,emitorE);
      }
      if(stageSelector == 1){
        radioactivity('particles1','particles0','particles0','particles0','particles0');
      }
      if(stageSelector == 2){
        radioactivity('particles3','particles2','particles3','particles2','particles0');
      }
      if(stageSelector == 3){
        radioactivity('particles4','particles4','particles4','particles4','particles4');
      }
      
      robot = Characters.setMainCharacter(CMenu.returnChar());
      dog = Dog.addDog();
      Platform.groupPlatforms();
      BarLife.lifeBar(game.world.width);
      

   }


   var loadStage1 = function(){
      
      peresozin = Enemies.addPeresozin();
      sickBoy = Enemies.addSickBoy();
      Platform.createPlatforms(14, game.world.width,80,'piles1');
      Platform.createPlatforms(14, 0,80,'piles2');
      BarLife.initLife();
    }


    var loadStage2 = function(){
      
          BarLife.initLife(); 
          Platform.createPlatforms(14,1200,80,'piles3');
          Platform.createPlatforms(14,0,80,'piles4');
          vaguinho = Enemies.addVaguinho();
          shiquilin = Enemies.addShiquilin();
       
    }

     var loadStage3 = function(){
          BarLife.initLife(); 
          Platform.createPlatforms(14,1200,200,'piles5');
          bigBoss = Enemies.addBigBoss();
          home.x = -100;
          emitter1.x  = game.world.width-210;
          emitter2.x  = game.world.width-210;
          emitter3.x  = game.world.width-210;
          emitter4.x  = game.world.width-210;
          emitter5.x  = game.world.width-210;
          emitter1.setXSpeed(-800, 10);
          emitter3.setXSpeed(-800,10);
   
          
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

})(Emittor, BarLife, Texto,Enemies,Platform,Home,Dog,Joystick,Keyboard);