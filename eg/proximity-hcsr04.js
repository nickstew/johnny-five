var five = require("../lib/johnny-five.js");
var board = new five.Board();
var lastLocation;

board.on("ready", function() {
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7
  });

  proximity.on("data", function() {
  });

  proximity.on("change", function() {
    if(!lastLocation || lastLocation-1 > this.cm || lastLocation+1 < this.cm) {
      console.log("The obstruction has moved.");
      console.log("Proximity: ");
      console.log("  cm  : ", this.cm);
      console.log("-----------------");
      lastLocation = this.cm;
    }
  });
});
