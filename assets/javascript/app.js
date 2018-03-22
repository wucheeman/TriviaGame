// APP.JS

// GLOBAL VARIABLES
// =============================================================================
var numQuestions;
var correctGuesses;
var wrongGuesses;
var unanswered;
var timeLeft;
var correctAnswers;
var userAnswers;

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
  //  TODO: Move to the updatedisplay function?
  // TODO: make this call endGame()
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

function collectAnswers() {
  console.log("in collectAnswers");
  var answered;
  for (var i = 0; i < numQuestions; i++) {
    // if question not answered, value is 'undefined'
    answered = $('input[name=answers' + i + ']:checked').val();
    console.log(answered);
    console.log(typeof answered);
    userAnswers.push(answered);
  }
  console.log();
}

  // TODO
function determineOutcome(qAndA) {
  // decides outcome (right/wrong), given question and user's answer
  console.log("in determineOutcome");
  for (var i = 0; i < numQuestions; i ++) {
    console.log("i = " + i + "; userAnswers[i] is: " + userAnswers[i] + "correctAnswers[i] is: " + correctAnswers[i]);
    if (userAnswers[i] === undefined) {
      unanswered++;
    }
    else if (userAnswers[i] === correctAnswers[i]) {
      correctGuesses++;
    }
    else {
      wrongGuesses++;
    }
  }
  console.log("unaswered: " + unanswered);
  console.log("correct: " + correctGuesses);
  console.log("wrong: " + wrongGuesses);
}

function endGame() {
  // removes questions and puts up game outcome
  timer.stop();
  collectAnswers();
  determineOutcome();
  // TODO: have it call updateDisplay to put up end-of-game page
}

function initializeDisplay() {
  // this initializes display via call to updateDisplay
}

// TODO
function initializeGlobals() {
  console.log("initializing globals");
  correctGuesses = 0;
  wrongGuesses = 0;
  unanswered = 0;
  timeLeft = true;
  numQuestions = 10;
  userAnswers= [];
  // indices in order of corresponding questions
  correctAnswers = ["01", "14", "22", "32", "42", "55", "64", "71", "83", "91"];
}

function main() {
  console.log("starting main");
  initializeGlobals();
  initializeDisplay();
  console.log("starting game play");
  timer.run();
}





  // TODO
function scoreGame() {
  // displays correct/incorrect stats
  console.log("in scoreGame");
  // compose message to updateDisplay
  // to hide questions and display results
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
[x] Get timer working and displaying correctly
[-] Get radio button functionality working
  (x) confirm in radio_buttons.html that I don't need <divs> around button groups
  (x) Update html to have each question's radio buttons named the same -- and differently from all other groups
  (x) Transfer/extend JS from radio-buttons.html to collect answers
  (x) Trigger collect answerswith stop button
[] Build evaluate outcomes 
[] First round test - clock starts, but has no effect on game; answer questions; compute results
[] move stop button to end of questions
[] expiration of time/click of stop triggers score game
[] hide questions and only show title and start button at game beginning
[] Prevent user from starting/restarting timer
[] Prevent user from changing answers and resubmitting
[] delete class 'questions' and ids q1, q2, ... q9 if unused

*/

// GAME
// =============================================================================

$(function() {
  console.log('page loaded');
  $("#start").on("click", main);
  // TODO - change function to trigger end-of-game processing
  $("#stop").on("click", endGame);
});