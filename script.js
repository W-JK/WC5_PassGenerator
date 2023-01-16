




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
// console.log("All Charakters Lenght: "+ specialCharacters.length + numericCharacters.length + lowerCasedCharacters.length+upperCasedCharacters.length)

//------------------------------- Password Characters end -----------------------------------------------------------------------------------

// ------------------------------ User Imput - Variables to collect & store  ---------------------------------------------------------------
var UserPasswordLenght = 0;
var UserSpecialCharacters;
var UserNumericCharacters;
var UserLowerCasedCharacters;
var UserUpperCasedCharacters; 

// variable holding user Password
var UserPassword = [];             


// ----------------------------- User variable end ----------------------------------------------------------------------------------------


// Function to prompt user for password options
function getPasswordOptions() {  
  // build test: console.log("getPasswordOptions") 
UserSpecialCharacters    = confirm("Do you want to use any special characters?");
console.log(UserSpecialCharacters)  // displaying user choice in console 
UserNumericCharacters    = confirm("Do you want to use numbers?");
console.log(UserNumericCharacters) // displaying user choice in console
UserLowerCasedCharacters = confirm("Do you want to use lower case letters?");
console.log(UserLowerCasedCharacters) // displaying user choice in console
UserUpperCasedCharacters = confirm("Do you want to use upper case letters?");
console.log(UserUpperCasedCharacters) // displaying user choice in console


// User character selection none - prompt for at least 1 option and return
if(UserSpecialCharacters === false && UserNumericCharacters === false && UserLowerCasedCharacters === false && UserUpperCasedCharacters === false)
  {  alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters");
    getPasswordOptions(); 
}
else{
  console.log(UserPasswordLenght)
  getRandom()}

}

// Function for getting a random element from an array ---------- source function  ------------

function getRandom(arr) { 
  // test: console.log("get random start point ")
  while (passLenght < UserPasswordLenght)   {

    if (UserSpecialCharacters === true && passLenght < UserPasswordLenght) {
            var sc = specialCharacters[Math.floor(Math.random() * (specialCharacters.length))] 
      UserPassword = UserPassword + sc;
      passLenght++;
      // console.log("run test sc")
    }

    if (UserNumericCharacters === true && passLenght < UserPasswordLenght) {
      var nc = numericCharacters[Math.floor(Math.random() * (numericCharacters.length))] 
      UserPassword = UserPassword + nc;
      passLenght++;
      // console.log("run test nc")
    }

    if (UserLowerCasedCharacters === true && passLenght < UserPasswordLenght) {
      var lc = lowerCasedCharacters[Math.floor(Math.random() * (lowerCasedCharacters.length))] 
      UserPassword = UserPassword + lc;
      passLenght++;
      // console.log("run test lc")
    }
    
    if (UserUpperCasedCharacters === true && passLenght < UserPasswordLenght) {
      var uc = upperCasedCharacters[Math.floor(Math.random() * (upperCasedCharacters.length))] 
      UserPassword = UserPassword + uc;
      passLenght++;
       console.log("run test uc")
    }
       
  }   
  // --------------- while end - password random character assigment completed ----------------------


  // ----------------------- returning the generated password back to the calling function ----------
  console.log(UserPassword)
  console.log("Password Lenght "+ UserPassword.length)
  return UserPassword;
}  

// ----------------------------------- get random end -----------------------------------------------

// ------------ Function to generate password with user input --------- source function -------------

function generatePassword() {
          
  // ------------------------------------------------------------------  own code -------------------
    //------------- Initial values/value reset ------------------------------------------------------
  UserPasswordLenght = 0;
  UserPassword = "";
  passLenght = 0;
    
    //------------ Checking if password lengh criteria is fulfilled ---------------------------------
    while (UserPasswordLenght < 8 || UserPasswordLenght > 128 ){
      UserPasswordLenght = prompt("Strong Password should have between 8 and 128 characters." +
                                  "\n How strong you would like it to be?");
     
    console.log ( "check password lenght")
    
    
      //if user presses cancel                    // --------- note: placeholder- for correction 
      if (UserPasswordLenght === null ) {
        alert("Password must be between 8 and 128 characters."+
        "\n Let's Try Again.");
        console.log("cancel")
        
        // return "Your secure password";          
          
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
            
  // --------------------------------------------------------------------       
          
          }
        }}
          return UserPassword;  // note: return user password to write function
  }

// -----------  Get references to the #generate element -----------------
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  console.log("writePassword")
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// -------------- Add event listener to generate button ------------

generateBtn.addEventListener('click', writePassword);