var userName = prompt("What is your name?");
var userAge = prompt("How old are you?");
var knowProgramming = confirm("Do you know how to program?");
var regularExpressionName = /[a-z]+/
var regularExpressionAge =/[0-9]+/


if(regularExpressionName.test(userName)){
    console.log(userName);
}

if(regularExpressionAge.test(userAge)){
    console.log(userAge);
}

if(knowProgramming){
    console.log(knowProgramming);
}