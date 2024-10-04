class Solution:
    def compress(self, chars: List[str]) -> int:
        s = ""
        count = 1
        if len(chars) == 1:
            s = chars[0]
        else:
            for i in range(len(chars)):
                if i != len(chars) - 1 and chars[i] == chars[i + 1]:
                    count = count + 1
                else:
                    s += chars[i]
                    if count > 1:
                        s += str(count)
                    count = 1 


        chars.clear()
        for char in s:
            chars.append(char)
        
        return len(chars)