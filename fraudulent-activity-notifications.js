function activityNotifications(expenditure, d) {
    let countingSort = new Array(201).fill(0);
    const medianPos = d % 2 === 0 ? (d / 2) : Math.floor(d / 2) + 1;
    let notifications = 0;
    // let end = d;
    const len = expenditure.length;

    for (let i = 0; i < d; i++) {
        countingSort[expenditure[i]]++;
    }

    for (let end = d, current = 0; end < len; end++, current++) {
        const median = getMedian(countingSort, d, medianPos);
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

    while (counter < medianPos) {
        counter += countingSort[left];
        left++;
    }

    let right = left;
    left--;

    if (counter > medianPos || d % 2 === 0) {
        return left;
    }
    else {
        while (countingSort[right] === 0) {
            right++;
        }
        return (left + right) / 2;
    }
}

const r = activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 4);
console.log(r);