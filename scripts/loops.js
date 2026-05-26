console.log("Loops");

// for(let i=0;i<4;i++){
// document.write("My for is working?");
// }

// for(let i=2;i<21;i+=2){
//     document.write(`<p>${i}</p>`);
// }


for(let i=1;i<100;i+=1){
    document.write(`<p>2 x ${i} = ${2*i}</p>`);
}

//use a loop for printing table of 2
const num = 3;
for(let i=1;i<11;i++){
    document.write(`<p> ${num} x ${i} = ${i*num}</p>`);
}

// temp of 7 days using only variables
let temp1 = 30;
let temp2 = 40;
let temp3 = 25;
let temp4 = 15;
let temp5 = 24;
let temp6 = 35;

// temp of 7 days using an array
//            0  1  2  3  4  5
let temps = [30,40,25,15,24,35];
console.log(temps[0]);
console.log(temps[1]);
console.log(temps[2]);
console.log(temps[3]);
console.log(temps[4]);
console.log(temps[5]);

let temps = [30,40,25,15,24,35];
for(let i=0; i<=5; i++)
    document.write(`<li> ${temps[i]} </li>`);