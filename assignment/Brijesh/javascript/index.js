// let a= 20;
// for (let i=1; i<=a; i++){
//     console.log(i);
// }

// var n = 5;
// for(i=1; i<=n; i++){
//     console.log("welcome " + i);
// }



// sum of N natural Number

// let sum = 0;
// const n=100;
// for(let i=1; i<=n; i++){
//     sum += i;
// }
// console.log('sum: ' ,sum)



// Exercise 1)

// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// var arr_1= [25,35,45,12];
// var arr_2 = [4, 8, 7, 13, 12];
// var  sum_1 = 0;
// var sum_2= 0;
// for(let i=0; i<arr_1.length;i++){
//     sum_1 += arr_1[i];
  
// }
// for (let i = 0; i < arr_2.length; i++) {
//     sum_2 += arr_2[i];
// }   console.log(sum_1 + sum_2);


// Exercise 2)

// Using a for loop print all even numbers up to and including n. Don’t include 0.
// let n1 = 22;
// for (var x=1; x<=n1; x++) {
//     if (x % 2 === 0) {
//             console.log(x);
//     }
// }


// Exercise 3)

// Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// for (let y=arr.length-1; y>=0; y--){
//  console.log(arr[y]);
// }

// Exercise 4)

// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.


 
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let a = [0];
let b=0;

for(var i = 0; i<arr_3.length; i++){
    a = arr_3[i];
}for(var j = 0; j<arr_4.length; j++){
    b = arr_4[j];
    }
    console.log([a + b]);






// Exercise 7)

// Given a number n Calculate the factorial of the number 


// let n = 5;
// var a = 1;
// for(let i=n; i>=1; i--){
//     a = a*i;
// }console.log(a);



// Exercise 10)

// This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// let n = 6;
// var a = 0;
// for(let i=n; i>=1; i--){
//     a = a+i;
// }console.log(a);