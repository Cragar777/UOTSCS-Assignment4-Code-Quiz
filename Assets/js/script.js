// Create variables to store the quiz questions
var questions = [
    {   question: "Commonly used data types DO Not include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {   question: "The condition in an if/else statement is enclosed with ________.",
        options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "2. curly brackets"
    },
    {   question: "Arrays in Javascript can be used to store ________.",
        options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {   question: "String values must be enclosed within _______.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    },
]

var startButtonEl = document.querySelector("#start-quiz");
var btnAnswer1El = document.querySelector("#btn-answer1");
var btnAnswer2El = document.querySelector("#btn-answer2");
var btnAnswer3El = document.querySelector("#btn-answer3");
var btnAnswer4El = document.querySelector("#btn-answer4");
console.log(btnAnswer4El);

// Use mouse-click events to start the quiz
// Create a time limit for the game using time functions
// On start click; start timer countdown at 75s; display first question and 4 answer buttons

var startQuiz = function() {

}

// Write for loops to cycle through quiz questions
// Use key-press events to receive user input in the form of answers to quiz questions
// On click of one of the buttons display the next question
// Write conditional statements to determine wrong and right answers; display Correct! if the previous response was correct
// display Wrong! if the previous response was wrong and subtract 15s from the timer

// Check if questions are finished and if the timer is not 0, if not then continue else display finish screen

// At finish screen enter initials and click Submit
// On click save initials and score and return to Start screen
// Use client-side storage to store high scores (localStorage)


startButtonEl.addEventListener("click", function() {
    alert("button clicked");
});