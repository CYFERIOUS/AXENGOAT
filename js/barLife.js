var BarLife = (function (Texto) {

     var actual = 0;
     var stamina = 0;


    var addBar = function(xpos){

      var barConfig = {
          width: 500,
          height: 40,
          x:xpos/2,
          y: 50,
          bg: {
            color: '#3F8F01'
          },
          bar: {
            color: '#E5FF00'
          },
          animationDuration: 200,
          flipped: false
      };
    
      this.myHealthBar = new HealthBar(game, barConfig);
  };

    var lifeLevelAdd = function(value){        
            actual = actual + value;
            stamina  =  actual;
            this.myHealthBar.setPercent(stamina);
            getBarPercent(stamina);
            Texto.updateA("INDICE:"+stamina);
            if(stamina <= 0){
                Texto.updateA("INDICE:"+0);
            }
           
           
            if(actual < 33){
              Texto.updateB("SOBRESALIENDO",60);
              this.myHealthBar.setBarColor('#E5FF00');
            }else{
                  Texto.updateB("PELIGRO: ZONA DE ESCASEZ",30);
                  this.myHealthBar.setBarColor('#FF0000');
            }
            if( stamina >= 100){
              Texto.updateA("100 :( ");
              Texto.updateB("GAME OVER",60);
              setTimeout(function(){
                  game.state.start("loose");
              }, 1000);
              
            }

           
    }

    var lifeLevelMinus = function(value){        
        actual = actual - value;
        stamina = actual <= 0 ? 0 : actual;
        this.myHealthBar.setPercent(stamina);
        if(stamina <= 0){
          Texto.updateA("INDICE:"+0);
        }
        
    }

    var initLife = function(){
        this.myHealthBar.setPercent(0);
        actual = 0;
        stamina = 0;
    }

    var getBarPercent = function(score){
      
      if(stamina >= 33){
      
      }
      if(stamina >= 66){
        
      }
      
    }


    return {
      lifeBar: addBar,
      initLife: initLife,
      damage: lifeLevelAdd,
      restore: lifeLevelMinus,
      getScore:getBarPercent
    };

})(Texto);