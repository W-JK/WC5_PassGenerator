




//----------------------------- Allowed Pasword Charakters ------------------------------------------------------------------------------------------


var passLenght = 0;   //note: var or change to let/const (?)


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
var UserNumericCharacters;
var UserLowerCasedCharacters;
var UserUpperCasedCharacters; 


// ----------------------------- User variable end ----------------------------------------------------------------------------------------




// Function to prompt user for password options
function getPasswordOptions() {   
UserSpecialCharacters    = confirm("Do you want to use any special characters?");
UserNumericCharacters    = confirm("Do you want to use numbers?");
UserLowerCasedCharacters = confirm("Do you want to use lower case letters?");
UserUpperCasedCharacters = confirm("Do you want to use upper case letters?");


}

// Function for getting a random element from an array ---------- source function  ------------
function getRandom(arr) {
/* function random_item(items) {}
 return items[Math.floor(Math.random()*items.length)];
console.log(random.item(items)) } */ 


}  

// ----------------------------------- get random end ------------------------------------



// Function to generate password with user input ---------------------- source function ------
function generatePassword() {
          // own code ---------------------
  // start criteria 
  UserPasswordLenght = 0;
  passLenght = 0;
  UserPassword = "";


  // variable holding user Password
  var UserPassword = ""; //note: leave as string or change to array (?) 
  
  //Checking if password lengh criteria are fulfilled 
  while (UserPasswordLenght < 8 || UserPasswordLenght > 128 ){
    UserPasswordLenght = prompt("Strong Password should have between 8 and 128 characters." +
                                "\n How strong you would like it to be?");
  }
  console.log ( "password lenght")
  
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
          //getPasswordOptions();
          console.log("password options")  
          
          getPasswordOptions();
// ----------------------------------------------------------------





        //return the generated password back to the calling function
        return UserPassword;
    
        
        }}
}






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