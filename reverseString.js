//use built in js function to spilt, reverse, and rejoin a string of words
let reverseString = function (str) {
    let spiltString = str.split("");
    let reverseString = spiltString.reverse("");
    let rejoinedString = reverseString.join("");

    return rejoinedString;
}

let isPalindrone = function (str) {
    
    let palindroneString = reverseString(str);

    if (palindroneString === str) {
        return true;
    } else {
        return false;
    }
}

module.exports = {reverseString, isPalindrone};