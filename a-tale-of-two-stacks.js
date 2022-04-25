class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
}


function processData(input) {
    //Enter your code here
    const stack1 = new Stack();
    const stack2 = new Stack();

    const [query, value] = input;

    switch (input) {
        case '1':
            stack1.push(value);
            break;
        case '2':
            stack2.push(value);
            break;
        case '3':

    }

} 
