const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innertext.add('Restart')
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
        question: 'Mesopotamia was known as the land between two rivers. What were those two rivers?',
        answers: [
            { text: 'The Nile and Tigris', correct: false },
            { text: 'The Euphrates and Indus', correct: false },
            { text: 'The Tigris and Euphrates', correct: true },
            { text: 'The Jordan and Nile', correct: false }
        ]
    },
    {
        question: "What was the capital of the Chaldean Empire?",
        answers: [
            { text: 'Nippur', correct: false},
            { text: 'Babylon', correct: true},
            { text: 'Nineva', correct: false},
            { text: 'Uruk', correct: false} 
        ]
    },
    {
        question: "Who was the first emperor in Mesopotamia (and arguably the first in the world)?",
        answers: [
            { text: 'Shalmaneser V', correct: false},
            { text: 'Nebuchadnezzar II', correct: false},
            { text: 'Hammurabi', correct: false},
            { text: 'Sargon of Akkad', correct: true} 
        ]
    },
    {
        question: "When did the Neo-Assyrian Empire collapse?",
        answers: [
            { text: '1187 BCE', correct: false},
            { text: 'Between 612 BCE and 609 BCE', correct: true},
            { text: '850 BCE', correct: false},
            { text: 'Between 405 BCE and 403 BCE', correct: false} 
        ]
    },
    {
        question: "The Neo-Babylonians defeated the Neo-Assyrian Empire with the help of which people?",
        answers: [
            { text: 'Hurrians', correct: false},
            { text: 'Israelites', correct: false},
            { text: 'Egyptians', correct: false},
            { text: 'Medes/Persians', correct: true} 
        ]
    },
    {
        question: "What was the patron diety of Babylon during the Chaldean Empire?",
        answers: [
            { text: 'Inanna', correct: false},
            { text: 'Enlil', correct: false},
            { text: 'Marduk', correct: true},
            { text: 'Nergal', correct: false} 
        ]
    }
]