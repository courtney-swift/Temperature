//creating variables
let Temperatures = [] // this is an empty array
// Array to store scales
let scales = [];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let temperatures = [];

temperatures.push(25);
// step 1 user inputs the scale

// Function to convert temperature
function convertTemperature(temp, scale){

    if(scale === "C"){

        return (temp * 9/5) + 32;

    } else {

        return (temp - 32) * 5/9;
    }
}

// Variables for hottest and coldest days
let hottestTemp = -Infinity;
let coldestTemp = Infinity;

let hottestDay = "";
let coldestDay = "";

// Variable for total temperatures
let total = 0;

// HTML output
let output = "";

// FOR LOOP for 7 days
for(let i = 1; i <= 7; i++){

    // Ask user for temperature
    let temperature = Number(
        prompt(`Enter ${days[i - 1]} Temperature`)
    )
     // Ask user for scale
    let scale = prompt(
        `Enter scale for ${days[i - 1]} (F or C)`
    ).toUpperCase();

    // Store in arrays
    Temperatures.push(temperature);
    scales.push(scale);

    // Convert temperature
    let convertedTemperature =
        convertTemperature(temperature, scale);

    // Add to total
    total += temperature;

    // Determine weather label
    let weatherLabel = "";

    // Celsius checks
    if(
        (scale === "C" && temperature < 10) ||
        (scale === "F" && temperature < 50)
    ){

        weatherLabel = "Cold";

    } else if(
        (scale === "C" && temperature <= 25) ||
        (scale === "F" && temperature <= 77)
    ){

        weatherLabel = "Comfortable";

    } else {

        weatherLabel = "Hot";
    }

    // Track hottest day
    if(temperature > hottestTemp){

        hottestTemp = temperature;

        hottestDay = days[i - 1];
    }

    // Track coldest day
    if(temperature < coldestTemp){

        coldestTemp = temperature;

        coldestDay = days[i - 1];
    }

    // Create CSS class
    let Final = weatherLabel.toLowerCase();

    // Add day report to output
    output += `
    <div class="dayReport ${Final}">
        <h3>${days[i - 1]}</h3>

        <p>
        Original Temperature:
        ${temperature}°${scale}
        </p>

        <p>
        Converted Temperature:
        ${convertedTemperature.toFixed(1)}
        ${scale === "C" ? "°F" : "°C"}
        </p>

        <p>
        Weather Status:
        ${weatherLabel}
        </p>
    </div>
    `;
}

// Calculate average
let average = total / temperatures.length;

// Add summary section
output += `
<div class="summary">

    <h2>Weekly Summary</h2>

    <p>
    Weekly Average:
    ${average.toFixed(1)}°
    </p>

    <p>
    Hottest Day:
    ${hottestDay} (${hottestTemp}°)
    </p>

    <p>
    Coldest Day:
    ${coldestDay} (${coldestTemp}°)
    </p>

</div>
`;

// Display on webpage
document.getElementById("weatherReport").innerHTML = output;