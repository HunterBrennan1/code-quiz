
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startQuiz() {
  console.log('started')
  startButton.classList.add('hide')
  shuffleQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestions(shuffleQuestions[currentQuestionIndex])
}

function showQuestions(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild
      (answerButtonElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Submit'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Commonly used data types DO NOT include',
    answers: [
      { text: 'Booleans', correct: false },
      { text: 'Strings', correct: false },
      { text: 'Alerts', correct: true },
      { text: 'Numbers', correct: false }
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store___',
    answers: [
      { text: 'Numbers and Strings', correct: false },
      { text: 'Other Arrays', correct: false },
      { text: 'Booleans', correct: false },
      { text: 'All Of The Above', correct: true }
    ]
  },
  {
    question: 'The condition in an if / else statement is enclosed within__',
    answers: [
      { text: 'Quotes', correct: false },
      { text: 'Curly Brackets', correct: true },
      { text: 'Parentheses', correct: false },
      { text: 'Square Brackets', correct: false }
    ]
  },
  {
    question: 'String Values Must Be Enclosed Within___ When Being Assigned To Variables',
    answers: [
      { text: 'Commas', correct: false },
      { text: 'Curly Brackets', correct: false },
      { text: 'Quotes', correct: true },
      { text: 'Parentheses', correct: false }
    ]
  },
]


startButton.addEventListener('click', timeH)
const timeH = document.querySelector('h1');

let timeSecond = 60;



displayTime(timeSecond)

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    endTime();
    clearInterval(countDown)
  }
}, 1000)

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${min < 10 ? `0` : ''}${min}:${sec < 10 ? `0` : ''}${sec}`
}

function endTime() {
  timeH.innerHTML = 'TIME IS UP'
}

