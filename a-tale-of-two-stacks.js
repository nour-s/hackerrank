class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }

    get length() { return this.stack.length; }
}

function processData(queries) {
    //Enter your code here
    const stackPopPeek = new Stack();
    const stackPush = new Stack();
    const result = [];

    for (let i = 0; i < queries.length; i++) {
        const [query, value] = queries[i];

        switch (query) {
            case 1:
                while (stackPopPeek.length > 0) {
                    stackPush.push(stackPush.pop());
                }
                stackPush.push(value);
                break;
            case 2:
                while (stackPush.length > 0) {
                    stackPopPeek.push(stackPush.pop());
                }
                stackPopPeek.pop();
                break;
            case 3:
                while (stackPush.length > 0) {
                    stackPopPeek.push(stackPush.pop());
                }
                const item = stackPopPeek.peek();
                result.push(item);
                break;
        }
    }

    return result;
}
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = processData(queries);
    console.log("ans", ans);

    for (let a of ans) {
        console.log(a);
    }
}
