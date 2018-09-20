
  var config = {  width: 1200,  height: 720,  renderer: Phaser.AUTO,  parent: 'phaser-DANE-game',  transparent: false,  antialias: true,  forceSetTimeOut: true}
  var game = new Phaser.Game(config);
  
  game.state.add("init", Init.Main);
  game.state.add("story", Story.Main);
  game.state.add("menu", Menu.Main);
  game.state.add("play", Play.Main);
  game.state.add("loose", Loose.Main);
  game.state.add("win", Win.Main);
  game.state.add("credit", Credit.Main);
 

  game.state.start("init");

 

  



 
  


  


