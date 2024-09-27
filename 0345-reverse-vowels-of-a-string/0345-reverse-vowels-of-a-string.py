class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = set('aeiouAEIOU')
        vowel_chars = [ch for ch in s if ch in vowels]
        s_list = list(s)
        
        for i in range(len(s_list)):
            if s_list[i] in vowels:
                s_list[i] = vowel_chars.pop()
                
        return ''.join(s_list)