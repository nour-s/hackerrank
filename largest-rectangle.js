
Array.prototype.peek = function () { return this[this.length - 1]; }
Array.prototype.isEmpty = function () { return this.length == 0; }


function largestRectangle(heights) {
    var currentHeight, i;
    var [hStack, posStack] = [[], []];
    var maxSize = -Infinity;

    for (i = 0; i <= heights.length; i++) {
        currentHeight = heights[i] || 0;
        if (hStack.length === 0 || currentHeight > hStack.peek()) {
            hStack.push(currentHeight);
            posStack.push(i);
        } else if (hStack.peek() > currentHeight) {
            let tempPos;
            while (hStack.length && hStack.peek() > currentHeight) {
                const tempH = hStack.pop();
                tempPos = posStack.pop();
                const tempSize = tempH * (i - tempPos);
                maxSize = Math.max(tempSize, maxSize);
            }
            hStack.push(currentHeight);
            posStack.push(tempPos);
        }
    }
    return maxSize;
}

let area = largestRectangle([8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116]);
console.log(area);
