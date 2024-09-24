class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        auto isDivisible = [](const std::string& s, const std::string& t) {
            if (s.size() % t.size() != 0) return false;

            string repeat;
            for (int i = 0; i < s.size() / t.size(); ++i) {
                repeat += t;
            }

            return s == repeat; 
        };

        int gcd_length = std::gcd(str1.size(), str2.size());
        
        std::string repeated = str1.substr(0, gcd_length);
        
        if (isDivisible(str1, repeated) && isDivisible(str2, repeated)) {
            return repeated;
        } else {
            return "";
        }
    }
};