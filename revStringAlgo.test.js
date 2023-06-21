const reverseString = require("./revStringAlgo")

describe ("reverseString function should return backwards version of string", () => {
    test ("reverseString(hello) => olleh", () => {
        expect(reverseString("hello")).toEqual("olleh")
    })
    test ("reverseString(OpenAI) => IAnepO", () => {
        expect(reverseString("OpenAI")).toEqual("IAnepO")
    })
    test ("reverseString(racecar) => racecar", () => {
        expect(reverseString("racecar")).toEqual("racecar")
    })
})

