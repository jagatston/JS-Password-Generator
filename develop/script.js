// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  Math.random().toString(36).substr(2, 8);
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()";
  passwordText.value = password;

}


function generatePassword(){
  // Write the code that asks the user about the parameters for their password
  return "Temporary Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
