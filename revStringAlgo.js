let reverseString = function (str) {
    let spiltString = str.split("");
    let reverseString = spiltString.reverse("");
    let rejoinedString = reverseString.join("");

    return rejoinedString;
}

module.exports = reverseString;