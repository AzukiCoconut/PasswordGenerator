// Assignment Code
var generateBtn = document.querySelector("#generate");
var modal = document.querySelector("#dialogBox");
var closeBtn = document.getElementById("close");
var modalSubmit = document.getElementById("submit");
var passLength = document.getElementById("passLength");
const checkboxes = document.querySelectorAll('input[type="checkbox"]',);
const validationmessagecheckbox = document.getElementById('validation-message');
const validationmessagetextbox = document.getElementById('validationTextBox');

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
    closeModel();
    createPassword();
  }
  
}
// Generate a password based on criteria given
function generatePassword() {

}

function closeModel() {
  modal.style.display = "none";
}

// Add event listener to generate button
generateBtn.addEventListener("click", openModal);
modalSubmit.addEventListener("click", validateEntries);
closeBtn.addEventListener("click", closeModel);


