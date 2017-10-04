var BarLife = (function () {

     var actual = 0;


    var addBar = function(xpos){

      var barConfig = {
          width: 500,
          height: 40,
          x:xpos/2,
          y: 50,
          bg: {
            color: '#651828'
          },
          bar: {
            color: '#FEFF03'
          },
          animationDuration: 200,
          flipped: false
      };
    
      this.myHealthBar = new HealthBar(game, barConfig);
  };

    var lifeLevelAdd = function(value){
        console.log("collide");
        
          actual = actual + value;
            var stamina  =  actual;
            this.myHealthBar.setPercent(stamina);
            
            if(actual == 30){
              this.myHealthBar.setBarColor('#fc9802');
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

})();