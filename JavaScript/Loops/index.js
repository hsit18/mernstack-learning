console.log("Loops...");

let counter = 1;
while (counter <= 5) {
    console.log("Hello", counter);
    counter++;
}

do {
    console.log("do while", counter);
    counter++;
} while (counter <= 10);

for (let cnt = 5; cnt >= 1; cnt--) {
    console.log("For loop", cnt);
}

// While Loops
let i = 0;
while (i < 10) {
    console.log("Hello...");
    counter++;
}

//For loops
//  initialization; condition; increment/decrement   
for (let i = 0; i < 10; i++) {
    console.log("Hello...");
}

let sum = 0;
for(let i=1; i<=100; i++) {
    if(i % 2 === 0) {
        sum++;
    }
}

const arr = [10, 20, 30, 40];

for(let i=0; i<arr.length; i++) {
    console.log(i, arr[i]); // i is index of array
}

