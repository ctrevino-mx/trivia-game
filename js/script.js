const poolQuestionsArray = [
    {
        "questionNumber": "0",      
        "question": "Welcome to the most incredible Simpson`s Trivia!",
        "answers": ["Think you know all there is to know about the world’s favourite cartoon family?",
                    "Test your Simpsons knowledge to the max with 10 questions ranging from incredibly easy to incredibly hard! When you are done with every question, click the button Next to move to the next question.",
                    "Set the Number of questions and then click Go! button to start!"],
        "points": "0",
        "correctAnswer": "0",
        "imagePath": "images/Image0.jpeg",
        "incorrectTitle": "",
        "incorrectMessage": "",
        "incorrectImage": ""
      },
    {    
      "questionNumber": "1",      
      "question": "The most legendary ship in the galaxy, the Millenium Falcon, can can comfotably fit how many people in the cockpit?",
      "answers": ["Four", 
                  "Three",
                  "Six",
                  "Eight"],
      "points": "5",
      "correctAnswer": "0",
      "imagePath": "images/Star-Wars-Logo-02.jpg",
      "incorrectTitle": "Lo siento pero la respuesta correcta es la siguiente....",
      "incorrectMesssage": "Lo siento pero la respuesta correcta es la siguiente....",
      "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente...."
    },
    {
        "questionNumber": "2",      
        "question": "Quien es el papa de Luke Skylwalker?",
        "answers": ["Homero Simpson",
                    "Darth Vader",
                    "Forrest Gump",
                    "Mr. Bean"],
        "points": "2",
        "correctAnswer": "2",
        "imagePath": "images/Image0.jpeg",
        "incorrectTitle": "Lo siento pero la respuesta correcta es la siguiente....",
        "incorrectMesssage": "Lo siento pero la respuesta correcta es la siguiente....",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente...."
      },
      {
        "questionNumber": "3",      
        "question": "In which town do the Simpsons reside??",
        "answers": ["Shelbyville",
                    "Springfield",
                    "Ogdenville",
                    "Amitville"],
        "points": "3",
        "correctAnswer": "0",
        "imagePath": "images/Star-Wars-Logo-02.jpg",
        "incorrectTitle": "Lo siento pero la respuesta correcta es la siguiente....",
        "incorrectMesssage": "Lo siento pero la respuesta correcta es la siguiente....",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente...."
      },

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
]

const triviaQuestionsArray = [];
let triviaNumOfQuestions = 0;
let arrayQuestionPosition = 0;
let goButtonClicked = false;

class Trivia {
    constructor(){
        this.score = 0;
        this.result = null;
    };
    evaluateUserAnswer = (pUserAnswer, pCorrectAnswer, pQuestionPoints) => {
        if (pUserAnswer === parseInt(pCorrectAnswer)) {
            this.accumulateTriviaScore(pQuestionPoints);
        } else {
            console.log(currentQuestion.questionNumber);
            currentDashboard.displayMessage(currentQuestion.incorrectTitle);
        }            
 
    };
    accumulateTriviaScore = (pQuestionPoints) => {
        this.score += pQuestionPoints;
    };
    knowledgeLevel = () => {
        console.log('Evaluating knowledge...');
    };
};

class TriviaQuestion {
    constructor(questionNumber, question, answers, points, correctAnswer, imagePath, incorrectTitle, incorrectMessage, incorrectImage) {
        this.questionNumber = parseInt(questionNumber);
        this.question = question;
        this.answers = answers;
        this.points = parseInt(points);
        this.correctAnswer = parseInt(correctAnswer);
        this.imagePath = imagePath;
        this.incorrectTitle = incorrectTitle;
        this.incorrectMessage = incorrectMessage;
        this.incorrectImage = incorrectImage;
        this.userAnswer = '';
        this.decisionMade = false;
        this.htmlCanvasQuestion = document.querySelector('#questionDescription');
        this.htmlCanvasAnswers = document.querySelector('#questionAnswers');
        this.htmlCanvasImage = document.querySelector('#questionImageCanvas')
    }
    displayQuestion = () => {
        let questionIndicator = '';
        let questionPoints = '';

        if (this.questionNumber < triviaNumOfQuestions) {
            questionIndicator = `${this.questionNumber} of ${triviaNumOfQuestions} / `;
            questionPoints = `(${this.points} points)`;
        } else if (this.questionNumber === triviaNumOfQuestions  && this.questionNumber > 0) {
            questionIndicator = `${this.questionNumber} of ${triviaNumOfQuestions} / LAST QUESTION! - `;
            questionPoints = `(${this.points} points)`;
        }
        this.htmlCanvasQuestion.textContent = `${questionIndicator} ${this.question} ${questionPoints}`;        
    };
    // clearQuestion = () => {
    //     this.htmlCanvasQuestion.textContent = "";        
    // };
    selectOption = (e) => {
        console.log(event.target);
    };
    initAnswersFrame = () => {
        const myListOfAnswers = document.createElement('ul');
        for (let i = 0; i < 4; i++) {
            const myAnswer = document.createElement('li');
            myAnswer.innerHTML = `<a href="#"></a>`;
// ================
            myAnswer.addEventListener('click', (e) => {
                const optionSelected = event.target;
                if (!this.decisionMade) {
                    optionSelected.classList.add('questionSelected');
                    this.userAnswer = event.target.innerText.substring(0,1) - 1;
                    this.decisionMade = true;
                    currentTrivia.evaluateUserAnswer(this.userAnswer,parseInt(this.correctAnswer), parseInt(this.points));    
                } else {
                    alert('Question already answered! Take a look at the dashbord for feedback and then click Next button');
                }
            })
// ================
            myListOfAnswers.appendChild(myAnswer);
        }
        this.htmlCanvasAnswers.appendChild(myListOfAnswers);
    };
    displayAnswers = () => {
        const htmlCanvasUl = document.querySelectorAll('#questionAnswers ul');
        const htmlCanvasLi = document.querySelectorAll('#questionAnswers ul li');
        for (let i = 0; i < this.answers.length; i++) {
 //           htmlCanvasLi[i].innerText = this.answers[i];
            if (this.questionNumber === 0) {
                htmlCanvasLi[i].innerHTML = `<a href="#">${this.answers[i]}</a>`
            } else {
                htmlCanvasLi[i].innerHTML = `<a href="#">${i+1}. ${this.answers[i]}</a>`
            }
        };
    };
    // clearAnswers = () => {
    //     const htmlCanvasLi = document.querySelectorAll('#questionAnswers ul li');
    //     htmlCanvasLi.forEach(listElement => {
    //         listElement.innerText = '';
    //     });
    // };
    initImageFrame = () => {
        const myImage = document.createElement('img');
        myImage.classList.add('questionImage');       
        this.htmlCanvasImage.appendChild(myImage);        
    }
    displayImage = () => {
        const myImage = document.querySelector('#questionImageCanvas img');
        myImage.setAttribute('src', currentQuestion.imagePath);
        // myImage.setAttribute('width', 100);  
        // myImage.setAttribute('heigth', 100);  
    };
    clearImage = () => {
        const myImage = document.querySelector('#questionImageCanvas img');
        myImage.setAttribute('src','#');
    };
};

class TriviaDashboard {
    constructor() {
        this.title = null;
        this.messsage = null;
        this.image = null;
    };
    displayMessage = (pTitle) => {
        console.log(pTitle);
    } 
}

// creating the instance of the trivia
const currentTrivia = new Trivia();
const currentDashboard = new TriviaDashboard();
console.log(currentDashboard);

// Creating the instance and displayig the instructions screen 
const currentQuestion = new TriviaQuestion(
    poolQuestionsArray[arrayQuestionPosition].questionNumber,
    poolQuestionsArray[arrayQuestionPosition].question,
    poolQuestionsArray[arrayQuestionPosition].answers,
    poolQuestionsArray[arrayQuestionPosition].points,
    poolQuestionsArray[arrayQuestionPosition].correctAnswer,
    poolQuestionsArray[arrayQuestionPosition].imagePath,
    poolQuestionsArray[arrayQuestionPosition].incorrectTitle,
    poolQuestionsArray[arrayQuestionPosition].incorrectMessage,
    poolQuestionsArray[arrayQuestionPosition].incorrectImage
);
console.log(currentQuestion);


currentQuestion.displayQuestion();
currentQuestion.initAnswersFrame();
currentQuestion.displayAnswers();
currentQuestion.initImageFrame();
currentQuestion.displayImage();

// Displaying next question
function nextQuestion() {
    arrayQuestionPosition++;
    if (arrayQuestionPosition <= triviaNumOfQuestions) {
        // currentQuestion.clearQuestion();
        // currentQuestion.clearAnswers();
        currentQuestion.clearImage();
        currentQuestion.decisionMade = false;

        currentQuestion.questionNumber = poolQuestionsArray[arrayQuestionPosition].questionNumber;
        currentQuestion.question = poolQuestionsArray[arrayQuestionPosition].question;
        currentQuestion.answers = poolQuestionsArray[arrayQuestionPosition].answers;
        currentQuestion.points = poolQuestionsArray[arrayQuestionPosition].points;
        currentQuestion.correctAnswer = poolQuestionsArray[arrayQuestionPosition].correctAnswer;
        currentQuestion.imagePath = poolQuestionsArray[arrayQuestionPosition].imagePath;
        currentQuestion.incorrectTitle = poolQuestionsArray[arrayQuestionPosition].incorrectTitle;
        currentQuestion.incorrectMessage = poolQuestionsArray[arrayQuestionPosition].incorrectMessage;
        currentQuestion.incorrectImage = poolQuestionsArray[arrayQuestionPosition].incorrectImage;

        currentQuestion.displayQuestion();
        currentQuestion.displayAnswers();
        currentQuestion.displayImage();    
    }
}

// Assigning the event listener to the button Next
const uiButtonNext = document.querySelector('#go-next-button');
uiButtonNext.addEventListener('click',nextQuestion);

function Go() {
    const htmlNumberOfQuestions = document.querySelector('#number-questions');
    if (htmlNumberOfQuestions.value === '') {
        alert('Please select the number of questions to go!');
    } else if (!goButtonClicked)  {
        goButtonClicked = true;
        triviaNumOfQuestions = htmlNumberOfQuestions.value;
        nextQuestion();
    } else {
        alert('Play the game! Answer the question and then click Next button');
    }
}

//Assigning the event listener to the button Go
const uiButtonGo = document.querySelector('#go-button');
uiButtonGo.addEventListener('click',Go);


// ############################################################################################
// Paintig the option selected by the user
// function paintOptionSelected(e) {
//     const optionSelected = event.target;

 //   const previousOptionSelected = currentQuestion.userAnswer;
 //   const uiAllAnchorElements = document.querySelectorAll('#questionAnswers ul li a');

//    if (previousOptionSelected !== '') {
//        uiAllAnchorElements[previousOptionSelected].classList.remove('questionSelected');
//    };

//     // optionSelected.classList.add('questionSelected');
// }

// Detemining if option selected is right or not
// function evaluateOptionSelected(e) {
//     if (currentQuestion.userAnswer === parseInt(currentQuestion.correctAnswer)) {
//         console.log('Correct answer');
//     } else {
//         console.log('Incorrect answer');
//     }
// }

// function processOptionSelected(e) {
//     console.log('Evento', event.target)
//     paintOptionSelected(e);
//     currentQuestion.userAnswer = event.target.innerText.substring(0,1) - 1;
//     evaluateOptionSelected(e);
// };

// const liAnswerOptions = document.querySelectorAll('#questionAnswers ul li');
// liAnswerOptions.forEach(option => {
//     option.addEventListener('click',processOptionSelected);
// });