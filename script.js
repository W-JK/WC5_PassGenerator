




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

// ------------------------------ Variables to collect & store User Imput ---------------------------------------------------------------
var UserPasswordLenght = 0;
var UserSpecialCharacters;
console.log(UserSpecialCharacters)
var UserNumericCharacters;
var UserLowerCasedCharacters;
var UserUpperCasedCharacters; 

// variable holding user Password
var UserPassword = [];  // ""; //note: leave as string or change to array (?) 


// ----------------------------- User variable end ----------------------------------------------------------------------------------------




// Function to prompt user for password options
function getPasswordOptions() {  
  console.log("getPAssOptions") 
UserSpecialCharacters    = confirm("Do you want to use any special characters?");
console.log(UserSpecialCharacters)
UserNumericCharacters    = confirm("Do you want to use numbers?");
console.log(UserNumericCharacters)
UserLowerCasedCharacters = confirm("Do you want to use lower case letters?");
console.log(UserLowerCasedCharacters)
UserUpperCasedCharacters = confirm("Do you want to use upper case letters?");
console.log(UserUpperCasedCharacters)


// User character selection none - prompt for at least 1 option and return
if(UserSpecialCharacters === false && UserNumericCharacters === false && UserLowerCasedCharacters === false && UserUpperCasedCharacters)
  {  alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
    getPasswordOptions(); 
}
else{
  console.log(UserPasswordLenght)
  getRandom()}

}

// Function for getting a random element from an array ---------- source function  ------------
function getRandom(arr) { 
  console.log("get random")
  while (passLenght < UserPasswordLenght)   {

    if (UserSpecialCharacters === true && passLenght < UserPasswordLenght) {
      
      var sc = specialCharacters[Math.floor(Math.random() * (specialCharacters.length))] 
      UserPassword = UserPassword + sc;
      passLenght++;
    }

    if (UserLowerCasedCharacters === true && passLenght < UserPasswordLenght) {
      var lc = lowerCasedCharacters[Math.floor(Math.random() * (lowerCasedCharacters.length))] 
      UserPassword = UserPassword + lc;
      passLenght++;
    }

    if (UserNumericCharacters === true && passLenght < UserPasswordLenght) {
      var nc = numericCharacters[Math.floor(Math.random() * (numericCharacters.length))] 
      UserPassword = UserPassword + nc;
      passLenght++;
    }

    if (UserUpperCasedCharacters === true && passLenght < UserPasswordLenght) {
      var uc = upperCasedCharacters[Math.floor(Math.random() * (upperCasedCharacters.length))] 
      UserPassword = UserPassword + uc;
      passLenght++;
      console.log("UCH added run test")
    }

    

    
  }   
  // while end - password random character assigment

  //return the generated password back to the calling function
  console.log(UserPassword)
  console.log("Password Lenght "+ UserPassword.length)
  return UserPassword;
}  

/* note: 
function random_item(items) {}
 return items[Math.floor(Math.random()*items.length)];
console.log(random.item(items)) } */ 




// ----------------------------------- get random end ------------------------------------



// Function to generate password with user input ---------------------- source function ------
function generatePassword() {
          // own code ---------------------
  // start criteria 
  UserPasswordLenght = 0;
  passLenght = 0;
  // UserPassword = "";           //----------------  old code - remove?



  
  //Checking if password lengh criteria are fulfilled 
  while (UserPasswordLenght < 8 || UserPasswordLenght > 128 ){
    UserPasswordLenght = prompt("Strong Password should have between 8 and 128 characters." +
                                "\n How strong you would like it to be?");
  }
  console.log ( "check password lenght")
  
    //if user presses cancel                    // --------- note: placeholder- for correction 
    if (UserPasswordLenght === null) {
      console.log("cancel")
      return "Your secure password";
      
       }
   
    else{
          //checking user enters an integer
          if (!isFinite(UserPasswordLenght)) {
          alert("You did not enter a number"+"Let's Try Again.");
          return "Your secure password";
          }

                  //check password meets length criteria
        if (UserPasswordLenght < 8 || UserPasswordLenght > 128) {
          alert("Password must be between 8 and 128 characters."+
          "\n Let's Try Again.");
          return "Your secure password"; }
        
        else {

          //call the internal function to show prompts for criteria
          getPasswordOptions(); 
          console.log("password options")  
          
          
// ----------------------------------------------------------------





          
        
        }}
        return UserPassword;
}






// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  console.log("writePassword")
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);