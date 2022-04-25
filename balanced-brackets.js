function isBalanced(s) {
    // Write your code here
    const left = ['(', '{', '['];
    const bracketMap = { '{': '}', '(': ')', '[': ']' };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            stack.push(s[i]);
        }
        else {
            if (stack.length === 0) {
                return false;
            }
            const last = stack.pop();
            if (bracketMap[last] != s[i]) {
                return false;
            }
        }

    }

    return !stack.length;
}


// console.log(isBalanced("[()]{}{[()()]()}")); // true
console.log(isBalanced("[(")); // false
