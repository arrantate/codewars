// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    const uniqueNums = [... new Set(A)]
    return uniqueNums.filter(uniqueNum => {
        return (A.filter(num => (num === uniqueNum)).length % 2 !== 0)
    })[0]
}