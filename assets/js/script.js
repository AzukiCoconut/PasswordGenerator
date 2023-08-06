// Assignment Code
var generateBtn = document.querySelector("#generate");
var modal = document.querySelector("#dialogBox");
var closeBtn = document.getElementById("close");
var modalSubmit = document.getElementById("submit");

// Write password to the #password input
function writePassword() {
  modal.style.display = "block";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "password";

}

// Generate a password based on criteria given
function generatePassword() {
  

}

function closeModel() {
  modal.style.display = "none";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
closeBtn.addEventListener("click", closeModel);
