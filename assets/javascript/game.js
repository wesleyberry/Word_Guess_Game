
var myArray = ["lasso","horse", "cowboy"];
var randomWord = randomString(myArray);
var userGuess;
var lettersGuessed = [];
var blanksArray = [];
var remainingLetters = randomWord.length;
document.getElementById("randomWords").innerHTML = randomWord;
document.getElementById("spaces").innerHTML = blanksArray

function randomString(myArray) {
    return myArray[Math.floor(Math.random()*myArray.length)];
}


for (var i = 0; i < randomWord.length; i++) {
    blanksArray[i] = "_";
}

    // while (remainingLetters > 0) {
    // // Game code goes here
    // // Show the player their progress
    //     alert(blanksArray.join(" "));
    //     // Take input from the player
    //     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    //     if (guess === null) {
    //         break;
    //         } else if (guess.length !== 1) {
    //         alert("Please enter a single letter.");
    //         } else {
    //             for (var j = 0; j < randomWord.length; j++) {
    //             if (randomWord[j] === guess) {
    //                 blanksArray[j] = guess;
    //                 remainingLetters--;
    //             }
    //         }
    //     }
    // // Update answerArray and remainingLetters for every correct guess
    // }

    while (remainingLetters > 0) {
        // Game code goes here
        // Show the player their progress
        blanksArray.join(" ");
        // Take input from the player
        var guess = prompt("Guess a letter, or click Cancel to stop playing.");
        if (guess === null) {
            break;
            } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
            } else {
                for (var j = 0; j < randomWord.length; j++) {
                if (randomWord[j] === guess) {
                    blanksArray[j] = guess;
                    remainingLetters--;
                }
            }
            }
        // Update answerArray and remainingLetters for every correct guess
        }

console.log(randomString(myArray));
console.log(lettersGuessed);
