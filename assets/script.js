var quizBtn = document.getElementById("quiz-btn");

// my different screen variables
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var scoreScreen = document.getElementById("score-screen");

// quiz screen variables
var questionPrompt = document.getElementById("question");
var options = document.getElementById("answer-options");
var answerPrompt = document.getElementById("answer-prompt");

var timeStart = document.getElementById("time-start");

var timer = 75;

// event for button to bring up the quiz screen
quizBtn.addEventListener("click", function(event) {
    startScreen.classList.add("d-none");
    quizScreen.classList.remove("d-none");
    
    // making the question appear
    questionPrompt.textContent = questions[0].title;
    
    // clearing the hard coded entries
    options.innerHTML = "";
    
    // loop to add in choices into html
    var choices = questions[0].choices;
    for (var i = 0; i < choices.length; i++) {    
    var differentChoices = document.createElement("button");
    differentChoices.setAttribute("id", "choice")
    differentChoices.setAttribute("style", "width:100%; margin:10px auto;")
    differentChoices.textContent = choices[i];
    options.appendChild(differentChoices);
    }

    function startTimer () {
        var timerInterval = setInterval(function() {
            timer--;
            timeStart.textContent = "Timer: " + timer;
             
            if(timer <= 0) {
                clearInterval(timerInterval);
                quizScreen.classList.add("d-none");
                scoreScreen.classList.remove("d-none");
            }
        }, 1000);
    }

    startTimer();
});

options.addEventListener("click", function(event) {
    if ("click" === questions[0].answer);
    stop.Propagation();
    alert("boo");
});



