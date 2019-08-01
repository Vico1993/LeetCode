/**
 *  Return the single from an Array
 *
 * @param {Array<number>} nums Array of number to display
 */
const singleNumber = ( nums ) => {
    const only = []
    nums.forEach( num => {
        if ( only.includes( num ) ) {
            only.splice( only.indexOf( num ), 1 )
        } else {
            only.push( num )
        }
    })

    return only.toString()
}

console.log( singleNumber( [4, 3, 2, 4, 1, 3, 2] ) )