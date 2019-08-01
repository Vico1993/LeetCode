/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const tmp = []

    for (let i = 0; i < nums.length; i++) {
        if ( nums.lastIndexOf( nums[i] ) == nums.indexOf( nums[i] ) ) {
            return nums[i]
        }
    }
};


console.log( singleNumber( [2,2,1] ) )
console.log( "------------------------------------" )
console.log( singleNumber( [4,1,2,1,2] ) )