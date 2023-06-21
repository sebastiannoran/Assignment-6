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

describe ("isPalindrone function returns a flag to indicate true if string is a palindrone", () => {
    test ("isPalindrone(bob) => true", () => {
        expect(isPalindrone("bob")).toEqual(true);
    })
    test ("isPalindrone(apple) => false", () => {
        expect(isPalindrone("apple")).toEqual(false);
    })
    // test ("isPalindrone(race car) => true", () => {
    //     expect(isPalindrone("race car")).toEqual(true);
    // })
})