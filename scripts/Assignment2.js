// constansts
const city = "San Diego"
//step 1. create a fn gets C and convert it to F
function celsiusTofahrenheit(celsius){
    return Fahrenheit = (celsius * 9/5) + 32; //change this with correct formula
}

// step 2. Create a var for each day with C
let mondayC = 25;
let tuesdayC = 21;
let wednesdayC = 21;
let thursdayC = 21;
let fridayC = 20;
let saturdayC = 19;
let sundayC = 22;

// Step 3. Call the fn for every day
let mondayF = celsiusTofahrenheit(mondayC);
let tuesdayF = celsiusTofahrenheit(tuesdayC);
let wednesdayF = celsiusTofahrenheit(wednesdayC);
let thursdayF = celsiusTofahrenheit(thursdayC);
let fridayF = celsiusTofahrenheit(fridayC);
let saturdayF = celsiusTofahrenheit(saturdayC);
let sundayF = celsiusTofahrenheit(sundayC);


// Step 4. create output to the HTML// 
let output = "";
output += `<h3> ${city} </h3>`;
output += `<p> Monday: ${mondayC}°C  > ${mondayF}°F 🌞</p>`;
output += `<p> Tuesday: ${tuesdayC}°C  > ${tuesdayF}°F 🌞</p>`;
output += `<p> Wednesday: ${wednesdayC}C  > ${wednesdayF}°F 🌞</p>`;
output += `<p> Thursday: ${thursdayC}°C  > ${thursdayF}°F🌞 </p>`;
output += `<p> Friday: ${fridayC}°C  > ${fridayF}°F 🌧️</p>`;
output += `<p> Saturday: ${saturdayC}°C  > ${saturdayF}°F 🌧️ </p>`;
output += `<p> Sunday: ${sundayC}°C  > ${sundayF}°F 🌞</p>`;



document.getElementById("forecast").innerHTML = output;
