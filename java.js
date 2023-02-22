// set variable to store time remaining
var timeLeft = 60;
var currentAnswer = "";

 //Adds score to local storage
 var playerName = prompt("What are your initials?");

//variables to use to adjust score and check user answers
var score = parseInt(document.getElementById("correctAnswers").value);
var check = document.getElementById("userAnswer");

 function highScore(){
 localStorage.setItem(playerName, score)
 };

//create varible to store function for determining timeLeft
function countDown() { setInterval(function(){
    //gives instruction for when timeLeft passes 0 and clears the interval from setInterval
    if(timeLeft < 0){
        document.getElementById("timeLeft").innerHTML = "Time is up!!";
        clearInterval(countDown);
        highScore();
        
    } else {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft ;
    }
    
}, 1000);
};
document.getElementById("start").addEventListener("click", countDown);
document.getElementById("start").addEventListener("click", currentQuestion);


//create pool of questions to display

    var questions = [
        ["What type of file contains javascript code?", ".css"],
        ["How do you declare the variable 'shoes' in javascript?", "var shoes ="],
        ["What unit of time does the 'setInterval' command use?", "milliseconds"],
        ["True or False, the javascript file can be linked in the head or the body of html?", "True"],
        ["True or False, javascript can automatically use Jquerry functions?", "False"],
    ];


    
//create function to select random question
function currentQuestion(){
    var randomQuestion = questions[Math.floor(Math.random() * questions.length)]

    var nextQuestions = randomQuestion[0]
    var nextAnswer = randomQuestion[1]
    
document.getElementById("currentAnswer").innerHTML = nextAnswer;   
currentAnswer = nextAnswer;
document.getElementById("question").innerHTML = nextQuestions;
}

//create function to adjust score
  function adjustScore(){
        document.getElementById("correctAnswers").innerHTML = num.toString(score + 1);
    }

   

//create function to check for correct answer


function checkAnswer(event){
    event.preventDefault();
    console.log(check.value);
  document.getElementById("currentAnswer").value
    if(
   check.value == currentAnswer){
        adjustScore();
        
}
    else {
       timeLeft = timeLeft - 5 ;

        }
        
    }



//add event listener and code for submit button
document.getElementById("submit").addEventListener("click", checkAnswer);





