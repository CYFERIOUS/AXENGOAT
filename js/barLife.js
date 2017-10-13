var BarLife = (function (Texto) {

     var actual = 0;
     var score = 0;


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
           
            score = stamina;

            getBarPercent(score);
            
            if(score >= 0){
              Texto.updateA("INDICE:"+score);
            }
            if(score <= 0){
              Texto.updateA(0);
            }
            if(actual < 33){
              Texto.updateB("SOBRESALIENDO",60);
              this.myHealthBar.setBarColor('#70FF01');
            }else{
                  Texto.updateB("PELIGRO: ZONA DE ESCASEZ",30);
                  this.myHealthBar.setBarColor('#E50000');
            }
            if( score >= 100){
              Texto.updateA("100 :( ");
              Texto.updateB("GAME OVER",60);
              setTimeout(function(){
                  alert("CONTINUA JUGANDO");
                  location.reload();
              }, 3000);
              
            }

            Texto.updateC("stage 1");


    
    }

    var lifeLevelMinus = function(value){
        console.log("collide");
        
          actual = actual - value;
            var stamina  =  actual;
            this.myHealthBar.setPercent(stamina);
            if(stamina == 0){
                Texto.updateB("NOT POOR");
            }
    
    }

    var initLife = function(){
         this.myHealthBar.setPercent(0); 
    }

    var getBarPercent = function(score){
      
      if(score >= 33){
        HomeLevel("casita2");
      }
      if(score >= 66){
        HomeLevel("casita3");
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