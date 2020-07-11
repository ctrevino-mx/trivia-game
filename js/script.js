const poolQuestionsArray = [
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
      "imagePath": "images/Star-Wars-Logo-02.jpg",
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
        "imagePath": "images/Image0.jpeg",
      }  
]

const triviaQuestionsArray = [];

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
        this.htmlCanvasQuestion.textContent = this.question;        
    }
    displayAnswers = () => {
        const myListOfAnswers = document.createElement('ul');
        for (let i = 0; i < 4; i++) {
            const myAnswer = document.createElement('li');
            myAnswer.innerHTML = `<a href="#">${currentQuestion.answers[i]}</a>`;
            myListOfAnswers.appendChild(myAnswer);
        }
        this.htmlCanvasAnswers.appendChild(myListOfAnswers);
    }
    displayImage = () => {
        const myImage = document.createElement('img');
        myImage.setAttribute('src', currentQuestion.imagePath);
        // myImage.setAttribute('width', 100);  
        // myImage.setAttribute('heigth', 100);  
        myImage.classList.add('x');
        this.htmlCanvasImage.appendChild(myImage);        
    }
};

let i = 1;
const currentQuestion = new TriviaQuestion(
    poolQuestionsArray[i].questionNumber,
    poolQuestionsArray[i].question,
    poolQuestionsArray[i].answers,
    poolQuestionsArray[i].points,
    poolQuestionsArray[i].correctAnswer,
    poolQuestionsArray[i].hint,
    poolQuestionsArray[i].imagePath);

// const canvasImage = document.querySelector('#questionImage');
// const myImage = document.createElement('img');
// myImage.setAttribute('src', currentQuestion.imagePath);
// canvasImage.appendChild(myImage);
// console.log(canvasImage);
currentQuestion.displayQuestion();
currentQuestion.displayAnswers();
// currentQuestion.displayImage();