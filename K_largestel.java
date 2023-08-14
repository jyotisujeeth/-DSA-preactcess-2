/*
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
*/
//Sort
class Solution {
    public int findKthLargest(int[] nums, int k) {
        Arrays.sort(nums);
        // Can't sort int[] in descending order in Java;
        // Sort ascending and then return the kth element from the end
        return nums[nums.length - k];
    }
}
/////////////////////////////////////////////////////
//Min-Heap
