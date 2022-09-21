export default class TreeNode {
  public constructor(val: number | null) {
    this.val = val;
  }
  public val: number | null;
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
