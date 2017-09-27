  var Emittor = (function () {

    var preloadImages = function () {
        game.load.image('particle1', 'images/partucula.png');
        game.load.image('particle2', 'images/partucula2.png');
    };


    var addEmitter = function (initialX,initialY,xfast,nomos) {
      

      emitter = game.add.emitter(initialX, initialY, 1);
      emitter.name = nomos;
      emitter.enableBody = true;
      if(emitter.name == "izquierda"){
           emitter.makeParticles(['particle1']);
      }
      if(emitter.name == "derecha"){
           emitter.makeParticles(['particle2']);
      }
      emitter.start(false, 10000, 20);
      emitter.setYSpeed(-100, 20);
      emitter.setXSpeed(xfast, 20);
      game.physics.arcade.enable(emitter);
      emitter.bounce.setTo(1, 1);
      emitter.setAll("body.collideWorldBounds", true);
      return emitter;
    };

    var destroyParticle = function (){
      emitter.forEachAlive(function(particle){
        particle.kill();
      });
  
    };

    return {
      preloading: preloadImages,
      emitor: addEmitter,
      destroyer: destroyParticle
    };

  })();