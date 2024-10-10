class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        # Create an iterator for t
        it = iter(t)
        
        # Check if each character in s is in the iterator of t
        return all(char in it for char in s)
