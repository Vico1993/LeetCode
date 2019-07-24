/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let tmp
    for (let i = 0; i < nums.length; i++) {
        if ( tmp == nums[i] ) {
            nums.splice( i, 1 )
            i --
        } else {
            tmp = nums[i]
        }
    }

    return nums.length
};

const nums = [ 1, 1, 2 ]
const len = removeDuplicates( nums )
console.log( len, nums )