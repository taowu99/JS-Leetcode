'use strict'
let findKthLargest = function(nums, k) {
    return helper(nums, 0, nums.length-1, k-1);
};

function swap(nums, idx1, idx2) {
    if (idx1 != idx2) {
        nums[idx1] = nums[idx1] ^ nums[idx2];
        nums[idx2] = nums[idx1] ^ nums[idx2];
        nums[idx1] = nums[idx1] ^ nums[idx2];
    }
}

function helper(nums, from, to, k) {    
    let pos = from;
    let pivot = nums[to];
    let idx =from;
    while (idx<to) 
        if (nums[idx++] > pivot )
            swap(nums, idx-1, pos++);    
    swap(nums, pos, to);
    
    if (pos == k)
        return nums[k];
    else if (pos < k)
        return helper(nums, pos+1, to, k);
    else
        return helper(nums,from, pos-1, k);
}

let data1 = [3,2,1,5,6,4];
console.log(findKthLargest(data1, 2));
