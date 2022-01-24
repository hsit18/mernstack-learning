console.log("Loops...");

let counter = 1;
while(counter <= 5) {
    console.log("Hello", counter);
    counter++;
}

do {
    console.log("do while", counter);
    counter++;
} while(counter <= 10);

for(let cnt = 5; cnt >= 1; cnt--) {
    console.log("For loop", cnt);
}