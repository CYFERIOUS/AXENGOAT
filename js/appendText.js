var Texto = (function () {
    
    WebFontConfig = {
    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, lifeLevelMax, this); },

    google: {
      families: ['VT323','monospace']
    }

    };

    var text = null;

    var preloadText = function(){
      game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    };

    var createText = function(){
        this.text = game.add.text(300, 50);
        this.text.anchor.setTo(0.5);
        this.text.font = 'VT323';
        this.text.fontSize = 60;
        this.text.fill = '#FFF';
        this.text.inputEnabled = true;
        this.text.fresh = true;
       
    };

    var updateText = function(texto){
       this.text.setText(texto);
    };

    return {
      precharge:preloadText,
      creatingText: createText,
      update:updateText
    };

})();