/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    if ( k === undefined ) {
        k = 0
    }

    i = 0
    while (i != k) {
        i += 1
        nums.unshift( nums.pop() )

        // console.log( `rotate ${i} steps to the right: ${nums}` )
    }

    return nums
};

console.log( rotate( [1,2,3,4,5,6,7], 3 ) )