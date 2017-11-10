var Stage = (function (Emittor,BarLife,Texto,Enemies) {

   
      var blockContainerRight = new Array(); 
      var blockContainerLeft = new Array();
      var ledge1, ledge2, ledge3;
       var house;
    
      
    var preloadImagesPlatforms = function () {
        game.load.image('piso0', 'images/platform.png');
        game.load.image('piso1', 'images/platform.png');
        game.load.image('piso2', 'images/platform.png');
        game.load.image('ground', 'images/platform.png');
    };


    var preloadImagesHouse = function () {
        game.load.image('casita1', 'images/casita.png');
    };

    var buildPlatformsEnemies = function(tiles, pos){
    
    var enemiesFloor = 80;
    
    var placeX = pos == 0 ? 0 : (pos-enemiesFloor);
    
      for(var i = 0; i<tiles; i++){
        ledge3 = platforms.create( placeX, 200+(35*i), 'ground');
        ledge3.width = enemiesFloor;
        ledge3.body.immovable = true;
        ledge3.body.bounce.setTo(0.5, 0.5);
        if (placeX == 0) {
          ledge3.name = 'pila' + i;
          blockContainerLeft.push(ledge3);
        }else{
          ledge3.name = 'pola' + i;
          blockContainerRight.push(ledge3);
        }
      }
    };
    var buildGroup = function(){
      
      platforms = game.add.group();
      // We will enable physics for any object that is created in this group
      platforms.enableBody = true;

      // Here we create the ground.
      var ground = platforms.create(0, game.world.height - 32, 'ground');
      ground.name = "piso0";
      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    //ground.scale.setTo(2, 2);
      ground.scale.x = 800;

    //  This stops it from falling away when you jump on it
      ground.body.immovable = true;

      var houseFloor2 = 400;
      ledge2 = platforms.create(game.world.centerX-(houseFloor2/2), 350, 'piso2');
      ledge2.width = houseFloor2;
      ledge2.name = "piso2";
      ledge2.body.immovable = true;
      ledge2.alpha = 0;

      var houseFloor1 = 650;
      ledge1 = platforms.create(game.world.centerX-(houseFloor1/2), 510, 'piso1');
      ledge1.width = houseFloor1;
      ledge1.name = "piso1";
      ledge1.body.immovable = true;
      ledge1.alpha = 0;
    };

    var  applyGravityRight = function(numba){
      var iRight = 0;
      while(iRight < numba ){
        blockContainerRight[iRight].body.y = ((blockContainerRight[iRight].body.y+2) + blockContainerRight[iRight].height);
        iRight++;
      }
      blockContainerRight.splice(numba, 1); 
    };

    var applyGravityLeft = function (numba){
      var iLeft = 0;
      while(iLeft < numba ){
        blockContainerLeft[iLeft].body.y = ((blockContainerLeft[iLeft].body.y+2) + blockContainerLeft[iLeft].height);
        iLeft++;
      }
    
      blockContainerLeft.splice(numba, 1);
    };

    function hitBlockLeft(emitter,platforms){
     
      var str = platforms.name;
      var word = str.slice(0, 4);
      if( platforms.name == "piso1" || platforms.name == "piso2" ){
          BarLife.damage(2);
      }
      if(platforms.name != "piso0" && platforms.name != "piso1" && platforms.name != "piso2" && word == "pila"  ){
        var numba;
        numba = blockContainerLeft.indexOf(platforms);
        platforms.destroy();
        Stage.fallBlocksLeft(numba);
        Emittor.destroyer1();
        BarLife.restore(2);
        var statEnemyL = blockContainerLeft.length;
        Texto.updateD(statEnemyL);

      }
    };
    function hitBlockRight(emitter,platforms){
      
      var str = platforms.name;
      var word = str.slice(0, 4);
      if( platforms.name == "piso1" || platforms.name == "piso2" ){
        BarLife.damage(2);
      }
      if(platforms.name != "piso0" && platforms.name != "piso1" && platforms.name != "piso2" && word == "pola" ){
        var numba;
        numba = blockContainerRight.indexOf(platforms);
        platforms.destroy();
        Stage.fallBlocksRight(numba);
        Emittor.destroyer2();
        BarLife.restore(2);
        var statEnemyR = blockContainerRight.length;
        Texto.updateE(statEnemyR);
      }
    };




    var loadStage2 = function(){
      
          BarLife.initLife();
          BarLife.initLife();
          Enemies.removePeresozin();
          Enemies.removeSickBoy();   
          buildPlatformsEnemies(14,1200);
          buildPlatformsEnemies(14,0);
          vaguinho = Enemies.addVaguinho();
          shiquilin = Enemies.addShiquilin();
     
    }

     var loadStage3 = function(){
          BarLife.initLife();
          BarLife.initLife();
          Enemies.removeVaguinho();
          Enemies.removeShiquilin();   
          buildPlatformsEnemies(14,1200);
          bigBoss = Enemies.addBigBoss();
          ledge1.x = 0;
          ledge2.x = 0;
          house.x = 0;
          
    }



    var stagePileListenerStage1 = function(){
      Emittor.stageEmission(true,true,false,false,false);
      if(blockContainerLeft.length == 0 ){
        Emittor.stageEmission(false,true,false,false,false);
      }
      if(blockContainerRight.length == 0){
        Emittor.stageEmission(true,false,false,false,false);
      }
    };

    var stagePileListenerStage2 = function(){
      Emittor.stageEmission(true,true,true,true,false);
      if(blockContainerLeft.length == 0 ){
        Emittor.stageEmission(false,true,false,true,false);
      }
      if(blockContainerRight.length == 0){
        Emittor.stageEmission(true,false,true,false,false);
      }
    };

    var stagePileListenerStage3 = function(){
      Emittor.stageEmission(true,true,true,true,true);
    };

    var stageSetter = function(){
        if(blockContainerLeft.length == 0 &&  blockContainerRight.length == 0 && stageSelector == 1){
          stageSelector = 2;
          loadStage2();
       }
       if(blockContainerLeft.length == 0 &&  blockContainerRight.length == 0 && stageSelector == 2){
          stageSelector = 3;
          loadStage3();
       }
       if(blockContainerRight.length == 0 && stageSelector == 3){
          game.state.start("win");
       }
    };

    var addHouse = function(){
      house = game.add.sprite(game.world.centerX-330,373-32, 'casita1');

    };

    return {
      preloadPlatforms: preloadImagesPlatforms,
      setHouse: preloadImagesHouse,
      createPlatforms: buildPlatformsEnemies,
      groupPlatforms: buildGroup,
      houseAdder:addHouse,
      fallBlocksRight: applyGravityRight,
      fallBlocksLeft: applyGravityLeft,
      collideBlockLeft: hitBlockLeft,
      collideBlockRight: hitBlockRight,
      setStage:stageSetter,
      activeEmissionLevel1:stagePileListenerStage1,
      activeEmissionLevel2:stagePileListenerStage2,
      activeEmissionLevel3:stagePileListenerStage3
    };

})(Emittor, BarLife, Texto,Enemies);