// Function to find the missing numbers 
function missingNumbers(arr){ 
    let res = []
  
    // loop through the arr
    for(let num of arr) 
        // Update arr
        arr[(Math.abs(num)-1)] = -(Math.abs(arr[(Math.abs(num)-1)])) 
  
    // loop through updated arr
    for (pos in arr)
    {
        // If Num is not present add the index to our aux arr
        if(arr[pos] > 0){
            res.push(parseInt(pos)+1)
        } 
    }
    return res

} 
//add input here and run the main function to run the code
module.exports = getMissingNumbers