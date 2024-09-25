class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> result;
        auto greatest = max_element(candies.begin(), candies.end());

        for(vector<int>::iterator it = candies.begin(); it != candies.end(); ++it){
            auto totalCandies = *it + extraCandies;
            
            if(totalCandies >= *greatest){
                result.push_back(true);
            } else{
                result.push_back(false);
            }            
        }

        return result;
    }
};