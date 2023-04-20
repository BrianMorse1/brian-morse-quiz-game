// variables for time and correct answers
let timeLeft = parseInt(document.getElementById('timeLeft').innerHTML);
let correctAnswers = parseInt(document.getElementById('correctAnswers').innerHTML);
let currentAnswer;
let timerInterval;
let correctChoice;
const startButton = document.getElementById('start');
const submitButton = document.getElementById('submit');
let initials;
const highScores = JSON.parse(localStorage.getItem('highScores'));

// pushes an empty array to local storage on load if one doesn't exist
window.addEventListener('load', function() {
  if (localStorage.getItem('highScores')) {
    console.log('High scores table exists');
  } else {
    localStorage.setItem('highScores', JSON.stringify([{initials: 'BM', correctAnswers: '0'}]));
  }
});


// array containing the quiz questions, the first index of each question array is the question, the second is an array containing the possible answers, and the third is the index of the correct answer within the possible answers array.
const questions = [['What type of file contains javascript code?', ['.css', '.js', '.html', '.txt'], 1],
  ['How do you declare the variable \'shoes\' in javascript?', ['let shoes =', 'dec shoes =', 'this shoes =', 'shoes ='], 0],
  ['What unit of time does the \'setInterval\' command use?', ['seconds', 'milliseconds', 'minutes', 'hours'], 1],
  ['True or False, the javascript file can be linked in the head or the body of html?', ['True', 'False'], 0],
  ['What does the method \'parseFloat()\' do in JavaScript?', ['It returns the integer value of a string', 'It converts a string to a floating-point number', 'It rounds a number to the nearest integer', 'It converts a floating-point number to an integer'], 1],
  ['Which keyword is used to declare a constant variable in JavaScript?', ['var', 'let', 'const', 'none of the above'], 2],
  ['What is the difference between \'==\' and \'===\' in JavaScript?', ['Both are the same', '\'==\' compares the values without type coercion, while \'===\' compares both value and type', '\'==\' compares both value and type, while \'===\' compares the values without type coercion', 'none of the above'], 1],
  ['What does the \'||\' operator do in JavaScript?', ['It performs logical AND operation', 'It performs logical OR operation', 'It performs logical NOT operation', 'It performs bitwise OR operation'], 1],
  ['What is a callback function in JavaScript?', ['A function that is called immediately', 'A function that is called after a certain delay', 'A function that is passed as an argument to another function and is called when the main function completes its execution', 'A function that is called when an exception occurs'], 2],
  ['What is the use of \'this\' keyword in JavaScript?', ['To refer to the object that the function is a method of', 'To refer to the object that is currently in scope', 'To refer to the parent object of the current object', 'To refer to the global object'], 0],
  ['What is the difference between null and undefined in JavaScript?', ['Both are the same', 'null represents a non-existent value, while undefined represents a declared but not assigned value', 'undefined represents a non-existent value, while null represents a declared but not assigned value', 'none of the above'], 1],
  ['What is the use of the \'new\' keyword in JavaScript?', ['To create a new variable', 'To create a new function', 'To create a new instance of an object', 'To create a new class'], 2],
  ['What is the difference between \'let\' and \'var\' in JavaScript?', ['Both are the same', '\'let\' declares a block-scoped variable, while \'var\' declares a function-scoped variable', '\'let\' declares a function-scoped variable, while \'var\' declares a block-scoped variable', 'none of the above'], 1],
  ['What is the use of the \'try...catch\' block in JavaScript?', ['To create a new function', 'To declare a new variable', 'To handle exceptions in JavaScript', 'To perform conditional statements'], 2],
  ['What is the use of the \'set\' keyword in JavaScript?', ['To declare a new function', 'To add a new property to an object', 'To remove a property from an object', 'To declare a new variable'], 1],
  ['What is the use of the \'typeof\' operator in JavaScript?', ['To check the type of a value or variable', 'To create a new function', 'To add a new property to an object', 'To remove a property from an object'], 0],
];

// function to select current question, generate choices, and identify correct answer
function selectQuestion() {
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  const nextQuestion = randomQuestion[0];
  const choices = randomQuestion[1];
  correctChoice = randomQuestion[2];

  // displays current question
  document.getElementById('question').innerHTML = nextQuestion;

  // generates choices
  let choiceElements ='';
  for (let i = 0; i < choices.length; i++) {
    choiceElements += '<input type=\'radio\' name=\'choice\' value=\'' + i + '\'>' + choices[i] +'<br>';


    document.getElementById('choices').innerHTML = choiceElements;
  }
};

// checks for correct answer
function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="choice"]:checked').value;
  if (selectedAnswer == correctChoice) {
    correctAnswers ++;
    document.getElementById('correctAnswers').innerHTML = correctAnswers;
  } else {
    timeLeft -= 5;
  }
  selectQuestion();
};

// event listener for start button and function for timer
document.getElementById('start').addEventListener('click', function() {
  initials = prompt('What are your initials?');
  selectQuestion();
  timerInterval = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('timeLeft').innerHTML = 60;
      alert('Time\'s up!!');
      saveHighScore(initials, correctAnswers);
    } else {
      timeLeft --;
      document.getElementById('timeLeft').innerHTML = timeLeft;
    }
  }, 1000);
});

// function for displaying high scores
const displayHighScores = () => {
  const highScores = JSON.parse(localStorage.getItem('highScores'));
  // sorts highScores
  if (highScores) {
    highScores.sort((a, b) => b.correctAnswers - a.correctAnswers);

    // loops through high scores and displays the top 10
    const highScoresTable = document.querySelector('#highScoresTable');
    const tBody = document.createElement('tbody');

    console.log(highScoresTable);
    for (let i = 0; i <= 9; i++) {
      const row = document.createElement('tr');
      const initials = document.createElement('td');
      initials.textContent = highScores[i].initials;
      const scoreCell = document.createElement('td');
      scoreCell.textContent = highScores[i].correctAnswers;
      row.appendChild(initials);
      row.appendChild(scoreCell);
      tBody.appendChild(row);
    }
    highScoresTable.appendChild(tBody);
  };
};

displayHighScores();

// function for storing high scores
function saveHighScore(initials, correctAnswers) {
  highScores.push({initials, correctAnswers});
  localStorage.setItem('highScores', JSON.stringify(highScores));
};

// event listener for submit button and functions to check answer and update score
submitButton.addEventListener('click', function() {
  checkAnswer();
  selectQuestion();
  console.log('click is working, find someone else to blame');
});
