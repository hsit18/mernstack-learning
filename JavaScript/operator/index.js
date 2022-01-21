console.log("Learning Operators...");

let a = 5;
let b = 25;
let result = a + b;

console.log(result);
console.log(result++)


let a1 = 4;
let b1 = 25;
a1 /= 5;  //a1 = a1 % 5; 

let result1 = a1 + b1;

console.log(a1, result1);


let a2 = '25';
let b2 = 25;
console.log(a2 === b2);
console.log(a2 !== b2);

console.log(a2 >= b2);

// let x = 10;
// let y = x;
// console.log(x === y);

// console.log(true === false)

console.log('Glow' <= 'Glee')

console.log(a2 == 25 || a2 >= 25);
let b3;
let z = b3 || 10;
console.log(z);
if(false || false) {
    console.log('passed');
} else {
    console.log('failed');
}

//Nan example
let y = 10 + undefined;
console.log(y)

// falsy values: '', 0, undefined, null, false, NaN

//ternary operator
console.log((false || false) ? 'passed' : 'failed');
console.log(!(false && false) ? 'passed' : 'failed');