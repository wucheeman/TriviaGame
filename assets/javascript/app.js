// APP.JS

// GLOBAL VARIABLES

// GLOBAL OBJECTS

var timer = {
  // this provides the countdown for the game
  time: 42,
  loggit: function() {
    console.log("I'm logging it!");
    conso
  },
  countdown: function() {
    time--;
    console.log(timer.time);
  }
};


/* RESUME
timer.time isn't working, as shown by timer.countdown. Why?
*/

// GAME

timer.loggit();
timer.countdown();

// DATA
// TODO: move to a file and load into the game (stretch) - try jquery's .load() method

question_1 = ["Q: What is the name of the computer shown as the background to this game?", "ENIAC", "UNIVAC", "CANIAC", "MANIAC", "Colossus"];