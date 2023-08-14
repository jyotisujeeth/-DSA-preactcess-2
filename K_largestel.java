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
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        for (int num: nums) {
            heap.add(num);
            if (heap.size() > k) {
                heap.remove();
            }
        }
        
        return heap.peek();
    }
}
/////////////////////////////////////////////////////
//class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        for (int num: nums) {
            heap.add(num);
            if (heap.size() > k) {
                heap.remove();
            }
        }
        
        return heap.peek();
    }
}
/////////////////////////////////////////////////////////////////////////////////////////

//Counting Sort
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int minValue = Integer.MAX_VALUE;
        int maxValue = Integer.MIN_VALUE;
        
        for (int num: nums) {
            minValue = Math.min(minValue, num);
            maxValue = Math.max(maxValue, num);
        }
        
        int[] count = new int[maxValue - minValue + 1];
        for (int num: nums) {
            count[num - minValue]++;
        }
        
        int remain = k;
        for (int num = count.length - 1; num >= 0; num--) {
            remain -= count[num];
            if (remain <= 0) {
                return num + minValue;
            }
        }
        
        return -1;
    }
}
/////////////////////////////////////////////////////////////////////////////////
//my apporach
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        n = len(nums)

        def swap(i, j):
            nums[i], nums[j] = nums[j], nums[i]

        def quickselect(l, r):
            pivot_i = random.randrange(l, r + 1)
            pivot = nums[pivot_i]
            swap(pivot_i, r)

            store_i = l
            for i in range(l, r):
                if nums[i] < pivot:
                    swap(i, store_i)
                    store_i += 1

            swap(store_i, r)
            return store_i

        l = 0
        r = n - 1

        while True:
            p = quickselect(l, r)

            if n - k == p:
                return nums[p]
            elif n - k > p:
                l = p + 1
            else:
                r = p - 1
