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

    var text1 = null;
    var text2 = null;
    var text3 = null;

    var preloadText = function(){
      game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    };

    var createText = function(){

        this.text1 = game.add.text(300, 50);
        this.text1.anchor.setTo(0.5);
        this.text1.font = 'VT323';
        this.text1.fontSize = 60;
        this.text1.fill = '#FFF';
        this.text1.inputEnabled = true;
        this.text1.fresh = true;
       
       	this.text2 = game.add.text(600, 50);
        this.text2.anchor.setTo(0.5);
        this.text2.font = 'VT323';

        this.text2.fill = '#FFF';
        this.text2.inputEnabled = true;
        this.text2.fresh = true;

        this.text3 = game.add.text(1000, 50);
        this.text3.anchor.setTo(0.5);
        this.text3.font = 'VT323';
        this.text3.fontSize = 30;
        this.text3.fill = '#FFF';
        this.text3.inputEnabled = true;
        this.text3.fresh = true;
       
    };

    var updateTextA = function(texto){
       this.text1.setText(texto);
       
    };

    var updateTextB = function(texto,size){
       this.text2.setText(texto);
       this.text2.fontSize = size;
    };

    var updateTextC = function(texto){
       this.text3.setText(texto);
    };


    return {
      precharge:preloadText,
      creatingText: createText,
      updateA:updateTextA,
      updateB:updateTextB,
      updateC:updateTextC
    };

})();