// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var numberOfCharacters = window.prompt("How many characters?");
  var uppercase = window.prompt("Would you like uppercase? (Y / N?)");
  var lowercase = window.prompt("Would you like lowercase? (Y / N?)");
  var numbers = window.prompt("Would you like numbers? (Y / N?)");
  var symbols = window.prompt("Would you like special characters? (Y / N?)");

  var password = generatePassword(numberOfCharacters, uppercase, lowercase, numbers, symbols);
  var passwordText = document.querySelector("#password");
  Math.random().toString(36).substr(2, 8);
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()";
  passwordText.value = password;

}

function generatePassword(numberOfCharacters, uppercase, lowercase, numbers, symbols) {
  return numberOfCharacters;
}
// function generatePassword(){
//   // Write the code that asks the user about the parameters for their password
//   return "Temporary Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
