using System;
using System.Collections.Generic;
using System.Linq;


static int longestConsecutive(TreeNode root)
{
    int helper(TreeNode root, int? target, int count)
    {
        if (root == null) return 1;

        count = root.val == target ? count + 1 : 1;

        int left = helper(root.left, root.val + 1, count);
        int right = helper(root.right, root.val + 1, count);

        return Math.Max(Math.Max(left, right), count);
    }

    if (root == null) return 0;

    var left = helper(root.left, root.val + 1, 1);
    var right = helper(root.right, root.val + 1, 1);

    return Math.Max(left, right);
}
var tree = new TreeNode();
new[] { 3, 5, 2, 1, 4, 6, 7 }.ToList().ForEach(x => tree.insert(x));
//       3
//    2      5
//  1      4   6
//               7
longestConsecutive(tree);