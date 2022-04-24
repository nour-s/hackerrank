

function countInversions(arr) {
    let count = 0;
    const mergeSort = (array) => {
        if (array.length === 1) {
            return array;
        }
        const length = array.length;
        const middle = Math.floor(length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return merge(mergeSort(left), mergeSort(right));

        function merge(left, right) {
            let result = [];
            let i = 0;
            let j = 0;

            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else if (left[i] > right[j]) {
                    result.push(right[j]);
                    count = count + (left.length - i)
                    j++;
                } else {
                    result.push(left[i]);
                    i++;
                }
            }

            // Concat the remaining elements from one of the array
            return result.concat(left.slice(i).concat(right.slice(j)));
        }
    };

    mergeSort(arr);
    return count;

}

// const count = countInversions([9, 5, 7, 1]);
// const count = countInversions([1, 1, 1, 2, 2]);
// const count = countInversions([2, 1, 3, 1, 2]);
const count = countInversions([7, 5, 3, 1]);
console.log(arr, count);
