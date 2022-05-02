class TreeNode {
  public constructor(val: number = null) {
    this.val = val;
  }
  public val: number;
  public left: TreeNode;
  public right: TreeNode;

  insert(newData: any) {
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

function processData(tree: TreeNode) {
  const getHeight = (tree) => {
    if (tree.left == null && tree.right == null) return 0;
    const leftHeight = tree.left && getHeight(tree.left);
    const rightHeight = tree.right && getHeight(tree.right);
    return Math.max(leftHeight, rightHeight) + 1;
  };

  return getHeight(tree);
}

const nodeValues = [3, 5, 2, 1, 4, 6, 7];

const tree = new TreeNode();
for (let nodeValue of nodeValues) {
  tree.insert(nodeValue);
}
const r = processData(tree);
console.log(r);
