var game = new Phaser.Game(1200, 720, Phaser.CANVAS, 'phaser-DANE-game');

  game.state.add("init", Init.Main);
  game.state.add("story", Story.Main);
  game.state.add("menu", Menu.Main);
  game.state.add("preview", Preview.Main);
  game.state.add("play", Play.Main);
  game.state.add("credit", Credit.Main);

  game.state.start("menu");




 
  


  


