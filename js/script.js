const poolQuestionsArray = [
    {
        "questionNumber": "0",      
        "question": "Welcome to the most incredible Simpson`s Trivia!",
        "answers": ["Think you know all there is to know about the world’s favourite cartoon family?",
                    "Test your Simpsons knowledge to the max with 10 questions ranging from incredibly easy to incredibly hard! When you are done with every question, click the button Next to move to the next question.",
                    "Set the Number of questions and then click Go! button to start!",
                    ""],
        "points": "0",
        "correctAnswer": "0",
        "imagePath": "images/Simpson0.png",
        "incorrectTitle": "",
        "incorrectMessage": "",
        "incorrectImage": "",
        "correctTitle": "",
        "correctMessage": ""
      },
    {    
      "questionNumber": "1",      
      "question": "What is the name of the father in The Simpsons",
      "answers": ["Abe", 
                  "Ned",
                  "Moe",
                  "Homer"],
      "points": "10",
      "correctAnswer": "3",
      "imagePath": "images/Simpson1.png",
      "incorrectTitle": "Dooooh",
      "incorrectMessage": "Homer Jay Simpson is the fictional character and the father of the American animated sitcom The Simpsons.",
      "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente....",
      "correctTitle": "Ay Caramba!",
      "correctMessage": "You are right! Homer Jay Simpson is the fictional character and the father of the American animated sitcom The Simpsons."
    },
    {
        "questionNumber": "2",      
        "question": "What is the name of the youngest child in The Simpsons?",
        "answers": ["Apu",
                    "Marge",
                    "Maggie",
                    "Lisa"],
        "points": "2",
        "correctAnswer": "2",
        "imagePath": "images/Simpson2.png",
        "incorrectTitle": "A-ha....",
        "incorrectMessage": "Maggie is the youngest child of Homer and Marge. She received her first name from Groening's youngest sister.",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente....",
        "correctTitle": "Wow!!!",
        "correctMessage": "You are right! Maggie is the youngest child of Homer and Marge. She received her first name from Groening's youngest sister."
    },
      {
        "questionNumber": "3",      
        "question": "In which town do the Simpsons reside?",
        "answers": ["Shelbyville",
                    "Springfield",
                    "Ogdenville",
                    "Amitville"],
        "points": "3",
        "correctAnswer": "1",
        "imagePath": "images/Simpson3.png",
        "incorrectTitle": "Mmmmhhhhh....",
        "incorrectMessage": "Wrong answer! The Simpsons takes place in the fictional American town of Springfield in an unknown and impossible-to-determine U.S. state",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente....",
        "correctTitle": "Mmm, donuts!!!",
        "correctMessage": "Awesome! The Simpsons takes place in the fictional American town of Springfield in an unknown and impossible-to-determine U.S. state"
    },
      {
        "questionNumber": "4",      
        "question": "Who in The Simpsons likes to go skateboarding?",
        "answers": ["Bart Simpson",
                    "Jessica Simpson",
                    "Ned Simpson",
                    "Apu Simpson"],
        "points": "1",
        "correctAnswer": "0",
        "imagePath": "images/Simpson4.png",
        "incorrectTitle": "¡Ay, caramba!",
        "incorrectMessage": "You must be kidding! Bart's hobbies include skateboarding, watching television (especially The Krusty the Clown Show), reading comic books (especially Radioactive Man) and generally causing mischief",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente....",
        "correctTitle": "Woo Hoo!!!",
        "correctMessage": "Well done! Bart's hobbies include skateboarding, watching television (especially The Krusty the Clown Show), reading comic books (especially Radioactive Man) and generally causing mischief"
    },
      {
        "questionNumber": "5",      
        "question": "What is the name of Homer Simpsons mother?",
        "answers": ["Marge Simpson",
                    "Edna Simpson",
                    "Selma Simpson",
                    "Mona Simpson"],
        "points": "1",
        "correctAnswer": "3",
        "imagePath": "images/Simpson5.png",
        "incorrectTitle": "¡Ay, caramba!",
        "incorrectMessage": "That is not the correct answer. Mona Penelope Simpson was the estranged wife of Abe Simpson and the mother of Homer Simpson",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente....",
        "correctTitle": "Cowabunga!",
        "correctMessage": "You did it again! Mona Penelope Simpson was the estranged wife of Abe Simpson and the mother of Homer Simpson"
    }
]

const poolFinalFeedbackArray = [
    {
        "Title": "Are you serious!",
        "Speaker": "Mr. Burns says:",
        "Message": "Smithers, Suelte a los perros. Tenemos un incompentente antes nuestros ojos",
        "imagePath": "images/Star-Wars-Logo-02.jpeg"
    },
    {
        "Title": "Doooh!",
        "Speaker": "Homer says:",
        "Message": "Smithers, Suelte a los perros. Tenemos un incompentente antes nuestros ojos",
        "imagePath": "images/Image.jpeg"
    },
    {
        "Title": "A-ha!",
        "Speaker": "Nelson says:",
        "Message": "Smithers, Suelte a los perros. Tenemos un incompentente antes nuestros ojos",
        "imagePath": "images/Star-Wars-Logo-02.jpeg"
    },
    {
        "Title": "Are you serious!",
        "Speaker": "Lisa says:",
        "Message": "Smithers, Suelte a los perros. Tenemos un incompentente antes nuestros ojos",
        "imagePath": "images/Image0.jpeg"
    },
    {
        "Title": "Are you serious!",
        "Speaker": "Bart says:",
        "Message": "Smithers, Suelte a los perros. Tenemos un incompentente antes nuestros ojos",
        "imagePath": "images/Star-Wars-Logo-02.jpeg"
    }
];
const imagesArray = ['images/Simpson0.png','images/Simpson1.png', 'images/Simpson2.png',
                'images/Simpson3.png','images/Simpson4.png','images/Simpson5.png',
                'images/Simpson6.png'];

const colorScheme = [['#70D1FE', '#FFFFFF', '#FED90F'],['#107DC0','#D6E69F', '#FFD521'],
                    ['#009DDC','#FED41D','#F14E28'], ['#7BC242','#B4CA8A','#FFD521']
                ];

let triviaNumOfQuestions = 0;
let arrayQuestionPosition = 0;
let triviaQuestionCounter = 0;
let goButtonClicked = false;
// =======================================================================================
// Defining the class for the TRIVIA
// This class will keep data as the trivia score, global score, final knowledge rank, the status of the game (complete or not),
// questions that will be displayed and the messages for the final feedback once the trivia is complete
// =======================================================================================
class Trivia {
    constructor(){
        this.score = 0;
        this.totalScore = 0;
        this.rank = 0;
        this.isThisComplete = false;
        this.title = '';
        this.message = '';
        this.questions = [];
    };
    defineQuestions = () => { // Get randomly the set of questions to be displayed
        const arraySize = poolQuestionsArray.length;
        for (let i = 1; i <= triviaNumOfQuestions; i++) {
            let triviaQuestion = Math.floor(Math.random()*arraySize);
            if (triviaQuestion === 0) {
                while (triviaQuestion === 0) {
                    triviaQuestion = Math.floor(Math.random()*arraySize);
                };
            };
            if (this.questions.indexOf(triviaQuestion) !== -1) {
                while (this.questions.indexOf(triviaQuestion) !== -1 || triviaQuestion === 0) {
                    triviaQuestion = Math.floor(Math.random()*arraySize);
                }
            }
            this.questions.push(triviaQuestion);
        };
    };
    getNextQuestion = (pIndex) => { // Return next question to be displayed
        return this.questions[pIndex];
      };
    evaluateUserAnswer = (pUserAnswer, pCorrectAnswer, pQuestionPoints) => { // Evaluate if the answer is correct or not
        this.totalScore += pQuestionPoints;
        if (pUserAnswer === parseInt(pCorrectAnswer)) {
            this.accumulateTriviaScore(pQuestionPoints);
            currentDashboard.displayMessage(currentQuestion.correctTitle, currentQuestion.correctMessage, this.score, this.totalScore);
        } else {
            currentDashboard.displayMessage(currentQuestion.incorrectTitle, currentQuestion.incorrectMessage, this.score, this.totalScore);
        }
        this.evaluateTriviaStatus();            
    };
    evaluateTriviaStatus = () => { //Turns a boolena variable if the Trivia is complete and user must request the final rank
        if (triviaQuestionCounter === parseInt(triviaNumOfQuestions)) {
            this.isThisComplete = true;
        }
    }
    accumulateTriviaScore = (pQuestionPoints) => { // Accumulates the score of correct answers
        this.score += pQuestionPoints;
    };
    getRank = () => {  // Get the rank based on the formula score / total score
        const grade = Math.round((this.score / this.totalScore) * 100);
        if (grade >= 0 && grade < 19) {
            this.rank = 0;
        } else if (grade >= 20 && grade < 39) {
            this.rank = 1;
        } else if (grade >= 40 && grade < 59) {
            this.rank = 2;
        } else if (grade >= 60 && grade < 80) {
            this.rank = 3;
        } else {
            this.rank = 4;
        }
    };
    getFinalDashboard = () => { // Get the title and the message for the rank that will be dispalyed in the Dashboard
        this.title = poolFinalFeedbackArray[this.rank].Title;
        this.message = poolFinalFeedbackArray[this.rank].Speaker + poolFinalFeedbackArray[this.rank].Message;
    }
};

// =======================================================================================
// Defining the class for the TRIVIA QUESTION
// This class stores and control all the info related with an specific question itself and it's loaded 
// from the array poolQuestionsArray
// =======================================================================================
class TriviaQuestion {
    constructor(questionNumber, question, answers, points, correctAnswer, imagePath, incorrectTitle, incorrectMessage, incorrectImage, correctTitle, correctMessage) {
        this.questionNumber = parseInt(questionNumber);
        this.question = question;
        this.answers = answers;
        this.points = parseInt(points);
        this.correctAnswer = parseInt(correctAnswer);
        this.imagePath = imagePath;
        this.incorrectTitle = incorrectTitle;
        this.incorrectMessage = incorrectMessage;
        this.incorrectImage = incorrectImage;
        this.correctTitle = correctTitle;
        this.correctMessage = correctMessage;
        this.userAnswer = '';
        this.decisionMade = false;
        this.htmlCanvasQuestion = document.querySelector('#questionDescription');
        this.htmlCanvasAnswers = document.querySelector('#questionAnswers');
        this.htmlCanvasImage = document.querySelector('#questionImageCanvas')
    }
    displayQuestion = () => { // Display the question in the board
        let questionIndicator = '';
        let questionPoints = '';

        if (triviaQuestionCounter < triviaNumOfQuestions) {
            questionIndicator = `${triviaQuestionCounter} of ${triviaNumOfQuestions} / `; 
            questionPoints = `(${this.points} points)`;
        } else if (triviaQuestionCounter === triviaNumOfQuestions  && triviaQuestionCounter > 0) {
            questionIndicator = `${triviaQuestionCounter} of ${triviaNumOfQuestions} / LAST QUESTION! - `;
            questionPoints = `(${this.points} points)`;
        }
        this.htmlCanvasQuestion.textContent = `${questionIndicator} ${this.question} ${questionPoints}`;        
    };
    initAnswersFrame = () => { //Dinamically creates the li elements that will keep the answer options for a specific question
        const myListOfAnswers = document.createElement('ul');
        for (let i = 0; i < 4; i++) {
            const myAnswer = document.createElement('li');
            myAnswer.innerHTML = `<a href="#"></a>`;
            myAnswer.addEventListener('click', (e) => {   // Adding the event listener to every li element. What happens when 
                const optionSelected = event.target;      // user clicks on them
                console.log(this.questionNumber);
                if (!this.decisionMade && this.questionNumber !== 0) {
                    optionSelected.classList.add('questionSelected');
                    this.userAnswer = event.target.innerText.substring(0,1) - 1;
                    this.decisionMade = true;
                    currentTrivia.evaluateUserAnswer(this.userAnswer,parseInt(this.correctAnswer), parseInt(this.points));    
                } else {
                    alert('Question already answered! Take a look at the dashbord for feedback and then click Next button');
                }
            })
            myListOfAnswers.appendChild(myAnswer);
        }
        this.htmlCanvasAnswers.appendChild(myListOfAnswers);
    };
    displayAnswers = () => { // Display the answers for an specific question in the trivia board
        const htmlCanvasLi = document.querySelectorAll('#questionAnswers ul li');
        for (let i = 0; i < this.answers.length; i++) {
            if (this.questionNumber === 0) {
                htmlCanvasLi[i].innerHTML = `<a href="#">${this.answers[i]}</a>`
            } else {
                htmlCanvasLi[i].innerHTML = `<a href="#">${i+1}. ${this.answers[i]}</a>`
            }
        };
    };
    initImageFrame = () => {                            // Create dinamically the img in the trivia dashbord aside the question
        const myImage = document.createElement('img');
        myImage.classList.add('questionImage');       
        this.htmlCanvasImage.appendChild(myImage);        
    }
    displayImage = (pPath) => {
        const myImage = document.querySelector('#questionImageCanvas img');  // Display the image for every specific question
 //       myImage.setAttribute('src', currentQuestion.imagePath);
       myImage.setAttribute('src', pPath);
    };
    clearImage = () => {
        const myImage = document.querySelector('#questionImageCanvas img');  // Clean the image for every specific question
        myImage.setAttribute('src','#');
    };
};

// =======================================================================================
// Defining the class for the FEEDBACK DASHBOARD
// This class displays the different messages in the Trivia Dashboard: Title, Message and Score
// =======================================================================================
class TriviaDashboard {
    constructor() {
        this.htmlTitle = document.querySelector('#response-header');
        this.htmlMessage = document.querySelector('#response-comment');
        this.htmlScore = document.querySelector('#response-score');
    };
    displayMessage = (pTitle, pMessage, pScore, ptotalScore) => {
        this.htmlTitle.innerText = pTitle;
        this.htmlMessage.innerText = pMessage;
        this.htmlScore.innerText = `Score: ${pScore} of ${ptotalScore} points`;
    } 
}


// Function to Initialize trivia with initial directions that are stored in position 0 of poolQuestionsArray
// This function is called initially when loading the page and when the Play again button is clicked
function setQuestionBoard (pIndex) {
    currentQuestion.questionNumber = parseInt(poolQuestionsArray[pIndex].questionNumber);
    currentQuestion.question = poolQuestionsArray[pIndex].question;
    currentQuestion.answers = poolQuestionsArray[pIndex].answers;
    currentQuestion.points = parseInt(poolQuestionsArray[pIndex].points);
    currentQuestion.correctAnswer = parseInt(poolQuestionsArray[pIndex].correctAnswer);
    currentQuestion.imagePath = poolQuestionsArray[pIndex].imagePath;
    currentQuestion.incorrectTitle = poolQuestionsArray[pIndex].incorrectTitle;
    currentQuestion.incorrectMessage = poolQuestionsArray[pIndex].incorrectMessage;
    currentQuestion.incorrectImage = poolQuestionsArray[pIndex].incorrectImage;
    currentQuestion.correctMessage = poolQuestionsArray[pIndex].correctMessage;
    currentQuestion.correctTitle = poolQuestionsArray[pIndex].correctTitle;

    currentQuestion.displayQuestion();
    currentQuestion.displayAnswers();
    if (pIndex === 0) {
        changeImage();
    }
}

// =======================================================================================
// Creating instances of Trivia, Question and Dashboard
// =======================================================================================
// creating the instance of the trivia
const currentTrivia = new Trivia();
// creating the instance of the dashboard
const currentDashboard = new TriviaDashboard();
// Creating the instance of the Question initialized with the instructions
const currentQuestion = new TriviaQuestion;

// =======================================================================================
// Creating dinamically the question's html elements for the four answer options options and the image
// Also the function is called to initialize the board with the trivia instructions for the first time
// =======================================================================================
currentQuestion.initAnswersFrame();
currentQuestion.initImageFrame();
setQuestionBoard(0);

// =======================================================================================
// Function to load the object with the next question info from the array. It is called everytime 
// we want to move to the next question
// The list of questions for the trivia are created when user click the go button
// =======================================================================================
function nextQuestion() {
    if (currentQuestion.decisionMade && triviaQuestionCounter < triviaNumOfQuestions) {
        const indexQuestion = currentTrivia.getNextQuestion(triviaQuestionCounter);
        arrayQuestionPosition++;
        triviaQuestionCounter++;
 
 //       currentQuestion.clearImage();
        currentQuestion.decisionMade = false;

         setQuestionBoard(indexQuestion);   
 
    } else if (currentQuestion.questionNumber === 0) {
        alert('Set the number of question and go for it Homer!');
    } else if (!currentQuestion.decisionMade && currentQuestion.questionNumber !==0) {
            alert('Pick your answer before moving to the next question!');
    } else {
            alert('Trivia is complete! Do you want to know your expert rank! Click on "Get your final rank!" butoon');
    }
}

// Assigning the event listener to the button Next - The callback function will move to the next question
const uiButtonNext = document.querySelector('#go-next-button');
uiButtonNext.addEventListener('click',nextQuestion);


// =======================================================================================
// Functionallity to start the Trivia. Takes the number of questions selected by the user
// and call the object currentTrivia to define all the questiosn for this Trivia
// =======================================================================================
function Go() {
    const htmlNumberOfQuestions = document.querySelector('#number-questions');
    if (htmlNumberOfQuestions.value === '') {                   // Validate the user selects a number of questions
        alert('Please select the number of questions to go!');
    } else if (!goButtonClicked)  {                             // If this is the first time the user click on Go button
        goButtonClicked = true;                                 
        triviaNumOfQuestions = parseInt(htmlNumberOfQuestions.value);
        currentQuestion.decisionMade = true;
        currentTrivia.defineQuestions();                        // Call the object Trivia to define the set of questions for the trivia
        nextQuestion();                                         // Display the first question on the board
    } else {
        alert('Play the game! Answer the question and then click Next button');
    }
}

//Assigning the event listener to the button Go
const uiButtonGo = document.querySelector('#go-button');
uiButtonGo.addEventListener('click',Go);

// =======================================================================================
// Functionallity to display the messages in the Trivia Dashboard. We call current trivia object
// for that
// =======================================================================================
function displayFinalFeedback() {
    if (currentTrivia.isThisComplete) {
        currentTrivia.getRank();
        currentTrivia.getFinalDashboard();
        currentDashboard.displayMessage(currentTrivia.title, currentTrivia.message, currentTrivia.score, currentTrivia.totalScore);
    } else {
        alert('Please complete the trivia before getting your rank');
    }
}
//Assigning the event listener to the button Get your final rank
const uiButtonRank = document.querySelector('#get-rank-button');
uiButtonRank.addEventListener('click',displayFinalFeedback);

// =======================================================================================
// Functionallity to start the trivia for a new game. Basically we initialize Global variables
// Dashboard and Question board with directions
// =======================================================================================
function initializeDashboard () {
    currentDashboard.displayMessage('Trivia Dashbord', 'Get your feedback here...', 0, 0);
}

function resetTrivia () {
    goButtonClicked = false;
    triviaQuestionCounter = 0;
    triviaNumOfQuestions = 0;
    arrayQuestionPosition = 0;

    const htmlNumberOfQuestions = document.querySelector('#number-questions');
    htmlNumberOfQuestions.value = '';

    currentTrivia.isThisComplete = false;
    currentTrivia.title = '';
    currentTrivia.message = '';
    currentTrivia.score = 0;
    currentTrivia.totalScore = 0;
    currentTrivia.questions = [];
    currentTrivia.rank = 0;
    currentTrivia.currentQuestion = 0;

    currentQuestion.userAnswer = '';
    currentQuestion.decisionMade = false;

    setQuestionBoard(0);
    initializeDashboard();
};

// Assigning the event listener to the button to reset the trivia
const uiButtonReset = document.querySelector('#reset-button');
uiButtonReset.addEventListener('click', resetTrivia)

// =======================================================================================
// Functionallity to images in the question board every 5 seconds
// =======================================================================================
imageTimer = setInterval(changeImage, 5000);

function changeImage() {
    const indexImage = Math.floor(Math.random() * imagesArray.length);
    
    currentQuestion.displayImage(imagesArray[indexImage]);
}

// =======================================================================================
// Functionallity to set color schemes
// =======================================================================================

function setColorScheme() {
    const uiSelectScheme = document.querySelector('#select-scheme');
    const uiWrapper = document.querySelector('.wrapper'); 
    const uiQuestionLayout = document.querySelector('.questionLayout');
    const uiFooter = document.querySelector('footer');

    const colorWrapper = colorScheme[uiSelectScheme.value][0];
    const colorQuestionLayout = colorScheme[uiSelectScheme.value][1];
    const colorFooter = colorScheme[uiSelectScheme.value][2];

    console.log(`Background-color: ${colorWrapper};`);
    uiWrapper.setAttribute('style', `Background-color: ${colorWrapper};`);
    uiQuestionLayout.setAttribute('style', `Background-color: ${colorQuestionLayout};`);
    uiFooter.setAttribute('style', `Background-color: ${colorFooter};`);
    console.log(uiWrapper);

//     .questionLayout
//     footer
}

// Assigning the event listener to the button to set color scheme
const uiSelectScheme = document.querySelector('#select-scheme');
uiSelectScheme.addEventListener('change', setColorScheme);
