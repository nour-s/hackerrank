// For https://recursion.vercel.app/ website to visualize a binary tree recursion
// Keeping a copy of the code I used to visualize it
// Use the global variables section to fill the tree variable
function fn(node, min, max) {
    // type your own code heredf'

    if (node == null) {
        return true;
    }

    if (node.val <= min || node.val >= max) return false;

    return fn(node.left, min, node.val) && fn(node.right, node.val, max);

}

// Global variables
// tree '{ "val": 3, "left": { "val": 2, "left": { "val": 1 } }, "right": { "val": 5, "left": { "val": 4 }, "right": { "val": 6, "right": { "val": 7 } } } }'
// min max -Infinity, Infinity