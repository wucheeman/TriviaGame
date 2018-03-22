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
    endGame();
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

function determineOutcome(qAndA) {
  // decides outcome (right/wrong) and updates counters
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

function getQuestions() {
  // brings questions from questions.js into this file
  // TODO: delete if smarter way to do this
  makeQuestions();
  console.log(questions); 
}

function endGame() {
  // removes questions and puts up game outcome
  // timer.stop(); delete?
  collectAnswers();
  determineOutcome();
  // TODO: have it call updateDisplay to put up end-of-game page
}

// TODO
function initializeDisplay() {
  // this initializes display via call to updateDisplay
}

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
  // console.log(getQuestions());
  getQuestions();
  console.log("starting game play");
  timer.run();
  $("#displayArea").html(questions);
  // game runs until time expires/user clicks stop, triggering endGame()
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
function updateDisplay(update) {
  // sole render function; updates display based on argument received
  console.log("in updateDisplay");
}

// GAME
// =============================================================================

$(function() {
  console.log('page loaded');
  $("#start").on("click", main);
  // TODO - change function to trigger end-of-game processing
  $("#stop").on("click", timer.stop); // was endGame
});

/* RESUME
[x] Get timer working and displaying correctly
[x] Get radio button functionality working
  (x) confirm in radio_buttons.html that I don't need <divs> around button groups
  (x) Update html to have each question's radio buttons named the same -- and differently from all other groups
  (x) Transfer/extend JS from radio-buttons.html to collect answers
  (x) Trigger collect answers with stop button
[x] Build evaluate outcomes 
[x] click of stop triggers end of game
[x] First round test - clock starts, but has no effect on game; answer questions; compute results
[x] expiration of time triggers score game
[x] move stop button to end of questions
[x] make file that has only questions and concatenates all questions into HTML that can be displayed dynamically.
[] Update game-as-is to build the questions dynamically and verify they can be counted
[] hide questions and only show title and start button at game beginning
[] hide start button and only show timer, questions, and stop button once game has started
[] hide questions and only show results at game end
[] TODO: fix bug; after timer expires, user can click 'start' and restart timer. DEFER until start button is 'disappeaared'; may not be a problem after that.

[] Prevent user from starting/restarting timer
[] Prevent user from changing answers and resubmitting
[x] delete class 'questions' and ids q1, q2, ... q9 if unused
[] Second round test
[] Review and complete remaining TODOs
[] Beautify page as time permits
[] Clean up all code
[] Final test before submission
*/