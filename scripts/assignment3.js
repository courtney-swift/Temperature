const city = "San Diego";

// Step 1: Convert temperatures
function convertTemperature(temperature, scale){

    temperature = Number(temperature);

    if (scale === "C") {
        return (temperature * 9/5) + 32;
    }else {
        return (temperature - 32) * 5/9;
    }
}

// User input
let Temperature = prompt("Enter the temperature");
let scale = prompt("Enter the scale (F or C):");

// Convert
let convertedTemperature = convertTemperature(Temperature, scale);

// Webpage output
let output = "";

output += `<h3>${city}</h3>`;

output += `<p>
The temperature in ${scale === "C" ? "Fahrenheit" : "Celsius"} is:
${convertedTemperature}${scale === "C" ? "°F" : "°C"}
</p>`;

// Display on page
document.getElementById("Weather Station").innerHTML += output;