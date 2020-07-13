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
        "incorrectMessage": "Bart's hobbies include skateboarding, watching television (especially The Krusty the Clown Show), reading comic books (especially Radioactive Man) and generally causing mischief",
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
]

//const triviaQuestionsArray = [];
let triviaNumOfQuestions = 0;
let arrayQuestionPosition = 0;
let triviaQuestionCounter = 0;
let goButtonClicked = false;

// Defining the class for the TRIVIA
class Trivia {
    constructor(){
        this.score = 0;
        this.totalScore = 0;
        this.rank = 0;
        this.isThisComplete = false;
        this.title = '';
        this.message = '';
        this.currentQuestion=0;
        this.questions = [];
    };
    defineQuestions = () => {
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
        console.log(this.questions);
    };
    getNextQuestion = (pIndex) => {
        return this.questions[pIndex];
      };
    evaluateUserAnswer = (pUserAnswer, pCorrectAnswer, pQuestionPoints) => {
        this.totalScore += pQuestionPoints;
        if (pUserAnswer === parseInt(pCorrectAnswer)) {
            this.accumulateTriviaScore(pQuestionPoints);
            currentDashboard.displayMessage(currentQuestion.correctTitle, currentQuestion.correctMessage, this.score, this.totalScore);
        } else {
            currentDashboard.displayMessage(currentQuestion.incorrectTitle, currentQuestion.incorrectMessage, this.score, this.totalScore);
        }
        this.evaluateTriviaStatus();            
    };
    evaluateTriviaStatus = () => {
 //       if (arrayQuestionPosition === parseInt(triviaNumOfQuestions)) {
        if (triviaQuestionCounter === parseInt(triviaNumOfQuestions)) {
            this.isThisComplete = true;
        }
    }
    accumulateTriviaScore = (pQuestionPoints) => {
        this.score += pQuestionPoints;
    };
    getRank = () => {
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
    getFinalDashboard = () => {
        this.title = poolFinalFeedbackArray[this.rank].Title;
        this.message = poolFinalFeedbackArray[this.rank].Speaker + poolFinalFeedbackArray[this.rank].Message;
    }
};

// Defining the class for the QUESTION
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
    displayQuestion = () => {
        let questionIndicator = '';
        let questionPoints = '';
        console.log('triviaQuestionCounter', typeof(triviaQuestionCounter));
        console.log('triviaNumOfQuestions', typeof(triviaNumOfQuestions));

        // if (this.questionNumber < triviaNumOfQuestions) {
        if (triviaQuestionCounter < triviaNumOfQuestions) {
 //           questionIndicator = `${this.questionNumber} of ${triviaNumOfQuestions} / `;
            questionIndicator = `${triviaQuestionCounter} of ${triviaNumOfQuestions} / `; 
            questionPoints = `(${this.points} points)`;
//        } else if (this.questionNumber === triviaNumOfQuestions  && this.questionNumber > 0) {
        } else if (triviaQuestionCounter === triviaNumOfQuestions  && triviaQuestionCounter > 0) {
//            questionIndicator = `${this.questionNumber} of ${triviaNumOfQuestions} / LAST QUESTION! - `;
            console.log('I0m here..')
            questionIndicator = `${triviaQuestionCounter} of ${triviaNumOfQuestions} / LAST QUESTION! - `;
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
    displayMessage = (pTitle, pMessage, pScore, ptotalScore) => {
        this.htmlTitle.innerText = pTitle;
        this.htmlMessage.innerText = pMessage;
        this.htmlScore.innerText = `Score: ${pScore} of ${ptotalScore} points`;
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
    poolQuestionsArray[arrayQuestionPosition].incorrectImage,
    poolQuestionsArray[arrayQuestionPosition].correctTitle,
    poolQuestionsArray[arrayQuestionPosition].correctMessage,
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

//    if (currentQuestion.decisionMade && arrayQuestionPosition < triviaNumOfQuestions) {
    if (currentQuestion.decisionMade && triviaQuestionCounter < triviaNumOfQuestions) {
        console.log(triviaQuestionCounter);
        const indexQuestion = currentTrivia.getNextQuestion(triviaQuestionCounter);
        console.log('Next Question', indexQuestion);
        arrayQuestionPosition++;
        triviaQuestionCounter++;
 
        // currentQuestion.clearQuestion();
        // currentQuestion.clearAnswers();
        currentQuestion.clearImage();
        currentQuestion.decisionMade = false;

        currentQuestion.questionNumber = poolQuestionsArray[indexQuestion].questionNumber;
        currentQuestion.question = poolQuestionsArray[indexQuestion].question;
        currentQuestion.answers = poolQuestionsArray[indexQuestion].answers;
        currentQuestion.points = poolQuestionsArray[indexQuestion].points;
        currentQuestion.correctAnswer = poolQuestionsArray[indexQuestion].correctAnswer;
        currentQuestion.imagePath = poolQuestionsArray[indexQuestion].imagePath;
        currentQuestion.incorrectTitle = poolQuestionsArray[indexQuestion].incorrectTitle;
        currentQuestion.incorrectMessage = poolQuestionsArray[indexQuestion].incorrectMessage;
        currentQuestion.incorrectImage = poolQuestionsArray[indexQuestion].incorrectImage;
        currentQuestion.correctMessage = poolQuestionsArray[indexQuestion].correctMessage;
        currentQuestion.correctTitle = poolQuestionsArray[indexQuestion].correctTitle;


        // currentQuestion.questionNumber = poolQuestionsArray[arrayQuestionPosition].questionNumber;
        // currentQuestion.question = poolQuestionsArray[arrayQuestionPosition].question;
        // currentQuestion.answers = poolQuestionsArray[arrayQuestionPosition].answers;
        // currentQuestion.points = poolQuestionsArray[arrayQuestionPosition].points;
        // currentQuestion.correctAnswer = poolQuestionsArray[arrayQuestionPosition].correctAnswer;
        // currentQuestion.imagePath = poolQuestionsArray[arrayQuestionPosition].imagePath;
        // currentQuestion.incorrectTitle = poolQuestionsArray[arrayQuestionPosition].incorrectTitle;
        // currentQuestion.incorrectMessage = poolQuestionsArray[arrayQuestionPosition].incorrectMessage;
        // currentQuestion.incorrectImage = poolQuestionsArray[arrayQuestionPosition].incorrectImage;
        // currentQuestion.correctMessage = poolQuestionsArray[arrayQuestionPosition].correctMessage;
        // currentQuestion.correctTitle = poolQuestionsArray[arrayQuestionPosition].correctTitle;

        currentQuestion.displayQuestion();
        currentQuestion.displayAnswers();
        currentQuestion.displayImage();    
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


function Go() {
    const htmlNumberOfQuestions = document.querySelector('#number-questions');
    if (htmlNumberOfQuestions.value === '') {
        alert('Please select the number of questions to go!');
    } else if (!goButtonClicked)  {
        goButtonClicked = true;
        triviaNumOfQuestions = parseInt(htmlNumberOfQuestions.value);
        currentQuestion.decisionMade = true;
        
        //************Getting the questions for the trivia
        currentTrivia.defineQuestions();

        nextQuestion();
    } else {
        alert('Play the game! Answer the question and then click Next button');
    }
}

//Assigning the event listener to the button Go
const uiButtonGo = document.querySelector('#go-button');
uiButtonGo.addEventListener('click',Go);

function displayFinalFeedback() {
    if (currentTrivia.isThisComplete) {
        currentTrivia.getRank();
        currentTrivia.getFinalDashboard();
        console.log(currentTrivia.title);
        console.log(currentTrivia.message);
        currentDashboard.displayMessage(currentTrivia.title, currentTrivia.message, currentTrivia.score, currentTrivia.totalScore);
    } else {
        alert('Please complete the trivia before getting your rank');
    }
}
//Assigning the event listener to the button Get your final rank
const uiButtonRank = document.querySelector('#get-rank-button');
uiButtonRank.addEventListener('click',displayFinalFeedback);

function resetTrivia () {
    console.log('Resseting trivia...');
};
// Assigning the event listener to the button to reset the trivia
const uiButtonReset = document.querySelector('#reset-button');
uiButtonReset.addEventListener('click', resetTrivia)

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