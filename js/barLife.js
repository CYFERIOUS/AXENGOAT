var BarLife = (function () {

     var actual = 100;


    var addBar = function(xpos){

      var barConfig = {
          width: 250,
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

    var lifeLevel = function(value){
        console.log("collide");
        
          actual = actual - value;
            var stamina  =  actual;
            this.myHealthBar.setPercent(stamina);
    
    }

    var initLife = function(){
         this.myHealthBar.setPercent(100); 
    }

    return {
      lifeBar: addBar,
      initLife: initLife,
      damage: lifeLevel
    };

})();