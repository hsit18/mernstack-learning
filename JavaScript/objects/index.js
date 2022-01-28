console.log("Objects...");

var myObj = {
    x: 5,
    y: 6
};

console.log(myObj['x']);
console.log(myObj.y);

myObj.x = 10;

const obj = {
    x: 100,
    y: 200,
    a: function() {
        console.log(this);
    }
}

var test = obj.a;
test();