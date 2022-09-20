var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')

var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval", "vscode"]
var word
// score variable
// timeLeft variable

function renderCharacters() {
  var str = ""
  for (var i = 0; i < word.length; i++) {
    // if we have guessed the character 
      // add the character into str
    // else
      // add an _ into str
      str += '_ '
      console.log(str)
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

