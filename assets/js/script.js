// Assignment Code
var generateBtn = document.querySelector("#generate");
var modal = document.querySelector("#dialogBox");
var closeBtn = document.getElementById("close");
var modalSubmit = document.getElementById("submit");
let passLength = document.getElementById("passLength");
const checkboxes = document.querySelectorAll('input[type="checkbox"]',);
const validationmessagecheckbox = document.getElementById('validation-message');
const validationmessagetextbox = document.getElementById('validationTextBox');
let passwordOptions = [];

// Write password to the #password input
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function openModal() {
  validationmessagecheckbox.innerHTML = '';
  validationmessagetextbox.innerHTML = '';
  modal.style.display = "block";
}

function atLeastOneCheckboxChecked(checkboxes) {
  return Array.from(checkboxes).some(checkbox => checkbox.checked,);
}

function findAllSelectedCheckboxes(checkboxes) {
  return Array.from(checkboxes).filter(checkbox => checkbox.checked,);
}
 
function validateEntries() {
  validationmessagecheckbox.innerHTML = '';
  validationmessagetextbox.innerHTML = '';
  if (!atLeastOneCheckboxChecked(checkboxes)) {
    validationmessagecheckbox.innerHTML = 'At least one checkbox must be checked';
    return;
  } else if (isNaN(passLength.value) || passLength.value < 8 || passLength.value > 128 || passLength == '') {
    validationmessagetextbox.innerHTML = "Please enter a value between 8 and 128";
    return;
  } else {
    passwordOptions = findAllSelectedCheckboxes(checkboxes);
    closeModel();
    createPassword();
  }
  
}
// Generate a password based on criteria given
function generatePassword() {
  let password = "";
  let numbChar = "0123456789";
  let lowerChar = "abcdefghijklmnopqrstuvwxyz";
  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialChar = "!@#$%^&*()";
  let chars;

  var passwordLength = passLength.value;
  if(lowercase.checked) {
    chars = chars + lowerChar;
  }
  if (uppercase.checked) {
    chars = chars + upperChar;
  }
  if (numeric.checked) {
    chars = chars + numbChar;
  }
  if (specChar.checked) {
    chars = chars + specialChar;
  }

  for (var i = 0; i<=passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  passLength.value = '';
  lowercase.checked = false;
  uppercase.checked = false;
  numeric.checked = false;
  specChar.checked = false;

  return password;

}

function closeModel() {
  modal.style.display = "none";
}

// Add event listener to generate button
generateBtn.addEventListener("click", openModal);
modalSubmit.addEventListener("click", validateEntries);
closeBtn.addEventListener("click", closeModel);


