
// const { createGraphFromPointers } = require("@hediet/debug-visualizer-data-extraction");

const arr = [1, 2, 2, 4];
const r = 2;
// const arr = [1, 3, 9, 9, 27, 81];
// const r = 3;

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let count = 0;
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        map[key] = map[key] ? map[key] + 1 : 1;
    }
    return count;
}

console.log(countTriplets(arr, r));
