// query selection
var questionSpot = document.querySelector("#question-text")
var timer = document.querySelector("#countdown")
var scoreText = document.querySelector("#score")
var quizBox = document.querySelector('#quizbox')
var ansId1 = document.querySelector("#ans-1")
var ansId2 = document.querySelector("#ans-2")
var ansId3 = document.querySelector("#ans-3")
var ansId4 = document.querySelector("#ans-4")
var secondsLeft = 60
var startButton = document.querySelector("#startButton")
var nextButton = document.querySelector("#next")
// setting variables 
var shuffledQuestions;
var currentQuestionIndex;
var option1;
var option1TF;
var option2;
var option2TF;
var option3;
var option3TF;
var option4;
var option4TF;
var allQuestions;
var score;
// adding event listeners to buttons
startButton.addEventListener("click",startGame)
nextButton.addEventListener("click", nextQuestion)
// start game function after pressing start
function startGame() {
    // console.log(secondsLeft) 
    // make button dissapear and start quiz
    startButton.style.display = "none"
    score = 0
    shuffledQuestions = allQuestions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    setTime()
    nextQuestion() 
}
// Starts countdown timer and gives end screen when time is up
function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft
        

        if (secondsLeft <= 0) {
            clearInterval(timerInterval)
            sendMessage()
            alert("Time is up!")
            startButton.style.display = ""
            ansId1.textContent = ""
            ansId2.textContent = ""
            ansId3.textContent = ""
            ansId4.textContent = ""
        }
    },1000)
}

// next question function puts text of question array
function nextQuestion() {
// puts question into the right spots
    // console.log("im runnin")
    if (currentQuestionIndex < 10) {
        // setting variables to the indexed array values
    const currentQuestion = allQuestions[currentQuestionIndex].question
    var option1 = allQuestions[currentQuestionIndex].answers[0].text
    var option2 = allQuestions[currentQuestionIndex].answers[1].text
    var option3 = allQuestions[currentQuestionIndex].answers[2].text
    var option4 = allQuestions[currentQuestionIndex].answers[3].text
        // setting variables for the true false value
    option1TF = allQuestions[currentQuestionIndex].answers[0].bool
    option2TF = allQuestions[currentQuestionIndex].answers[1].bool
    option3TF = allQuestions[currentQuestionIndex].answers[2].bool
    option4TF = allQuestions[currentQuestionIndex].answers[3].bool
        // logging current question and options for debugging
    // console.log(currentQuestion)
    // console.log(option1TF)
    // console.log(option2TF)
    // console.log(option3TF)
    // console.log(option4TF)

        // appending each part of the array to the screen
    questionSpot.textContent = currentQuestion
    ansId1.textContent = option1
    
    ansId2.textContent = option2
    
    ansId3.textContent = option3
    
    ansId4.textContent = option4
    
    currentQuestionIndex++}
    else {
        endQuiz()

    }

}

var selectedAnswer = quizBox.addEventListener("click", event =>{
    if(event.target.id == "ans-1" && option1TF == true){
        score += 100
        scoreText.textContent = score
        nextQuestion()
    }
    else if (event.target.id != "ans-1") {

    }
    else{
        score += 0
        secondsLeft -= 5
        nextQuestion()
    }
})
var selectedAnswer = quizBox.addEventListener("click", event =>{
    if(event.target.id == "ans-2" && option2TF == true){
        score += 100
        scoreText.textContent = score
        nextQuestion()
    }
    else if (event.target.id == "ans-3"|| "ans-1" || "ans-4") {

    }
    else{
        score += 0
        secondsLeft -= 5
        nextQuestion()
    }
})
var selectedAnswer = quizBox.addEventListener("click", event =>{
    if(event.target.id == "ans-3" && option3TF == true){
        score += 100
        scoreText.textContent = score
        nextQuestion()
    }
    else if (event.target.id != "ans-3") {

    }
    else{
        score += 0
        secondsLeft -= 5
        nextQuestion()
    }
})
var selectedAnswer = quizBox.addEventListener("click", event =>{
    if(event.target.id == "ans-4" && option4TF == true){
        score += 100
        scoreText.textContent = score
        nextQuestion()
    }
    else if (event.target.id != "ans-4") {

    }
    else{
        score += 0
        secondsLeft -= 5
        nextQuestion()
    }
})
function endQuiz(){
    questionSpot.textContent = "Nice Job! you scored " + score + " ! Try Again?"
    startButton.style.display = ""
    ansId1.textContent = ""
    ansId2.textContent = ""
    ansId3.textContent = ""
    ansId4.textContent = ""
    currentScore = score
    enterHighScore()

}
// keep track of score
var highScores = [];
function enterHighScore(){
    var name = prompt('You got a highscore! Enter name:')

    localStorage.setItem("HighScores", JSON.stringify(currentScore))
    localStorage.setItem("Names", JSON.stringify(name))
}

function viewHighScores() {
    var storedHighScores = JSON.parse(localStorage.getItem("HighScores"))
    var storedNames = JSON.parse(localStorage.getItem("name"))

    if (storedHighScores !== null) {
        highScores = storedHighScores 
    }

}


function sendMessage(){
    questionSpot.textContent = "Time's up! Try Again"
    secondsLeft = 60
}
var question01 = {
    question:
    "How much xp is needed to reach level 99 in any skill?",
    answers:[
        {text:"13,034,431 xp", bool: true},
        {text:"200,000,000 xp", bool:false},
        {text:"6,517,253 xp", bool: false}, 
        {text:"1,000,000 xp", bool:false},]
    }
    var question02 = {
        question:
        "How many inventory slots does a single character have?",
    answers:[
        {text:"18", bool: false},
        {text:"28", bool:true},
        {text:"25", bool: false},
        {text:"14", bool:false},
]}
var question03 = {
    question:
    "what is the combat level of a brand new account?",
    answers:[
        {text:"1", bool:true},
        {text:"0", bool:false},
        {text:"5", bool:false},
        {text:"3", bool:true},]
}
var question04 = {
    question:
    "What is the name of the dragon in the quest Dragon Slayer?",
    answers:[
        {text:"Zezima", bool: false},
        {text:"Elvarg", bool:true},
        {text:"Jimmy", bool: false},
        {text:"Farquad", bool:false},]
}
var question05 = {
    question:
    "What rune is needed for almost all teleportation spells?",
    answers:[
        {text:"Blood Rune", bool: false},
        {text:"Cosmic Rune", bool:false},
        {text:"Mind Rune", bool: false}, 
        {text:"Law Rune", bool:true},]
}
var question06 = {
    question:
    "What boss represents Bandos in the God Wars Dungeon??",
    answers:[
        {text:"General Graardor", bool: true},
        {text:"Ernest the Chicken", bool:false},
        {text:"Tzhaar-ket-olm", bool: false}, 
        {text:"Beeg Goblin", bool:false},]
}
var question07 = {
    question:
    "How many followers do you have to kill before entering ther respected god wars dungeon?",
    answers:[
        {text:"25", bool:false },
        {text:"40", bool:true},
        {text:"100", bool: false},
        {text:"10", bool:false},]
}
var question08 = {
    question:
    "How much xp do you get for cooking a shark?",
    answers:[
        {text:"100 xp", bool:false},
        {text:"150 xp", bool:false},
        {text:"210 xp", bool:true},
        {text:"524 xp", bool:false},]
}
var question09 = {
    question:
    "How many quest points do you need to start the Recipe for Disaster quest?",
    answers:[
        {text:"150", bool:false},
        {text:"175", bool:true},
        {text:"200", bool:false},
        {text:"100", bool:false},]
}
var question10 = {
    question:
    "What species is the pinball loving random event character Flippa?",
    answers:[
        {text:"Goblin!", bool:false},
        {text:"Elf", bool:false},
        {text:"Troll", bool:true}, 
        {text:"Demon", bool:false},]
}
var allQuestions =[question01,question02,question03,question04,question05,question06,question07,question08,question09,question10]

// console.log(allQuestions.length)
