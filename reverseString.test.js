const {reverseString, isPalindrone} = require('./reverseString');

describe ("reverseString function should return backwards version of string", () => {
    test ("reverseString(hello) => olleh", () => {
        expect(reverseString("hello")).toEqual("olleh")
    })
    test ("reverseString(bob mob) => bom bob", () => {
        expect(reverseString("bob mob")).toEqual("bom bob")
    })
    test ("reverseString(&&^^**##) => ##**^^&&", () => {
        expect(reverseString("&&^^**##")).toEqual("##**^^&&")
    })
})

describe ("isPalindrone function should return a boolean flag to indicate true if string is a palindrone, false if not"), () => {
    
}