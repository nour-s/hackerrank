function activityNotifications(expenditure, days) {
    let countingSort = new Array(201).fill(0);
    const medianPos = days % 2 === 0 ? (days / 2) : Math.floor(days / 2) + 1;
    let notifications = 0;
    const len = expenditure.length;

    for (let i = 0; i < days; i++) {
        countingSort[expenditure[i]]++;
    }

    for (let end = days, current = 0; end < len; end++, current++) {
        const median = getMedian(countingSort, days, medianPos);
        if (expenditure[end] >= 2 * median) {
            notifications++;
        }

        countingSort[expenditure[current]]--;
        countingSort[expenditure[end]]++;
    }

    return notifications;
}

function getMedian(countingSort, d, medianPos) {
    let left = 0, counter = 0;
    // Remember, the index of the counterList is the actual value in the expenditure array
    // So left and right are the actual values

    // Increase the counter by the number of times the value is in the countingSort array
    // Until we reach the median position or cross it.
    while (counter < medianPos) {
        counter += countingSort[left];
        left++;
    }

    let right = left;
    left--;

    if (counter > medianPos || d % 2 !== 0) {
        return left;
    }
    else {
        while (countingSort[right] === 0) {
            right++;
        }
        return (left + right) / 2;
    }
}

const r = activityNotifications([0, 1, 5, 6, 7, 8, 9, 20], 4);
console.log(r);