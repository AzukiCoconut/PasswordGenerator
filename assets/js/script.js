// Assignment Code
var generateBtn = document.querySelector("#generate");
var modal = document.querySelector("#dialogBox");
var closeBtn = document.getElementById("close");
var modalSubmit = document.getElementById("submit");
let passLength = document.getElementById("passLength");
const checkboxes = document.querySelectorAll('input[type="checkbox"]',);
const validationmessagecheckbox = document.getElementById('validation-message');
const validationmessagetextbox = document.getElementById('validationTextBox');

// Write password to the #password input
function createPassword() {
  // get the password from function
  var password = generatePassword();
  // get the password textbox
  var passwordText = document.querySelector("#password");

  // display the password to the textbox
  passwordText.value = password;
}

// Generate a password based on criteria given
function generatePassword() {
  // Set up the variables that contains the characters to use in the password
  let password = "";
  let numbChar = "0123456789";
  let lowerChar = "abcdefghijklmnopqrstuvwxyz";
  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialChar = " \"!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let chars;
  var passwordLength = passLength.value;

  /* Look at each check box.  If checkbox is checked add the string of characters to the master string
    used to generate the password.
  */
  if(lowercase.checked) {
    chars += lowerChar;
  }
  if (uppercase.checked) {
    chars += upperChar;
  }
  if (numeric.checked) {
    chars += numbChar;
  }
  if (specChar.checked) {
    chars += specialChar;
  }

  /*
    Code copied from Foolish Developer on the blog site Random Password Generator using Javascript.
    https://dev.to/code_mystery/random-password-generator-using-javascript-6a
  */
  for (var i = 0; i<=passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  // Clear the password options to default
  passLength.value = '';
  lowercase.checked = false;
  uppercase.checked = false;
  numeric.checked = false;
  specChar.checked = false;

  // return the generated password.
  return password;
}

// Validate the entries in the dialog box. do not proceed without meeting requirements.
function validateEntries() {
  // clear the validation messages
  validationmessagecheckbox.innerHTML = '';
  validationmessagetextbox.innerHTML = '';

  // Make sure there is atleast one checkbox checked.
  if (!atLeastOneCheckboxChecked(checkboxes)) {
    // display error message if none are checked.
    validationmessagecheckbox.innerHTML = 'At least one checkbox must be checked';
    return;
    // check to make sure that there is a valid value in the password length textbox
  } else if (isNaN(passLength.value) || passLength.value < 8 || passLength.value > 128 || passLength == '') {
    // display message if not valid
    validationmessagetextbox.innerHTML = "Please enter a value between 8 and 128";
    return;
  } else {
    // if all are valid, proceed to closing the modal box and create the password
    closeModel();
    createPassword();
  }
}

// Function to open the dialog box to get password options
function openModal() {
  validationmessagecheckbox.innerHTML = '';
  validationmessagetextbox.innerHTML = '';
  modal.style.display = "block";
}

// Function to close the dialog box
function closeModel() {
  modal.style.display = "none";
}

/* 
  Code copied from Borislav Hadzhiev, Web Developer.  Javascript: making sure at least one Checkbox is Checked
  https://bobbyhadz.com/blog/select-at-least-one-checkbox-javascript
*/
function atLeastOneCheckboxChecked(checkboxes) {
  return Array.from(checkboxes).some(checkbox => checkbox.checked,);
}


// Event listeners
generateBtn.addEventListener("click", openModal);
modalSubmit.addEventListener("click", validateEntries);
closeBtn.addEventListener("click", closeModel);


