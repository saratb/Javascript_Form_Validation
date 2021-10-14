/*
Examples of intializations

 let a ;
let b ;
let c ;

let a,b,c

 */

// Declaring document.getElementById to id to simply code (in one line)
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

//Array Example
/* errorMsg = ['error', 'error', 'error']; //First: Input, Second: Email, Thrid: Password

errorMsg[1].innerHTML = "Hello" //To get the 2nd error or Email
*/

// The intializations
let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"), // Form ID for event listener
    errorMsg = classes("error"),     //Error Div - Elements = multiple class names
    successIcon = classes("success-icon"), //Success Icon JS
    failureIcon = classes("failure-icon"); // Failure Icon JS

//Event Listener for submit CODE
//0: Input, 1: Email, 2: Password

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Preventing the error message from going away in 1 second


  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");  //Referencing the let engine function
  engine(password, 2, "Password cannot be blank");

  /*
    if(username.value === ''){
      errorMsg[0].innerHTML = "Username cannot be blank";
      failureIcon[0].style.opacity = "1";
      successIcon[0].style.opacity = "0";
    }
    else {
      errorMsg[0].innerHTML = "";
      failureIcon[0].style.opacity = "0";
      successIcon[0].style.opacity = "1";
    }

    */


});

//Function for the above username code

let engine = (id, serial, message) => {

  if(id.value.trim() === ''){ //Trim function makes sure Spaces (empty) doesn't work
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }
  else {
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }

};
