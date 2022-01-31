console.log("Arrays...");

let a = [];

a.length
a.push(10)
a.push("Hello")
a.length
a[0]
a[1]
'Hello'
a[0] = 20;
a[2] = 400
a[9] = 'www';
a[5] = false;
a[6] = (x, y) => x + y;

a[6]  // (x, y) => x + y
a[6](30, 10)
a[7] = [2, 4, 6]
a[7][2]

for (let cnt = 0; cnt < a.length; cnt++) {
    console.log("Array Element: ", cnt, a[cnt]);
}

//Looping of array
const arr = [10, 21, 30, 40];
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]); // i is index of array
}

//forEach
arr.forEach((value) => {
    console.log(value);
})

//map [20, 40, 60, 80]
const results = arr.map((value) => { //value=20
    console.log(value);
    return value + 100;
})

console.log(results);

//filter [10, 30, 40]
const filterResult = arr.filter((value) => {
    return (value % 2 === 0);
});

//reduce 
const sum = arr.reduce((sum, value) => { // value=30 sum=31
    return sum + value;
}, 0)

