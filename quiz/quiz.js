const startButton =  document.getElementById('start-btn')
const nextButton =  document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('questions-container')
const questionElement = document.getElementById('questions')
const answersButtonsElement = document.getElementById
('answers-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', buildQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

})

function buildQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 4)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
   showQuestion(shuffledQuestions [currentQuestionIndex] )
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button =document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', showResults)
    answersButtonsElement.appendChild(button)
    })
}
function resetState() {
    nextButton.classList.add('hide')
    while (answersButtonsElement.firstChild) {
         answersButtonsElement.removeChild
        (answersButtonsElement.firstChild)
    }
}

function showResults(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  //setSatusClass(document.body, correct)
  Array.from(answersButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
      startButton.innerText ='Restart'
      startButton.classList.remove('hide')
  }

}
function setStatusClass (element, correct) {
    clearStatusClass (element)
    if (correct) {
        element.classList.add ('correct')
}   else {
    element.classList.add ('wrong')
  }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    
    {
        question: 'What is the name of Beyonce-s fangroup?',
        answers: [
            {text: 'Beehive', correct : true},
            {text: 'The Bees', correct: false},
            {text: 'The Beeznees', correct: false},
            {text: 'The Wasps' , correct: false},
            
        ]
    },
    {
        question : 'How many times did Ross Geller get divorced on Friends?',
        answers :[
            {text : '5 times', correct: false},
            {text : '3 times', correct: true},
            {text : '2 times', correct: false} ,
            {text : 'Never got divorced', correct: false},
        ]
    },
    {
        question : 'what is the name of Michelle Obamas 2018 Memoir called?',
        answers :[
            {text : 'become', correct: false},
            {text : 'became', correct: false},
            {text : 'becoming', correct: true},
            {text : 'Michelle', correct: false},
        
        ] },

        {
            question : 'How many Harry Potter books are there?',
            answers :[
                {text : '4 books', correct: false},
                {text : '7 books', correct: true},
                {text : '5 books', correct: false}, 
                {text : '2 books', correct: false},
            ]
    
        }
]

