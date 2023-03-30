// variables for time and correct answers
let timeLeft = parseInt(document.getElementById('timeLeft').innerHTML);
let correctAnswers = parseInt(document.getElementById('correctAnswers').innerHTML);
let currentAnswer;

// array containing the quiz questions, the first index of each question array is the question, the second is an array containing the possible answers, and the third is the index of the correct answer within the possible answers array.
const questions = [  ["What type of file contains javascript code?", [".css", ".js", ".html", ".txt"], 1],
  ["How do you declare the variable 'shoes' in javascript?", ["let shoes =", "dec shoes =", "this shoes =", "shoes ="], 0],
  ["What unit of time does the 'setInterval' command use?", ["seconds", "milliseconds", "minutes", "hours"], 1],
  ["True or False, the javascript file can be linked in the head or the body of html?", ["True", "False"], 0],
  ["True or False, javascript can automatically use Jquerry functions?", ["True", "False"], 1],
];

//function to select current question, generate choices, and identify correct answer
function selectQuestion() {
    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    let nextQuestion = randomQuestion[0];
    let choices = randomQuestion[1];
    let correctChoice = randomQuestion[2];

    //displays current question
        document.getElementById('question').innerHTML = nextQuestion;

    //generates choices 
    let choiceElements ='';
    for (var i = 0; i < choices.length; i++) {
        choiceElements += "<input type='radio' name='choice' value='" + i + "'>" + choices[i] +"<br>";
    

    document.getElementById('choices').innerHTML = choiceElements;

    //identifies correct choice
    currentAnswer = correctChoice;
}}

//checks for correct answer
function checkAnswer() {
    let correct = document.getElementsByName('choice')[currentAnswer];
    let correctChoice = document.getElementById('choices').getElementsByTagName('input')[currentAnswer];
    let correctAnswer = correctChoice.value;
    let correctAnswerText = correctChoice.innerHTML;

   
