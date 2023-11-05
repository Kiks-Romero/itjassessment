const getMissingNumbers = require('../Problem1/index.js')
describe('Should return an array that contains the index of the numbers of the solution as e.g.',()=>{
    test('Should return [5,6]',()=>{
        expect(getMissingNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6])
    })
    test('Should return [2]',()=>{
        expect(getMissingNumbers([1,1])).toEqual([2])
    })
})