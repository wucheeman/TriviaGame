// APP.JS

// GLOBAL VARIABLES
// =============================================================================
var question_0;
var question_1;
var question_2;
var question_3;
var question_4;
var question_5;
var question_6;
var question_7;
var question_8;
var question_9;

// GLOBAL OBJECTS
// =============================================================================
var timer = {
  // this provides the countdown for the game
  time: 42,
  loggit: function() {
   console.log("I'm logging it!");
  },
  countdown: function() {
    while (this.time > 0) {
      this.time--;
      console.log(timer.time);
    }
  }
};

// FUNCTIONS
// =============================================================================

function main() {
  timer.loggit();
  timer.countdown();
  console.log("this works");
}



/* RESUME
Get radio button functionality working
*/

// GAME

$(document).ready(function() {
	main();
})



// DATA
// =============================================================================
// TODO: Move to a separate file in case these are needed later

// question_0 = ["Q: What is the name of the computer shown as the background to this game?", "ENIAC", "UNIVAC", "CANIAC", "MANIAC", "Colossus"];

// var question_1 = ["Q: The Mother of All Demos in 1968 showcased essentially all elements of modern personal computing, including the mouse, windows, video conferencing, and more. Who was the organizing talent behind it?", "Steve Jobs", "Bill Gates", "Elon Musk", "Douglas Engelbart", "Robert Metcalfe"];

// var question_2 = ["Q: Gottfried Wilhelm Leibniz is famous as a polymath and one of the two inventors of calculus. What area critical to computing did he study?", "magnetism", "binary numbers", "electricity", "phosphorescence", "programming"];

// var question_3 = ["Herman Hollerith founded a company in 1886 that later grew to become IBM. It produced tabulating machinery that processed data recorded on punched cards that is a direct precursor to the computer. What was one important way it was used?", "compiling railroad timetables", "computing census data", "counting votes in Congress", "controlling immigration quotas", "running Henry Ford's factory"];

// var question_4 = ["Q: Alan Turing was a mathematician and cryptographer. We speak of computers and programming languages as being 'Turing complete? What does that mean?", "They are complete hogwash", "They can run any program", "They are specialized for code breaking", "They are completely incomprehsible", "They use infinite paper tapes for computing"];

// var question_5 = ["Q: Many people enjoy their IPad without knowing their debt to the inventor of the Dynabook. Who was that and where did he work?", "Steve Wozniak: Apple", "Sergei Brin: Google", "Richard Feynman: CalTech", "Brian Kernighan: Bell Labs", "Alan Kaye: Xerox PARC"];

// var question_6 = ["Q: Joseph Marie Jacquard was one of the foremost pioneers in the use of punched cards. What were his cards used for?", "to control weaving looms", "to compute census data", "count art works in the Louvre", "draft soldiers for Napoleon", "open and close canal gates"];

// var question_7 = ["Q: George Babbage is one of the most famous pioneers of computing history. What was his Analytic Engine intended to do?", "Produce tables of numbers", "Help people play solitaire", "Compute ballistic trajectories", "Give Ada Lovelace something to do", "Make money"];

// var question_8 = ["Q: Ada Lovelace, of course, is famous as the first programmer. Her father was a famous poet, and her mother trained Ada in mathematics so she would not be like him. Who was he?", "Shelley", "Byron", "Keats", "Shakespeare", "Rilke"];

// var question_9 = ["Q: John von Neumann was a mathematician. As a result of his contribution, virtually all modern computers can be termed 'Von Neumann machines'. Why?", "He foresaw the virtual machine", "He invented RAM by accident", "He described their fundamental architecture", "He managed early computer projects", "He could code in binary"];