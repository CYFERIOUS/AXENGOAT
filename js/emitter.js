  var Emittor = (function () {

    var addEmitter = function () {
      emitter = game.add.emitter(100, 100, 1);
      emitter.makeParticles(['particle']);
      emitter.start(false, 20000, 20);
      emitter.setYSpeed(-100, 20);
      emitter.setXSpeed(300, 20);
      game.physics.arcade.enable(emitter);
      emitter.bounce.setTo(0.5, 0.5);
      emitter.setAll("body.collideWorldBounds", true);
    };

    var destroyParticle = function (){
      emitter.forEachAlive(function(particle){
        particle.kill();
      });
  
    };

    return {
      emitor: addEmitter,
      destroyer: destroyParticle
    };

  })();