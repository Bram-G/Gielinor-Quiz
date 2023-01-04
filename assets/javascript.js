// query selection
var questionSpot = document.querySelector("#question-text")
var timer = document.querySelector("#countdown")
var ansId1 = document.querySelector("#ans-1")
var ansId2 = document.querySelector("#ans-2")
var ansId3 = document.querySelector("#ans-3")
var ansId4 = document.querySelector("#ans-4")
var secondsLeft = 60
var startButton = document.querySelector("#startButton")
// make button dissapear and start quiz
startButton.addEventListener("click",startGame)

function startGame() {
    console.log(secondsLeft) 
    setTime()
}
// when quiz question answered have it go to next question

// have countdown timer
function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            sendMessage()
        }
    },100)
}

function sendMessage(){
    questionSpot.textContent = "You Lose Try Again!"
    secondsLeft = 60
}
// keep track of score

// questions