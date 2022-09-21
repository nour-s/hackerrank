// Hacker Rank only accepts TypeScript hence this file
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

function processData(tree: TreeNode, v1: number, v2: number) {
  function lca(root: TreeNode): number {
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
  const [v1, v2] = inputLines[2].split(" ").map((val) => parseInt(val));
  let result = processData(tree, v1, v2);
  console.log(result);
}
