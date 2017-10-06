var Texto = (function () {
    WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, lifeLevelMax, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['VT323','monospace']
    }

    };

    var text = null;
    var grd;



    var preloadText = function(){
      game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }

   
    var lifeLevelMax = function(texto){
        
    }

    var lifeLevelMin = function(texto){
      
    
    }

    var lifeLevelUpdater = function(texto){

        text = game.add.text(500, 50);
        text.anchor.setTo(0.5);
        text.font = 'VT323';
        text.fontSize = 60;
        text.fill = '#FFF';
        text.inputEnabled = true;
        text.setText(texto);
    }



    return {
      precharge: preloadText,
      maxLevel: lifeLevelMax,
      minLevel: lifeLevelMin,
      updaterText: lifeLevelUpdater
    };

})();