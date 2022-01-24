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

for(let cnt = 0; cnt < a.length; cnt++) {
    console.log("Array Element: ", cnt, a[cnt]);
}