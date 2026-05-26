console.log("conditionals")

// if-statement condition (y/n)
// --- SYNTAX ---
// if(condition){
// //code to be run if the condition is true
//}

let result = 50;
// the differnt types in a if syntax < > == !
if(result > 60){
    console.log("You passed the exam")
}

// case 1: 5 == 5 -> true
// case 2: 5 == "5" -> true because checks the value
// case 3: 5 === "5" -> false because checks value and datatype

// if-else statement condition (y/n)
// --- SYNTAX ---
// if(condition){
// code to be run if the condition is true
//}else{
// code to be run if the condition is false
//}

let points = 200;
if(points > 60){
    console.log("You won!!!");
}else{
    console.log("You lose!!!");
}

let boiling = 195;
if(boiling > 100){
    console.log("Water is bolling!")
}else{
    console.log("Water is not boling")
}

// else-if condition
// --- SYNTAX ---
// if(condition1){
// code to be run if the condition1 is true
//}else if(condition2){
// code to be run if the condition2 is true
//}else{
// code to be run if the conditions are falsed
//}

let age = 30;

if(age < 13){
console.log("You are a child!");
}else if (age < 21){
    console.log("You are a teenager");
}else if(age <64){
    console.log("You are a adult");
}else{
    console.log("You are a senior")
}

//challenge 2: 
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

// let trafficLight = prompt("colors of lights (green, yellow, or red)");
// if (trafficLight === "green") {
//     console.log("Go!");
// } else if (trafficLight === "yellow") {
//     console.log("Slow down.");
// } else if (trafficLight === "red") {
//     console.log("Stop.");
// } else {
//     console.log("Invalid input.");
// }



let kidAge = prompt("Age of Viewers (AGE)");
if(kidAge<12){
    console.log("5$");
}
else if(kidAge<18){
    console.log("8$");
}
else if(kidAge>18){
    console.log("10$");
}


// let userType = prompt("Enter your role");
// let htmlMessage = ""
// if (userType == "Admin"){
//     console.log("Full Access");
//     htmlMessage = "Welcome Admin";
// }
// else if(userType=="Editor"){
//     console.log("Access but limited");
//     htmlMessage = "Welcome Editor";
// }
// else if (userType=="Guest"){
//     console.log("You do not have access");
//     htmlMessage = "Welcome Guest";
// }else {userType="Error";}
// document.getElementById("roles").innerHTML = htmlMessage;


//Challenge 3: 
// function suggestOutfit(temp) {
//     let temp = prompt("Enter the temperature in °C:");
//     temp = Number(temp);
//     let message = "";
//     if (temp < 15) {
//         message = "It's cold -- wear a jacket.";
//     } else if (temp >= 15 && temp <= 25) {
//         message = "The weather is mild -- wear a sweater.";
//     } else if (temp > 25) {
//         message = "It's warm -- wear a t-shirt.";
//     } else {
//         message = "Invalid temperature entered.";
//     }
//     document.getElementById("outfit-suggestion").innerText = message;
// }
// suggestOutfit();