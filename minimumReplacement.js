/*
Input: nums = [3,9,3]
Output: 2
Explanation: Here are the steps to sort the array in non-decreasing order:
- From [3,9,3], replace the 9 with 3 and 6 so the array becomes [3,3,6,3]
- From [3,3,6,3], replace the 6 with 3 and 3 so the array becomes [3,3,3,3,3]
There are 2 steps to sort the array in non-decreasing order. Therefore, we return 2.
*/
var minimumReplacement = function (nums) {
    let steps = 0, prev = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        let num = nums[i];
        let n = Math.ceil(num / prev);
        steps += n - 1;
        prev = Math.floor(num / n);
    }
    return steps;
};
