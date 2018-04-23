var Texto = (function () {
    
    WebFontConfig = {
    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.

    google: {
      families: ['VT323','monospace']
    }

    };

    var text1 = null;
    var text2 = null;
    var text3 = null;
    var text4 = null;
    var text5 = null;
    var text6 = null;

    var preloadText = function(){
      game.load.script('webfont', 'static-lib/webfont.js');
    };

    var createText = function(){

        this.text1 = game.add.text(230, 50);
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

        this.text4 = game.add.text(30, 700);
        this.text4.anchor.setTo(0.5);
        this.text4.font = 'VT323';
        this.text4.fontSize = 30;
        this.text4.fill = '#FFF';
        this.text4.inputEnabled = true;
        this.text4.fresh = true;

        this.text5 = game.add.text(1160, 700);
        this.text5.anchor.setTo(0.5);
        this.text5.font = 'VT323';
        this.text5.fontSize = 30;
        this.text5.fill = '#FFF';
        this.text5.inputEnabled = true;
        this.text5.fresh = true;
       
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

    var updateTextD = function(texto){
       this.text4.setText(texto);
    };

    var updateTextE = function(texto){
       this.text5.setText(texto);
    };


    return {
      precharge:preloadText,
      creatingText: createText,
      updateA:updateTextA,
      updateB:updateTextB,
      updateC:updateTextC,
      updateD:updateTextD,
      updateE:updateTextE
    };

})();