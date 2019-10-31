let testCount = 1000000;


let elapsedTime = 0;

let testArr = [];

let startTime = Date.now();
for(let i = 0; i < testCount; i++) {
    testArr = [];
}
elapsedTime = Date.now() - startTime;
console.log("Elapsed with arr: " + elapsedTime + " ms");

let testSet = new Set();

startTime = Date.now();
for(let i = 0; i < testCount; i++) {
    //testSet.clear();
    testSet = new Set();
}
elapsedTime = Date.now() - startTime;
console.log("Elapsed with set: " + elapsedTime + " ms");


// let addCount = 100;
// let testCount = 100000;
// let elapsedTime = 0;

// let foundCount = 0;
// let startTime = Date.now();

// let testArr = [];
// for(let i = 0; i < testCount; i++) {
//     testArr = [];
//     for(let k = 0; k < addCount; k++) {
//         randDay = Math.floor(Math.random() * 365);
    
//         if (testArr.includes(randDay)) {
//             foundCount++;
//             break;
//         }
//         else {
//             testArr.push(randDay);
//         }
//     }
// }

// elapsedTime = Date.now() - startTime;

// console.log("Elapsed time for arr push was " + elapsedTime + "ms");



// foundCount = 0;

// startTime = Date.now();

// let testSet = new Set();

// for(let i = 0; i < testCount; i++) {
//     //testSet.clear();
//     testSet = new Set();

//     for(let k = 0; k < addCount; k++) {
//         randDay = Math.floor(Math.random() * 365);
        
//         if (testSet.has(randDay)) {
//             foundCount++;
//             break;
//         } else {
//             testSet.add(randDay);
//         }
//     }
// }

// elapsedTime = Date.now() - startTime;
// console.log("Elapsed time for set add was " + elapsedTime + "ms");





