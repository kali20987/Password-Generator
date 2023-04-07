// Assignment code here

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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getLength() {
  return prompt("How long would you like your password?");
}

function showLengthError() {
  alert("Bad password length!");
}

function getLowerCase() {
  return confirm("Click OK if you would like lowercase letters.");
}

function getUpperCase() {
  return confirm("Click OK if you would like uppercase letters");
}

function getNum() {
  return confirm("Click OK if you would like numbers");
}

function getSpec() {
  return confirm("Click OK if you would like special characters");
}

function showCharacterError() {
  alert("At least one character type must be selected");
}

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
// Add event listener to generate button
generateBtn.addEventListener("click", main);
