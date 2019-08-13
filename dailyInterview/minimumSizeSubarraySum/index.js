/**
 *
 * @param {Array}
 */
const minSubArrayLen = ( nums, input ) => {
    let sum = 0
    let count = 0
    const res = {}

    for (let i = 0; i < nums.length; i++) {

        count ++
        sum += nums[i]

        if ( sum >= input ) {
            const start = ( ( i + 1 ) - count )
            res[ count ] = nums.slice( start, start + count )

            count = 0
            sum = 0
        }
    }

    return res[Object.keys( res )[0]] || 0
}

console.log( minSubArrayLen( [ 2,3,1,2,4,3 ], 7 ) )