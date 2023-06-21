
const twoSum = require("./twoSum");


describe("twoSum(nums, target) returns the indices of two numbers that add up to the target", () => {
    test("Example: twoSum([2, 7, 11, 15], 9) should return [0, 1]", () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    })
})
  
    test("twoSum([3, 2, 4], 6) should return [1, 2]", () => {
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    })
  
    test("twoSum([[-1, -2, -3, -4, -5], -8) should return [2, 4]", () => {
      expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    })
  
    // test("twoSum([-1, -2, -3, -4, -5], -8) should return [2, 4]", () => {
    //   expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    // })
  
    // test("twoSum([1, 2, 3, 4, 5], 10) should return []", () => {
    //   expect(twoSum([1, 2, 3, 4, 5], 10)).toEqual([]);
    // })
  