console.log("Functions...");

let a = 10;
let b = 20;
let result = a + b;
console.log(result);

//Function declaration
function add(x, y) {
    let result1 = x + y;
    return result1;
}

//Function Expression
const addition = function (x, y) {
    console.log(result);
    let result1 = x + y;
    return result1;
}
// addition(20, 20);

// IIFE, self executing functions
// (function (x, y) {
//     console.log(x + y);
// })(30, 30)

//Arrow function
const addition1 = (x, y) => {
    return x + y;
}

const addition2 = (x, y) => x + y;


function callMe() {
    console.log(this);
}