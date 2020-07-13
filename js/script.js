const poolQuestionsArray = [
    {
        "questionNumber": "0",      
        "question": "Welcome to the most incredible Simpson`s Trivia!",
        "answers": ["Think you know all there is to know about the world’s favourite cartoon family?",
                    "Test your Simpsons knowledge to the max with 10 questions ranging from incredibly easy to incredibly hard! When you are done with every question, click the button Next to move to the next question.",
                    "Set the Number of questions and then click Go! button to start!"],
        "points": "0",
        "correctAnswer": "0",
        "imagePath": "images/Simpson0.png",
        "incorrectTitle": "",
        "incorrectMessage": "",
        "incorrectImage": ""
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
      "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente...."
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
        "incorrectMessage": "Maggie is the youngest child of Homer and Marge. She received her first name from Groening's youngest sister",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente...."
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
        "incorrectMessage": "The Simpsons takes place in the fictional American town of Springfield in an unknown and impossible-to-determine U.S. state",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente...."
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
        "incorrectMessage": "Bart's hobbies include skateboarding, watching television (especially The Krusty the Clown Show), reading comic books (especially Radioactive Man) and generally causing mischief",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente...."
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
        "incorrectMessage": "Bart's hobbies include skateboarding, watching television (especially The Krusty the Clown Show), reading comic books (especially Radioactive Man) and generally causing mischief",
        "incorrectImage": "Lo siento pero la respuesta correcta es la siguiente...."
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
]

const triviaQuestionsArray = [];
let triviaNumOfQuestions = 0;
let arrayQuestionPosition = 0;
let goButtonClicked = false;

// Defining the class for the TRIVIA
class Trivia {
    constructor(){
        this.score = 0;
        this.result = null;
    };
    evaluateUserAnswer = (pUserAnswer, pCorrectAnswer, pQuestionPoints) => {
        if (pUserAnswer === parseInt(pCorrectAnswer)) {
            this.accumulateTriviaScore(pQuestionPoints);
        } else {
            console.log('Incorrect Message', currentQuestion.incorrectMessage);
            currentDashboard.displayMessage(currentQuestion.incorrectTitle, currentQuestion.incorrectMessage, this.score);
        }            
 
    };
    accumulateTriviaScore = (pQuestionPoints) => {
        this.score += pQuestionPoints;
        currentDashboard.displayMessage('Hola', 'Hola', this.score);
    };
    knowledgeLevel = () => {
        console.log('Evaluating knowledge...');
    };
};

// Defining the class for the QUESTION
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

// Defining the class for the FEEDBACK DASHBOARD
class TriviaDashboard {
    constructor() {
        this.title = null;
        this.messsage = null;
        this.image = null;
        this.htmlTitle = document.querySelector('#response-header');
        this.htmlMessage = document.querySelector('#response-comment');
        this.htmlScore = document.querySelector('#response-score');
    };
    displayMessage = (pTitle, pMessage, pScore) => {
        console.log(pTitle);
        this.htmlTitle.innerText = pTitle;
        this.htmlMessage.innerText = pMessage;
        this.htmlScore.innerText = `Score: ${pScore} points`;
    } 
}

// creating the instance of the trivia
const currentTrivia = new Trivia();
// creating the instance of the dashboard
const currentDashboard = new TriviaDashboard();
// Creating the instance of the Question initialized with the instructions
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

// Displaying the instructions on the screen using the class methods
currentQuestion.displayQuestion();
currentQuestion.initAnswersFrame();
currentQuestion.displayAnswers();
currentQuestion.initImageFrame();
currentQuestion.displayImage();

// Function to move to next question it is mainly called by the Next button but also called by Go button after setting
// the number of questions
function nextQuestion() {
    console.log(currentQuestion.decisionMade);
    console.log(arrayQuestionPosition);

    if (currentQuestion.decisionMade && arrayQuestionPosition < triviaNumOfQuestions) {
        console.log('updating arrayQuestionPosition');
        arrayQuestionPosition++;
        console.log(arrayQuestionPosition);
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
    } else if (!currentQuestion.decisionMade) {
        alert('Pick your answer before moving to the next question!');
    } else {
        console.log('Display the result of the trivia!')
    }
}

// Assigning the event listener to the button Next - The callback function will move to the next question
const uiButtonNext = document.querySelector('#go-next-button');
uiButtonNext.addEventListener('click',nextQuestion);


function Go() {
    const htmlNumberOfQuestions = document.querySelector('#number-questions');
    if (htmlNumberOfQuestions.value === '') {
        alert('Please select the number of questions to go!');
    } else if (!goButtonClicked)  {
        goButtonClicked = true;
        triviaNumOfQuestions = htmlNumberOfQuestions.value;
        currentQuestion.decisionMade = true;
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


