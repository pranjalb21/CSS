// try {
//     console.log("Hi from try.");
//     throw new SyntaxError();
// } catch(e) {
//     console.log(e[0]);
// // }
// throw new Error();
// console.log("hi");

// function add(a, b){
//     try{
//         if(typeof(a)!='number' || typeof(b)!='number')
//             throw new ReferenceError();
//         console.log(a + b);
//     } catch(e) {
//         console.log("Please provide a correct value", e);
//     }
// }
// add(5, '5');

// try {
//     console.log(Number(5).toPrecision(100))
// } catch(e) {
//     console.log(e);
// }

// var str = "Hello";
// console.log(str.match("jello"));
// console.log(console.log('Hello'));

// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())

function hi() {
    return 'Hi';
}
var h = hi
console.log(h)