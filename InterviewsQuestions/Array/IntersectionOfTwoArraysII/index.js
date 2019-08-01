/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const tmp = []

    for (let i = 0; i < nums1.length; i++) {
        idx = nums2.indexOf( nums1[i] )
        if ( idx != -1 ) {
            tmp.push( nums1[i] )

            nums2.splice( idx, 1 )
        }
    }

    return tmp
};

console.log( intersect( [1,2,2,1], [2] ) )