// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique


// Solution 1 667ms
function findUniq(arr) {
    const uniques = [... new Set(arr)]
    return (arr.slice(0, 3).filter(x => (x === uniques[0])).length === 1)
        ? uniques[0]
        : uniques[1]
}

// Solution 2 679ms
const findUniq = arr => (arr[0] === arr[1])
    ? [... new Set(arr)].filter(num => (num !== arr[0]))[0]
    // If the unique number is within the firs three, there is no need to search the whole array
    : arr.slice(0, 2).filter(num => (num !== arr[2]))[0]


// Solution 3 using sort 786ms
const findUniq = arr => {
    arr.sort((a, b) => a - b);
    return (arr[0] === arr[1]) ? arr.pop() : arr[0]
}
