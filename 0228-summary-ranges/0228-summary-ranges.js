/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let sumRanges = [];
    let i = 0;

    while(i < nums.length){
        let start = nums[i];

        while(i + 1 < nums.length && nums[i] + 1 === nums[i+1]){
            i++
        }

        let end = nums[i];

        if(start === end){
            sumRanges.push(start.toString());
        } else{
            sumRanges.push(start.toString() + "->" + end.toString());
        }

        i++
    }

    return sumRanges;
};