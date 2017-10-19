var game = new Phaser.Game(1200, 720, Phaser.CANVAS, 'phaser-example', { preload:preload, create:create, update:update, render: render });

  var jumpButton;
  var jumpTimer = 0;
  var platforms;
  var emitter1, emitter2;
  var ground;
  var speed, robot;
  var stageSelector = 1;

  function preload(){
    Zgame.preload();
  }

  function create(){
    Zgame.create();
  }

  function update(){
    Zgame.update();
  }

  function render(){
    Zgame.render();
  }
 
  


  


