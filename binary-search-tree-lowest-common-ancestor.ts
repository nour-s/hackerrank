// Hacker Rank only accepts TypeScript hence this file

"use strict";

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
