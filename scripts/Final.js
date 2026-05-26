//creating variables
let Temperatures = [] // this is an empty array
const days = ["Monday:", "Tuesday:", "Wednesday:", "Thursday:", "Friday:", "Saturday:", "Sunday:"];
// step 1 user inputs the scale
let scale = prompt("Enter the scale: F or C");

let output = [];

for(let i=0; i<7; i++){
    let temp = prompt("Enter the temp") //getting the temp
    console.log(temp); //display the temp
    Temperatures.push(temp);// adding elements to the array

    document.getElementById("Temps").innerHTML += `<p>${days[i]} ${Temperatures[i]} </p>`;
    
}



