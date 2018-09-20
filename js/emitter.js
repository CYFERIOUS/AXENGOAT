  var Emittor = (function () {



    var preloadImages = function () {
         game.load.spritesheet('particles0', 'images/peresozinPartuculas.png', 63, 63);
         game.load.spritesheet('particles1', 'images/salukoPartuculas.png', 63, 63);
         game.load.spritesheet('particles2', 'images/zinokupaPartuculas.png', 63, 63);
         game.load.spritesheet('particles3', 'images/malinfantyPartuculas.png', 63, 63);
         game.load.spritesheet('particles4', 'images/vivienzorPartuculas.png', 63, 63);  
    };


    var addEmitter = function (initialX,initialY,xfast,yfast,nomos,bounce,enemyName) {
      
      emitter = game.add.emitter(initialX, initialY, 1);
      emitter.name = nomos;
      emitter.enableBody = true;
      if(emitter.name == "izquierda1" || emitter.name == "izquierda2" ){
    
           emitter.makeParticles(enemyName,[0,1,2,3,4], 1, true, true);
           
      }
      if(emitter.name == "derecha1" || emitter.name == "derecha2" || emitter.name == "derecha3" ){
         
           emitter.makeParticles(enemyName,[0,1,2,3,4], 1, true, true);          
      }


      emitter.start(false, 8000, 400);
      emitter.setXSpeed(xfast, yfast);
      emitter.setYSpeed(xfast, yfast);
      emitter.gravity = 150;
      emitter.bounce.setTo(bounce,1);
      emitter.setAll("body.collideWorldBounds", true);
      game.physics.arcade.enable(emitter);
      return emitter;
    };

    var destroyParticleLeft = function (emitorName){
      if(emitorName == "izquierda1"){
        emitter1.forEachAlive(function(particle){
          particle.kill();
        });
      }
      if(emitorName == "izquierda2"){
        emitter3.forEachAlive(function(particle){
          particle.kill();
        });
      }
    };

    var destroyParticleRight = function (emitorName){
      if(emitorName == "derecha1"){
        emitter2.forEachAlive(function(particle){
          particle.kill();
        });
      }
      if(emitorName == "derecha2"){
        emitter4.forEachAlive(function(particle){
          particle.kill();
        });
      }
      if(emitorName == "derecha3"){
        emitter5.forEachAlive(function(particle){
          particle.kill();
        });
      }
    };

    var emittorStage = function(a,b,c,d,e){
        emitter1.on = a;
        emitter2.on = b;
        emitter3.on = c;
        emitter4.on = d;
        emitter5.on = e;
    };

    var emittorDestroy = function(){
        emitter1.destroy();
        emitter2.destroy();
        emitter3.destroy();
        emitter4.destroy();
    };


    return {
      preloading: preloadImages,
      emitor: addEmitter,
      destroy: emittorDestroy,
      destroyer1: destroyParticleLeft,
      destroyer2: destroyParticleRight,
      stageEmission: emittorStage
    };

  })();