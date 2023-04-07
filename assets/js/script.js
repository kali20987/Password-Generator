
//main function which determines how long the password must be and if the user clicks ok on at least one of the prompts for their password.
function main() {
  var password = "";
  var len = getLength();
  if (len<8 || len>128) {
    showLengthError();
  }
  var lcase = getLowerCase();
  var ucase = getUpperCase();
  var num = getNum();
  var spec = getSpec();
  if (lcase || ucase || num || spec) {
    password = generatePassword(len, lcase, ucase, num, spec);
  } else {
    showCharacterError();
  }
  writePassword(password);
}


var generateBtn = document.querySelector("#generate");


function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//getLength function which prompts the first box asking how long the user wants their password.
function getLength() {
  return prompt("How long would you like your password?");
}
//showLengthError function that sends an alert box if the user's password doesn't meet the requirements.
function showLengthError() {
  alert("Bad password length!");
}
//getLowerCase function which asks the user if they want lowercase letters in their password.
function getLowerCase() {
  return confirm("Click OK if you would like lowercase letters.");
}
//getUpperCase function which asks the user if they want uppercase letters in their password.
function getUpperCase() {
  return confirm("Click OK if you would like uppercase letters");
}
//getNum function which asks the user if they want numbers in their password.
function getNum() {
  return confirm("Click OK if you would like numbers");
}
//getSpec function which asks the user if they want special characters in their password.
function getSpec() {
  return confirm("Click OK if you would like special characters");
}
//showCharacterError function which pops up if the user clicked cancel for all prompts.
function showCharacterError() {
  alert("At least one character type must be selected");
}
//generatePassword function which uses the pervious variables and new variables to generate a password based on what the user selected.
function generatePassword(len, lcase, ucase, num, spec) {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var specials = '!@#$%^&*()';
  var selected = '';
  var result = '';

  if (lcase) {
    selected = selected + lower;
  }

  if (ucase) {
    selected = selected + upper;
  }

  if (num) {
    selected = selected + numbers;
  }

  if (spec) {
    selected = selected + specials;
  }

  for ( var i = 0; i < len; i++ ) {
    result += selected.charAt(Math.floor(Math.random() * selected.length))
  }

  return result;
}
generateBtn.addEventListener("click", main);
