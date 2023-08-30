/*
Input: nums = [3,9,3]
Output: 2
Explanation: Here are the steps to sort the array in non-decreasing order:
- From [3,9,3], replace the 9 with 3 and 6 so the array becomes [3,3,6,3]
- From [3,3,6,3], replace the 6 with 3 and 3 so the array becomes [3,3,3,3,3]
There are 2 steps to sort the array in non-decreasing order. Therefore, we return 2.
*/

class Solution {
    public long minimumReplacement(int[] nums) {
        
        long answer = 0;
        int n = nums.length;

        // Start from the second last element, as the last one is always sorted.
        for (int i = n - 2; i >= 0; i--) {
            // No need to break if they are already in order.
            if (nums[i] <= nums[i + 1]) {
                continue;
            }

            // Count how many elements are made from breaking nums[i].
            long numElements = (long)(nums[i] + nums[i + 1] - 1) / (long)nums[i + 1];

            // It requires numElements - 1 replacement operations.
            answer += numElements - 1;

            // Maximize nums[i] after replacement.
            nums[i] = nums[i] / (int)numElements;
        }

        return answer;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

public long minimumReplacement(int[] nums) {
        long ans = 0L;
        int m = nums[nums.length - 1];
        for (int i = nums.length - 2; i >= 0; i--) {
            int k = (nums[i] - 1) / m;
            ans += k;
            m = nums[i] / (k + 1);
        }
        
        return ans;
    }
