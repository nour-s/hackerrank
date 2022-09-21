import TreeNode from "./common/treeNode";

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  // Enter your code here
  const nodeValues = inputLines[1]
    .trim()
    .split(" ")
    .map((val) => +val);

  const tree = new TreeNode();
  for (let nodeValue of nodeValues) {
    tree.insert(nodeValue);
  }
  let result = processData(tree) ? "Yes" : "No";
  console.log(result);
}

function processData(root: TreeNode) {
  function isIt(node: TreeNode, min: number, max: number): boolean {
    if (node == null) {
      return true;
    }
    if (node.val <= min || node.val >= max) return false;

    return isIt(node.left, min, node.val) && isIt(node.right, node.val, max);
  }
  return isIt(root, -Infinity, Infinity);
}
