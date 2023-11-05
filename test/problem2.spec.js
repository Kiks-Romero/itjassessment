const twoSum = require('../Problem2/index.js') 

describe('Should return an array that contains the index of the numbers of the solution as e.g.',()=>{
    test('result should be [0,1]',()=>{
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
    })
    test('result should be [1,2]',()=>{
        expect(twoSum([3,2,4], 6)).toEqual([1,2])
    })
    test('result should be [0,1]',()=>{
        expect(twoSum([3,3], 6)).toEqual([0,1])
    })
})
    