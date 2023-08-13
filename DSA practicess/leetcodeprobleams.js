/*Concatenation of Array
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
*/

function concat(nums) {
    var result=[];
    for (let i = 0; i < nums.length; i++) {
        console.log(i);
        result[i] = nums[i];
       result[i + nums.length] = nums[i]
       
    }
    return result;
}
    const nums = [1, 2, 1]
    console.log(concat(nums));

   /* Shuffle the Array
    Input: nums = [2,5,1,3,4,7], n = 3
    Output: [2,3,5,4,1,7] 
    Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].    
*/
function run (nums, n) {
    let result = Array(2*n);
       for (let i=0; i<n; i++) {
           result[2*i]= nums[i]
            result[2*i+1]= nums[i+n]
       }
       return result;
   };

 const  nums = [2,5,1,3,4,7,9]
 const n = 3
 console.log(run(nums,n))


/*There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
*/

function  kidsWithCandies(candies, extraCandies) {
    let maxOfCandies = Math.max(...candies);
    console.log("maxOfCandies", maxOfCandies)
    let result = [];
  
    for (const i of candies) {
      if (i + extraCandies >= maxOfCandies) result.push(true);
      else result.push(false);
    }
  
    return result;
  };
  const candies = [2,3,6,1,3]
  
  
  var extraCandies = 3
  console.log( kidsWithCandies(candies, extraCandies))

  /*Number of Good Pairs
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
  */

function gre(nums) {
  let count = 0
 
  for(let i=0; i<nums.length; i++) {
      for(let j=i+1; j<nums.length; j++) {
          if(nums[i] === nums[j]) {
              count++
          }
      }
  }
 
  return count
};

const create=[1,2,1,2,3,3,1];
const res=(gre(create))
console.log(res);



/////// Find the row with maximum number of 1s js program  ////////////////////
function findRowWithMaxOnes(matrix) {
  let maxRow = -1;
  let maxCount = 0;
  let rowCount = matrix.length;
  let colCount = matrix[0].length;

  for (let i = 0; i < rowCount; i++) {
    let count = 0;
    for (let j = 0; j < colCount; j++) {
      if (matrix[i][j] === 1) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxRow = i;
    }
  }

  return maxRow;
}

// Example usage:
let matrix = [
  [0, 1, 1,1],
  [1, 1, 1, 1],
  [0, 0, 1,0],
];
console.log(findRowWithMaxOnes(matrix));



/*Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

 

Example 1:

Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]

    */

    var buildArray = function(nums) {
      const result = [];
      for (let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]];
      }
      return result;
    };