//VARIABLES
var words = ["lasso", "horses", "whip", "cowboy", "spurs", "boots", "tumbleweed", "wagon"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var right = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var ricochet = new Audio("assets/images/ricochet.wav");
var pop = new Audio("assets/images/pop.wav");
var whip = new Audio("assets/images/whip.wav");
var yeehaw = new Audio("assets/images/yeehaw.wav");
var chaching = new Audio("assets/images/chaching.wav");


function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        right.push("_");
    }

    document.getElementById("spaces").innerHTML = "  " + right.join("  ");

    console.log(randomWord);
    console.log(right);
}

function reset() {
    guessesRemaining = blanks + 3;
    wrongGuess = [];
    right = [];
    Game()
}

function checkLetters(letter)  {
    var letterInCache = false;
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
            pop.play();
        }
    }
    for (var j = 0; j < wrongGuess.length; j++) {
        if (wrongGuess[j] == letter) {
            letterInCache = true;
        }
    }

    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                right[i] = letter;
            }
        }
    }
    else if (!letterInCache) {
        guessesRemaining--;
        wrongGuess.push(letter);
        ricochet.play();
    }
    else {
        whip.play();
    }
    
    console.log(right);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses remaining:" + guessesRemaining)

    if (lettersOfWord.toString() == right.toString()) {
        wins++;
        chaching.play();
        reset()
        document.getElementById("wins").innerHTML = " " + wins;
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("losses").innerHTML = " " + losses;
    }
    document.getElementById("spaces").innerHTML = "  " + right.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

Game();

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}