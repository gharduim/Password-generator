// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTYVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword() {

    var allowed = " "

    var length = prompt("Choose between 8 and 128 characters");
    var lengthTotal = parseInt(length);

    if ((length == null) || (length == false)) {
      alert("Please, choose between 8 and 128 characters");
      return;
      //writePassword();
    }

    if (lengthTotal < 8 || lengthTotal > 128) {
      alert("Please, choose between 8 and 128 characters");
      return;
      //generatePassword();
    }
    
    var lower = confirm("Do you want Lowercase?");
    if (lower == true) {
      allowed += lowercase
    }

    var upper = confirm("Do you want Uppercase ?");
    if (upper == true) {
      allowed += uppercase
    }

    var numbersEl = confirm("Do you want Numbers?");
    if (numbersEl == true) {
      allowed += numbers
    }

    var symbolsEl = confirm("Do you want Symbols?");
    if (symbolsEl == true) {
      allowed += symbols
    }

    var password = " "
    for(var i = 0; i < lengthTotal; i++) {
      var random = Math.floor(Math.random() * allowed.length);
      password += allowed[random];
    }
    return password;
  }
};
