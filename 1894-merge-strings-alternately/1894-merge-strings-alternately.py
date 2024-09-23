class Solution(object):
    def mergeAlternately(self, word1, word2):
        merge = []
        
        for i in range(min(len(word1), len(word2))):
            merge.append(word1[i])
            merge.append(word2[i])
        
        merge.append(word1[i+1:])
        merge.append(word2[i+1:])
        
        return ''.join(merge)
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        