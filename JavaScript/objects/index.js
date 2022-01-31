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
    a: function () {
        console.log(this);
    }
}

var test = obj.a;
test();

const obj2 = {
    message: "Hello...",
    y: 1000
}

console.log(Object.assign(obj, obj2))

var obj3 = Object.create(null)
obj3['k'] = 'test';


for (let key in obj) {
    console.log(key, obj[key]);
}
const testObj = {
    a: 100
}
Object.freeze(testObj);
testObj.a = 22;
testObj.y = 22;
console.log(testObj);