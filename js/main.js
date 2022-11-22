'use strict'

const ball = document.querySelector('.ball-img')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const input = document.querySelector('.question-input')

const answersArr = [
	'Tak!',
	'Nie.',
	'Może.',
	'Ciężko powiedzieć...',
	'Nie chcesz znać odpowiedzi na to pytanie... :/',
	'Tak, absolutnie!',
	'Bardzo prawdopodobne.',
	'Mało prawdopodobne.',
	'Nie.',
	'Chyba tak.',
	'Chyba nie.',
	'Możliwe.',
	'To zależy od Ciebie.',
]

const shakeBall = () => {
	ball.classList.add('shake-animaton')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!'
		answer.textContent = ''
	}

	ball.classList.remove('shake-animaton')
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

ball.addEventListener('click', shakeBall)
