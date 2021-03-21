// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "0123456789";
var symbolCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var numberOfCharacters = window.prompt(
    "How many characters? (Between 8 and 128)"
  );
  var uppercase = window.prompt("Would you like uppercase? (Y / N?)");
  var lowercase = window.prompt("Would you like lowercase? (Y / N?)");
  var numbers = window.prompt("Would you like numbers? (Y / N?)");
  var symbols = window.prompt("Would you like special characters? (Y / N?)");

  var password = generatePassword(
    numberOfCharacters,
    uppercase,
    lowercase,
    numbers,
    symbols
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generatePassword(
  numberOfCharacters,
  uppercase,
  lowercase,
  numbers,
  symbols
) {
  for (i = 0; i < numberOfCharacters; i++) {
    var randomNumber = getRandomInt(27);
    var randomCharacter = lowercaseCharacters.charAt(randomNumber);
    password += randomCharacter;
  }
  if (uppercase === "Y") {
    var randomNumber = getRandomInt(27);
    var randomCharacter = uppercaseCharacters.charAt(randomNumber);
    password += randomCharacter;  
  }
  if (numbers === "Y") {
    var randomNumber = getRandomInt(10);
    var randomCharacter = numberCharacters.charAt(randomNumber);
    password += randomCharacter;  
  }
  if (symbols === "Y") {
    var randomNumber = getRandomInt(10);
    var randomCharacter = symbolCharacters.charAt(randomNumber);
    password += randomCharacter;  
  }
};
// function generatePassword(){
//   // Write the code that asks the user about the parameters for their password
//   return "Temporary Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
