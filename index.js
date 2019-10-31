const opn = require('opn');
const fs = require('fs');

const simulationCount = 1000000;

const peopleUpTo = 100;

const results = [];

class Result {

    constructor(peopleAmount, foundCount, totalCount) {
        this.peopleAmount = peopleAmount;
        this.foundCount = foundCount;
        this.totalCount = totalCount;

        this.probability = foundCount / totalCount * 100;

    }

}

const startTime = Date.now();

for(let j = 2; j < peopleUpTo; j++) {

    let foundCount = 0;

    let peopleArr = [];

    for(let i = 0; i < simulationCount; i++) {

        peopleArr = [];
        let randDay;

        for(let k = 0; k < j; k++) {
            randDay = Math.floor(Math.random() * 365);
            //if (peopleArr.indexOf(randDay) !== -1) {
            if (peopleArr.includes(randDay)) {
                foundCount++;
                break;
            } else {
                peopleArr.push(randDay);
            }
        }
    }


    // let peopleSet = new Set();

    // for(let i = 0; i < simulationCount; i++) {

    //     peopleSet.clear();
    //     let randDay;
    //     let lengthBeforeAdd;
    //     for(let k = 0; k < j; k++) {
    //         randDay = Math.floor(Math.random() * 365);

    //         lengthBeforeAdd = peopleSet.size;
    //         peopleSet.add(randDay);

    //         if (peopleSet.size === lengthBeforeAdd) {
    //             foundCount++;
    //             break;
    //         }
    //     }
    // }



    // let peopleSet = new Set();

    // for(let i = 0; i < simulationCount; i++) {

    //     peopleSet.clear();
    //     let randDay;

    //     for(let k = 0; k < j; k++) {
    //         randDay = Math.floor(Math.random() * 365);
    //         if (peopleSet.has(randDay)) {
    //             foundCount++;
    //             break;
    //         } else {
    //             peopleSet.add(randDay);
    //         }
    //     }
    // }

    results.push(new Result(j, foundCount, simulationCount));
    //results[j] = foundCount + "/" + simulationCount + ": " + foundCount/simulationCount * 100 + " %";

}

const timeElapsed = Date.now() - startTime;
console.log("Simulation ended, time passed: " + timeElapsed + " ms");

fs.writeFileSync('results.json', JSON.stringify({ results: results }));

//opn('index.html', { app: 'firefox' });

console.log("END");
