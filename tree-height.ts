import TreeNode from "./common/treeNode";

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
