class Solution {
    public int[] rotate(int[] nums, int k) {
         k=k%nums.length;
        for(int i=k-1;i>=0;i--){
            int temp=nums[k-1];
            nums[k-1]=nums[0];
            nums[0]=temp;
        }
        for(int i=nums.length-1;i>=k;i--){
            int temp=nums[nums.length-1];
            nums[nums.length-1]=nums[k];
            nums[k]=temp;
        }
        for(int i=nums.length;i>=0;i--){
            int temp=nums[nums.length-1];
            nums[nums.length-1]=nums[0];
            nums[0]=temp;
        }
        for(int t=0;t<nums.length;t++){
            System.out.print(nums[t] + " ");
        }
    }
}