var TimerObject = (function () {

    var timer, timerEvent, text;

    var create = function(){
        timer = game.time.create();
        timerEvent = timer.add(Phaser.Timer.MINUTE * 7 + Phaser.Timer.SECOND * 30, this.endTimer, this);
        timer.start();
    };

    var render =  function () {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (timer.running) {
            game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 2, 14, "#ff0");
        }
        else {
            game.debug.text("pierdes!", 2, 14, "#0f0");
            game.state.start("loose");
        }
    };
    var endTimer = function() {
        // Stop the timer when the delayed event triggers
        timer.stop();
    };
    var formatTime = function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);   
    };
    
    return {
     createTimer:create,
     renderTimer:render,
     endTimer:endTimer,
     formatTime:formatTime
      
    };

})();




