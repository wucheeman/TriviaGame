// APP.JS - COMPUTER TRIVIA GAME

// GLOBAL VARIABLES
// =============================================================================
var numQuestions;
var correctGuesses;
var wrongGuesses;
var unanswered;
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
    //  TODO: Move to the updatedisplay function
    $("#show-timer").html("<h2>" + timer.time + "</h2>");
    if (timer.number <= 0) {
      timer.stop();
    }
  },
  run: function () {
    timer.intervalId = setInterval( function() {
      timer.decrement();
    }, 1000);

  },
  stop: function() {
  //  Clears intervalId
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
  var answered;
  for (var i = 0; i < numQuestions; i++) {
    answered = $('input[name=answers' + i + ']:checked').val();
    userAnswers.push(answered);
  }
}

function determineOutcome(qAndA) {
  // decides outcome (right/wrong) and updates counters
  for (var i = 0; i < numQuestions; i ++) {
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
}

function endGame() {
  // removes questions and puts up game outcome
  collectAnswers();
  determineOutcome();
  var message =
    `
    <div class="row">
      <div class="col-sm-2">
      </div>
      <div class="col-sm-8 newcolor text-center">
        <h3 class="mb-4">All Done!</h3>
        <h5>Correct Answers: ${correctGuesses}</h5>
        <h5>Incorrect Answers: ${wrongGuesses}</h5>
        <h5 class="mb-2">Unanswered: ${unanswered}</h5>
      </div>
      <div class="col-sm-2">
      </div>
    </div>
    `
  updateDisplay(["#displayArea", message]);
  // TODO move to updateDisplay
  $("#show-timer").css("visibility", "hidden");
  $("#stop").css("visibility", "hidden");
}

function initializeDisplay() {
  // this initializes display via call to updateDisplay
  // TODO: replace with creation of message sent to UpdateDisplay()
  $("#show-timer").css("visibility", "visible");
}

function initializeGlobals() {
  correctGuesses = 0;
  wrongGuesses = 0;
  unanswered = 0;
  numQuestions = 10;
  userAnswers= [];
  // indices in order of corresponding questions
  correctAnswers = ["01", "14", "22", "32", "42", "55", "64", "71", "83", "91"];
}

function main() {
  initializeGlobals();
  initializeDisplay();
  // call to function in questions.js
  makeQuestions();
  timer.run();
  // TODO: move to updateDisplay
  // hides the start button + takes up no space
  $("#start").css("display", "none");
  // fills in the questions
  $("#displayArea").html(questions);
    // shows the start button
  $("#stop").css("visibility", "visible");
  // game runs until time expires/user clicks stop, triggering endGame()
}

function updateDisplay(update) {
  // intended to be sole render function
  //  TODO: make it so
  $(update[0]).html(update[1]);
}

// GAME
// =============================================================================

$(function() {
  $("#start").on("click", main);
  $("#stop").on("click", timer.stop);
});