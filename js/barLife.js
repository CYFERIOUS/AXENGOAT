var BarLife = (function (Texto) {

     var actual = 0;
     var score = null;


    var addBar = function(xpos){

      var barConfig = {
          width: 500,
          height: 40,
          x:xpos/2,
          y: 50,
          bg: {
            color: '#0CB5E5'
          },
          bar: {
            color: '#70FF01'
          },
          animationDuration: 200,
          flipped: false
      };
    
      this.myHealthBar = new HealthBar(game, barConfig);
  };

    var lifeLevelAdd = function(value){        
          actual = actual + value;
            var stamina  =  actual;
            this.myHealthBar.setPercent(stamina);
            var score = stamina;
            Texto.updaterText(score);
            
            if(actual < 33){
              this.myHealthBar.setBarColor('#70FF01');
            }else{
              this.myHealthBar.setBarColor('#E50000');
            }

            if(stamina == 100){
                alert("GAME OVER");
            }
    
    }

    var lifeLevelMinus = function(value){
        console.log("collide");
        
          actual = actual - value;
            var stamina  =  actual;
            this.myHealthBar.setPercent(stamina);
            if(stamina == 0){
                alert("NO ERES POBRE!");
            }
    
    }

    var initLife = function(){
         this.myHealthBar.setPercent(0); 
    }

    return {
      lifeBar: addBar,
      initLife: initLife,
      damage: lifeLevelAdd,
      restore: lifeLevelMinus
    };

})(Texto);