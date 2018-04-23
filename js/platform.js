var Platform = (function (Emittor,BarLife,Texto,Enemies,Stage,Audios) {

      var blockContainerRight = new Array(); 
      var blockContainerLeft = new Array();
      var ledge3, ledge4, ledge5, ledge6, ledge7;
    
      
    var preloadImagesPlatforms = function () {
    	
        game.load.image('piso0', 'images/platform.png');
        game.load.image('piso1', 'images/platform.png');
        game.load.image('piso2', 'images/platform.png');
        game.load.image('piles', 'images/platform.png');

        game.load.image('piles1', 'images/platform1.png');
        game.load.image('piles2', 'images/platform2.png');
        game.load.image('piles3', 'images/platform3.png');
        game.load.image('piles4', 'images/platform4.png');
        game.load.image('piles5', 'images/platform5.png');

        game.load.image('ground', 'images/ground.png');
    };


  
    var buildPlatformsEnemies = function(tiles, pos, base, pila){
      
    var enemiesFloor = base;
    
    var placeX = pos == 0 ? 0 : (pos-enemiesFloor);
    
      for(var i = 0; i<tiles; i++){
        ledge3 = platforms.create( placeX, 200+(35*i), pila);
        ledge3.width = enemiesFloor;
        ledge3.body.immovable = true;
        ledge3.body.bounce.setTo(0.5, 0.5);
        if (placeX == 0) {
          ledge3.name = 'pila' + i;
          blockContainerLeft.push(ledge3);
          console.log(ledge3);
        }else{
          ledge3.name = 'pola' + i;
          blockContainerRight.push(ledge3);
          console.log(ledge3);
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

      

      var houseFloor2 = 450;
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
        console.log("lengthRight"+blockContainerRight.length); 
        blockContainerRight[iRight].body.y = ((blockContainerRight[iRight].body.y+2) + blockContainerRight[iRight].height);
        iRight++;
      }
      blockContainerRight.splice(numba, 1);
      
    };

    var applyGravityLeft = function (numba){
      var iLeft = 0;
      while(iLeft < numba ){
        console.log("lengthLeft"+blockContainerLeft.length);
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
          game.camera.shake(0.003, 100);
          Audios.hitSound();
      }
      if(platforms.name != "piso0" && platforms.name != "piso1" && platforms.name != "piso2" && word == "pila"  ){
        var numba;
        numba = blockContainerLeft.indexOf(platforms);
        platforms.destroy();
        Audios.platformHit();
        Platform.fallBlocksLeft(numba);
        Emittor.destroyer1(emitter.parent.name);
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
        game.camera.shake(0.003, 100);
        Audios.hitSound();
      }
      if(platforms.name != "piso0" && platforms.name != "piso1" && platforms.name != "piso2" && word == "pola" ){
        var numba;
        numba = blockContainerRight.indexOf(platforms);
        platforms.destroy();
        Audios.platformHit();
        Platform.fallBlocksRight(numba);
        Emittor.destroyer2(emitter.parent.name);
        if(stageSelector == 3){
          Emittor.destroyer1(emitter.parent.name);
        }
        BarLife.restore(2);
        var statEnemyR = blockContainerRight.length;
        Texto.updateE(statEnemyR);

      }
    };


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
      ledge1.x = -100;
      ledge2.x = 10;
    };



    var blockListener = function(){
     
      if(stageSelector == 1 || stageSelector == 2){
        if(blockContainerLeft.length == 0 && blockContainerRight.length == 0){
          stageSelector ++;
          Enemies.enemyKiller(stageSelector);
          Emittor.destroy();
          loadGlobal();
        }
      }
       
       if(stageSelector == 3){
        if( blockContainerLeft.length == 0 && blockContainerRight.length == 0 ){
          game.state.start("win");
        }
       }
    };

    var cleanRack = function(){
      blockContainerRight.splice(0, 13);
      blockContainerLeft.splice(0, 13);
    };


   

    return {
      preloadPlatforms: preloadImagesPlatforms,
      createPlatforms: buildPlatformsEnemies,
      groupPlatforms: buildGroup,
      fallBlocksRight: applyGravityRight,
      fallBlocksLeft: applyGravityLeft,
      collideBlockLeft: hitBlockLeft,
      collideBlockRight: hitBlockRight,
      blockUpdater:blockListener,
      activeEmissionLevel1:stagePileListenerStage1,
      activeEmissionLevel2:stagePileListenerStage2,
      activeEmissionLevel3:stagePileListenerStage3,
      cleanPlatform:cleanRack
    };

})(Emittor, BarLife, Texto,Enemies, Stage, Audios);