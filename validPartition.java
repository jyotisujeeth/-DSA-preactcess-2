
/*
Input: nums = [4,4,4,5,6]
Output: true
Explanation: The array can be partitioned into the subarrays [4,4] and [4,5,6].
This partition is valid, so we return true.
*/
//Top-Down Dynamic Programming
class Solution {
    Map<Integer, Boolean> memo = new HashMap<>();

    // Determine if the prefix array nums[0 ~ i] has a valid partition
    boolean prefixIsValid(int[] nums, int i) {
        if (memo.containsKey(i)) {
            return memo.get(i);
        }
        boolean ans = false;

        // Check 3 possibilities
        if (i > 0 && nums[i] == nums[i - 1]) {
            ans |= prefixIsValid(nums, i - 2);
        }
        if (i > 1 && nums[i] == nums[i - 1] && nums[i - 1] == nums[i - 2]) {
            ans |= prefixIsValid(nums, i - 3);
        }
        if (i > 1 && nums[i] == nums[i - 1] + 1 && nums[i - 1] == nums[i - 2] + 1) {
            ans |= prefixIsValid(nums, i - 3);
        }
        memo.put(i, ans);
        return ans;
    }

    public boolean validPartition(int[] nums) {
        int n = nums.length;
        memo.put(-1, true);

        return prefixIsValid(nums, n - 1);
    }
}
////////////////////////////////////////////////////////
//Bottom-Up Dynamic Programming
class Solution {
    public boolean validPartition(int[] nums) {
        int n = nums.length;
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;

        // Determine if the prefix array nums[0 ~ i] has a valid partition
        for (int i = 0; i < n; i++) {
            int dpIndex = i + 1;

            // Check 3 possibilities
            if (i > 0 && nums[i] == nums[i - 1]) {
                dp[dpIndex] |= dp[dpIndex - 2];
            }
            if (i > 1 && nums[i] == nums[i - 1] && nums[i] == nums[i - 2]) {
                dp[dpIndex] |= dp[dpIndex - 3];
            }
            if (i > 1 && nums[i] == nums[i - 1] + 1 && nums[i] == nums[i - 2] + 2) {
                dp[dpIndex] |= dp[dpIndex - 3];
            }
        }

        return dp[n];
    }
}

////////////////////////////////////////////////////////////////////////////
