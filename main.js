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



// The intializations
let username = id("username"),
    email = id("email"),
    password = id("password"),
    errorMsg = classes("error"),     //Error Div - Elements = multiple class names
    successIcon = classes("success-icon"), //Success Icon JS
    failureIcon = classes("failure-icon"); // Failure Icon JS
//Array Example
/* errorMsg = ['error', 'error', 'error']; //First: Input, Second: Email, Thrid: Password

errorMsg[1].innerHTML = "Hello" //To get the 2ns error or Email
*/
