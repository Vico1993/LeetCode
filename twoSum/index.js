// Try:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Failed at the last test. `Time Limit Exceeded`
 */
var twoSum1 = function(nums, target) {
    const tmp = []

    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];

        for (let y = 0; y < nums.length; y++) {
            if ( i === y || typeof tmp[ `${i}:${y}` ] !== "undefined" || typeof tmp[ `${y}:${i}` ] !== "undefined"  ) {
                continue
            }

            const secondNum = nums[y];
            const sum = firstNum + secondNum

            if ( sum === target ) {
                return [ i, y ]
            } else {
                tmp[ `${i}:${y}` ] = sum
            }
        }
    }
};

// Success:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const tmp = {}

    for (let i = 0; i < nums.length; i++) {
        if ( tmp[ nums[ i ] ] >= 0 ) {
            return [ tmp[ nums[ i ] ], i ]
        }

        // save in the tmp Array
        tmp[ target - nums[ i ] ] = i
    }
};


// Test
const target = 9
console.log( twoSum( [2,7,11,15], target ) )