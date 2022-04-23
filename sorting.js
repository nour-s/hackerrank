// function activityNotifications(expenditure, d) {
//     let count = 0;

//     // Write your code here
//     for (let i = d; i < expenditure.length; i++) {
//         const sliced = arr.slice(start, end).sort((a, b) => a - b);
//         const mid = Math.floor((end - start) / 2);
//         const median = sliced[mid];

//         if (expenditure[i] >= 2 * median) {
//             count++;
//         }
//     }

//     return count;
// }
const arr = [2, 3, 4, 2, 3, 6, 8, 4, 5];
// const r = activityNotifications(arr, 5);
// console.log(r);

function countingSort(arr) {
    const indexer = new Array(201).fill(0);

    for (let i = 0; i < arr.length; i++) {
        indexer[arr[i]]++;
    }

    for (let i = 1; i < indexer.length; i++) {
        indexer[i] += indexer[i - 1];
    }

    const max = indexer[indexer.length - 1];
    const sorted = new Array(max).fill(0);

    for (let i = arr.length - 1; i >= 0; i--) {
        sorted[indexer[arr[i]] - 1] = arr[i];
        indexer[arr[i]]--;
    }

    return sorted;
}

console.log(countingSort(arr));