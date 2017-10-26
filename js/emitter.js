  var Emittor = (function () {



    var preloadImages = function () {
        game.load.image('particle1', 'images/partucula.png');
        game.load.image('particle2', 'images/partucula2.png');
    };


    var addEmitter = function (initialX,initialY,xfast,nomos,bounce) {
      
      emitter = game.add.emitter(initialX, initialY, 1);
      emitter.name = nomos;
      emitter.enableBody = true;
      if(emitter.name == "izquierda"){
    
           emitter.makeParticles(['particle1']);
      }
      if(emitter.name == "derecha"){
         
           emitter.makeParticles(['particle2']);
      }
      emitter.start(false, 8000, 400);
      emitter.setXSpeed(xfast, 20);
      emitter.setYSpeed(10, 20);
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
    };

    var destroyParticleRight = function (){
      emitter2.forEachAlive(function(particle){
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