var BarLife = (function () {

   
    
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
         this.myHealthBar.setPercent(value); 
    }

    return {
      lifeBar: addBar,
      damage: lifeLevel
    };

})();