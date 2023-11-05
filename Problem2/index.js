function twoSum(nums, target) {
    const numsObjs = {};
    // loop through the array nums
    for (let i = 0; i < nums.length; i++) {
      //add an variable to save the currentValue
      const currentValue = nums[i];
      //check if the nums solve the conditional
      if (target - currentValue in numsObjs) {
        return [numsObjs[target - currentValue],i];
      }
      //add the number to the result array that resolve the problem
      numsObjs[nums[i]] = i;
    }
    //the error would be shown as [-1,-1]
    return [-1,-1]
  }

  module.exports= twoSum

//examples to decomment if try to run 
  //console.log(twoSum([3,7,3], 6))
  //console.log(twoSum([2,7,11,15],9))
  //console.log(twoSum([3,3],6))
  //console.log(twoSum([3,2,4],6))