// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names) {
    let namesArray = names.map(name => name.name)
    if (namesArray.length > 1) {
        namesArray[namesArray.length - 2] = namesArray.slice(-2).join(" & ")
        namesArray.pop()
    }
    return namesArray.join(", ")
}