var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var scoreEl = document.querySelector('.score')
var timerEl = document.querySelector('.timer-count')

var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval", "vscode"]
var word
var guessedCharacters = []
var score = 0
var timeLeft = 15
var intervalId

function startCountdown() {
  clearInterval(intervalId)
  intervalId = setInterval(function() {
    timeLeft--
    timerEl.textContent = timeLeft
    if (timeLeft === 0) {
      // stop the game
      clearInterval(intervalId)
      wordBlanksEl.innerText = "Game over! Your score is " + score
    }
  }, 1000)
}

function checkWord() {
  var wordFromDOM = wordBlanksEl.textContent.split(' ').join('')
  if (word === wordFromDOM) {
    score++
    scoreEl.textContent = score
    startRound()
  }
}

function handleKeydown(event) {
  if (validChars.includes(event.key)) {
    // keep track of the character that was guessed
    guessedCharacters.push(event.key)
    // re-render wordBlanks.textContent
    renderCharacters()
  }
}

function renderCharacters() {
  var str = ""
  for (var i = 0; i < word.length; i++) {
    var letter = word[i]
    // if we have guessed the character 
    if ( guessedCharacters.includes(letter) ) {
      // add the character into str
      str += letter + ' '
    } else {
      str += '_ '
    }
  }
  wordBlanksEl.textContent = str.trim()
  checkWord()
}

function startRound() {
  guessedCharacters = []
  // get random word from words array
  var randomIndex = Math.floor(Math.random() * words.length)
  word = words[randomIndex]
  renderCharacters()
  startCountdown()
}

startBtn.addEventListener("click", startRound)

document.addEventListener('keydown', handleKeydown)