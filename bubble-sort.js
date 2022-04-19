function maximumToys(prices, k) {
    const n = prices.length;
    const total = new Array(n).fill(0);
    let curTotal = 0;
    let cntInd = right = n - 1;

    while (right > 0) {
        curTotal = 0;

        if (total[cntInd] > k) {
            cntInd--;
        }

        for (var j = 0; j < right; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (prices[j] > prices[j + 1]) {
                [prices[j], prices[j + 1]] = [prices[j + 1], prices[j]];
            }
            curTotal += prices[j];
            total[j] = curTotal;
            total[j + 1] = curTotal + prices[j + 1];
        }
        right--;

        // After the first sort, the total of all items is already in the last element
        // If the budget k is already bigger than all items, we can stop
        if (total[n - 1] <= k) {
            return n;
        }
    }
    return cntInd + 1;
}

var prices = [5, 3, 4, 1, 2];
console.log(maximumToys([111, 1000, 12, 5, 1, 200, 10], 50));