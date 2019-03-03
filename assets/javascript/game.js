
var myArray = ["lasso","horse", "cowboy"];
var randomWord = randomString(myArray);


function randomString(myArray) {
    return myArray[Math.floor(Math.random()*myArray.length)];
}
console.log(randomString(myArray));
document.getElementById("randomWords").innerHTML = randomWord;
