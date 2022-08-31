'use strict';

let numToGuess = Math.floor(Math.random() * (20 - 1 + 1) + 1)
let currentColorIndicator = '#eee'
const arrayOfColors = ['rgb(207, 52, 235)', 'rgb(52, 180, 235)', 'rgb(89, 235, 52)', 'rgb(227, 156, 43)', 'rgb(93, 109, 227', 'rgb(220, 145, 230)', 'rgb(178, 230, 145)', 'rgb(238, 238, 238)', ]
let numberInput = document.querySelector('main input.guess')
let checkBtn = document.querySelector('main button.check')
let questionMark = document.querySelector('header .number')
let againBtn = document.querySelector('header button.again')
let scoreCount = document.querySelector('section.right span.score')
let highScoreCount = document.querySelector('section.right span.highscore')
let indicator = document.querySelector('section.right .message')
let body = document.querySelector('body')
    console.log(numToGuess)

checkBtn.addEventListener('click', e => {
    let guess = Number(numberInput.value)
    if (Number(scoreCount.textContent) <= 0) {

    }
    else if (guess > 20 || guess < 1 || !guess) {
        indicator.textContent = "Error: Not a valid guess"
        numberInput.value = ""
    }
    else if (guess < numToGuess) {
        indicator.textContent = "Too Low!! 😲😲😡🤬🤓🤓"
        numberInput.value = ""
        scoreCount.textContent = scoreCount.textContent - 1;
    }
    else if(guess > numToGuess) {
        indicator.textContent = "Too high!! 🙄🙄😣😥😘😘"
        numberInput.value = ""
        scoreCount.textContent = scoreCount.textContent - 1;
    }
    else if (guess === numToGuess){
        body.style.background = '#60b347'
        body.style.transition = 'background 2s';
        questionMark.style.transition =  'width 1.5s ease-in-out';
        questionMark.style.width =  '30rem';
        indicator.textContent = "You got it 😁😁😏😏🥵🥵"
        questionMark.innerHTML = numToGuess
        if(Number(highScoreCount.textContent) < Number(scoreCount.textContent)) {
            highScoreCount.textContent = scoreCount.textContent
        }
    }

    if (Number(scoreCount.textContent) <= 0) {
        questionMark.innerHTML = numToGuess
        body.style.background = '#ac1b11'
        body.style.transition = 'background 2s'
        indicator.textContent = "You lost 😂🤣😂😝😝"
        questionMark.innerHTML = numToGuess
        indicator.style.color = '#eee'
    }
})

againBtn.addEventListener('click', e => {
    numToGuess = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    questionMark.textContent = "?"
    indicator.textContent = "New game. Can you beat your high score?"
    indicator.style.color = '#'
    body.style.background = "#222"
    body.style.transition = 'none'
    scoreCount.textContent = '5'
    numberInput.value = ""
    currentColorIndicator = arrayOfColors[Math.floor(Math.random()*arrayOfColors.length)];
    console.log(indicator.style.color)
    while(currentColorIndicator == indicator.style.color) {
        currentColorIndicator = arrayOfColors[Math.floor(Math.random()*arrayOfColors.length)];
    }

    indicator.style.color = currentColorIndicator
})
