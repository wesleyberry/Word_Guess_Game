


document.onkeydown = function(event) {
    userInput = event.key;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}