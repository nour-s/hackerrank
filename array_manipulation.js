var queries = [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15]];

const n = 10;

let arr = new Array(n).fill(0);
let max = -Infinity;

for (var i = 0; i < queries.length; i++) {
    var query = queries[i];
    var [a, b, k] = [query[0] - 1, query[1] - 1, query[2]];

    for (var j = a; j <= b; j++) {
        const sum = (arr[j] || 0) + k;
        arr[j] = sum;
        max = Math.max(max, sum);
    }
    console.log(arr);
}

console.log(max);