




//----------------------------- Allowed Pasword Charakters ------------------------------------------------------------------------------------------


var passLenght = 0;

// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/', "'",'!', '#', '$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// console.table(specialCharacters)

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//console.table(numericCharacters)

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//console.table(lowerCasedCharacters)

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// console.table(upperCasedCharacters)

//------------------------------- Password Characters end -----------------------------------------------------------------------------------


// paste bottom check
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
 generateBtn.addEventListener('click', writePassword); 










// ----------------------------------------------------

// Function to prompt user for password options
function getPasswordOptions() {   

}

// Function for getting a random element from an array
function getRandom(arr) {

}


// Function to generate password with user input
function generatePassword() {
  var UserPassword = "";
// ------------------------------ Password Variables - User input ----------------------------------------------------------------------------------
        // variable -  UserPassword


        var UserPasswordLenght = 0;
        var UserSpecialCharacters;
        var UserNumericCharacters;
        var UserLowerCasedCharacters;
        var UserUpperCasedCharacters; 

        // starter characters

        UserPasswordLenght = 0;
        passLenght  = 0;                           // property for pass lenght - sprawdzic
        var UserPassword = "";                     // czy duble potrzebne

    // ------------------ prompting user for password lenght -  starter code readme = 128; BTC = 64 - to be confirmed !!! -----------------------------------------------------------------
    while ( UserPasswordLenght < 8 || UserPasswordLenght > 128) {   
      UserPasswordLenght = prompt("Strong Password should have between 8 and 128 characters. \nWould you like to create strong password?");


      //if operation canceled 
    if (UserPasswordLenght === null) {
      return "Your secure password";
    }
    else {
      //checking if user typed number 
      if (!isFinite(UserPasswordLenght)) {
        alert("Please try again and enter number");
        return "Your secure password";
      }

      else {
        //checking length criteria
        if (UserPasswordLenght < 8 || UserPasswordLenght > 128) {
          alert("Password must be between 8 and 128 characters. \n Please Try again.");
          return "Your secure password";
        }

        else {

          // call for password criteria
          showPrompts();
// -------------------------------------------------------------------------------------------------------------
          //add characters based on selected criteria to the length of the password set by user
          while (passLenght < UserPasswordLenght) {                                                      //--------sprawdz 
            //if statement to make sure the user selects at least one of the criteria  
            if (UserSpecialCharacters === false && UserNumericCharacters === false && UserLowerCasedCharacters === UserLowerCasedCharacters) {
              alert("You did not selected any characters. \n You must select at least one criteria of lowercase, uppercase, numbers or special characters to create password")
              showPrompts();
            }
            else {

            if (specialCharacters === true &&  passLenght < UserPasswordLenght) {
              var sc = specialCharacters[Math.floor(Math.random() * 32)]
              UserPassword = UserPassword + sc;
              passLenght++;
            }

            if (numericCharacters === true && passLenght < UserPasswordLenght) {
              var num = numericCharacters[Math.floor(Math.random() * 10)]
              UserPassword = UserPassword + num;
              passLenght++;
            }

            if (lowerCasedCharacters === true && passLenght < UserPasswordLenght) {
              var lc = lowerCasedCharacters[Math.floor(Math.random() * 26)]
              UserPassword = UserPassword + lc;
              passLenght++;
            }

            if (upperCasedCharacters === true && passLenght < UserPasswordLenght) {
              var uc = upperCasedCharacters [Math.floor(Math.random() * 26)]
              UserPassword = UserPassword + uc;
              passLenght++;
            }
          }
        }
      }
    }
  }
 //return the generated password back to the calling function
 return UserPassword;

}  // --------------------------            Gnerate Password end ---------------------------------------



/* 


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
 generateBtn.addEventListener('click', writePassword); 
*/



//internal function to prompt the user for criteria
function showPrompts() {
  UserSpecialCharacters    = confirm("Do you want to use any special characters?");
  UserNumericCharacters    = confirm("Do you want to use numbers?");
  UserLowerCasedCharacters = confirm("Do you want to use lower case letters?");
  UserUpperCasedCharacters = confirm("Do you want to use upper case letters?");
  
 
}
}
//}