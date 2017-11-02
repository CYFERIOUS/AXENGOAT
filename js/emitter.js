  var Emittor = (function () {



    var preloadImages = function () {
         game.load.spritesheet('particles', 'images/partuculas.png', 63, 63);   
    };


    var addEmitter = function (initialX,initialY,xfast,yfast,nomos,bounce) {
      
      emitter = game.add.emitter(initialX, initialY, 1);
      emitter.name = nomos;
      emitter.enableBody = true;
      if(emitter.name == "izquierda"){
    
           emitter.makeParticles('particles',[0,1,2,3,4], 1, true, true);
      }
      if(emitter.name == "derecha"){
         
           emitter.makeParticles('particles',[0,1,2,3,4], 1, true, true);
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

    var destroyParticleLeft = function (){
      emitter1.forEachAlive(function(particle){
        particle.kill();
      });
      emitter3.forEachAlive(function(particle){
        particle.kill();
      });
    };

    var destroyParticleRight = function (){
      emitter2.forEachAlive(function(particle){
        particle.kill();
      });
      emitter4.forEachAlive(function(particle){
        particle.kill();
      });
      emitter5.forEachAlive(function(particle){
        particle.kill();
      });
    };

    var emittorStage = function(a,b,c,d,e){
        emitter1.on = a;
        emitter2.on = b;
        emitter3.on = c;
        emitter4.on = d;
        emitter5.on = e;
    };



    return {
      preloading: preloadImages,
      emitor: addEmitter,
      destroyer1: destroyParticleLeft,
      destroyer2: destroyParticleRight,
      stageEmission: emittorStage
    };

  })();