public class TreeNode
{
    public int? val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int? val = null) { this.val = val; }

    public void insert(int newData)
    {
        var node = this;
        if (node.val == null)
        {
            node.val = newData;
        }
        else if (node.left != null && newData < node.val)
        {
            node.left.insert(newData);
        }
        else if (newData < node.val && node.left == null)
        {
            var newNode = new TreeNode(newData);
            node.left = newNode;
        }
        else if (node.right != null && newData > node.val)
        {
            node.right.insert(newData);
        }
        else if (newData > node.val && node.right == null)
        {
            var newNode = new TreeNode(newData);
            node.right = newNode;
        }
    }

    public static TreeNode From(String s)
    {
        if (s == null || s.Length == 0) return null;
        Stack<TreeNode> stack = new Stack<TreeNode>();
        for (int i = 0; i < s.Length; i++)
        {
            if (char.IsDigit(s[i]) || s[i] == '-')
            {
                int j = i;
                while (i + 1 < s.Length && char.IsDigit(s[i])) i++;
                TreeNode curt = new TreeNode(Convert.ToInt32(s.Substring(j, i + 1)));
                if (stack.Count == 0) stack.Push(curt);
                else
                {
                    TreeNode parent = stack.Peek();
                    if (parent.left == null) parent.left = curt;
                    else parent.right = curt;
                    stack.Push(curt);
                }
            }
            if (s[i] == ')') stack.Pop();
        }
        return stack.Pop();
    }
}