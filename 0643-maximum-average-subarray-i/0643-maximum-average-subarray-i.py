class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        # Calculate the sum of the first k elements
        sumOfNums = sum(nums[:k])
        max_sum = sumOfNums

        # Slide the window across the array
        for i in range(k, len(nums)):
            # Update the window sum by removing the element that goes out
            # and adding the element that comes in
            sumOfNums += nums[i] - nums[i - k]
            # Update max_sum if the current window sum is greater
            max_sum = max(max_sum, sumOfNums)

        # Return the maximum average
        return max_sum / k
        