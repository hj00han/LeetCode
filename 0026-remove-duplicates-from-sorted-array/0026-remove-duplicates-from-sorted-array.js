/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;

    for(j = 0; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }

    return 1 + i;
};
