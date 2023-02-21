// set variable to store time remaining
var timeLeft = 59;

//create varible to store function for determining timeLeft
function countDown() { setInterval(function(){
    //gives instruction for when timeLeft passes 0 and clears the interval from setInterval
    if(timeLeft < 0){
        clearInterval(countDown);
        document.getElementById("timeLeft").innerHTML = "Time is up!!";
    } else {
        document.getElementById("timeLeft").innerHTML = timeLeft;
    }
    timeLeft -= 1;

}, 1000);
}
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
    var nextQuestions = questions[Math.floor(Math.random()*questions.length)][0];
       
document.getElementById("question").innerHTML = nextQuestions;
};

//create function to check for correct answer

function checkAnswer(){
    var score = document.getElementById("correctAnswers");
    
    if(
    document.getElementById("userAnswer") = questions[1]){
        document.getElementById("correctAnswers").innerHTML =  score += 
}
    else {
        score = score-=

        }

    }

}
;

//add event listener and code for submit button
document.getElementById("submit").addEventListener("click", checkAnswer);





