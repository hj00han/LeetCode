class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [1] * n  # Initialize the answer array with 1s

        #Build the prefix product
        prefix = 1
        for i in range(n):
            answer[i] = prefix  # Set the prefix product for index i
            prefix *= nums[i]  # Update the prefix product with current element
    
        #Build the suffix product and combine it with the prefix product
        suffix = 1
        for i in range(n - 1, -1, -1):
            answer[i] *= suffix  # Multiply by the suffix product
            suffix *= nums[i]  # Update the suffix product with current element
    
        return answer
