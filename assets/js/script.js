var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')

var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval", "vscode"]
var word
var guessedCharacters = []

// score variable
// timeLeft variable

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
}

function startRound() {
  // get random word from words array
  var randomIndex = Math.floor(Math.random() * words.length)
  word = words[randomIndex]
  renderCharacters()
}

startBtn.addEventListener("click", startRound)

document.addEventListener('keydown', handleKeydown)