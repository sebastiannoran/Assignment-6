const {add, subtract, multiply, divide} = require('./mathFunction.js');

describe("add(a,b) returns the addition of a & b", () => {
    test("add(2,3) => 5", () => {
        expect(add(2,3)).toEqual(5);    
    })
    test("add(6,4) => 10", () => {
        expect(add(6,4)).toEqual(10);    
    })
    test("add(25,100) => 125", () => {
        expect(add(25,100)).toEqual(125);    
    })
})

describe("subtract(a,b) returns the subtraction of a & b", () => {
    test("subtract(1,6) = > -5", () => {
        expect(subtract(1,6)).toEqual(-5)
    })
    test("subtract(6,1) = > 5", () => {
        expect(subtract(6,1)).toEqual(5)
    })
    test("subtract(100,25) = > 75", () => {
        expect(subtract(100,25)).toEqual(75)
    })
})

describe ("multiply(a,b) returns the multplication between a & b", () => {
    test("multiply(10,6) = > 60", () => {
        expect(multiply(10,6)).toEqual(60)
    })
    test("multiply(20,6) = > 120", () => {
        expect(multiply(20,6)).toEqual(120)
    })
})

describe ("divide(a,b) returns the division between a & b", () => {
    test("divide(100,10) = > 10", () => {
        expect(divide(100,10)).toEqual(10)
    })
    test("divide(50,0) = > error", () => {
        expect(divide(50,0)).toEqual(Infinity)
    })
})