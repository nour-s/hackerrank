class TreeNode {
    constructor(val = null) {
        this.val = val;
    }
    val;
    left;
    right;

    insert(newData) {
        let node = this;
        if (!node.val) {
            node.val = newData;
        } else if (node.left && newData < node.val) {
            node.left.insert(newData);
        } else if (newData < node.val && !node.left) {
            const newNode = new TreeNode(newData);
            node.left = newNode;
        } else if (node.right && newData > node.val) {
            node.right.insert(newData);
        } else if (newData > node.val && !node.right) {
            const newNode = new TreeNode(newData);
            node.right = newNode;
        }
    }
}

function processData(tree, v1, v2) {
    function lca(root) {
        if (!root) {
            return null;
        }
        //Decide if you have to call rekursively
        //Samller than both
        if (root.val < v1 && root.val < v2) {
            return lca(root.right);
        }
        //Bigger than both
        if (root.val > v1 && root.val > v2) {
            return lca(root.left);
        }

        //Else solution already found
        return root.val;
    }

    return lca(tree);
}

function processDataIterative(tree, v1, v2) {
    function lca(root) {
        if (root == null) return root;
        while (root != null) {
            if (Math.min(v1, v2) <= root.data && Math.max(v1, v2) >= root.data)
                return root;
            else if (Math.min(v1, v2) < root.data && Math.max(v1, v2) < root.data)
                root = root.left;
            else
                root = root.right;
        }
        return root;
    }

    return lca(tree);
}

const nodeValues = [4, 2, 3, 1, 7, 6];


const tree = new TreeNode();
for (let nodeValue of nodeValues) {
    tree.insert(nodeValue);
}

const x = processData(tree, 1, 7);
console.log(x); // 4
