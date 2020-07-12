const poolQuestionsArray = [
    {
        "questionNumber": "0",      
        "question": "Welcome to the most incredible Simpson`s Trivia!",
        "answers": ["Think you know all there is to know about the world’s favourite cartoon family?",
                    "Test your Simpsons knowledge to the max with 10 questions ranging from incredibly easy to incredibly hard! When you are done with every question, click the button Next to move to the next question.",
                    "Set the Number of questions and then click Go! button to start!"],
        "points": "0",
        "correctAnswer": "0",
        "hint": "",
        "imagePath": "images/Image0.jpeg",
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
      "hint": "",
      "imagePath": "images/Star-Wars-Logo-02.jpg"
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
        "hint": "He is in the dark side",
        "imagePath": "images/Image0.jpeg"
      }  
]

const triviaQuestionsArray = [];
let triviaNumOfQuestions = 0;
let arrayQuestionPosition = 0; 
let goButtonClicked = false;

class TriviaQuestion {
    constructor(questionNumber, question, answers, points, correctAnswer, hint, imagePath) {
        this.questionNumber = parseInt(questionNumber);
        this.question = question;
        this.answers = answers;
        this.points = parseInt(points);
        this.correctAnswer = parseInt(correctAnswer);
        this.hint = hint;
        this.imagePath = imagePath;
        this.userAnswer = null;
        this.isHinted = false;
        this.toReviewLater = false;
        this.htmlCanvasQuestion = document.querySelector('#questionDescription');
        this.htmlCanvasAnswers = document.querySelector('#questionAnswers')
        this.htmlCanvasImage = document.querySelector('#questionImage');
    }
    displayQuestion = () => {
        let questionIndicator = '';
        console.log(this.questionNumber, triviaNumOfQuestions);
        if (this.questionNumber === 0) {
            questionIndicator = '';
        } else if (this.questionNumber === triviaNumOfQuestions) {
            questionIndicator = `(${this.questionNumber} of ${triviaNumOfQuestions}) LAST QUESTION! - `;
        } else {
            questionIndicator = `(${this.questionNumber} of ${triviaNumOfQuestions})`;
        }
        this.htmlCanvasQuestion.textContent = `${questionIndicator} ${this.question}`;        
    };
    // clearQuestion = () => {
    //     this.htmlCanvasQuestion.textContent = "";        
    // };
    initAnswersFrame = () => {
        const myListOfAnswers = document.createElement('ul');
        for (let i = 0; i < 4; i++) {
            const myAnswer = document.createElement('li');
            myAnswer.innerHTML = `<a href="#"></a>`;
            myListOfAnswers.appendChild(myAnswer);
        }
        this.htmlCanvasAnswers.appendChild(myListOfAnswers);
        console.log(this.htmlCanvasAnswers);
    };
    displayAnswers = () => {
        const htmlCanvasUl = document.querySelectorAll('#questionAnswers ul');
        const htmlCanvasLi = document.querySelectorAll('#questionAnswers ul li');
        for (let i = 0; i < this.answers.length; i++) {
 //           htmlCanvasLi[i].innerText = this.answers[i];
            htmlCanvasLi[i].innerHTML = `<a href="#">${this.answers[i]}</a>`
        };
        console.log(htmlCanvasLi);
        console.log(this.htmlCanvasAnswers);
    };
    // clearAnswers = () => {
    //     const htmlCanvasLi = document.querySelectorAll('#questionAnswers ul li');
    //     htmlCanvasLi.forEach(listElement => {
    //         listElement.innerText = '';
    //     });
    // };
    initImageFrame = () => {
        const myImage = document.createElement('img');
        myImage.classList.add('x');       
        this.htmlCanvasImage.appendChild(myImage);        
    }
    displayImage = () => {
        const myImage = document.querySelector('#questionImage img');
        myImage.setAttribute('src', currentQuestion.imagePath);
        // myImage.setAttribute('width', 100);  
        // myImage.setAttribute('heigth', 100);  
    };
    clearImage = () => {
        const myImage = document.querySelector('#questionImage img');
        myImage.setAttribute('src','#');
    }
};

// Creating the instance and displayig the instructions screen 
const currentQuestion = new TriviaQuestion(
    poolQuestionsArray[arrayQuestionPosition].questionNumber,
    poolQuestionsArray[arrayQuestionPosition].question,
    poolQuestionsArray[arrayQuestionPosition].answers,
    poolQuestionsArray[arrayQuestionPosition].points,
    poolQuestionsArray[arrayQuestionPosition].correctAnswer,
    poolQuestionsArray[arrayQuestionPosition].hint,
    poolQuestionsArray[arrayQuestionPosition].imagePath);

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

        console.log(arrayQuestionPosition);
        currentQuestion.questionNumber = poolQuestionsArray[arrayQuestionPosition].questionNumber;
        // currentQuestion.questionNumber = questionNumber;
        currentQuestion.question = poolQuestionsArray[arrayQuestionPosition].question;
        currentQuestion.answers = poolQuestionsArray[arrayQuestionPosition].answers;
        currentQuestion.points = poolQuestionsArray[arrayQuestionPosition].points;
        currentQuestion.correctAnswer = poolQuestionsArray[arrayQuestionPosition].correctAnswer;
        currentQuestion.hint = poolQuestionsArray[arrayQuestionPosition].hint;
        currentQuestion.imagePath = poolQuestionsArray[arrayQuestionPosition].imagePath;
    
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
