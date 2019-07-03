// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // let origin = str
    // let backwards = str.split('').reverse().join('')
    // // if (backwards === origin) {
    // //     return true
    // // } else {
    // //     return false
    // // }
    // // returns boolean 
    // return str === reversed

    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

module.exports = palindrome;
