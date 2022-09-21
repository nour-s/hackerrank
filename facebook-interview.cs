using System;

// To execute C#, please define "static void Main" on a class
// named Solution.

class Solution
{
    static void Main(string[] args)
    {
       
    }

    bool canFormPalindrome(string input)
    {
        // face a ecaf
        if(!input.Any())
        {
            return false;
        }

        var map = new Dictionary<char, int> ();
        foreach(var c in input)
        {
            if(!map.ContainsKey(c)){
                map.Add(c, 0);
            }
            map[c] += 1;
        }

        var foundOdd = false;
        foreach(var count in map.Values){
            if(count % 2 != 0){
                if(foundOdd)
                    return false;
                foundOdd = true;                    
            }
        }

        return true;
    }
}

// Your previous Plain Text content is preserved below:

// Welcome to Meta!

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you would like to use for your interview,
// simply choose it from the dropdown in the top bar.

// Enjoy your interview!




// *Problem:*

// Check if characters of a given string can be rearranged to form a palindrome
// every letter count should be even.
// only one letter can be odd.


// *Example:*

// faceface - true
// facebookface - false
// face a ecaf

// *Function signature:*
// bool canFormPalindrome(string input);


Problem:

Given a binary search tree, find the length (number of nodes) of the longest increasing path in a BST


Example:
     4
   /   \
  1      6    
 /      /  \
0      5    12 

     4
   /   \
  1      6    
 /  \    /  \
0    3  5    12 

     4
   /   \
  1      6    
   \    /  \
    3  5    12 

Output : 5 (path formed by  0 -> 1 -> 4 -> 6 → 12)

Function signature
int longestIncreasingPath(Node* root);

// algorithm
// countLargestPath(root){

   public int findLeft(TreeNode root)
    {
        if(root.left == null){
            return 0;
        }
        return findLeft(root.left) + 1;
    }

    public int findRight(TreeNode root){
    {
        if(root.right == null){
            return 0;
        }
        return findLeft(root.right) + 1;
    }

    public int countLargestPath(TreeNode root){
        if(root == null){
            return 0;
        }

        var leftCount = findLeft(root);
        var rightCount = findRight(root);

        var total = leftCount + rightCount + 1;

         var largest = Math.Max(countLargestPath(root.left) , countLargestPath(root.right));

        return Math.Max(largest, total);
    }
    
    


    // }
