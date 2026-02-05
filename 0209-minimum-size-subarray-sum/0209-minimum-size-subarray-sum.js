/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var i = 0;
    var j = 0;
    var sum = 0;
    var result = 0; // 0 means "no valid subarray yet"

    while (j < nums.length) {

        if (sum < target) {
            sum += nums[j];
            j++;
        } else {
            var newResult = j - i;
            if (result === 0 || newResult < result) {
                result = newResult;
            }
            sum -= nums[i];
            i++;
        }
    }

    while (sum >= target) {
        var newResult = j - i;
        if (result === 0 || newResult < result) {
            result = newResult;
        }
        sum -= nums[i];
        i++;
    }

    return result;
};