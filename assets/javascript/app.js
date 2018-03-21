// APP.JS

// GLOBAL VARIABLES
// =============================================================================
// TODO:delete questions?
// var question_0;
// var question_1;
// var question_2;
// var question_3;
// var question_4;
// var question_5;
// var question_6;
// var question_7;
// var question_8;
// var question_9;
var correctGuesses;
var wrongGuesses;
var unanswered;
var timeLeft;
var correctAnswers;

// GLOBAL OBJECTS
// =============================================================================
var timer = {
  number: 90, // starting value for countdown
  time: "",
  intervalId: 0, // holds ID for Interval; needed to cancel
  decrement: function() {
    timer.number-- ;
    timer.time = timer.timeConverter(timer.number);
  //  console.log(timer.time);
  //  TODO: Move to the updatedisplay function
    $("#show-timer").html("<h2>" + timer.time + "</h2>");
    if (timer.number <= 0) {
      timer.stop();
      alert("Time Up!");
    }
  },
  run: function () {
    console.log("in timer.run()");
    timer.intervalId = setInterval( function() {
      timer.decrement();
    }, 1000);
    console.log("timer.intervalId is: " + timer.intervalId);
  },
  stop: function() {
  //  Clears intervalId
    console.log("in timer.stop()");
    console.log('timer.intervalId: ' + timer.intervalId);
    clearInterval(timer.intervalId);
  },
  timeConverter: function(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  // assumes we don't go over 9 minutes!
  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
  }
};

// FUNCTIONS
// =============================================================================

  // TODO
function determineOutcome(qAndA) {
  // decides outcome given question and answer
  console.log("in determineOutcome");
  // get question as first element in qAndA
  // retrieve correct answer
  // compare correct answer to second element in qAndA
  // return 'right' or 'wrong' as appropriate
}

  // TODO - delete
// function handleStartButton() {
//   // event handler for start button
//   console.log("in handleStartButton");
//   var update;
//   // compose update to:
//   // + hide start button
//   // + reveal questions
//   updateDisplay(update);
// }

  // TODO - delete
// function handleDoneButton() {
//   // event handler for done button

//   console.log("in handleDoneButton")
//   // when button is clicked, call noTimeLeft
// }

function initializeDisplay() {
  // this initializes display via call to updateDisplay
}

// TODO
function initializeGlobals() {
  console.log("initializing globals");
  correctGuesses = 0;
  wrongGuesses = 0;
  unanswered = 10;
  timeLeft = true;
  // indices in order of corresponding questions
    correctAnswers = [0, 3, 1, 1, 1, 4, 3, 0, 2, 0];
}

function main() {
  console.log("starting main");
  startGame();
  playGame();
  scoreGame();
}

  // TODO
function noTimeLeft() {
  // declares quiz is over
  console.log("in noTimeLeft");
  // handle these cases
  // - expiration of timer
  // - user clicking 'done' button
  // returns true when either happens else return false
};

  // TODO
function playGame() {
  // enables player to take the quiz
  console.log("entering playGame");
  var outcome;
  var qAndA;
  // while timer is running (!noTimeLeft())
  //  get user click on a question and compose qAndA
  outcome = determineOutcome(qAndA);
  updateCounters(outcome);
  // end while
}

function startGame() {
  console.log("in startGame()");
  initializeGlobals();
  initializeDisplay();
  timer.run()
}

  // TODO
function scoreGame() {
  // displays correct/incorrect stats
  console.log("in scoreGame");
  // compose message to updateDisplay
  var update;
  updateDisplay(update);
}

  // TODO
function updateCounters(outcome) {
  // updates guessed right/wrong
  console.log("in updateCounters");
  // if outcome === right, correctGuesses++, unanswered--
  // else if outcome === wrong, wrongGuesses++,  unanswered--
  // else how did I get here?
}

  // TODO
function updateDisplay(update) {
  // sole render function; updates display based on argument received
  console.log("in updateDisplay");
}




/* RESUME
[-] Get timer working and displaying correctly
[] Get radio button functionality working
[] TODO - prevent user from starting/restarting timer

*/

// GAME
// =============================================================================

$(function() {
  console.log('page loaded');
  $("#start").on("click", main);
  // TODO - change function to trigger end-of-game processing
  $("#stop").on("click", timer.stop);
});