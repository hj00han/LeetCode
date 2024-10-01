class Solution:
    def reverseWords(self, s: str) -> str:
        collectWords = []
        aWord = ""

        for i in range(len(s) -1, -1, -1):
            if s[i] != " ":
                aWord = s[i] + aWord
            elif aWord:
                collectWords.append(aWord)
                aWord = ""

        if aWord:
            collectWords.append(aWord)
        
        return " ".join(collectWords)

                
                